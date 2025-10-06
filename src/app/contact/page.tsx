import ContactIntro from "@/app/components/contact/ContactIntro";
import ContactFormWithImage from "@/app/components/contact/ContactFormWithImage";
import fetchContact from "@/fetch/contact.fetch";

export default async function ContactPage() {
  const contact = await fetchContact();

  return (
    <main className="max-w-[1312px] mx-auto px-4  py-8 md:py-[74px_52px] text-neutral-900">
      <ContactIntro title={contact?.title ?? ""} description={contact?.description ?? ""} />
      <ContactFormWithImage image={contact?.sideImage ?? null} />
    </main>
  );
}

