import L from "@/components/L";
import { TRAIN_STATUS, mapsUrl } from "@/data/trains";

// Shared by every train, so they're translated here rather than per train in
// src/data/es/trains.js.
const TYPE_ES = {
  "Limited Express": "Expreso limitado",
  Shinkansen: "Shinkansen",
  "Local / Rapid": "Local / rápido",
  "Tourist train": "Tren turístico",
};

const STATUS_ES = {
  booked: "Reservado",
  "to-book": "Por reservar",
  "no-reservation": "Sin reserva",
};

function Stop({ label, stop }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs font-semibold uppercase tracking-wide text-momiji">
        {label}
      </p>
      <p className="font-display text-2xl font-semibold">
        {stop.time ?? <L en="TBD" es="Por decidir" />}
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
          <L en={train.type} es={TYPE_ES[train.type]} />
          {train.name && ` · ${train.name}`}
        </h3>
        {status && (
          <p
            className={`shrink-0 rounded-full border-2 px-3 py-1 text-xs font-semibold ${status.className}`}
          >
            <L en={status.label} es={STATUS_ES[train.status]} />
          </p>
        )}
      </header>

      <div className="grid gap-4 rounded-xl border-2 border-line bg-band p-4 sm:grid-cols-2">
        <Stop label={<L en="Departure" es="Salida" />} stop={train.departure} />
        <Stop label={<L en="Arrival" es="Llegada" />} stop={train.arrival} />
      </div>

      {(train.seats || train.note) && (
        <div className="flex flex-col gap-1 text-sm leading-6 text-ink/80">
          {train.seats && (
            <p className="font-medium text-ink">
              <L v={train.seats} />
            </p>
          )}
          {train.note && (
            <p>
              <L v={train.note} />
            </p>
          )}
        </div>
      )}
    </article>
  );
}
