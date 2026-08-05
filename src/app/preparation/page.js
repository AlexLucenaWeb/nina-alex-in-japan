import BulletList from "@/components/BulletList";
import { PREPARATION_CHECKLIST } from "@/data/preparation";

export const metadata = {
  title: "Trip Preparation · Nina & Alex in Japan",
  description:
    "Everything to sort out before flying to Japan: documents, visa, money, SIM, and apps.",
};

export default function PreparationPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium text-rose-500">Before you fly</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Trip Preparation
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Everything to sort out before departure: documents, money,
          connectivity, and the apps worth having installed.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {PREPARATION_CHECKLIST.map((section) => (
          <section key={section.category} className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">
              {section.category}
            </h2>
            <BulletList items={section.items} icon="✓" />
          </section>
        ))}
      </div>
    </div>
  );
}
