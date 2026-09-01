"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { renderQrWithLogo } from "@/lib/renderqrwithlogo";
import styles from "@/app/qr/qr.module.css";

interface QrCard {
  id: string;
  business_name: string;
  website_url: string | null;
  contact_name: string | null;
  phone: string | null;
  email: string | null;
  description: string | null;
  instagram: string | null;
  facebook: string | null;
  linkedin: string | null;
  youtube: string | null;
  location: string | null;
  scan_count: number;
  is_active: boolean;
  created_at: string;
  user_id: string | null;
}

interface FormState {
  business_name: string;
  website_url: string;
  contact_name: string;
  phone: string;
  email: string;
  description: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  location: string;
}

const emptyForm: FormState = {
  business_name: "",
  website_url: "",
  contact_name: "",
  phone: "",
  email: "",
  description: "",
  instagram: "",
  facebook: "",
  linkedin: "",
  youtube: "",
  location: "",
};

export default function QrGeneratorPage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [user, setUser] = useState<{
    id: string;
    email?: string;
  } | null>(null);

  const [authLoading, setAuthLoading] = useState(true);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [existingCard, setExistingCard] = useState<QrCard | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);

  /*
   * =========================================================
   * LOAD USER + EXISTING QR
   * =========================================================
   */

  useEffect(() => {
    let mounted = true;

    async function initialise() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      if (!session?.user) {
        setUser(null);
        setAuthLoading(false);
        return;
      }

      const currentUser = {
        id: session.user.id,
        email: session.user.email || "",
      };

      setUser(currentUser);

      const email =
        session.user.email?.trim().toLowerCase() || "";

      setForm((current) => ({
        ...current,
        email,
      }));

      await loadExistingCard(
        session.user.id,
        email
      );

      if (mounted) {
        setAuthLoading(false);
      }
    }

    initialise();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!mounted) return;

        if (!session?.user) {
          setUser(null);
          setExistingCard(null);
          setForm(emptyForm);
          setAuthLoading(false);
          return;
        }

        const currentUser = {
          id: session.user.id,
          email: session.user.email || "",
        };

        setUser(currentUser);

        const email =
          session.user.email?.trim().toLowerCase() || "";

        setForm((current) => ({
          ...current,
          email,
        }));

        await loadExistingCard(
          session.user.id,
          email
        );

        if (mounted) {
          setAuthLoading(false);
        }
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  /*
   * =========================================================
   * FIND EXISTING QR
   * =========================================================
   */

  async function loadExistingCard(
    userId: string,
    email: string
  ) {
    setError(null);

    /*
     * First try Google/Supabase user ID.
     */

    const { data: byUser, error: userError } =
      await supabase
        .from("qr_cards")
        .select("*")
        .eq("user_id", userId)
        .eq("is_active", true)
        .limit(1)
        .maybeSingle();

    if (userError) {
      console.error("User QR lookup:", userError);
    }

    if (byUser) {
      applyExistingCard(byUser);
      return;
    }

    /*
     * If there is an older QR without user_id,
     * find it using the Google email.
     */

    if (email) {
      const { data: byEmail, error: emailError } =
        await supabase
          .from("qr_cards")
          .select("*")
          .eq("email", email)
          .eq("is_active", true)
          .limit(1)
          .maybeSingle();

      if (emailError) {
        console.error("Email QR lookup:", emailError);
      }

      if (byEmail) {
        /*
         * Attach old QR to current Google account.
         * The ID does NOT change.
         */

        const { data: attachedCard, error: attachError } =
          await supabase
            .from("qr_cards")
            .update({
              user_id: userId,
            })
            .eq("id", byEmail.id)
            .select("*")
            .single();

        if (attachError) {
          console.error("Attach QR:", attachError);
          applyExistingCard(byEmail);
        } else {
          applyExistingCard(attachedCard);
        }

        return;
      }
    }

    /*
     * No QR yet.
     */

    setExistingCard(null);
  }

  /*
   * =========================================================
   * APPLY EXISTING CARD
   * =========================================================
   */

  function applyExistingCard(card: QrCard) {
    setExistingCard(card);

    setForm({
      business_name: card.business_name || "",
      website_url: card.website_url || "",
      contact_name: card.contact_name || "",
      phone: card.phone || "",
      email: card.email || "",
      description: card.description || "",
      instagram: card.instagram || "",
      facebook: card.facebook || "",
      linkedin: card.linkedin || "",
      youtube: card.youtube || "",
      location: card.location || "",
    });

    requestAnimationFrame(() => {
      drawQr(card.id);
    });
  }

  /*
   * =========================================================
   * GOOGLE SIGN IN
   * =========================================================
   */

  async function handleGoogleSignIn() {
    setError(null);

    const redirectTo =
      `${window.location.origin}/qr-generator`;

    const { error: signInError } =
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
        },
      });

    if (signInError) {
      console.error(signInError);

      setError(
        "Unable to sign in with Google. Please try again."
      );
    }
  }

  /*
   * =========================================================
   * SIGN OUT
   * =========================================================
   */

  async function handleSignOut() {
    await supabase.auth.signOut();

    setUser(null);
    setExistingCard(null);
    setForm(emptyForm);
    setEditing(false);
    setError(null);

    router.refresh();
  }

  /*
   * =========================================================
   * FORM UPDATE
   * =========================================================
   */

  function updateField(
    field: keyof FormState,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  /*
   * =========================================================
   * VALIDATION
   * =========================================================
   */

  function validateForm(): string | null {
    if (!form.business_name.trim()) {
      return "Business name is required.";
    }

    if (!form.contact_name.trim()) {
      return "Contact name is required.";
    }

    if (!form.phone.trim()) {
      return "Phone number is required.";
    }

    if (!user?.email?.trim()) {
      return "Google account email is missing.";
    }

    return null;
  }

  /*
   * =========================================================
   * DRAW QR
   * =========================================================
   */

  function drawQr(id: string) {
    requestAnimationFrame(() => {
      if (!canvasRef.current) return;

      const miniSiteUrl =
        `${window.location.origin}/qr/${id}`;

      renderQrWithLogo(
        canvasRef.current,
        miniSiteUrl
      );
    });
  }

  /*
   * =========================================================
   * SAVE / UPDATE
   * =========================================================
   */

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setError(null);

    if (!user) {
      setError(
        "Please sign in with Google first."
      );
      return;
    }

    const validationError =
      validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const userEmail =
        user.email?.trim().toLowerCase();

      if (!userEmail) {
        setError(
          "Your Google account email could not be found."
        );
        setLoading(false);
        return;
      }

      /*
       * IMPORTANT:
       *
       * Website is optional.
       * Email always comes from Google.
       * The QR ID is NEVER regenerated when editing.
       */

      const payload = {
        user_id: user.id,
        business_name: form.business_name.trim(),
        website_url:
          form.website_url.trim() || null,
        contact_name:
          form.contact_name.trim(),
        phone:
          form.phone.trim(),
        email: userEmail,
        description:
          form.description.trim() || null,
        instagram:
          form.instagram.trim() || null,
        facebook:
          form.facebook.trim() || null,
        linkedin:
          form.linkedin.trim() || null,
        youtube:
          form.youtube.trim() || null,
        location:
          form.location.trim() || null,
        is_active: true,
      };

      /*
       * =====================================================
       * EXISTING QR → UPDATE SAME ROW
       * =====================================================
       */

      if (existingCard) {
        const {
          data,
          error: updateError,
        } = await supabase
          .from("qr_cards")
          .update(payload)
          .eq("id", existingCard.id)
          .eq("user_id", user.id)
          .select("*")
          .single();

        if (updateError) {
          console.error(updateError);

          setError(
            `Unable to update your QR code: ${updateError.message}`
          );

          setLoading(false);
          return;
        }

        /*
         * SAME ID.
         * Therefore SAME QR.
         */

        setExistingCard(data);
        setEditing(false);

        setForm({
          business_name:
            data.business_name || "",
          website_url:
            data.website_url || "",
          contact_name:
            data.contact_name || "",
          phone:
            data.phone || "",
          email:
            userEmail,
          description:
            data.description || "",
          instagram:
            data.instagram || "",
          facebook:
            data.facebook || "",
          linkedin:
            data.linkedin || "",
          youtube:
            data.youtube || "",
          location:
            data.location || "",
        });

        setLoading(false);

        drawQr(data.id);

        return;
      }

      /*
       * =====================================================
       * SAFETY CHECK:
       * Search email one more time before INSERT.
       * =====================================================
       */

      const {
        data: emailCard,
        error: emailLookupError,
      } = await supabase
        .from("qr_cards")
        .select("*")
        .eq("email", userEmail)
        .eq("is_active", true)
        .limit(1)
        .maybeSingle();

      if (emailLookupError) {
        console.error(emailLookupError);
      }

      if (emailCard) {
        /*
         * A QR already exists for this email.
         * Never create another one.
         */

        await supabase
          .from("qr_cards")
          .update({
            user_id: user.id,
          })
          .eq("id", emailCard.id);

        applyExistingCard(emailCard);

        setLoading(false);
        return;
      }

      /*
       * =====================================================
       * FIRST QR FOR THIS GOOGLE ACCOUNT
       * =====================================================
       */

      const {
        data,
        error: insertError,
      } = await supabase
        .from("qr_cards")
        .insert([payload])
        .select("*")
        .single();

      if (insertError || !data) {
        console.error(insertError);

        /*
         * If database says duplicate email/user,
         * load the existing QR instead of creating another.
         */

        if (
          insertError?.message
            ?.toLowerCase()
            .includes("duplicate")
        ) {
          await loadExistingCard(
            user.id,
            userEmail
          );

          setLoading(false);
          return;
        }

        setError(
          insertError?.message ||
            "Unable to create your QR code."
        );

        setLoading(false);
        return;
      }

      setExistingCard(data);
      setEditing(false);
      setLoading(false);

      drawQr(data.id);
    } catch (err) {
      console.error(err);

      setError(
        "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  }

  /*
   * =========================================================
   * DOWNLOAD QR
   * =========================================================
   */

  function handleDownload() {
    if (!canvasRef.current) return;

    const link =
      document.createElement("a");

    link.download =
      `${form.business_name || "qr-code"}.png`;

    link.href =
      canvasRef.current.toDataURL(
        "image/png"
      );

    link.click();
  }

  /*
   * =========================================================
   * AUTH LOADING
   * =========================================================
   */

  if (authLoading) {
    return (
      <main className={styles.qrPage}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>
            QR CODE GENERATOR
          </div>

          <h1 className={styles.heading}>
            Loading...
          </h1>
        </div>
      </main>
    );
  }

  /*
   * =========================================================
   * NOT LOGGED IN
   * =========================================================
   */

  if (!user) {
    return (
      <main className={styles.qrPage}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>
            QR CODE GENERATOR
          </div>

          <h1 className={styles.heading}>
            Create Your{" "}
            <span>Digital Business Card.</span>
          </h1>

          <p className={styles.subtext}>
            Sign in with Google to create and manage
            your digital business card QR code.
          </p>

          {error && (
            <p className={styles.errorText}>
              {error}
            </p>
          )}

          <button
            type="button"
            className={styles.submitButton}
            onClick={handleGoogleSignIn}
          >
            Continue with Google
          </button>
        </div>
      </main>
    );
  }

  /*
   * =========================================================
   * EXISTING QR
   * =========================================================
   */

  if (existingCard && !editing) {
    return (
      <main className={styles.qrPage}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>
            YOUR DIGITAL BUSINESS CARD
          </div>

          <h1 className={styles.heading}>
            Your <span>QR Code.</span>
          </h1>

          <p className={styles.subtext}>
            Your QR code is permanently connected to
            your digital business card. You can update
            your information without changing the QR
            code.
          </p>

          <div
            style={{
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            <strong>{user.email}</strong>
          </div>

          <div className={styles.resultBox}>
            <canvas ref={canvasRef} />

            <p
              style={{
                color: "#999",
                fontSize: 13,
              }}
            >
              This QR code stays the same when you
              update your information.
            </p>

            <div className={styles.resultActions}>
              <button
                type="button"
                className={styles.downloadButton}
                onClick={handleDownload}
              >
                Download QR (PNG)
              </button>

              <a
                className={styles.viewButton}
                href={`/qr/${existingCard.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Digital Card
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                marginTop: 15,
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                className={styles.submitButton}
                onClick={() => setEditing(true)}
              >
                Edit Information
              </button>

              <button
                type="button"
                className={styles.downloadButton}
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /*
   * =========================================================
   * CREATE / EDIT FORM
   * =========================================================
   */

  return (
    <main className={styles.qrPage}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          QR CODE GENERATOR
        </div>

        <h1 className={styles.heading}>
          {existingCard
            ? "Edit Your "
            : "Create Your "}
          <span>Digital Business Card.</span>
        </h1>

        <p className={styles.subtext}>
          {existingCard
            ? "Update your information. Your existing QR code will remain unchanged."
            : "Create one permanent QR code connected to your Google account."}
        </p>

        <div
          style={{
            marginBottom: 20,
            color: "#f1d675",
            fontSize: 14,
          }}
        >
          Signed in as:{" "}
          <strong>{user.email}</strong>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="business_name">
                Business Name *
              </label>

              <input
                id="business_name"
                required
                value={form.business_name}
                onChange={(e) =>
                  updateField(
                    "business_name",
                    e.target.value
                  )
                }
                placeholder="Your Business Name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="website_url">
                Website URL
              </label>

              <input
                id="website_url"
                value={form.website_url}
                onChange={(e) =>
                  updateField(
                    "website_url",
                    e.target.value
                  )
                }
                placeholder="https://yourbusiness.com (optional)"
              />
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="contact_name">
                Contact Name *
              </label>

              <input
                id="contact_name"
                required
                value={form.contact_name}
                onChange={(e) =>
                  updateField(
                    "contact_name",
                    e.target.value
                  )
                }
                placeholder="Who should visitors save?"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">
                Phone *
              </label>

              <input
                id="phone"
                required
                value={form.phone}
                onChange={(e) =>
                  updateField(
                    "phone",
                    e.target.value
                  )
                }
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              Google Account Email
            </label>

            <input
              id="email"
              value={form.email}
              disabled
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="description">
              Short Description
            </label>

            <textarea
              id="description"
              value={form.description}
              onChange={(e) =>
                updateField(
                  "description",
                  e.target.value
                )
              }
              placeholder="One or two lines about what you do"
            />
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="instagram">
                Instagram
              </label>

              <input
                id="instagram"
                value={form.instagram}
                onChange={(e) =>
                  updateField(
                    "instagram",
                    e.target.value
                  )
                }
                placeholder="https://instagram.com/yourhandle"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="facebook">
                Facebook
              </label>

              <input
                id="facebook"
                value={form.facebook}
                onChange={(e) =>
                  updateField(
                    "facebook",
                    e.target.value
                  )
                }
                placeholder="https://facebook.com/yourpage"
              />
            </div>
          </div>

          {/* Optional fields added after Instagram and Facebook */}

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="linkedin">
                LinkedIn
              </label>

              <input
                id="linkedin"
                value={form.linkedin}
                onChange={(e) =>
                  updateField(
                    "linkedin",
                    e.target.value
                  )
                }
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="youtube">
                YouTube
              </label>

              <input
                id="youtube"
                value={form.youtube}
                onChange={(e) =>
                  updateField(
                    "youtube",
                    e.target.value
                  )
                }
                placeholder="https://youtube.com/@yourchannel"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="location">
              Location / Google Maps
            </label>

            <input
              id="location"
              value={form.location}
              onChange={(e) =>
                updateField(
                  "location",
                  e.target.value
                )
              }
              placeholder="https://maps.google.com/?q=Your+Business"
            />
          </div>

          {error && (
            <p className={styles.errorText}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : existingCard
              ? "Save Changes"
              : "Generate My QR Code"}
          </button>

          {existingCard && (
            <button
              type="button"
              className={styles.downloadButton}
              onClick={() => setEditing(false)}
              style={{
                marginTop: 10,
              }}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </main>
  );
}