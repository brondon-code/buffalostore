# Buffalo Store

Mini-boutique Next.js pour distribuer **Printer Test**, une application Android au format APK.

Le site est autonome : l'APK est hébergé dans `public/downloads`, le téléchargement est direct et le design s'inspire de l'esthétique minimaliste de Vercel (noir et blanc, Geist, grille fine, cartes à bordures). Aucun lien, logo ou asset Vercel n'est utilisé.

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

- Landing page responsive en français.
- Fiche application avec icône, version, taille, compatibilité et QR code.
- Téléchargement direct de l'APK avec le bon type MIME.
- Guide d'installation Android en trois étapes.
- Avertissement clair : un APK Android ne s'installe pas sur iPhone/iPad.
- Métadonnées SEO, Open Graph, sitemap, robots et données structurées.
- Empreinte SHA-256 affichée et fichier `.sha256` téléchargeable.
- Bouton de téléchargement fixe sur mobile.

## Fichiers importants

| Fichier | Rôle |
| --- | --- |
| `public/downloads/printer-test-v1.0.10.apk` | L'APK distribué |
| `public/downloads/printer-test-v1.0.10.apk.sha256` | Empreinte du fichier |
| `public/app-icon.png` | Icône extraite de l'APK |
| `public/og.png` | Image Open Graph 1200 × 630 |
| `src/lib/apps.ts` | Métadonnées de l'application et du store |
| `src/app/page.tsx` | Contenu de la boutique |
| `src/app/globals.css` | Direction artistique et responsive |

## Remplacer l'APK par une nouvelle version

1. Déposer le nouveau fichier dans `public/downloads/`.
2. Mettre à jour `filePath`, `fileName`, `version`, `size`, `sizeBytes`, `releaseDate` et `sha256` dans `src/lib/apps.ts`.
3. Recalculer l'empreinte :

```powershell
Get-FileHash -Algorithm SHA256 "public\downloads\mon-fichier.apk"
```

4. Mettre à jour le fichier `.sha256` si nécessaire.

Le nom affiché et le QR code se mettent à jour automatiquement à partir de ces données.

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

Le QR code encode l'URL de téléchargement direct de l'APK. Il utilise `NEXT_PUBLIC_SITE_URL` en priorité, sinon l'origine du navigateur. En local (`localhost`), le QR ne fonctionnera pas depuis un téléphone : testez-le sur l'URL de production.

## Compatibilité réelle de l'APK fourni

L'APK a été analysé tel quel, sans modification :

- Nom affiché par Android : **Printer test**
- Package : `win.betbooster.print.test`
- `versionName` interne : `1.0`
- `versionCode` : `1`
- Android minimum : **5.1** (API 22)
- Android cible : **14** (API 34)
- Taille : **4 033 842 octets** (environ 3,8 Mo)
- Autorisations principales : Bluetooth, appareils à proximité, Internet

Il est donc installable sur les téléphones et tablettes **Android 5.1+** compatibles Bluetooth. Il ne s'installe pas sur iOS.

## Avant une diffusion publique large

- Le fichier fourni est distribué tel quel. Pour une publication officielle, construire un APK **release signé avec votre propre keystore** plutôt qu'un build de test.
- Android peut afficher un avertissement « source inconnue » ou Play Protect pour tout APK hors Play Store. Le site l'explique à l'utilisateur.
- Vercel convient très bien à un APK de cette taille. Si le trafic devient important, déplacer les APK vers un stockage objet (S3, R2, Supabase Storage…) et mettre à jour `filePath`.
- L'application reste la vôtre : aucune modification n'a été apportée à l'APK.
