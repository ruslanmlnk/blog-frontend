import fetchArticles from "@/fetch/articles.fetch";

export default async function Home() {
  const data = await fetchArticles();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
