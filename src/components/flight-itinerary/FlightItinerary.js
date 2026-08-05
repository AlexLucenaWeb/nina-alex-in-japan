export default function FlightItinerary({ legs }) {
  return (
    <div className="flex flex-col gap-4">
      {legs.map((leg, index) =>
        leg.type === "layover" ? (
          <div
            key={index}
            className="mx-auto flex items-center gap-2 rounded-full border border-dashed border-zinc-300 px-4 py-2 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400"
          >
            <span aria-hidden="true">⏱</span>
            <span>
              {leg.duration} layover in {leg.airport}
            </span>
          </div>
        ) : (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-rose-500">
              <span>Flight {leg.legNumber}</span>
              <span>{leg.aircraft}</span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold tracking-tight">
                  {leg.departure.time}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {leg.from.code} · {leg.from.name}
                </span>
                {leg.from.terminal && (
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {leg.from.terminal}
                  </span>
                )}
              </div>

              <span
                className="shrink-0 text-zinc-300 dark:text-zinc-700"
                aria-hidden="true"
              >
                ✈
              </span>

              <div className="flex flex-col items-end text-right">
                <span className="text-2xl font-semibold tracking-tight">
                  {leg.arrival.time}
                </span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {leg.to.code} · {leg.to.name}
                </span>
                {leg.arrival.nextDay && (
                  <span className="text-xs font-medium text-rose-500">
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
