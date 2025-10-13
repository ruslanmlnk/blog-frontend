"use client"
import { createContactMessage } from "@/fetch/contactMessage.fetch";
import type { AltMedia } from "@/fetch/types/image.type";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

function ContactForm() {
  const { t } = useI18n();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await createContactMessage(formData);
      try {
        await fetch("/api/contact-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.error("Failed to send email", err);
      }
      form.reset();
    } catch {}
  };
  
  return (
    <form className="order-2 md:order-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 content-start" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={t('footer.contact.name')}
        required
        minLength={2}
        className="h-[70px] col-span-1 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
      />
      <input
        type="tel"
        name="phone"
        minLength={9}
        required
        placeholder={t('footer.contact.phone')}
        className="h-[70px] col-span-1 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
      />
      <input
        type="email"
        name="email"
        minLength={2}
        placeholder={t('footer.contact.email')}
        required
        className="h-[70px] md:col-span-2 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
      />
      <textarea
        placeholder={t('footer.contact.message')}
        name="message"
        rows={5}
        minLength={30}
        required
        className="h-[144px] md:col-span-2 w-full resize-y rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
      />
      <button
        type="submit"
        className="uppercase h-[70px] md:col-span-2 inline-flex items-center justify-center h-12 rounded-lg bg-blue-700 text-white font-semibold tracking-wide hover:bg-blue-800 transition-colors"
      >
       {t('footer.contact.send')}
      </button>
    </form>
  );
}

function ContactVisual({ image }: { image?: AltMedia | null }) {
  const src =
    image?.url ||
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop";
  const alt = image?.alt || "Contact Visual";

  return (
    <div className="order-1 md:order-2 relative rounded-[30px] overflow-hidden min-h-[220px] md:min-h-[360px] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
      />
      <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white shadow-md ring-1 ring-neutral-200 flex items-center justify-center">
        <svg
          width="34"
          height="31"
          viewBox="0 0 34 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.41904 27.3455C0.750342 27.9232 0.67654 28.9335 1.2542 29.6022C1.83186 30.2709 2.84223 30.3447 3.51093 29.7671L2.46498 28.5563L1.41904 27.3455ZM33.1305 3.56073C33.1949 2.67942 32.5326 1.91279 31.6513 1.84842L17.2896 0.799393C16.4082 0.73502 15.6416 1.39728 15.5772 2.27858C15.5129 3.15989 16.1751 3.92652 17.0564 3.99089L29.8224 4.92336L28.89 17.6894C28.8256 18.5707 29.4878 19.3373 30.3691 19.4017C31.2505 19.466 32.0171 18.8038 32.0815 17.9225L33.1305 3.56073ZM2.46498 28.5563L3.51093 29.7671L32.5807 4.65495L31.5347 3.44417L30.4888 2.23339L1.41904 27.3455L2.46498 28.5563Z"
            fill="#0243A5"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ContactFormWithImage({ image }: { image?: AltMedia | null }) {
  return (
    <section className="mt-10 md:mt-[74px]">
      <div className="rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
        <ContactForm />
        <ContactVisual image={image} />
      </div>
    </section>
  );
}

