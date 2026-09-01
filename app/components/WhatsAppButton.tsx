"use client";

export default function WhatsAppButton() {
  const whatsappNumber = "919112151399";

  const message = encodeURIComponent(
    "Hello Unicorn Nexus, I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat with Unicorn Nexus on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.21c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.72 6.42L3.1 28.8l6.56-1.72a12.76 12.76 0 0 0 6.35 1.68h.01c7.06 0 12.8-5.74 12.8-12.8S23.08 3.2 16.01 3.2zm0 23.37h-.01c-2.01 0-3.98-.54-5.7-1.57l-.41-.24-3.89 1.02 1.04-3.79-.27-.39a10.58 10.58 0 1 1 9.24 4.97z" />
      </svg>

      <span>WhatsApp</span>
    </a>
  );
}