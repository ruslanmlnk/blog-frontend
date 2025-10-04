import fetchContact from "@/fetch/contact.fetch";

export default async function ContactPage() {
  const data = await fetchContact();

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </>
  );
}

