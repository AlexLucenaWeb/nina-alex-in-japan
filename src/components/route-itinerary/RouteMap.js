"use client";

import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MOMIJI = "#A8321F";
const CARD_BG = "#FBF8F1";
const FIT_PADDING = [40, 40];

const TILE_URL =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

// Inline styles only: this HTML string is handed straight to Leaflet, outside
// Tailwind's compiled stylesheet, so utility classes here would render unstyled.
function createNumberedIcon(n) {
  return L.divIcon({
    className: "",
    html: `<div style="width:30px;height:30px;border-radius:9999px;background:${CARD_BG};border:2px solid ${MOMIJI};display:flex;align-items:center;justify-content:center;font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:13px;line-height:1;color:${MOMIJI};box-shadow:0 1px 3px rgba(36,30,23,0.35);">${n}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -16],
  });
}

// Real walking directions (streets, not straight lines): tries OpenRouteService
// first (needs NEXT_PUBLIC_ORS_API_KEY), then the free OSRM demo server, and
// returns null if both fail so the caller can fall back to a straight line —
// the route on the map must never be left blank.
async function fetchWalkingRoute(positions) {
  const coordinates = positions.map(([lat, lng]) => [lng, lat]);

  const orsKey = process.env.NEXT_PUBLIC_ORS_API_KEY;
  if (orsKey) {
    try {
      const res = await fetch(
        "https://api.openrouteservice.org/v2/directions/foot-walking/geojson",
        {
          method: "POST",
          headers: {
            Authorization: orsKey,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ coordinates }),
        }
      );
      if (!res.ok) throw new Error(`ORS responded ${res.status}`);
      const data = await res.json();
      return data.features[0].geometry.coordinates.map(([lng, lat]) => [
        lat,
        lng,
      ]);
    } catch (err) {
      console.warn("OpenRouteService routing failed, trying OSRM:", err);
    }
  }

  try {
    const path = coordinates.map(([lng, lat]) => `${lng},${lat}`).join(";");
    const res = await fetch(
      `https://router.project-osrm.org/route/v1/walking/${path}?overview=full&geometries=geojson`
    );
    if (!res.ok) throw new Error(`OSRM responded ${res.status}`);
    const data = await res.json();
    return data.routes[0].geometry.coordinates.map(([lng, lat]) => [
      lat,
      lng,
    ]);
  } catch (err) {
    console.warn(
      "OSRM routing failed, falling back to a straight line:",
      err
    );
    return null;
  }
}

function FitBounds({ positions }) {
  const map = useMap();

  useEffect(() => {
    if (positions.length === 0) return;
    map.fitBounds(L.latLngBounds(positions), { padding: FIT_PADDING });
  }, [map, positions]);

  return null;
}

export default function RouteMap({ stops }) {
  const positions = useMemo(
    () => stops.map((stop) => [stop.lat, stop.lng]),
    [stops]
  );

  // Start with a straight line so the route is never blank, then swap it for
  // the real walking path once (if) it arrives.
  const [route, setRoute] = useState(() => ({
    coords: positions,
    isWalking: false,
  }));

  useEffect(() => {
    let cancelled = false;
    fetchWalkingRoute(positions).then((walkingCoords) => {
      if (!cancelled && walkingCoords) {
        setRoute({ coords: walkingCoords, isWalking: true });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [positions]);

  return (
    <div className="h-[70vh] w-full overflow-hidden rounded-2xl border border-line">
      <MapContainer
        bounds={L.latLngBounds(positions)}
        boundsOptions={{ padding: FIT_PADDING }}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution={TILE_ATTRIBUTION}
          url={TILE_URL}
          subdomains="abcd"
          maxZoom={20}
        />

        <Polyline
          positions={route.coords}
          pathOptions={{
            color: MOMIJI,
            weight: 4,
            opacity: 0.85,
            dashArray: route.isWalking ? null : "6 8",
          }}
        />

        {stops.map((stop) => (
          <Marker
            key={stop.n}
            position={[stop.lat, stop.lng]}
            icon={createNumberedIcon(stop.n)}
          >
            <Popup>
              <div className="min-w-[180px] font-sans text-ink">
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-momiji">
                  Stop {stop.n} · {stop.time}
                </p>
                <p className="font-display text-base font-semibold text-ink">
                  {stop.name}
                </p>
                <p className="text-xs text-ink/60">{stop.jp}</p>
                <a
                  href={stop.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block rounded-full bg-momiji px-3 py-1 text-xs font-semibold text-white"
                >
                  View on Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}

        <FitBounds positions={route.coords} />
      </MapContainer>
    </div>
  );
}
