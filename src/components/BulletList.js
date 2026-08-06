export default function BulletList({ items, icon = "•" }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-3 rounded-xl border-2 border-line bg-card px-4 py-3 text-sm leading-6 text-ink/80"
        >
          <span className="mt-0.5 text-momiji" aria-hidden="true">
            {icon}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
