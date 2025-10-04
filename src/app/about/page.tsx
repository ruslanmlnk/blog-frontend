import fetchAbout from "@/fetch/about.fetch";

export default async function AboutPage() {
  const data = await fetchAbout();

  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </>
  );
}

