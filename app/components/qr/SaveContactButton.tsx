"use client";

import styles from "@/app/qr/qr.module.css";

interface SaveContactButtonProps {
  name: string;
  organization: string;
  phone?: string | null;
  email?: string | null;
  url?: string | null;
}

function escapeVCardValue(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

export default function SaveContactButton({
  name,
  organization,
  phone,
  email,
  url,
}: SaveContactButtonProps) {
  function handleSave() {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${escapeVCardValue(name)}`,
      `ORG:${escapeVCardValue(organization)}`,

      phone
        ? `TEL;TYPE=CELL:${escapeVCardValue(phone)}`
        : "",

      email
        ? `EMAIL:${escapeVCardValue(email)}`
        : "",

      url
        ? `URL:${escapeVCardValue(url)}`
        : "",

      "NOTE:Created via Unicorn Nexus 360",
      "END:VCARD",
    ].filter(Boolean);

    const blob = new Blob(
      [lines.join("\r\n")],
      {
        type: "text/vcard;charset=utf-8",
      }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = `${name}.vcf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);
  }

  return (
    <button
      className={styles.saveButton}
      onClick={handleSave}
      type="button"
    >
      Save Contact
    </button>
  );
}