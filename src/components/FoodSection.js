import FoodDisclosure from "@/components/FoodDisclosure";
import L from "@/components/L";
import { getFood } from "@/data/food";
import { enText } from "@/lib/i18n";

function Entry({ label, children }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-momiji">
        {label}
      </p>
      {children}
    </div>
  );
}

// Walk-in is the common case, so it stays a quiet outline pill — the same one
// the stop cards use for opening hours. "Book ahead" is the exception worth
// noticing, so it gets the filled accent.
function ReserveBadge({ reserve }) {
  return reserve ? (
    <span className="shrink-0 rounded-full bg-momiji px-3 py-1 text-xs font-semibold text-on-momiji">
      <L en="Book ahead" es="Reservar antes" />
    </span>
  ) : (
    <span className="shrink-0 rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink/70">
      <L en="Walk-in" es="Sin reserva" />
    </span>
  );
}

function Meal({ meal, isLast }) {
  return (
    <li className="relative pb-5 pl-6 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="stop-connector absolute bottom-0 left-1.5 top-5 -translate-x-1/2"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-momiji bg-card"
      />

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-3">
          {/* Time and type read as one line — "13:15 · Market grazing" — so the
              place name below sits directly on top of its own note. */}
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-display text-base font-semibold text-momiji">
              <L v={meal.time} />
            </span>
            {meal.type && (
              <span className="text-sm text-ink/50">
                <L v={meal.type} />
              </span>
            )}
          </div>
          <ReserveBadge reserve={meal.reserve} />
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          <L v={meal.place} />
        </h3>
        {meal.note && (
          <p className="text-sm leading-6 text-ink/80">
            <L v={meal.note} />
          </p>
        )}
      </div>
    </li>
  );
}

function Dish({ dish }) {
  return (
    <li className="rounded-2xl border border-line bg-paper px-4 py-3">
      <div className="flex flex-wrap items-baseline gap-x-2">
        <h3 className="font-display text-base font-semibold text-ink">
          <L v={dish.name} />
        </h3>
        {dish.jp && <span className="text-sm text-ink/50">{dish.jp}</span>}
      </div>
      {dish.desc && (
        <p className="mt-1 text-sm leading-6 text-ink/80">
          <L v={dish.desc} />
        </p>
      )}
    </li>
  );
}

// The meal plan is the only part of the section that's always open: on a long
// day the dish list runs past a phone screen and buries everything under it.
// The collapsed half lives in FoodDisclosure, the section's only client code.
export default function FoodSection({ day }) {
  const food = getFood(day);
  const meals = food?.meals ?? [];
  const dishes = food?.dishes ?? [];
  const hasAnything = meals.length > 0 || dishes.length > 0 || food?.reservations;

  // Kept short on purpose — the specific heading ("What to eat in Minami")
  // still shows inside once it's open, so the pill doesn't need to carry it.
  // A day with only one of the two gets a label naming just that one.
  const moreLabel =
    dishes.length > 0 ? (
      food?.reservations ? (
        <L en="What to eat & reservations" es="Qué comer y reservas" />
      ) : (
        <L en="What to eat" es="Qué comer" />
      )
    ) : (
      <L en="Reservations" es="Reservas" />
    );

  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-xl font-semibold tracking-tight">
        <L en="Food" es="Comida" />
      </h2>

      <div className="flex flex-col gap-5 rounded-2xl border-2 border-line bg-card px-5 py-4">
        {!hasAnything && (
          <p className="text-sm text-ink/50">
            <L
              en="Nothing planned yet — meals along the route, local dishes, and anything that needs booking go here."
              es="Aún no hay nada planeado: aquí van las comidas de la ruta, los platos locales y lo que haya que reservar."
            />
          </p>
        )}

        {meals.length > 0 && (
          <Entry label={<L en="Along the route" es="Durante la ruta" />}>
            <ol className="relative flex flex-col">
              {meals.map((meal, index) => (
                <Meal
                  key={`${enText(meal.time)}-${enText(meal.place)}`}
                  meal={meal}
                  isLast={index === meals.length - 1}
                />
              ))}
            </ol>
          </Entry>
        )}

        {(dishes.length > 0 || food?.reservations) && (
          <FoodDisclosure label={moreLabel}>
            {dishes.length > 0 && (
              <Entry
                label={
                  food.dishesTitle ? (
                    <L v={food.dishesTitle} />
                  ) : (
                    <L en="What to eat" es="Qué comer" />
                  )
                }
              >
                <ul className="flex flex-col gap-2">
                  {dishes.map((dish) => (
                    <Dish key={enText(dish.name)} dish={dish} />
                  ))}
                </ul>
              </Entry>
            )}

            {food?.reservations && (
              <Entry label={<L en="Reservations" es="Reservas" />}>
                <div className="rounded-2xl border-2 border-momiji/40 bg-card px-4 py-3 text-sm leading-relaxed text-ink/80">
                  <p>
                    <L v={food.reservations} />
                  </p>
                </div>
              </Entry>
            )}
          </FoodDisclosure>
        )}
      </div>
    </section>
  );
}
