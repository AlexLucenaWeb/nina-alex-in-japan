/**
 * Downloads every stop photo to /public/photos as an optimised WebP.
 *
 * The Google Places URLs in the data files expire after a few weeks, so the
 * images have to live in the repo for the app to work offline — and to still
 * work at all once those links rot. Each stop keeps `photoSource` (where the
 * image came from) next to `photo` (the local path the app actually renders).
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

// Every file holding stops with photos, and the day each one belongs to —
// the day number is what makes the filenames readable.
const SOURCES = [
  { file: "src/data/osaka-minami-stops.js", day: 3 },
  { file: "src/data/nara-stops.js", day: 4 },
  { file: "src/data/himeji-kobe-stops.js", day: 6 },
  { file: "src/data/higashiyama-gion-stops.js", day: 14 },
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

async function download(url, dest) {
  const response = await fetch(sourceUrl(url), {
    // Google Photos serves a 403 to requests without a browser-ish UA.
    headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const original = Buffer.from(await response.arrayBuffer());
  const optimised = await sharp(original)
    .rotate() // honour EXIF orientation before the crop
    // Always exactly WIDTH x HEIGHT: StopPhoto declares those dimensions on the
    // <img>, and a file that disagreed would shift the layout as it loaded.
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .webp({ quality: QUALITY })
    .toBuffer();

  await writeFile(dest, optimised);
  return { before: original.length, after: optimised.length };
}

function kb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const wanted = [];
  const problems = [];

  for (const { file, day } of SOURCES) {
    for (const stop of await loadStops(file)) {
      if (!stop.photoSource) continue;

      const expected = localPath(day, stop);
      if (stop.photo !== expected) {
        problems.push(
          `${file} · stop ${stop.n} (${stop.name}): set photo to "${expected}"` +
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
      const { before, after } = await download(stop.photoSource, stop.dest);
      total += after;
      downloaded += 1;
      console.log(`  saved     ${name} (${kb(before)} → ${kb(after)})`);
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
