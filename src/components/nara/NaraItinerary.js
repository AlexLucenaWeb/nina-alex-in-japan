import DayMapEmbed from "@/components/DayMapEmbed";
import JapanRouteDayShell from "@/components/route-itinerary/JapanRouteDayShell";
import StopCard from "@/components/route-itinerary/StopCard";
import { NARA_STOPS } from "@/data/nara-stops";

// Same as Day 3: this day's route lives in a Google My Maps map instead of the
// Leaflet component, so it can be edited from Google Maps without touching the
// stop data in the repo.
const MY_MAPS_ID = "1E9hNlm0Ds5LztbAYOH7KQVfhVaQMY9Q";

export default function NaraItinerary({ food }) {
  return (
    <JapanRouteDayShell>
      <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
        <p>
          <span className="font-semibold text-momiji">
            Everything is done on foot:
          </span>{" "}
          the whole day fits inside Nara Park and the streets around it, no
          trains and no buses once you arrive. Temples in the morning, a long
          lunch, gardens in the early afternoon, and the light going gold over
          the pond by the end.
        </p>
        <p className="mt-2">
          It&apos;s a deliberately unhurried day — the times below are a rhythm,
          not a schedule. Falling an hour behind costs you nothing.
        </p>
      </div>

      <section aria-label="Route map" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">The route</h2>

        <div className="overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm">
          <DayMapEmbed mid={MY_MAPS_ID} />
        </div>

        <a
          href={`https://www.google.com/maps/d/viewer?mid=${MY_MAPS_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start text-sm text-momiji hover:underline"
        >
          Open in Google Maps
        </a>
      </section>

      {food}

      <section aria-label="Itinerary" className="flex flex-col gap-2">
        <h2 className="font-display text-2xl font-semibold">Itinerary</h2>

        <ol className="relative flex flex-col">
          {NARA_STOPS.map((stop, index) => (
            <li key={stop.n} className="relative pb-10 pl-14 last:pb-0">
              {index < NARA_STOPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="stop-connector absolute bottom-0 left-5 top-10 -translate-x-1/2"
                />
              )}
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-momiji bg-card font-display text-sm font-semibold text-momiji">
                {stop.n}
              </span>

              <StopCard stop={stop} />
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Getting back" className="flex flex-col gap-3">
        <h2 className="font-display text-2xl font-semibold">
          Getting back &amp; good to know
        </h2>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            The way home
          </h3>
          <p className="mt-2">
            Back from Kintetsu-Nara: the Aoniyoshi runs in the afternoon too, or
            take a regular Kintetsu train — far more frequent and only ¥680.
            Either way you land back in Osaka-Namba.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-line bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-pine">
            Eating in Nara
          </h3>
          <p className="mt-2">
            Nakatanidō for green yomogi mochi by the station, Mizuya Chaya
            inside the park for udon and a sit-down, and kakinoha-zushi
            (persimmon-leaf sushi) if you want lunch you can carry. Full details
            are in the Food section at the top of this page.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-ochre/50 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-ochre">
            Take your passport to the gardens
          </h3>
          <p className="mt-2">
            Yoshikien is free for foreign visitors, but only if you can show a
            passport at the desk — no passport, no free entry. Isuien next door
            is ¥1,200 and worth it. Both close at 16:30, earlier than everything
            else on the route, so don&apos;t let lunch run long.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-4 text-sm leading-relaxed text-ink/80">
          <h3 className="font-display text-lg font-semibold text-momiji">
            About the deer
          </h3>
          <p className="mt-2">
            Buy the crackers (shika senbei) only at the moment you plan to feed
            them — hold a stack and you get mobbed. Keep maps, tickets, paper
            bags and food out of sight: they bite bags to get at what&apos;s
            inside.
          </p>
        </div>
      </section>
    </JapanRouteDayShell>
  );
}
