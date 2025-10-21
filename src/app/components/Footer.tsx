'use client'
import { AltMedia } from "@/fetch/types/image.type";
import { createWeeklyNewsletter } from "@/fetch/weekly.fetch";
import { createContactMessage } from "@/fetch/contactMessage.fetch";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { ChipItem } from "./Header";


export default function Footer({ categories }: { categories?: ChipItem[] }) {
  const { t } = useI18n();

  const handleSubmitWeekly = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };
    try {
      await createWeeklyNewsletter(formData);
      form.reset();
    } catch {}
  };

  const handleSubmitWeeklyWithEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };
    try {
      await createWeeklyNewsletter(formData);
      try {
        await fetch("/api/newsletter-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.error("Failed to send newsletter email", err);
      }
      form.reset();
    } catch (err) {
      console.error("Failed to save newsletter subscription", err);
    }
  };

  // Contact form (footer) handler without message
  const handleSubmitContactLite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };
    try {
      // 1) Save to admin (GraphQL)
      await createContactMessage(formData);
      // 2) Send email via same route as contact page
      try {
        await fetch("/api/contact-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.error("Failed to send contact email (footer)", err);
      }
      form.reset();
    } catch (err) {
      console.error("Failed to save contact form (footer)", err);
    }
  };

  // Localized footer nav items
  const i18nNavItems = [
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.blog'), href: '/blog' },
    { label: t('nav.press'), href: '/press' },
    { label: t('nav.interview'), href: '/interview' },
    { label: t('nav.contacts'), href: '/contacts' },
  ];

  return (
    <footer className="mt-22">
      {/* Upper footer */}
      <div className="site-container">
        <div className="md:flex md:items-start">
          {/* Newsletter (fixed width 581px) */}
          <div className="w-full md:w-[581px]">
            {/* Weekly subscription commented out */}
            {false && (
              <>
                <h3 className="text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">
                  Weekly newsletter
                </h3>
                <p className="mt-[18px] text-[#000] text-[14px]">
                  Subscribe to receive updates.
                </p>
                <div className="mt-4">
                  <form
                    className="w-full flex items-center gap-3 bg-neutral-100 border border-neutral-200 rounded-lg px-2 md:px-4 py-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]"
                    onSubmit={handleSubmitWeeklyWithEmail}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder={t('footer.contact.email')}
                      className="flex-1 bg-transparent outline-none text-[15px] placeholder-neutral-500 px-1"
                    />
                    <button
                      className="shrink-0 h-10 px-4 rounded-md bg-blue-700 text-white font-semibold uppercase text-[10px] md:text-[13px] tracking-wide hover:bg-blue-800 transition-colors"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </>
            )}

            {/* Contact-like form (without message) */}
            <h3 className="text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">{t('footer.contact.title')}</h3>
            <p className="mt-[18px] text-[#000] text-[14px]">{t('footer.contact.subtitle')}</p>
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" onSubmit={handleSubmitContactLite}>
              <input
                type="text"
                name="name"
                placeholder={t('footer.contact.name')}
                required
                minLength={2}
                className="h-[60px] col-span-1 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              <input
                type="tel"
                name="phone"
                minLength={9}
                required
                placeholder={t('footer.contact.phone')}
                className="h-[60px] col-span-1 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              <input
                type="email"
                name="email"
                minLength={2}
                placeholder={t('footer.contact.email')}
                required
                className="h-[60px] md:col-span-2 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              <button
                type="submit"
                className="uppercase h-[60px] md:col-span-2 inline-flex items-center justify-center rounded-lg bg-blue-700 text-white font-semibold tracking-wide hover:bg-blue-800 transition-colors"
              >
                {t('footer.contact.send')}
              </button>
            </form>
          </div>

          {/* Right cluster (ml 200px, width 505px -> two cols 252px + 1px border + 252px) */}
          <div className="w-full not-md:gap-10 md:w-[505px] md:ml-[200px] flex flex-col not-md:my-[20px] gap-y-[20px] md:flex-row min-h-[330px]">
            {/* Details column (252px, with left divider) */}
            <div className=" md:w-[314px] box-border md:border-l md:border-neutral-200 md:pl-10">
              <h3 className="text-[14px] md:text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">{t('footer.sections')}</h3>
              <ul className="mt-3 space-y-[10px] leading-[27px] text-[#000] whitespace-nowrap">
                {i18nNavItems.map((item) => (
                  <li key={item.href + item.label} className="hover:text-neutral-950 cursor-pointer">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Categories column (252px, with left divider) */}
            <div className=" md:w-[191px] box-border md:border-l md:border-neutral-200 md:pl-10">
              <h3 className="text-[14px] md:text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">{t('footer.categories')}</h3>
              <ul className="mt-3 space-y-[10px] leading-[27px] text-[#000] whitespace-nowrap">
                {categories?.map((c: any) => {
                  return (
                    <li key={c.id} className="hover:text-neutral-950 cursor-pointer">
                      <Link href={`/blog?category=${encodeURIComponent(String(c.id))}`}>{c.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-[#E0E0E0]">
        <div className="site-container not-md:text-center not-md:gap-2 not-md:py-[20px] md:h-[117px] flex not-md:flex-col items-center justify-between text-sm text-neutral-600">
          <a className="hover:text-neutral-900" href="/privacy-policy">{t('footer.privacy')}</a>
          <div>{t('footer.copyright')}</div>
        </div>
      </div>
    </footer>
  );
}
