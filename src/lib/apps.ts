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
    "Une application Android pensée pour les agents et opérateurs de loterie : ventes, transactions et suivi des opérations, au même endroit.",
  version: "1.55",
  releaseDate: "14 novembre 2026",
  releaseDateISO: "2026-11-14",
  size: "8,7 Mo",
  sizeBytes: 9_147_797,
  fileName: "alot-v1.55.apk",
  filePath: "/downloads/alot-v1.55.apk",
  sha256:
    "919ecc2bcb05aae936a20c64bb33b3f4470ac1d5751c35ea0a840d9687786699",
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
  note: "Application professionnelle. L'accès aux services dépend de votre opérateur.",
  accent: "#7a2e91",
};

export const alotTest: StoreApp = {
  slug: "alot-test",
  name: "ALOT Test",
  category: "Loterie & services",
  badge: "Test",
  tagline: "La build de test d'ALOT, pour valider chaque écran.",
  description:
    "Version de test d'ALOT destinée aux agents et opérateurs : les mêmes services de loterie, dans une build de validation à installer à côté de l'application finale.",
  version: "1.55 test",
  releaseDate: "19 novembre 2026",
  releaseDateISO: "2026-11-19",
  size: "12,6 Mo",
  sizeBytes: 13_217_128,
  fileName: "alot-test-v1.55.apk",
  filePath: "/downloads/alot-test-v1.55.apk",
  sha256:
    "b2be95ba6f854bcb79404cfb7e90df939b88d45b37e46eddad468eb888132385",
  icon: "/alot-test-icon.png",
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
  note: "Build de test (debug) signée pour évaluation. Même identifiant que ALOT : l'installer remplace la version ALOT déjà installée.",
  accent: "#a855f7",
};

export const alotModelV2: StoreApp = {
  slug: "alot-model-v2",
  name: "ALOT Model V2",
  category: "Loterie & services",
  badge: "Test",
  tagline: "La build ALOT dédiée au modèle V2.",
  description:
    "Build de test (debug) d'ALOT préparée pour la validation sur le modèle V2 : les services de loterie et les opérations des agents, dans une version dédiée aux tests.",
  version: "1.55 model v2",
  releaseDate: "20 novembre 2026",
  releaseDateISO: "2026-11-20",
  size: "12,6 Mo",
  sizeBytes: 13_216_734,
  fileName: "alot-model-v2-v1.55.apk",
  filePath: "/downloads/alot-model-v2-v1.55.apk",
  sha256:
    "6657ee337472c15f3fcc7c4456afa1201640c12ba4a14a60e2a8ee362c7e46e3",
  icon: "/alot-model-v2-icon.png",
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
  note: "Build de test (debug) dédiée au modèle V2. Même identifiant que ALOT : l'installer remplace la version ALOT déjà installée.",
  accent: "#0f766e",
};

export const apps: StoreApp[] = [
  printerTest,
  alot,
  alotTest,
  alotModelV2,
];

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
