import HotelCard from "@/components/hotels/HotelCard";
import { hotelsInOrder } from "@/data/hotels";

export const metadata = {
  title: "Hotels · Nina & Alex in Japan",
  description:
    "Every stay of the trip: addresses in English and Japanese, check-in and check-out, and the nearest station.",
};

export default function HotelsPage() {
  const hotels = hotelsInOrder();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-wide text-momiji">
          Where we sleep
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Hotels
        </h1>
        <p className="text-lg leading-8 text-ink/70">
          Every stay in check-in order, with the address in Japanese to show a
          taxi driver, the phone number, and the nearest station. The ones we
          have not booked yet are marked as such.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
