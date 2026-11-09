import { withSpanish } from "@/lib/i18n";

// Spanish for ../hotels.js, keyed by hotel id. Text fields only: names of real
// hotels, addresses, phones and times stay as they are.
//
// The merge happens here rather than in hotels.js because scripts/photos.mjs
// imports that file on its own, and it has to stay free of imports.
export const HOTELS_ES = {
  "osaka-arashi-nipponbashi-1": {
    websiteLabel: "Ficha en Booking.com",
    nearestStation: "Ebisucho (Sakaisuji Line), ~2 min a pie",
    notes: [
      "El check-in cierra a medianoche: avisad al hotel con antelación si llegáis más tarde",
      "Cocina, balcón y lavadora en la habitación",
      "Consigna de equipaje gratuita",
    ],
  },
  "kyoto-ms-gojo-odawara": {
    websiteLabel: "Web oficial",
    nearestStation: "Gojo (Karasuma Line), ~5 min a pie",
    notes: [
      "Check-in autónomo: las instrucciones llegan por email antes de la llegada",
      "Consigna autoservicio gratuita antes del check-in y después del check-out (pocas cadenas con candado)",
      "La entrada al edificio va con código (ver el email de confirmación)",
      "Lavadora-secadora de pago en la planta baja; sin restaurante",
      "Check-out temprano (10:00)",
    ],
  },
  "kanazawa-four-points-flex": {
    websiteLabel: "Web oficial",
    nearestStation:
      "Estación de Kanazawa, ~15 min a pie (parada de bus a 3 min)",
    notes: [
      "~5 min a pie del mercado de Omicho y del parque del castillo de Kanazawa",
      "Desayuno no incluido: bufé en el restaurante del hotel, Craic, 7:00–10:30",
      "Lavandería de monedas en el hotel; limpieza dos veces por semana",
    ],
  },
  "tokyo-sui-akasaka": {
    nearestStation:
      "Akasaka (Tokyo Metro Chiyoda Line), salida 5a — 3 min a pie. También Tameike-sanno (Ginza/Namboku) a ~7 min y Akasaka-mitsuke (Marunouchi/Ginza) a ~10 min.",
    notes: [
      "Habitación doble estándar, reservada en Booking.com: los detalles están en el email de confirmación.",
      "Las habitaciones son pequeñas (~13 m²): mejor abrir una maleta cada vez.",
      "Los artículos de aseo se recogen en recepción, no los dejan en la habitación. Café y té gratis las 24 h.",
      "Terraza en la azotea, en la planta 13, con vistas nocturnas hacia Roppongi; bebidas gratis durante el happy hour de la tarde.",
      "Lavandería de monedas en el hotel.",
      "Puede que en el hotel cobren la tasa de alojamiento de Tokio (poca cantidad por persona y noche).",
      "Día del check-out (1 de diciembre): vuelo desde Narita a las 16:55 y queremos estar en el aeropuerto a las 13:25. Si hace falta, pedid en recepción que guarden el equipaje después del check-out de las 10:00.",
    ],
  },
  "hakone-surprise": {
    name: "Una sorpresa",
    notes: ["Reservado: dónde dormimos es una sorpresa hasta que lleguemos."],
  },
};

export function localizeHotel(hotel) {
  return hotel ? withSpanish(hotel, HOTELS_ES[hotel.id]) : hotel;
}
