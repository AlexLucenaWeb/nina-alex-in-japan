import BulletList from "@/components/BulletList";
import DataTable from "@/components/DataTable";
import {
  DAY2_TIMELINE,
  DAY2_AIRPORT_PROCESS,
  DAY2_TRAINS,
  DAY2_TRANSPORT_COST_NOTE,
  DAY2_TIPS,
  DAY2_HOTEL_PLACEHOLDER,
} from "@/data/day2-arrival";

function SectionHeading({ children }) {
  return (
    <h2 className="font-display text-xl font-semibold tracking-tight">
      {children}
    </h2>
  );
}

export default function ArrivalOsakaItinerary({ food }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6">
      {/* No route map on a travel day, so the food section stays up top rather
          than after one, as it does on the walking days. */}
      {food}

      <section className="flex flex-col gap-3">
        <SectionHeading>Timeline</SectionHeading>
        <ol className="flex flex-col gap-2">
          {DAY2_TIMELINE.map((item, index) => (
            <li
              key={index}
              className={`flex gap-4 rounded-xl border-2 px-4 py-3 text-sm leading-6 ${
                item.highlight
                  ? "border-momiji/40 bg-momiji/5"
                  : "border-line bg-card"
              }`}
            >
              <span
                className={`w-24 shrink-0 font-medium ${
                  item.highlight ? "font-semibold text-momiji" : "text-momiji"
                }`}
              >
                {item.time}
              </span>
              <span className="text-ink/80">{item.event}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>Airport arrival process (NRT)</SectionHeading>
        <DataTable columns={["Step", "Duration", "Notes"]} minWidth={560}>
          {DAY2_AIRPORT_PROCESS.map((row, index) => (
            <tr key={index} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium">{row.step}</td>
              <td className="px-4 py-3 text-momiji">{row.duration}</td>
              <td className="px-4 py-3 text-ink/70">{row.notes}</td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm text-ink/60">
          Each traveler shows their own Visit Japan Web QR at immigration and
          customs — it&apos;s noticeably faster than the paper forms.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>The two trains: NRT → Shin-Osaka</SectionHeading>
        <DataTable
          columns={["Leg", "Train", "Duration", "Price/person", "Arrival"]}
          minWidth={640}
        >
          {DAY2_TRAINS.map((row, index) => (
            <tr key={index} className="border-b border-line/50 last:border-0">
              <td className="px-4 py-3 font-medium">{row.leg}</td>
              <td className="px-4 py-3 text-ink/80">{row.train}</td>
              <td className="px-4 py-3 text-momiji">{row.duration}</td>
              <td className="px-4 py-3 text-ink/80">{row.price}</td>
              <td className="px-4 py-3 text-ink/70">{row.arrival}</td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm text-ink/60">{DAY2_TRANSPORT_COST_NOTE}</p>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>Things to keep in mind</SectionHeading>
        <BulletList items={DAY2_TIPS} />
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>Hotel in Osaka</SectionHeading>
        <div className="flex flex-col gap-2 rounded-xl border-2 border-dashed border-line bg-card px-4 py-4 text-sm leading-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-momiji">
            Pending confirmation
          </p>
          <p className="text-ink/80">
            <span className="font-medium text-ink">Name:</span>{" "}
            {DAY2_HOTEL_PLACEHOLDER.name ?? "TBD"}
          </p>
          <p className="text-ink/80">
            <span className="font-medium text-ink">Address:</span>{" "}
            {DAY2_HOTEL_PLACEHOLDER.address ?? "TBD"}
          </p>
          <p className="text-ink/80">
            <span className="font-medium text-ink">
              Getting there from Shin-Osaka:
            </span>{" "}
            {DAY2_HOTEL_PLACEHOLDER.directions ?? "TBD"}
          </p>
        </div>
      </section>
    </div>
  );
}
