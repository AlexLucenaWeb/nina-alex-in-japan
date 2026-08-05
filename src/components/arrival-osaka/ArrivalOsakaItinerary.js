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
    <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
  );
}

export default function ArrivalOsakaItinerary() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6">
      <section className="flex flex-col gap-3">
        <SectionHeading>Timeline</SectionHeading>
        <ol className="flex flex-col gap-2">
          {DAY2_TIMELINE.map((item, index) => (
            <li
              key={index}
              className={`flex gap-4 rounded-xl border px-4 py-3 text-sm leading-6 ${
                item.highlight
                  ? "border-rose-300 bg-rose-50 dark:border-rose-800 dark:bg-rose-950/30"
                  : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <span
                className={`w-24 shrink-0 font-medium ${
                  item.highlight
                    ? "text-rose-600 dark:text-rose-400"
                    : "text-rose-500"
                }`}
              >
                {item.time}
              </span>
              <span className="text-zinc-600 dark:text-zinc-300">
                {item.event}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>Airport arrival process (NRT)</SectionHeading>
        <DataTable columns={["Step", "Duration", "Notes"]} minWidth={560}>
          {DAY2_AIRPORT_PROCESS.map((row, index) => (
            <tr
              key={index}
              className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
            >
              <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">
                {row.step}
              </td>
              <td className="px-4 py-3 text-rose-500">{row.duration}</td>
              <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">
                {row.notes}
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
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
            <tr
              key={index}
              className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
            >
              <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">
                {row.leg}
              </td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                {row.train}
              </td>
              <td className="px-4 py-3 text-rose-500">{row.duration}</td>
              <td className="px-4 py-3 text-zinc-600 dark:text-zinc-300">
                {row.price}
              </td>
              <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">
                {row.arrival}
              </td>
            </tr>
          ))}
        </DataTable>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {DAY2_TRANSPORT_COST_NOTE}
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>Things to keep in mind</SectionHeading>
        <BulletList items={DAY2_TIPS} />
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeading>Hotel in Osaka</SectionHeading>
        <div className="flex flex-col gap-2 rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-4 text-sm leading-6 dark:border-zinc-700 dark:bg-zinc-900/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
            Pending confirmation
          </p>
          <p className="text-zinc-600 dark:text-zinc-300">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              Name:
            </span>{" "}
            {DAY2_HOTEL_PLACEHOLDER.name ?? "TBD"}
          </p>
          <p className="text-zinc-600 dark:text-zinc-300">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              Address:
            </span>{" "}
            {DAY2_HOTEL_PLACEHOLDER.address ?? "TBD"}
          </p>
          <p className="text-zinc-600 dark:text-zinc-300">
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              Getting there from Shin-Osaka:
            </span>{" "}
            {DAY2_HOTEL_PLACEHOLDER.directions ?? "TBD"}
          </p>
        </div>
      </section>
    </div>
  );
}
