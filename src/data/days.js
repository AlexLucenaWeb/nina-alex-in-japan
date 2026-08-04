export const TRIP_LENGTH = 21;

export const days = Array.from({ length: TRIP_LENGTH }, (_, i) => {
  const day = i + 1;
  return {
    day,
    title: `Day ${day}`,
    date: null,
    location: "TBD",
    summary: "Itinerary details coming soon.",
  };
});

export function getDay(day) {
  return days.find((d) => d.day === day);
}
