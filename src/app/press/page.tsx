import CategoriesChips from "@/app/components/blog/CategoriesChips";
import CategoryBlocks from "@/app/components/blog/CategoryBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import { fetchPressList, fetchPressById } from "@/fetch/press.fetch";

export const dynamic = "force-dynamic";

export default async function Press({
  searchParams,
}: { searchParams: { source?: string | string[]; page?: string | string[] } }) {
  const pressList = await fetchPressList();
  const rawSource = searchParams?.source ?? null;
  let sourceKey: string | null = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;
  if (!sourceKey) {
    sourceKey = pressList?.[0]?.id != null ? String(pressList[0].id) : null;
  }

  const pressDoc = sourceKey ? await fetchPressById(sourceKey) : null;
  const allBlocks = ((pressDoc?.content as any[]) || []);

  const perPage = 5;
  const rawPage = searchParams?.page ?? 1;
  const pageNum = Math.max(1, Number(Array.isArray(rawPage) ? rawPage[0] : rawPage) || 1);
  const totalPages = Math.max(1, Math.ceil(allBlocks.length / perPage));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageBlocks = allBlocks.slice(start, start + perPage);

  return (
    <main className="text-neutral-900">
      <CategoriesChips
        selectedId={sourceKey ?? undefined}
        items={pressList.map((o: any) => ({ id: o.id, title: o.title}))}
        hrefFor={(id) => `/press?source=${encodeURIComponent(String(id))}`}
        backHref="/press"
        backLabel="Вернуться ко всем новостям"
      />

      <div className="max-w-[1318px] mx-auto px-4 py-10 md:py-25">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 uppercase">Мы в сми</h1>

        {pageBlocks.length ? (
          <CategoryBlocks
            blocks={pageBlocks as any}
            avatarUrl={pressDoc?.icon?.url}
            sourceLabel={pressDoc?.title ? `\u0414\u0436\u0435\u0440\u0435\u043B\u043E: ${pressDoc.title}` : undefined}
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
