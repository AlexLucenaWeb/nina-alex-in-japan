import { TRAIN_STATUS, mapsUrl } from "@/data/trains";

function Stop({ label, stop }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs font-semibold uppercase tracking-wide text-momiji">
        {label}
      </p>
      <p className="font-display text-2xl font-semibold">
        {stop.time ?? "TBD"}
      </p>
      <p className="text-sm font-medium">{stop.city}</p>
      {stop.mapsQuery ? (
        <a
          href={mapsUrl(stop.mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-momiji underline underline-offset-2"
        >
          {stop.station}
        </a>
      ) : (
        <p className="text-sm text-ink/70">{stop.station}</p>
      )}
    </div>
  );
}

export default function TrainCard({ train }) {
  const status = TRAIN_STATUS[train.status];

  return (
    <article
      id={train.id}
      className="scroll-mt-6 flex flex-col gap-4 rounded-2xl border-2 border-line bg-card p-5 shadow-sm"
    >
      <header className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold leading-snug">
          {train.type}
          {train.name && ` · ${train.name}`}
        </h3>
        {status && (
          <p
            className={`shrink-0 rounded-full border-2 px-3 py-1 text-xs font-semibold ${status.className}`}
          >
            {status.label}
          </p>
        )}
      </header>

      <div className="grid gap-4 rounded-xl border-2 border-line bg-band p-4 sm:grid-cols-2">
        <Stop label="Departure" stop={train.departure} />
        <Stop label="Arrival" stop={train.arrival} />
      </div>

      {(train.seats || train.note) && (
        <div className="flex flex-col gap-1 text-sm leading-6 text-ink/80">
          {train.seats && <p className="font-medium text-ink">{train.seats}</p>}
          {train.note && <p>{train.note}</p>}
        </div>
      )}
    </article>
  );
}
