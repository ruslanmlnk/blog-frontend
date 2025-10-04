import fetchArticleCategories from "@/fetch/articleCategories.fetch";
import Link from "next/link";

export default async function TagsSidebar() {
  const data = await fetchArticleCategories();
  const categories = data?.categories || [];

  return (
    <aside className="sticky top-6 space-y-8">
      <div className="p-6 bg-white border rounded">
        <h3 className="text-sm font-bold text-gray-600 mb-4">TAGS</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`/blog?category=${c.id}`}
              className="px-3 py-1 text-sm border rounded-full hover:bg-gray-50"
            >
              {c.title}
            </Link>
          ))}
          {!categories.length && (
            <span className="text-sm text-gray-500">No categories</span>
          )}
        </div>
      </div>
    </aside>
  );
}

