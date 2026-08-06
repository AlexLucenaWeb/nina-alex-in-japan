import StopPhoto from "./StopPhoto";

export default function StopCard({ stop }) {
  const label = stop.jp ? `${stop.name} (${stop.jp})` : stop.name;

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm">
      <StopPhoto src={stop.photo} label={label} />

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="font-display text-base font-semibold text-momiji">
            {stop.time}
          </span>
          <span className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink/70">
            {stop.hours}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-ink">
          {stop.name}
        </h3>
        <p className="text-sm text-ink/50">{stop.jp}</p>
        <p className="text-sm leading-relaxed text-ink/80">{stop.desc}</p>

        <a
          href={stop.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-momiji px-4 py-3 text-sm font-semibold text-on-momiji transition-transform active:scale-[0.98] sm:w-auto"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
