export default function DataTable({ columns, minWidth, children }) {
  return (
    <div className="overflow-x-auto rounded-xl border-2 border-line bg-card">
      <table
        className="w-full border-collapse text-left text-sm"
        style={{ minWidth }}
      >
        <thead>
          <tr className="border-b border-line text-xs font-semibold uppercase tracking-wide text-ink/60">
            {/* Keyed by position: a column can be an <L> element (English and
                Spanish), not just a string. */}
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
