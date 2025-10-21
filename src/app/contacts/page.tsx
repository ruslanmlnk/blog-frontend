import fetchContact from "@/fetch/contact.fetch";

export async function generateMetadata() {
  const contact = await fetchContact();

  return {
    title: contact?.meta?.metaTitle || "Contact us",
    description: contact?.meta?.metaDescription || "Get in touch with us",
  };
}
export { default } from "../contact/page";

