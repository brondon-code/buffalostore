import Image from "next/image";
import { printerTest } from "@/lib/apps";
import { ArrowDown } from "@/components/icons";

export function MobileDownloadBar() {
  return (
    <div className="mobile-download-bar">
      <div className="mobile-app">
        <Image
          src={printerTest.icon}
          alt=""
          width={32}
          height={32}
          className="mobile-app-icon"
        />
        <div className="mobile-app-copy">
          <strong>{printerTest.name}</strong>
          <span>
            APK · {printerTest.size} · Android {printerTest.minAndroid}+
          </span>
        </div>
      </div>
      <a
        className="button button-primary button-small"
        href={printerTest.filePath}
        download={printerTest.fileName}
      >
        Télécharger
        <ArrowDown width={15} height={15} />
      </a>
    </div>
  );
}
