import fetchHomepage from "@/fetch/homepage.fetch";

export default async function Home() {
  const data = await fetchHomepage();
  return (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </>
  );
}
