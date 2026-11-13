import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { getSiteUrl, store } from "@/lib/apps";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Buffalo Store — Printer Test pour Android",
    template: "%s · Buffalo Store",
  },
  description:
    "Téléchargez Printer Test, l'utilitaire Android de Buffalo Store pour tester vos imprimantes Bluetooth. APK direct, Android 5.1 et plus.",
  applicationName: store.name,
  authors: [{ name: store.name }],
  creator: store.name,
  publisher: store.name,
  category: "technology",
  keywords: [
    "Buffalo Store",
    "Printer Test",
    "APK Android",
    "imprimante Bluetooth",
    "télécharger APK",
    "utilitaire Android",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: store.name,
    title: "Buffalo Store — Printer Test pour Android",
    description:
      "L'utilitaire Android pour tester vos imprimantes Bluetooth. Téléchargement direct, sans détour.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Buffalo Store — Printer Test pour Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buffalo Store — Printer Test pour Android",
    description:
      "L'utilitaire Android pour tester vos imprimantes Bluetooth. Téléchargement direct, sans détour.",
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
