import CategoriesChips from "@/app/components/blog/CategoriesChips";
import PressBlocks from "@/app/components/blog/PressBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import { fetchPressList, fetchPressById } from "@/fetch/press.fetch";
import { fetchPressHub } from "@/fetch/presshub.fetch"; // ⬅️ додано

export const dynamic = "force-dynamic";

type SearchParams = { source?: string | string[]; page?: string | string[] };

// --- SEO ---
export async function generateMetadata({ searchParams }: { searchParams: SearchParams }) {
  const pressList = (await fetchPressList()) ?? [];
  const hub = await fetchPressHub();

  const rawSource = searchParams?.source ?? null;
  const sourceKey: string | null = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;
  const isHub = !sourceKey;

  const pressDoc = !isHub && sourceKey ? await fetchPressById(Number(sourceKey)) : null;

  const baseTitle = isHub
    ? hub?.meta?.metaTitle || hub?.title || "Ми в ЗМІ"
    : pressDoc?.meta?.metaTitle || pressDoc?.title || "Ми в ЗМІ";

  const description = isHub
    ? hub?.meta?.metaDescription || hub?.description || "Добірка публікацій у ЗМІ."
    : pressDoc?.meta?.metaDescription || `Публікації та згадки у ЗМІ: ${pressDoc?.title ?? "Прес-матеріали"}.`;

  const page = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page;
  const pageSuffix = page && Number(page) > 1 ? ` — сторінка ${Number(page)}` : "";

  return {
    title: `${baseTitle}${pageSuffix}`,
    description,
    openGraph: {
      title: `${baseTitle}${pageSuffix}`,
      description,
    },
  };
}


export default async function Press({ searchParams }: { searchParams: SearchParams }) {
  const pressList = await fetchPressList();
  

  const rawSource = searchParams?.source ?? null;
  const sourceKey: string | null = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;

  // ⬇️ якщо немає source → працюємо з хабом
  const isHub = !sourceKey;
  const hub = await fetchPressHub();

  const pressDoc = !isHub && sourceKey ? await fetchPressById(sourceKey) : null;

  // ⬇️ єдина відмінність: allBlocks беремо з hub або з pressDoc
  const allBlocks = (isHub ? (hub?.content as any[]) : (pressDoc?.content as any[])) || [];
  // console.log(hub.content)
  const perPage = 5;
  const rawPage = searchParams?.page ?? 1;
  const pageNum = Math.max(1, Number(Array.isArray(rawPage) ? rawPage[0] : rawPage) || 1);
  const totalPages = Math.max(1, Math.ceil(allBlocks.length / perPage));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageBlocks = allBlocks.slice(start, start + perPage);

  const chipItems = [
    { id: "hub", title: hub?.title || "Усі ЗМІ" },
    ...pressList.map((o: any) => ({ id: String(o.id), title: o.title })),
  ];

  return (
    <main className="text-neutral-900">
      <CategoriesChips
        selectedId={sourceKey ?? "hub"}
        items={chipItems}
        hrefFor={(id) => (id === "hub" ? "/press" : `/press?source=${encodeURIComponent(String(id))}`)}
        backHref="/"
        backLabel="Вернуться на главную"
      />

      <div className="max-w-[1318px] mx-auto px-4 py-10 md:py-25">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 uppercase">Мы в сми</h1>

        {pageBlocks.length ? (
          <PressBlocks
            blocks={pageBlocks as any}
            avatarUrl={pressDoc?.icon?.url}
            sourceTitle={pressDoc?.title}
          />
        ) : null}

        <BlocksPagination
          page={currentPage}
          totalPages={totalPages}
          hrefFor={(p) => {
            const params = new URLSearchParams();
            if (sourceKey) params.set("source", String(sourceKey));
            params.set("page", String(p));
            return `/press?${params.toString()}`;
          }}
        />
      </div>
    </main>
  );
}
