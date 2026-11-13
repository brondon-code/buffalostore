export const store = {
  name: "Buffalo Store",
  tagline: "Des outils Android simples, bien faits.",
  description:
    "Buffalo Store distribue des applications Android légères, utiles et sans détour.",
} as const;

export const printerTest = {
  name: "Printer Test",
  category: "Utilitaires",
  tagline: "Vos imprimantes Bluetooth. Testées sans détour.",
  description:
    "Un utilitaire Android léger pour tester vos imprimantes Bluetooth et vérifier votre connexion en quelques secondes.",
  version: "1.0.10",
  versionName: "1.0",
  releaseDate: "13 novembre 2026",
  releaseDateISO: "2026-11-13",
  size: "3,8 Mo",
  sizeBytes: 4_033_842,
  fileName: "printer-test-v1.0.10.apk",
  filePath: "/downloads/printer-test-v1.0.10.apk",
  sha256:
    "3e8a49a0e169aa4fe714440510afa5d173613da2af231eaf0a8349faefc62fdd",
  icon: "/app-icon.png",
  minAndroid: "5.1",
  minSdk: 22,
  targetAndroid: "14",
  targetSdk: 34,
  packageName: "win.betbooster.print.test",
  developer: "Buffalo Store",
  requirements: ["Android 5.1+", "Bluetooth", "3,8 Mo d'espace libre"],
} as const;

export const navigation = [
  { label: "L'application", href: "#application" },
  { label: "Installation", href: "#installation" },
  { label: "Détails", href: "#details" },
  { label: "FAQ", href: "#faq" },
] as const;

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ??
    "http://localhost:3000"
  );
}
