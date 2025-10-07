import CategoriesPanel from "@/app/components/blog/CategoriesPanel";
import HomeBlocks from "@/app/components/blog/HomeBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import fetchHomepage from "@/fetch/homepage.fetch";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string | string[] };
}) {
  const home = await fetchHomepage();
  const allBlocks = ((home?.content as any[]) || []);
  const perPage = 5;
  const rawPage = searchParams?.page ?? 1;
  const pageNum = Math.max(1, Number(Array.isArray(rawPage) ? rawPage[0] : rawPage) || 1);
  const totalPages = Math.max(1, Math.ceil(allBlocks.length / perPage));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageBlocks = allBlocks.slice(start, start + perPage);

  return (
    <main className="site-container py-8 md:py-12 text-neutral-900">
      {/* Brand Heading */}
      <h1 className="text-4xl md:text-[109px] font-bold uppercase">
        {home?.title || "PARUBETS ANALYTICS"}
      </h1>
      <p className="mt-4 pl-[9px] text-[#151515] text-[18.7px] leading-[22px] tracking-[-0.4px]">
        {home?.description || "Независимый аналитический центр, исследующий политические репрессии, войну и нарушения прав человека в Восточной Европе"}
      </p>

      {/* Main content grid */}
      <section className="mt-[74px] grid grid-cols-1 md:grid-cols-[828.5px_415px] md:gap-[36px] gap-[36px]">
        {/* Left: Featured article */}
        <div className="flex flex-col gap-[55px]">
          {/* Admin-driven home blocks */}
          <HomeBlocks blocks={pageBlocks as any[]} />

          <BlocksPagination
            page={currentPage}
            totalPages={totalPages}
            hrefFor={(p) => `/?page=${p}`}
          />
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8">
          {/* Categories card */}
          <CategoriesPanel />

          {/* Trending card (placeholder) */}
          <div className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4">
            <h4 className="text-sm font-bold text-neutral-700 mb-3">Тренды</h4>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="text-sm text-neutral-700 leading-snug">
                    Заглушка текста для карточки трендов. Замените на реальные данные.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

