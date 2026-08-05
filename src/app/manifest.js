export default function manifest() {
  return {
    name: "Nina & Alex in Japan",
    short_name: "Japan Trip",
    description: "A 21-day trip through Japan, day by day.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F1",
    theme_color: "#A8321F",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
