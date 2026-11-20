import Image from "next/image";
import { AppCard } from "@/components/app-card";
import { BrandMark } from "@/components/logo";
import {
  AndroidIcon,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircleIcon,
  ClockIcon,
  CloseIcon,
  DownloadIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { CopyPageLink, QrCode } from "@/components/qr-download";
import { MobileDownloadBar } from "@/components/mobile-download-bar";
import {
  apps,
  getSiteUrl,
  navigation,
  store,
} from "@/lib/apps";

const siteUrl = getSiteUrl();

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Applications Android Buffalo Store",
  itemListElement: apps.map((app, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: app.name,
      operatingSystem: `Android ${app.minAndroid}+`,
      applicationCategory:
        app.slug.startsWith("alot") ? "BusinessApplication" : "UtilitiesApplication",
      softwareVersion: app.version,
      fileSize: `${app.sizeBytes} bytes`,
      datePublished: app.releaseDateISO,
      downloadUrl: `${siteUrl}${app.filePath}`,
      installUrl: `${siteUrl}/#apps`,
      description: app.description,
      image: `${siteUrl}${app.icon}`,
      inLanguage: "fr-FR",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      publisher: {
        "@type": "Organization",
        name: store.name,
      },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <a className="skip-link" href="#main">
        Aller au contenu
      </a>

      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="/" aria-label="Buffalo Store, accueil">
            <BrandMark />
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <span className="platform-label">
              <span className="status-dot" />
              Android
            </span>
            <a
              className="button button-primary button-small nav-download"
              href="#apps"
            >
              Explorer les apps
              <ArrowDown width={15} height={15} />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-badge">{apps.length} applications</span>
                <span className="eyebrow-divider" aria-hidden="true" />
                Android APK
              </p>

              <h1>
                Des applis.
                <br />
                Zéro détour<span className="title-dot">.</span>
              </h1>

              <p className="hero-tagline">
                Quatre outils Android, prêts à installer.
              </p>

              <p className="hero-description">
                Printer Test pour vos imprimantes Bluetooth. ALOT pour la
                loterie et les services, avec ALOT Test et ALOT Model V2 pour
                valider les builds de test. Des APK directs, sans place de
                marché.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary button-large"
                  href="#apps"
                >
                  Voir les applications
                  <ArrowDown width={17} height={17} />
                </a>
                <a
                  className="button button-secondary button-large"
                  href="#installation"
                >
                  Comment installer
                  <ArrowRight width={17} height={17} />
                </a>
              </div>

              <ul className="hero-facts" aria-label="Informations rapides">
                <li>
                  <CheckCircleIcon width={15} height={15} />
                  {apps.length} applications
                </li>
                <li>
                  <CheckCircleIcon width={15} height={15} />
                  Android 4.4+
                </li>
                <li>
                  <CheckCircleIcon width={15} height={15} />
                  APK direct
                </li>
              </ul>
            </div>

            <aside
              className="product-card store-panel"
              aria-label="Catalogue Buffalo Store"
            >
              <div className="product-topline">
                <span>Buffalo Store / Catalogue</span>
                <span className="availability">
                  <span className="status-dot" />
                  {apps.length} disponibles
                </span>
              </div>

              <div className="product-body">
                <div className="store-panel-heading">
                  <span className="app-publisher">Le catalogue</span>
                  <h2>Choisissez votre app.</h2>
                  <p>Quatre applis Android. Téléchargement direct.</p>
                </div>

                <ul className="store-list">
                  {apps.map((app) => (
                    <li key={app.slug}>
                      <a className="store-item" href={`#${app.slug}`}>
                        <span className="store-item-icon">
                          <Image
                            src={app.icon}
                            alt=""
                            width={44}
                            height={44}
                          />
                        </span>
                        <span className="store-item-copy">
                          <span className="store-item-name">
                            {app.name}
                            {app.badge && (
                              <span className="store-item-badge">
                                {app.badge}
                              </span>
                            )}
                          </span>
                          <span>
                            {app.category} · {app.size} · Android{" "}
                            {app.minAndroid}+
                          </span>
                        </span>
                        <span className="store-item-action">
                          <ArrowRight width={16} height={16} />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="qr-row store-qr-row">
                  <QrCode
                    path="/"
                    label="QR code pour ouvrir Buffalo Store"
                  />
                  <div className="qr-copy">
                    <strong>Ouvrez le store sur mobile.</strong>
                    <p>Scannez le code avec l&apos;appareil photo.</p>
                    <CopyPageLink />
                  </div>
                </div>

                <p className="product-note">
                  <ShieldCheckIcon width={15} height={15} />
                  APK directs, hébergés par {store.name}.
                </p>
              </div>
            </aside>
          </div>

          <div className="container hero-strip">
            <div>
              <span>Applications</span>
              <strong>{apps.length}</strong>
            </div>
            <div>
              <span>Plateforme</span>
              <strong>Android</strong>
            </div>
            <div>
              <span>Compatibilité</span>
              <strong>4.4+</strong>
            </div>
            <div>
              <span>Distribution</span>
              <strong>APK direct</strong>
            </div>
          </div>
        </section>

        <section className="section apps-section" id="apps">
          <div className="container">
            <div className="section-intro">
              <span className="kicker">01 — Catalogue</span>
              <div className="section-intro-grid">
                <h2>
                  Quatre applis.
                  <br />
                  Un même standard.
                </h2>
                <p>
                  Des outils Android sélectionnés pour être utiles, légers et
                  faciles à installer. Chaque fiche donne la version, la
                  compatibilité et l&apos;empreinte du fichier.
                </p>
              </div>
            </div>

            <div className="app-grid">
              {apps.map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>

            <div className="catalog-footnote">
              <span>
                <span className="status-dot" />
                Catalogue mis à jour le 20 novembre 2026.
              </span>
              <span>Android uniquement · Téléchargement direct</span>
            </div>
          </div>
        </section>

        <section className="section install-section" id="installation">
          <div className="container install-grid">
            <div className="install-copy">
              <span className="kicker kicker-light">02 — Installation</span>
              <h2>
                Trois étapes.
                <br />
                Une minute.
              </h2>
              <p>
                Choisissez votre application, téléchargez l&apos;APK et
                laissez Android vous guider. Aucun compte Buffalo Store n&apos;est
                nécessaire.
              </p>
              <a
                className="button button-inverted button-large"
                href="#apps"
              >
                Choisir une application
                <ArrowUpRight width={17} height={17} />
              </a>
            </div>

            <ol className="steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <h3>Choisissez votre application.</h3>
                  <p>
                    Printer Test pour le Bluetooth, ALOT pour la loterie et les
                    services, ALOT Test et ALOT Model V2 pour valider les builds
                    de test. Vérifiez la compatibilité Android dans chaque
                    fiche.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <h3>Téléchargez l&apos;APK.</h3>
                  <p>
                    Le fichier se télécharge directement depuis cette page.
                    Gardez-le dans vos téléchargements.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <h3>Autorisez et installez.</h3>
                  <p>
                    Si Android bloque l&apos;installation, autorisez votre
                    navigateur à installer des applications, puis confirmez.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="container install-notice">
            <ShieldCheckIcon width={20} height={20} />
            <p>
              <strong>Android uniquement.</strong> Un APK ne s&apos;installe pas
              sur iPhone ou iPad. Apple exige une version signée et distribuée
              via l&apos;App Store ou TestFlight.
            </p>
          </div>
        </section>

        <section className="section details-section" id="details">
          <div className="container details-grid">
            <div className="details-intro">
              <span className="kicker">03 — Détails</span>
              <h2>
                Android,
                <br />
                point final.
              </h2>
              <p>
                Les quatre applications sont distribuées en APK. Pas de compte
                Buffalo Store, pas de redirection.
              </p>

              <div className="compatibility">
                <div className="compat-item">
                  <div className="compat-icon">
                    <AndroidIcon width={22} height={22} />
                  </div>
                  <div>
                    <strong>Android</strong>
                    <span>4.4 et plus récent selon l&apos;app</span>
                  </div>
                  <span className="compat-status compat-yes">
                    <CheckCircleIcon width={19} height={19} />
                  </span>
                </div>
                <div className="compat-item compat-item-no">
                  <div className="compat-icon">
                    <PhoneIcon width={22} height={22} />
                  </div>
                  <div>
                    <strong>iPhone / iPad</strong>
                    <span>Non compatible avec un APK</span>
                  </div>
                  <span className="compat-status compat-no">
                    <CloseIcon width={18} height={18} />
                  </span>
                </div>
              </div>
            </div>

            <div className="details-panel catalog-panel">
              <div className="catalog-table">
                <div className="catalog-table-head">
                  <span>Application</span>
                  <span>Version</span>
                  <span>Android</span>
                  <span>Taille</span>
                  <span aria-hidden="true" />
                </div>

                {apps.map((app) => (
                  <div className="catalog-table-row" key={app.slug}>
                    <div className="catalog-app-cell">
                      <Image
                        src={app.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="catalog-icon"
                      />
                      <strong>{app.name}</strong>
                    </div>
                    <span>{app.version}</span>
                    <span>{app.minAndroid}+</span>
                    <span>{app.size}</span>
                    <a
                      href={app.filePath}
                      download={app.fileName}
                      aria-label={`Télécharger ${app.name}`}
                      className="catalog-download"
                    >
                      <DownloadIcon width={16} height={16} />
                    </a>
                  </div>
                ))}
              </div>

              <div className="security-note">
                <ShieldCheckIcon width={20} height={20} />
                <div>
                  <strong>Intégrité vérifiable.</strong>
                  <p>
                    Chaque fiche contient l&apos;empreinte SHA-256 du fichier.
                    Comparez-la après téléchargement si vous le souhaitez.
                  </p>
                </div>
              </div>

              <div className="catalog-footer">
                <span>
                  <ClockIcon width={15} height={15} />
                  Dernière mise à jour : 20 novembre 2026
                </span>
                <a className="text-link" href="#faq">
                  Questions fréquentes
                  <ArrowUpRight width={14} height={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <span className="kicker">04 — FAQ</span>
              <h2>Bon à savoir.</h2>
              <p>
                Les réponses aux questions qu&apos;on nous pose avant une
                installation Android.
              </p>
              <a className="text-link" href="#apps">
                Voir les applications
                <ArrowUpRight width={15} height={15} />
              </a>
            </div>

            <div className="faq-list">
              <details>
                <summary>
                  Comment installer une application sur Android ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Téléchargez l&apos;APK depuis la fiche de l&apos;application,
                    puis ouvrez-le depuis la notification ou l&apos;application
                    Fichiers de votre téléphone. Si Android le demande,
                    autorisez votre navigateur à installer des applications,
                    puis confirmez l&apos;installation.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  Les applications fonctionnent-elles sur iPhone ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Non. Les quatre applications sont des APK Android et ne
                    peuvent pas être installées sur iOS. Une version iPhone
                    nécessiterait une signature Apple et une distribution via
                    l&apos;App Store ou TestFlight.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  Pourquoi Android affiche-t-il un avertissement ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Parce que les applications sont distribuées hors du Play
                    Store. Android peut signaler une source inconnue et Play
                    Protect peut demander une confirmation. Ne poursuivez que si
                    vous avez téléchargé le fichier depuis cette page et que
                    vous faites confiance à {store.name}.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  Quels appareils sont compatibles ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Printer Test nécessite Android 5.1 ou plus récent. ALOT,
                    ALOT Test et ALOT Model V2 nécessitent Android 4.4 ou plus
                    récent. Un appareil équipé du Bluetooth est nécessaire pour
                    Printer Test ; ALOT peut demander l&apos;appareil photo, la
                    localisation ou le stockage selon les services utilisés.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  ALOT est-elle accessible à tous ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    ALOT est une application professionnelle destinée aux agents
                    et opérateurs de loterie. L&apos;accès aux services peut
                    dépendre de votre opérateur. Buffalo Store ne gère ni les
                    comptes ni les transactions.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  Comment mettre à jour ou désinstaller une application ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Pour mettre à jour, téléchargez la dernière version depuis
                    cette page et installez-la par-dessus l&apos;actuelle. Pour
                    désinstaller, maintenez l&apos;icône de l&apos;application
                    enfoncée, puis choisissez « Désinstaller ».
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="Buffalo Store, accueil">
              <BrandMark />
            </a>
            <p>{store.tagline}</p>
          </div>

          <div className="footer-links">
            <div>
              <span>Navigation</span>
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div>
              <span>Applications</span>
              {apps.map((app) => (
                <a key={app.slug} href={app.filePath} download={app.fileName}>
                  {app.name} · APK
                </a>
              ))}
              <a href="#details">Détails techniques</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 {store.name}. Tous droits réservés.</p>
          <p>
            Android est une marque de Google LLC. {store.name} n&apos;y est pas
            affilié.
          </p>
        </div>
      </footer>

      <MobileDownloadBar />
    </>
  );
}
