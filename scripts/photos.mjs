/**
 * Downloads every stop photo to /public/photos as an optimised WebP.
 *
 * The Google Places URLs in the data files expire after a few weeks, so the
 * images have to live in the repo for the app to work offline — and to still
 * work at all once those links rot. Each stop keeps `photoSource` (where the
 * image came from) next to `photo` (the local path the app actually renders),
 * and optionally `photoFocusY` to say which band of a tall image to keep.
 *
 *   node scripts/photos.mjs            download whatever is missing
 *   node scripts/photos.mjs --force    re-download everything
 *
 * Also writes public/photos/manifest.json, which the service worker reads on
 * install to precache the whole set.
 */

import { readFile, writeFile, mkdir, stat, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "photos");
const MANIFEST = path.join(OUT_DIR, "manifest.json");

// Stop cards render the photo at aspect-[16/10] with object-cover, so crop to
// that here rather than shipping pixels the layout throws away. 1000px wide
// covers a 3x phone at the card's rendered size.
const WIDTH = 1000;
const HEIGHT = 625;
const QUALITY = 72;

// Where the 16:10 window sits on a taller image: 0 keeps the top, 1 the
// bottom. Only used by entries that set `photoFocusY` — without it the crop
// stays centred, which is what every existing photo was built with.
const DEFAULT_FOCUS_Y = 0.5;

// Every file holding entries with photos, and the day each one belongs to —
// the day number is what makes the filenames readable. A source can name its
// files some other way with `photoPath`, for the ones that are not tied to a
// single day.
const SOURCES = [
  { file: "src/data/osaka-minami-stops.js", day: 3 },
  { file: "src/data/nara-stops.js", day: 8 },
  { file: "src/data/himeji-kobe-stops.js", day: 4 },
  { file: "src/data/osaka-kita-stops.js", day: 5 },
  { file: "src/data/universal-studios-stops.js", day: 6 },
  { file: "src/data/day7-stops.js", day: 7 },
  { file: "src/data/day9-stops.js", day: 9 },
  { file: "src/data/day10-stops.js", day: 10 },
  // The hotels belong to a block of days rather than to one, and the pending
  // ones to no day at all, so they are keyed by their own id.
  {
    file: "src/data/hotels.js",
    photoPath: (hotel) => `/photos/hotel-${hotel.id}.webp`,
  },
];

const force = process.argv.includes("--force");

/** `Tōdai-ji · Great Buddha` -> `todai-ji-great-buddha` */
function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip the accents NFD just split off
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function localPath(day, stop) {
  return `/photos/day${day}-${stop.n}-${slugify(stop.name)}.webp`;
}

/** How an entry is named in the "paths out of sync" report. */
function describe(entry) {
  return entry.n ? `stop ${entry.n} (${entry.name})` : entry.id;
}

/**
 * Google's image host takes the output size in the `=w…-h…` suffix, and `-c`
 * makes it crop to that ratio instead of fitting inside it. Without this the
 * portrait photos come back 400px wide and there is nothing to crop from —
 * asking for 2x the final size gives sharp room to downscale into.
 */
function sourceUrl(url) {
  if (!url.startsWith("https://lh3.googleusercontent.com/")) return url;
  return `${url.split("=")[0]}=w${WIDTH * 2}-h${HEIGHT * 2}-c`;
}

/**
 * The data files are plain ESM with no imports of their own, so they can be
 * imported straight from memory — no bundler, and no parsing their source.
 */
async function loadStops(file) {
  const source = await readFile(path.join(ROOT, file), "utf8");
  const url = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
  const mod = await import(url);
  return Object.values(mod).flat();
}

