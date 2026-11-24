export const store = {
  name: "Buffalo Store",
  tagline: "Des applications Android simples, bien faites.",
  description:
    "Buffalo Store distribue des applications Android légères, utiles et faciles à installer.",
} as const;

export type StoreApp = {
  slug: string;
  name: string;
  category: string;
  badge?: string;
  tagline: string;
  description: string;
  version: string;
  releaseDate: string;
  releaseDateISO: string;
  size: string;
  sizeBytes: number;
  fileName: string;
  filePath: string;
  sha256: string;
  icon: string;
  minAndroid: string;
  minSdk: number;
  targetAndroid: string;
  targetSdk: number;
  packageName: string;
  developer: string;
  permissions: string[];
  note?: string;
  accent: string;
};

export const printerTest: StoreApp = {
  slug: "printer-test",
  name: "Printer Test",
  category: "Utilitaires",
  tagline: "Vos imprimantes Bluetooth. Testées sans détour.",
  description:
    "Un utilitaire Android léger pour tester vos imprimantes Bluetooth et vérifier votre connexion en quelques secondes.",
  version: "1.0.10",
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
  permissions: ["Bluetooth", "Appareils à proximité", "Internet"],
  accent: "#0d8bf2",
};

export const alot: StoreApp = {
  slug: "alot",
  name: "ALOT",
  category: "Loterie & services",
  badge: "Nouveau",
  tagline: "Votre point de vente, dans la poche.",
  description:
    "Une application Android pensée pour les agents et opérateurs de loterie : ventes, transactions et suivi des opérations, au même endroit. Cette build est dédiée au modèle V3.",
  version: "1.55",
  releaseDate: "21 novembre 2026",
  releaseDateISO: "2026-11-21",
  size: "12,6 Mo",
  sizeBytes: 13_223_346,
  fileName: "alot-model-v3-v1.55.apk",
  filePath: "/downloads/alot-model-v3-v1.55.apk",
  sha256:
    "31e04073d16d98f8269badcb877ee31af37b3e756421346a4c695d0c195d4555",
  icon: "/alot-icon.png",
  minAndroid: "4.4",
  minSdk: 19,
  targetAndroid: "13",
  targetSdk: 33,
  packageName: "com.egame.mlottery",
  developer: "Buffalo Store",
  permissions: [
    "Appareil photo",
    "Localisation",
    "Stockage",
    "Téléphone",
    "Wi-Fi",
    "Internet",
  ],
  note: "Build de test (debug) dédiée au modèle V3. Application professionnelle : l'accès aux services dépend de votre opérateur.",
  accent: "#7a2e91",
};

export const alotModelV4: StoreApp = {
  slug: "alot-model-v4",
  name: "ALOT Model V4",
  category: "Loterie & services",
  badge: "Test",
  tagline: "La build ALOT dédiée au modèle V4.",
  description:
    "Build de test (debug) d'ALOT préparée pour la validation sur le modèle V4 : les services de loterie et les opérations des agents, dans une version dédiée aux tests.",
  version: "1.55 model v4",
  releaseDate: "25 novembre 2026",
  releaseDateISO: "2026-11-25",
  size: "12,6 Mo",
  sizeBytes: 13_223_603,
  fileName: "alot-model-v4-v1.55.apk",
  filePath: "/downloads/alot-model-v4-v1.55.apk",
  sha256:
    "a2f6b51c138619d4a8f23682818f2a16892bbcd281f963497c5d7c16c6b4d053",
  icon: "/alot-icon.png",
  minAndroid: "4.4",
  minSdk: 19,
  targetAndroid: "13",
  targetSdk: 33,
  packageName: "com.egame.mlottery",
  developer: "Buffalo Store",
  permissions: [
    "Appareil photo",
    "Localisation",
    "Stockage",
    "Téléphone",
    "Wi-Fi",
    "Internet",
  ],
  note: "Build de test (debug) dédiée au modèle V4. Même identifiant que ALOT : l'installer remplace la version ALOT déjà installée.",
  accent: "#0f766e",
};

export const apps: StoreApp[] = [printerTest, alot, alotModelV4];

export const navigation = [
  { label: "Applications", href: "#apps" },
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
