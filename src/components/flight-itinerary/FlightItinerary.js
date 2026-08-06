export default function FlightItinerary({ legs }) {
  return (
    <div className="flex flex-col gap-4">
      {legs.map((leg, index) =>
        leg.type === "layover" ? (
          <div
            key={index}
            className="mx-auto flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2 text-sm text-ink/60"
          >
            <span aria-hidden="true">⏱</span>
            <span>
              {leg.duration} layover in {leg.airport}
            </span>
          </div>
        ) : (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-2xl border-2 border-line bg-card p-5 shadow-sm"
          >
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-momiji">
              <span>Flight {leg.legNumber}</span>
              <span>{leg.aircraft}</span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold tracking-tight">
                  {leg.departure.time}
                </span>
                <span className="text-sm text-ink/70">
                  {leg.from.code} · {leg.from.name}
                </span>
                {leg.from.terminal && (
                  <span className="text-xs text-ink/50">
                    {leg.from.terminal}
                  </span>
                )}
              </div>

              <span className="shrink-0 text-3xl text-ink/30" aria-hidden="true">
                ✈
              </span>

              <div className="flex flex-col items-end text-right">
                <span className="font-display text-2xl font-semibold tracking-tight">
                  {leg.arrival.time}
                </span>
                <span className="text-sm text-ink/70">
                  {leg.to.code} · {leg.to.name}
                </span>
                {leg.arrival.nextDay && (
                  <span className="text-xs font-medium text-momiji">
                    +1 day
                  </span>
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
