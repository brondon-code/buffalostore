import Image from "next/image";
import { BrandMark } from "@/components/logo";
import {
  AndroidIcon,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BluetoothIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  CloseIcon,
  DownloadIcon,
  FeatherIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { CopyPageLink, QrDownload } from "@/components/qr-download";
import { MobileDownloadBar } from "@/components/mobile-download-bar";
import {
  getSiteUrl,
  navigation,
  printerTest as app,
  store,
} from "@/lib/apps";

const siteUrl = getSiteUrl();

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: app.name,
  operatingSystem: `Android ${app.minAndroid}+`,
  applicationCategory: "UtilitiesApplication",
  softwareVersion: app.version,
  fileSize: `${app.sizeBytes} bytes`,
  datePublished: app.releaseDateISO,
  downloadUrl: `${siteUrl}${app.filePath}`,
  installUrl: `${siteUrl}/#installation`,
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
              href={app.filePath}
              download={app.fileName}
            >
              Obtenir l&apos;APK
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
                <span className="eyebrow-badge">Nouveau</span>
                <span className="eyebrow-divider" aria-hidden="true" />
                Application Android
              </p>

              <h1>
                Printer Test<span className="title-dot">.</span>
              </h1>

              <p className="hero-tagline">{app.tagline}</p>

              <p className="hero-description">{app.description}</p>

              <div className="hero-actions">
                <a
                  className="button button-primary button-large"
                  href={app.filePath}
                  download={app.fileName}
                >
                  <AndroidIcon width={18} height={18} />
                  Télécharger l&apos;APK
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
                  Android {app.minAndroid}+
                </li>
                <li>
                  <CheckCircleIcon width={15} height={15} />
                  {app.size}
                </li>
                <li>
                  <CheckCircleIcon width={15} height={15} />
                  Version {app.version}
                </li>
              </ul>
            </div>

            <aside className="product-card" aria-label="Fiche de l'application">
              <div className="product-topline">
                <span>Application / {app.category}</span>
                <span className="availability">
                  <span className="status-dot" />
                  Disponible
                </span>
              </div>

              <div className="product-body">
                <div className="app-heading">
                  <div className="app-icon-wrap">
                    <Image
                      src={app.icon}
                      alt="Icône de l'application Printer Test"
                      width={64}
                      height={64}
                      className="app-icon"
                      priority
                    />
                  </div>
                  <div className="app-heading-copy">
                    <span className="app-publisher">{app.developer}</span>
                    <h2>{app.name}</h2>
                    <p>
                      {app.category} · Android
                    </p>
                  </div>
                </div>

                <p className="product-copy">
                  Testez une imprimante Bluetooth, vérifiez la connexion et
                  passez à la suite.
                </p>

                <dl className="product-meta">
                  <div>
                    <dt>Version</dt>
                    <dd>{app.version}</dd>
                  </div>
                  <div>
                    <dt>Fichier</dt>
                    <dd>APK</dd>
                  </div>
                  <div>
                    <dt>Taille</dt>
                    <dd>{app.size}</dd>
                  </div>
                </dl>

                <a
                  className="button button-primary button-block"
                  href={app.filePath}
                  download={app.fileName}
                >
                  <DownloadIcon width={18} height={18} />
                  Télécharger l&apos;APK
                  <span className="button-size">{app.size}</span>
                </a>

                <div className="qr-row">
                  <QrDownload filePath={app.filePath} />
                  <div className="qr-copy">
                    <strong>Scannez pour installer.</strong>
                    <p>Ouvrez l&apos;appareil photo d&apos;un téléphone Android.</p>
                    <CopyPageLink />
                  </div>
                </div>

                <p className="product-note">
                  <ShieldCheckIcon width={15} height={15} />
                  APK distribué directement par {store.name}.
                </p>
              </div>
            </aside>
          </div>

          <div className="container hero-strip">
            <div>
              <span>Plateforme</span>
              <strong>Android</strong>
            </div>
            <div>
              <span>Compatibilité</span>
              <strong>{app.minAndroid}+</strong>
            </div>
            <div>
              <span>Fichier</span>
              <strong>{app.size}</strong>
            </div>
            <div>
              <span>Version</span>
              <strong>{app.version}</strong>
            </div>
          </div>
        </section>

        <section className="section features" id="application">
          <div className="container">
            <div className="section-intro">
              <span className="kicker">01 — L&apos;application</span>
              <div className="section-intro-grid">
                <h2>
                  Droit au but.
                  <br />
                  Comme votre imprimante.
                </h2>
                <p>
                  Printer Test reste volontairement simple : une app Android
                  légère, pensée pour tester une imprimante Bluetooth sans
                  détour ni compte à créer.
                </p>
              </div>
            </div>

            <div className="feature-grid">
              <article className="feature-card feature-wide">
                <div className="feature-copy">
                  <div className="feature-icon">
                    <BluetoothIcon width={20} height={20} />
                  </div>
                  <h3>Le Bluetooth, sans détour.</h3>
                  <p>
                    Lancez l&apos;application, autorisez le Bluetooth et testez
                    votre imprimante. C&apos;est tout ce qu&apos;il faut.
                  </p>
                </div>

                <div className="signal-visual" aria-hidden="true">
                  <span className="signal-ring signal-ring-1" />
                  <span className="signal-ring signal-ring-2" />
                  <span className="signal-ring signal-ring-3" />
                  <span className="signal-core">
                    <BluetoothIcon width={23} height={23} />
                  </span>
                  <span className="signal-dot signal-dot-a" />
                  <span className="signal-dot signal-dot-b" />
                  <span className="signal-dot signal-dot-c" />
                </div>
              </article>

              <article className="feature-card feature-stat">
                <div className="feature-icon">
                  <FeatherIcon width={20} height={20} />
                </div>
                <div className="big-stat">
                  3,8<span>Mo</span>
                </div>
                <p>Un APK léger, qui laisse de la place à vos fichiers.</p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">
                  <AndroidIcon width={20} height={20} />
                </div>
                <h3>Android {app.minAndroid}+</h3>
                <p>
                  Compatible avec les téléphones et tablettes Android équipés
                  Bluetooth.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-icon">
                  <DownloadIcon width={20} height={20} />
                </div>
                <h3>Direct, vraiment.</h3>
                <p>
                  Le fichier est servi par {store.name}. Pas de redirection, pas
                  de place de marché.
                </p>
              </article>
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
                Le téléchargement est direct. Android vous demandera peut-être
                d&apos;autoriser votre navigateur à installer des applications.
              </p>
              <a
                className="button button-inverted button-large"
                href={app.filePath}
                download={app.fileName}
              >
                <DownloadIcon width={18} height={18} />
                Télécharger · {app.size}
              </a>
            </div>

            <ol className="steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <h3>Téléchargez l&apos;APK.</h3>
                  <p>
                    Le fichier de {app.size} se télécharge depuis cette page.
                    Gardez-le dans vos téléchargements.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <h3>Autorisez votre navigateur.</h3>
                  <p>
                    Si Android bloque l&apos;installation, autorisez votre
                    navigateur à installer des applications inconnues, puis
                    relancez le fichier.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <h3>Installez et ouvrez.</h3>
                  <p>
                    Confirmez l&apos;installation, ouvrez Printer Test, puis
                    autorisez l&apos;accès au Bluetooth.
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
                Les faits,
                <br />
                sans fioritures.
              </h2>
              <p>Tout ce qu&apos;il faut savoir avant d&apos;installer.</p>

              <div className="compatibility">
                <div className="compat-item">
                  <div className="compat-icon">
                    <AndroidIcon width={22} height={22} />
                  </div>
                  <div>
                    <strong>Android</strong>
                    <span>{app.minAndroid} et plus récent</span>
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

            <div className="details-panel">
              <dl className="spec-list">
                <div>
                  <dt>Application</dt>
                  <dd>{app.name}</dd>
                </div>
                <div>
                  <dt>Version</dt>
                  <dd>{app.version}</dd>
                </div>
                <div>
                  <dt>Fichier</dt>
                  <dd>
                    {app.fileName}
                    <span>{app.size}</span>
                  </dd>
                </div>
                <div>
                  <dt>Publié le</dt>
                  <dd>{app.releaseDate}</dd>
                </div>
                <div>
                  <dt>Android minimum</dt>
                  <dd>
                    Android {app.minAndroid} <span>API {app.minSdk}</span>
                  </dd>
                </div>
                <div>
                  <dt>Version cible</dt>
                  <dd>
                    Android {app.targetAndroid} <span>API {app.targetSdk}</span>
                  </dd>
                </div>
              </dl>

              <details className="hash-details">
                <summary>
                  Empreinte SHA-256
                  <ChevronDownIcon width={16} height={16} />
                </summary>
                <p>Pour vérifier l&apos;intégrité du fichier téléchargé.</p>
                <code>{app.sha256}</code>
              </details>

              <div className="details-download">
                <span>
                  <ClockIcon width={16} height={16} />
                  Dernière version disponible
                </span>
                <a
                  className="button button-secondary button-small"
                  href={app.filePath}
                  download={app.fileName}
                >
                  Télécharger
                  <ArrowDown width={15} height={15} />
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
              <a
                className="text-link"
                href={app.filePath}
                download={app.fileName}
              >
                Télécharger l&apos;APK
                <ArrowUpRight width={15} height={15} />
              </a>
            </div>

            <div className="faq-list">
              <details>
                <summary>
                  Comment installer l&apos;application sur Android ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Téléchargez l&apos;APK, puis ouvrez-le depuis la
                    notification ou l&apos;application Fichiers de votre
                    téléphone. Si Android le demande, autorisez votre navigateur
                    à installer des applications, puis confirmez
                    l&apos;installation.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  L&apos;application fonctionne-t-elle sur iPhone ?
                  <span className="faq-plus" aria-hidden="true" />
                </summary>
                <div className="faq-answer">
                  <p>
                    Non. Cette version est un APK Android : elle ne peut pas être
                    installée sur iOS. Une version iPhone nécessiterait une
                    signature Apple et une distribution via l&apos;App Store ou
                    TestFlight.
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
                    Parce que l&apos;application est distribuée hors du Play
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
                    Tout téléphone ou tablette sous Android {app.minAndroid} ou
                    plus récent, équipé Bluetooth. Votre imprimante doit
                    également prendre en charge la connexion Bluetooth avec
                    l&apos;appareil.
                  </p>
                </div>
              </details>

              <details>
                <summary>
                  Comment mettre à jour ou désinstaller l&apos;app ?
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
              <span>Application</span>
              <a href={app.filePath} download={app.fileName}>
                Printer Test · APK
              </a>
              <a href="#details">Détails techniques</a>
              <a href={app.filePath + ".sha256"}>Empreinte SHA-256</a>
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
