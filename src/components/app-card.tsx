import type { CSSProperties } from "react";
import Image from "next/image";
import type { StoreApp } from "@/lib/apps";
import {
  ArrowDown,
  ChevronDownIcon,
  DownloadIcon,
  InfoIcon,
} from "@/components/icons";

export function AppCard({ app }: { app: StoreApp }) {
  return (
    <article
      id={app.slug}
      className="app-card"
      style={{ "--app-accent": app.accent } as CSSProperties}
    >
      <div className="app-card-topline">
        <span>Application / {app.category}</span>
        <span className="availability">
          <span className="status-dot" />
          Disponible
        </span>
      </div>

      <div className="app-card-body">
        <div className="app-card-heading">
          <div className="app-icon-wrap app-icon-large">
            <Image
              src={app.icon}
              alt={`Icône de l'application ${app.name}`}
              width={64}
              height={64}
              className="app-icon"
            />
          </div>
          <div className="app-card-title">
            <span className="app-publisher">{app.developer}</span>
            <div className="app-name-row">
              <h3>{app.name}</h3>
              {app.badge && <span className="app-badge">{app.badge}</span>}
            </div>
            <p>{app.category} · Android</p>
          </div>
        </div>

        <p className="app-card-tagline">{app.tagline}</p>
        <p className="app-card-description">{app.description}</p>

        {app.note && (
          <p className="app-note">
            <InfoIcon width={14} height={14} />
            {app.note}
          </p>
        )}

        <dl className="product-meta app-meta">
          <div>
            <dt>Version</dt>
            <dd>{app.version}</dd>
          </div>
          <div>
            <dt>Taille</dt>
            <dd>{app.size}</dd>
          </div>
          <div>
            <dt>Android</dt>
            <dd>{app.minAndroid}+</dd>
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

        <details className="app-more">
          <summary>
            Détails techniques
            <ChevronDownIcon width={16} height={16} />
          </summary>
          <div className="app-more-body">
            <dl>
              <div>
                <dt>Fichier</dt>
                <dd>{app.fileName}</dd>
              </div>
              <div>
                <dt>Android minimum</dt>
                <dd>
                  Android {app.minAndroid} · API {app.minSdk}
                </dd>
              </div>
              <div>
                <dt>Permissions</dt>
                <dd>{app.permissions.join(" · ")}</dd>
              </div>
            </dl>

            <div className="app-hash">
              <span>SHA-256</span>
              <code>{app.sha256}</code>
            </div>

            <a className="text-link" href={`${app.filePath}.sha256`}>
              Télécharger l&apos;empreinte
              <ArrowDown width={14} height={14} />
            </a>
          </div>
        </details>
      </div>
    </article>
  );
}
