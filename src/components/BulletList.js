import L from "@/components/L";
import { isBilingual } from "@/lib/i18n";

// An item is either a plain string or `{ text, link: { href, label } }`, which
// appends an external link after the text — for the bullets that end in "book
// it here" and would otherwise leave you searching for the site yourself.
export default function BulletList({ items, icon = "•" }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, index) => {
        // A translated bullet is an object too (see src/lib/i18n.js), so it
        // has to be told apart from the `{ text, link }` shape first.
        const plain = typeof item === "string" || isBilingual(item);
        const text = plain ? item : item.text;
        const link = plain ? null : item.link;

        return (
          <li
            key={index}
            className="flex gap-3 rounded-xl border-2 border-line bg-card px-4 py-3 text-sm leading-6 text-ink/80"
          >
            <span className="mt-0.5 text-momiji" aria-hidden="true">
              {icon}
            </span>
            <span>
              <L v={text} />
              {link && (
                <>
                  {" "}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-momiji underline underline-offset-2"
                  >
                    <L v={link.label} />
                  </a>
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
