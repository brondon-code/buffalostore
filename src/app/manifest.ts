import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Buffalo Store",
    short_name: "Buffalo",
    description:
      "Des applications Android simples, bien faites. Téléchargez Printer Test, ALOT, ALOT Test et ALOT Model V2 en APK.",
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