async function fileSize(file) {
  try {
    return (await stat(file)).size;
  } catch {
    return null;
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/** The size sharp sees after `.rotate()`, which is what the crop works on. */
async function orientedSize(buffer) {
  const { width, height, orientation } = await sharp(buffer).metadata();

  // Orientations 5-8 stand the image on its side, so auto-rotating it swaps
  // the two dimensions before any crop is applied.
  return orientation >= 5
    ? { width: height, height: width }
    : { width, height };
}

/**
 * The full-width 16:10 window to keep out of a taller image, placed so that
 * `focusY` (0 = top edge, 1 = bottom edge) lands in the middle of it, then
 * pushed back inside the image if that would hang off either end.
 *
 * Returns null when the image is 16:10 or wider: there is no vertical slack to
 * choose from, and the resize below crops it horizontally on its own.
 */
function focusCrop({ width, height }, focusY) {
  const cropHeight = Math.round((width * HEIGHT) / WIDTH);
  if (cropHeight >= height) return null;

  const top = clamp(
    Math.round(focusY * height - cropHeight / 2),
    0,
    height - cropHeight,
  );

  return { left: 0, top, width, height: cropHeight };
}

async function download(url, dest, focusY) {
  const response = await fetch(sourceUrl(url), {
    // Google Photos serves a 403 to requests without a browser-ish UA.
    headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const original = Buffer.from(await response.arrayBuffer());
  const size = await orientedSize(original);

  let pipeline = sharp(original).rotate(); // honour EXIF orientation first
  let crop = null;

  // Only entries that ask for a focus point take this path: everything else
  // goes through the same centred `fit: "cover"` crop it always did, so the
  // photos already on disk stay byte for byte what they are.
  if (focusY !== undefined && focusY !== null) {
    crop = focusCrop(size, focusY);
    if (crop) pipeline = pipeline.extract(crop);
  }

  const optimised = await pipeline
    // Always exactly WIDTH x HEIGHT: StopPhoto declares those dimensions on the
    // <img>, and a file that disagreed would shift the layout as it loaded.
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .webp({ quality: QUALITY })
    .toBuffer();

  await writeFile(dest, optimised);
  return { before: original.length, after: optimised.length, size, crop };
}

function kb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

function describeCrop(crop) {
  return crop
    ? `crop top ${crop.top}, height ${crop.height}`
    : "centred crop";
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const wanted = [];
  const problems = [];

  for (const { file, day, photoPath } of SOURCES) {
    for (const stop of await loadStops(file)) {
      if (!stop.photoSource) continue;

      const expected = photoPath ? photoPath(stop) : localPath(day, stop);
      if (stop.photo !== expected) {
        problems.push(
          `${file} · ${describe(stop)}: set photo to "${expected}"` +
            (stop.photo ? ` (currently "${stop.photo}")` : ""),
        );
        continue;
      }

      wanted.push({ ...stop, day, dest: path.join(ROOT, "public", expected) });
    }
  }

  if (problems.length) {
    console.error("Photo paths out of sync with the data files:\n");
    for (const problem of problems) console.error(`  ${problem}`);
    console.error("");
    process.exitCode = 1;
  }

  let downloaded = 0;
  let failed = 0;
  let total = 0;

  for (const stop of wanted) {
    const name = path.basename(stop.dest);
    const existing = await fileSize(stop.dest);

    if (existing !== null && !force) {
      total += existing;
      console.log(`  skip      ${name} (${kb(existing)})`);
      continue;
    }

    try {
      const { before, after, size, crop } = await download(
        stop.photoSource,
        stop.dest,
        stop.photoFocusY,
      );
      total += after;
      downloaded += 1;
      console.log(
        `  saved     ${name} (${kb(before)} → ${kb(after)}) · ` +
          `${size.width}x${size.height} · ${describeCrop(crop)}`,
      );
    } catch (error) {
      failed += 1;
      console.log(`  FAILED    ${name}: ${error.message}`);
      if (existing !== null) total += existing;
    }
  }

  // Only the files actually on disk go in the manifest: the service worker
  // precaches every entry, and a 404 there would be a wasted request per install.
  const onDisk = (await readdir(OUT_DIR))
    .filter((file) => file.endsWith(".webp"))
    .sort()
    .map((file) => `/photos/${file}`);
  await writeFile(MANIFEST, `${JSON.stringify(onDisk, null, 2)}\n`);

  console.log(
    `\n${onDisk.length} photos · ${kb(total)} total · ${downloaded} downloaded, ${failed} failed`,
  );
  if (failed) {
    console.log(
      "Failed URLs have most likely expired — open the place in Google Maps " +
        "and copy a fresh photo URL into photoSource.",
    );
    process.exitCode = 1;
  }
}

await main();
