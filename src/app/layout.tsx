import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { getSiteUrl, store } from "@/lib/apps";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Buffalo Store — Applications Android à télécharger",
    template: "%s · Buffalo Store",
  },
  description:
    "Téléchargez Printer Test, ALOT, ALOT Test et ALOT Model V2 en APK. Des applications Android directes, sans place de marché, avec compatibilité et empreintes vérifiables.",
  applicationName: store.name,
  authors: [{ name: store.name }],
  creator: store.name,
  publisher: store.name,
  category: "technology",
  keywords: [
    "Buffalo Store",
    "Printer Test",
    "ALOT",
    "ALOT Test",
    "ALOT Model V2",
    "APK Android",
    "télécharger APK",
    "imprimante Bluetooth",
    "loterie Android",
    "applications Android",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: store.name,
    title: "Buffalo Store — Quatre applications Android",
    description:
      "Printer Test pour vos imprimantes Bluetooth. ALOT pour la loterie et les services, avec ses builds de test ALOT Test et ALOT Model V2. Téléchargement direct en APK.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Buffalo Store — Printer Test, ALOT, ALOT Test et ALOT Model V2 pour Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buffalo Store — Quatre applications Android",
    description:
      "Printer Test pour vos imprimantes Bluetooth. ALOT pour la loterie et les services, avec ses builds de test ALOT Test et ALOT Model V2. Téléchargement direct en APK.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/app-icon.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/app-icon.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
