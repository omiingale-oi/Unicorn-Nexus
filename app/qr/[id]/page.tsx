import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { supabase, type QrCard } from "@/lib/supabase";
import SaveContactButton from "@/app/components/qr/SaveContactButton";

import styles from "@/app/qr/qr.module.css";

interface QrMiniPageProps {
  params: Promise<{ id: string }>;
}

async function getCard(id: string): Promise<QrCard | null> {
  const { data, error } = await supabase
    .from("qr_cards")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return data as QrCard;
}

export async function generateMetadata({
  params,
}: QrMiniPageProps): Promise<Metadata> {
  const { id } = await params;
  const card = await getCard(id);

  if (!card) {
    return {
      title: "Not Found",
    };
  }

  if (!card.is_active) {
    return {
      title: "QR Code Expired",
    };
  }

  return {
    title: card.business_name,
    description: card.description || undefined,
  };
}

function getInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return "?";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return (
    parts[0][0] +
    parts[1][0]
  ).toUpperCase();
}

function toWhatsAppLink(phone: string): string {
  const digitsOnly = phone.replace(/[^\d]/g, "");

  return `https://wa.me/${digitsOnly}`;
}

export default async function QrMiniPage({
  params,
}: QrMiniPageProps) {
  const { id } = await params;

  const card = await getCard(id);

  if (!card) {
    notFound();
  }

  if (!card.is_active) {
    return (
      <main className={styles.miniSite}>
        <div className={styles.miniWrapper}>
          <div
            className={styles.miniBody}
            style={{
              paddingTop: 60,
            }}
          >
            <div
              className={styles.miniAvatarWrap}
              style={{
                marginTop: 0,
              }}
            >
              <div className={styles.miniAvatar}>
                !
              </div>
            </div>

            <h1 className={styles.miniName2}>
              This QR Code Has Expired
            </h1>

            <p className={styles.miniDescription2}>
              A newer QR code has been generated
              for {card.business_name}. Please ask
              them for the updated one.
            </p>

            <div className={styles.expiredActions}>
              <Link
                href="/qr-generator"
                className={styles.expiredPrimaryButton}
              >
                Generate a New QR Code
              </Link>

              <Link
                href="/"
                className={styles.expiredSecondaryButton}
              >
                Back to Home
              </Link>
            </div>

            <p className={styles.poweredBy}>
              Powered by Unicorn Nexus 360
            </p>
          </div>
        </div>
      </main>
    );
  }

  // Increase scan count.
  supabase
    .from("qr_cards")
    .update({
      scan_count: card.scan_count + 1,
    })
    .eq("id", id)
    .then(() => {});

  return (
    <main className={styles.miniSite}>
      <div className={styles.miniWrapper}>

        <div className={styles.miniCover} />

        <div className={styles.miniAvatarWrap}>
          <div className={styles.miniAvatar}>
            {getInitials(card.business_name)}
          </div>
        </div>

        <div className={styles.miniBody}>

          <h1 className={styles.miniName2}>
            {card.business_name}
          </h1>

          {card.description && (
            <p className={styles.miniDescription2}>
              {card.description}
            </p>
          )}

          {/* ACTION BUTTONS */}

          <div className={styles.miniActions}>

            {card.phone && (
              <a
                className={styles.miniActionBtn}
                href={`tel:${card.phone}`}
              >
                <span className={styles.miniActionIcon}>
                  📞
                </span>
                Call
              </a>
            )}

            {card.phone && (
              <a
                className={styles.miniActionBtn}
                href={toWhatsAppLink(card.phone)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.miniActionIcon}>
                  💬
                </span>
                WhatsApp
              </a>
            )}

            {card.email && (
              <a
                className={styles.miniActionBtn}
                href={`mailto:${card.email}`}
              >
                <span className={styles.miniActionIcon}>
                  ✉️
                </span>
                Email
              </a>
            )}

            {/* WEBSITE ONLY IF PROVIDED */}

            {card.website_url && (
              <a
                className={styles.miniActionBtn}
                href={card.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.miniActionIcon}>
                  🌐
                </span>
                Website
              </a>
            )}

          </div>

          {/* DETAILS */}

          <div className={styles.miniDetailsCard}>

            {card.website_url && (
              <div className={styles.miniDetailRow}>
                <span>Website</span>

                <a
                  href={card.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site ↗
                </a>
              </div>
            )}

            {card.phone && (
              <div className={styles.miniDetailRow}>
                <span>Phone</span>

                <a href={`tel:${card.phone}`}>
                  {card.phone}
                </a>
              </div>
            )}

            {card.email && (
              <div className={styles.miniDetailRow}>
                <span>Email</span>

                <a href={`mailto:${card.email}`}>
                  {card.email}
                </a>
              </div>
            )}

          </div>

          {/* SOCIAL MEDIA */}

          {(card.instagram || card.facebook) && (
            <div className={styles.miniSocialRow}>

              {card.instagram && (
                <a
                  className={styles.miniSocialBtn}
                  href={card.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  📸
                </a>
              )}

              {card.facebook && (
                <a
                  className={styles.miniSocialBtn}
                  href={card.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  📘
                </a>
              )}

            </div>
          )}

          {/* SAVE CONTACT */}

          <SaveContactButton
            name={
              card.contact_name ||
              card.business_name
            }
            organization={card.business_name}
            phone={card.phone}
            email={card.email}
            url={card.website_url}
          />

          <p className={styles.poweredBy}>
            Powered by Unicorn Nexus 360
          </p>

        </div>
      </div>
    </main>
  );
}