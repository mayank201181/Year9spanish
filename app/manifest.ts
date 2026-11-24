import type { MetadataRoute } from "next";

// Web app manifest: makes Year 9 Spanish installable on iPad ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 9 Spanish",
    short_name: "Year 9 Spanish",
    description:
      "Tanglin Year 9 Spanish — discovery lessons, 800+ audio vocab bank, Year 9 mark-savers, 8-tense verb drills, mock papers and narrated sitcom episodes.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#4f46e5",
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
