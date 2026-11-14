import { BuffaloMark } from "@/components/logo";
import { apps } from "@/lib/apps";
import { ArrowDown } from "@/components/icons";

export function MobileDownloadBar() {
  return (
    <div className="mobile-download-bar">
      <div className="mobile-app">
        <BuffaloMark size={30} />
        <div className="mobile-app-copy">
          <strong>Buffalo Store</strong>
          <span>
            {apps.length} applications · APK direct
          </span>
        </div>
      </div>
      <a
        className="button button-primary button-small"
        href="#apps"
      >
        Voir les apps
        <ArrowDown width={15} height={15} />
      </a>
    </div>
  );
}
