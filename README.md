# Buffalo Store

Mini-boutique Next.js pour distribuer trois applications Android au format APK :

- **Printer Test** — utilitaire de test d'imprimantes Bluetooth.
- **ALOT** — application de loterie et de services destinée aux agents et opérateurs, dans sa build dédiée au modèle V3.
- **ALOT Model V4** — build de test (debug) d'ALOT dédiée au modèle V4.

Le site est autonome : les APK sont hébergés dans `public/downloads`, le téléchargement est direct et le design s'inspire de l'esthétique minimaliste de Vercel (noir et blanc, Geist, grille fine, cartes à bordures). Aucun lien, logo ou asset Vercel n'est utilisé.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Sur Windows, si PowerShell bloque `npm.ps1`, utiliser :

```powershell
npm.cmd install
npm.cmd run dev
```

Build de production :

```bash
npm run build
npm run start
```

## Ce qui est déjà en place

- Catalogue responsive en français avec trois fiches application.
- Icône, version, taille, compatibilité, permissions et empreinte SHA-256 pour chaque app.
- Téléchargement direct des APK avec le bon type MIME.
- Guide d'installation Android en trois étapes.
- Avertissement clair : un APK Android ne s'installe pas sur iPhone/iPad.
- Mention professionnelle pour ALOT : l'accès aux services dépend de l'opérateur.
- Métadonnées SEO, Open Graph, sitemap, robots et données structurées.
- Fichiers `.sha256` téléchargeables.
- Bouton fixe sur mobile pour revenir au catalogue.

## Applications distribuées

| Application | Package | Version | Android min. | Android cible | Taille | APK |
| --- | --- | --- | --- | --- | --- | --- |
| Printer Test | `win.betbooster.print.test` | `1.0.10` affiché (`versionName` interne `1.0`, code `1`) | 5.1 (API 22) | 14 (API 34) | 4 033 842 octets (3,8 Mo) | `printer-test-v1.0.10.apk` |
| ALOT | `com.egame.mlottery` | `1.55` (`versionName` interne `V1.55`, code `155`, debug modèle V3) | 4.4 (API 19) | 13 (API 33) | 13 223 346 octets (12,6 Mo) | `alot-model-v3-v1.55.apk` |
| ALOT Model V4 | `com.egame.mlottery` | `1.55 model v4` (`versionName` interne `V1.55`, code `155`, debug) | 4.4 (API 19) | 13 (API 33) | 13 223 603 octets (12,6 Mo) | `alot-model-v4-v1.55.apk` |

Empreintes SHA-256 :

```text
3e8a49a0e169aa4fe714440510afa5d173613da2af231eaf0a8349faefc62fdd  printer-test-v1.0.10.apk
31e04073d16d98f8269badcb877ee31af37b3e756421346a4c695d0c195d4555  alot-model-v3-v1.55.apk
a2f6b51c138619d4a8f23682818f2a16892bbcd281f963497c5d7c16c6b4d053  alot-model-v4-v1.55.apk
```

### Autorisations ALOT

L'APK ALOT demande notamment l'appareil photo, la localisation, le stockage, l'état du téléphone, le Wi-Fi et Internet. Le site les affiche dans les détails techniques de la fiche. ALOT Model V4 partage ces autorisations. ALOT est une application professionnelle : Buffalo Store ne gère ni les comptes ni les transactions, et l'accès aux services peut dépendre de l'opérateur.

## Fichiers importants

| Fichier | Rôle |
| --- | --- |
| `public/downloads/printer-test-v1.0.10.apk` | APK Printer Test |
| `public/downloads/alot-model-v3-v1.55.apk` | APK ALOT (debug modèle V3) |
| `public/downloads/alot-model-v4-v1.55.apk` | APK ALOT Model V4 (debug) |
| `public/downloads/*.sha256` | Empreintes des APK |
| `public/app-icon.png` | Icône Printer Test extraite de l'APK |
| `public/alot-icon.png` | Icône ALOT extraite de l'APK |
| `public/og.png` | Image Open Graph 1200 × 630 |
| `src/lib/apps.ts` | Source de vérité : applications, navigation et URL du site |
| `src/components/app-card.tsx` | Fiche application réutilisable |
| `src/components/qr-download.tsx` | QR code du store et copie du lien |
| `src/app/page.tsx` | Contenu de la boutique |
| `src/app/globals.css` | Direction artistique et responsive |

## Ajouter ou remplacer un APK

1. Déposer le nouveau fichier dans `public/downloads/`.
2. Mettre à jour l'entrée concernée dans `src/lib/apps.ts` : `filePath`, `fileName`, `version`, `size`, `sizeBytes`, `releaseDate`, `releaseDateISO`, `sha256`, et si nécessaire `minAndroid`, `minSdk`, `targetAndroid`, `targetSdk`, `permissions`.
3. Recalculer l'empreinte :

```powershell
Get-FileHash -Algorithm SHA256 "public\downloads\mon-fichier.apk"
```

4. Mettre à jour le fichier `.sha256` correspondant.
5. Pour une nouvelle application, ajouter un objet dans le tableau `apps` : la fiche, le QR code, le tableau comparatif, le footer et les données structurées se mettent à jour automatiquement.

## Mettre en ligne

### Vercel

1. Pousser le dossier `buffalo-store` sur GitHub.
2. Importer le dépôt dans Vercel.
3. Framework détecté : **Next.js**. Build : `npm run build`.
4. Ajouter la variable d'environnement :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

5. Redéployer après avoir changé le domaine, pour que le QR code pointe vers la bonne URL.

### Important pour le QR code

Le QR code de la page d'accueil encode l'URL du store. Il utilise `NEXT_PUBLIC_SITE_URL` en priorité, sinon l'origine du navigateur. En local (`localhost`), le QR ne fonctionnera pas depuis un téléphone : testez-le sur l'URL de production.

## Avant une diffusion publique large

- Les fichiers fournis sont distribués tels quels. Pour une publication officielle, construire des APK **release signés avec votre propre keystore** plutôt que des builds de test.
- Android peut afficher un avertissement « source inconnue » ou Play Protect pour tout APK hors Play Store. Le site l'explique à l'utilisateur.
- ALOT relevant de la loterie et des services financiers, vérifiez les obligations légales et réglementaires applicables dans chaque pays de diffusion avant de publier l'application.
- Vercel convient très bien à des APK de cette taille. Si le trafic devient important, déplacer les fichiers vers un stockage objet (S3, R2, Supabase Storage…) et mettre à jour `filePath`.
- Les applications restent les vôtres : aucune modification n'a été apportée aux APK.
