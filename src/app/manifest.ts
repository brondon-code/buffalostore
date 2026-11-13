import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Buffalo Store",
    short_name: "Buffalo",
    description:
      "Des outils Android simples, bien faits. Téléchargez Printer Test en APK.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/app-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
