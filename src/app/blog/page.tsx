import CategoriesChips from "@/app/components/blog/CategoriesChips";
import CategoryBlocks from "@/app/components/blog/CategoryBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import { fetchCategories, fetchCategoryById } from "@/fetch/articleCategories.fetch";

export const dynamic = "force-dynamic";

export default async function Blog({
  searchParams,
}: {
  searchParams: { category?: string | string[]; page?: string | string[] };
}) {
  const rawCat = searchParams?.category ?? null;
  let categoryKey: string | null = Array.isArray(rawCat) ? rawCat[0] : rawCat ?? null;
  if (!categoryKey) {
    const list = await fetchCategories();
    categoryKey = list?.[0]?.id != null ? String(list[0].id) : null;
  }

  const category = categoryKey ? await fetchCategoryById(categoryKey) : null;

  const allBlocks = ((category?.content as any[]) || []);
  const perPage = 5;
  const rawPage = searchParams?.page ?? 1;
  const pageNum = Math.max(1, Number(Array.isArray(rawPage) ? rawPage[0] : rawPage) || 1);
  const totalPages = Math.max(1, Math.ceil(allBlocks.length / perPage));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageBlocks = allBlocks.slice(start, start + perPage);

  return (
    <main className="text-neutral-900">
      <CategoriesChips selectedId={categoryKey ?? null} />
      <div className="max-w-[1318px] mx-auto px-4 py-10 md:py-25">
        <h1 className="text-4xl md:text-[109px] font-bold mb-[74px]  leading-[76px] uppercase">
          {category?.title || "\u0411\u043B\u043E\u0433"}
        </h1>

        {pageBlocks.length ? <CategoryBlocks blocks={pageBlocks as any} /> : null}

        <BlocksPagination
          page={currentPage}
          totalPages={totalPages}
          hrefFor={(p) => {
            const params = new URLSearchParams();
            if (categoryKey) params.set("category", String(categoryKey));
            params.set("page", String(p));
            return `/blog?${params.toString()}`;
          }}
        />
      </div>
    </main>
  );
}
