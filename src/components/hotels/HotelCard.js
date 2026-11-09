import BulletList from "@/components/BulletList";
import CopyAddress from "@/components/hotels/CopyAddress";
import StopPhoto from "@/components/route-itinerary/StopPhoto";
import L from "@/components/L";
import { formatField } from "@/data/hotels";
import { formatDateBi } from "@/lib/dates";
import { bi, enText } from "@/lib/i18n";

// One row of the details list. Everything below the header is optional, so
// each row is only rendered once there is something to put in it.
function Detail({ label, children }) {
  return (
    <div className="flex flex-col gap-1 border-t border-line pt-3 sm:flex-row sm:gap-4">
      <dt className="shrink-0 text-xs font-semibold uppercase tracking-wide text-momiji sm:w-32 sm:pt-0.5">
        {label}
      </dt>
      <dd className="flex flex-col gap-2 text-sm leading-6 text-ink/80">
        {children}
      </dd>
    </div>
  );
}

function Stay({ label, date, time }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs font-semibold uppercase tracking-wide text-momiji">
        {label}
      </p>
      <p className="font-display text-base font-semibold">
        <L v={formatDateBi(date)} />
      </p>
      {time && <p className="text-sm text-ink/70">{time}</p>}
    </div>
  );
}

export default function HotelCard({ hotel }) {
  const pending = hotel.status !== "booked";

  const name = formatField(hotel.name);
  const nameJp = formatField(hotel.nameJp);
  const addressEn = formatField(hotel.addressEn);
  const addressJp = formatField(hotel.addressJp);
  const phone = formatField(hotel.phone);
  const website = formatField(hotel.website);
  // Not every one of these is the hotel's own site — one is a booking listing,
  // and the link should say which before you tap it.
  const websiteLabel =
    formatField(hotel.websiteLabel) ?? bi("Official website", "Web oficial");
  const nearestStation = formatField(hotel.nearestStation);
  const mapsUrl = formatField(hotel.mapsUrl);
  const notes = hotel.notes ?? [];

  // An em dash is a placeholder, not an address: it is worth showing in the
  // row, but there is nothing to copy from it or link to.
  const isReal = (value) => Boolean(value) && value !== "—";
  const nights = hotel.nights ?? null;

  return (
    <article
      id={hotel.id}
      className="scroll-mt-6 overflow-hidden rounded-2xl border-2 border-line bg-card shadow-sm"
    >
      {hotel.photo && (
        <StopPhoto src={hotel.photo} label={enText(name) ?? hotel.city} />
      )}

      <div className="flex flex-col gap-4 p-5">
        <header className="flex flex-col gap-1">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-momiji">
              {hotel.city}
            </p>
            {pending && (
              <p className="shrink-0 rounded-full border-2 border-ochre/40 px-3 py-1 text-xs font-semibold text-ochre">
                <L en="Not booked yet" es="Sin reservar" />
              </p>
            )}
          </div>
          <h2 className="font-display text-xl font-semibold leading-snug">
            {isReal(name) ? (
              <L v={name} />
            ) : (
              <L en="Hotel still to decide" es="Hotel por decidir" />
            )}
          </h2>
          {nameJp && <p className="text-sm text-ink/50">{nameJp}</p>}
        </header>

        <div className="rounded-xl border-2 border-line bg-band p-4">
          <div className="grid grid-cols-2 gap-4">
            <Stay
              label="Check-in"
              date={hotel.checkIn?.date}
              time={formatField(hotel.checkIn?.time)}
            />
            <Stay
              label="Check-out"
              date={hotel.checkOut?.date}
              time={formatField(hotel.checkOut?.time)}
            />
          </div>
          {nights !== null && (
            <p className="mt-3 border-t border-line pt-3 text-sm text-ink/70">
              {nights}{" "}
              {nights === 1 ? (
                <L en="night" es="noche" />
              ) : (
                <L en="nights" es="noches" />
              )}
            </p>
          )}
        </div>

        {(addressEn || addressJp || phone || website || nearestStation) && (
          <dl className="flex flex-col gap-3">
            {addressEn && (
              <Detail label={<L en="Address" es="Dirección" />}>
                {isReal(addressEn) && isReal(mapsUrl) ? (
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-momiji underline underline-offset-2"
                  >
                    {addressEn}
                  </a>
                ) : (
                  <span>{addressEn}</span>
                )}
              </Detail>
            )}

            {addressJp && (
              <Detail label="住所">
                <span lang="ja">{addressJp}</span>
                {isReal(addressJp) && (
                  <>
                    <CopyAddress value={hotel.addressJp} />
                    <span className="text-xs text-ink/50">
                      <L
                        en="Show this to the taxi driver"
                        es="Enseñádsela al taxista"
                      />
                    </span>
                  </>
                )}
              </Detail>
            )}

            {phone && (
              <Detail label={<L en="Phone" es="Teléfono" />}>
                {isReal(phone) ? (
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="font-medium text-momiji underline underline-offset-2"
                  >
                    {phone}
                  </a>
                ) : (
                  <span>{phone}</span>
                )}
              </Detail>
            )}

            {website && (
              <Detail label={<L en="Website" es="Web" />}>
                {isReal(website) ? (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-momiji underline underline-offset-2"
                  >
                    <L v={websiteLabel} />
                  </a>
                ) : (
                  <span>{website}</span>
                )}
              </Detail>
            )}

            {nearestStation && (
              <Detail label={<L en="Nearest station" es="Estación más cercana" />}>
                <span>
                  <L v={nearestStation} />
                </span>
              </Detail>
            )}
          </dl>
        )}

        {notes.length > 0 && <BulletList items={notes} />}
      </div>
    </article>
  );
}
