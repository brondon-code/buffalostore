"use client";

import { QRCodeSVG } from "qrcode.react";
import { useEffect, useRef, useState } from "react";
import { CheckIcon, LinkIcon } from "@/components/icons";

export function QrDownload({
  filePath,
  size = 96,
}: {
  filePath: string;
  size?: number;
}) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
      window.location.origin;
    setUrl(`${base}${filePath}`);
  }, [filePath]);

  return (
    <div className="qr-code" aria-label="QR code de téléchargement de l'APK">
      {url ? (
        <QRCodeSVG
          value={url}
          size={size}
          bgColor="#ffffff"
          fgColor="#0a0a0a"
          level="M"
          marginSize={0}
        />
      ) : (
        <span className="qr-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}

export function CopyPageLink() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copyLink() {
    const url = window.location.href.split("#")[0];

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className="text-button"
      onClick={copyLink}
      aria-live="polite"
    >
      {copied ? (
        <CheckIcon width={15} height={15} />
      ) : (
        <LinkIcon width={15} height={15} />
      )}
      {copied ? "Lien copié" : "Copier le lien"}
    </button>
  );
}
