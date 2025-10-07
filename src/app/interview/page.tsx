import CategoriesChips from "@/app/components/blog/CategoriesChips";
import InterviewBlocks from "@/app/components/blog/InterviewBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import { fetchInterviewList, fetchInterviewById } from "@/fetch/interview.fetch";

export const dynamic = "force-dynamic";

export default async function InterviewPage({
  searchParams,
}: { searchParams: { source?: string | string[]; page?: string | string[] } }) {
  const list = await fetchInterviewList();
  const rawSource = searchParams?.source ?? null;
  let sourceKey: string | null = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;
  if (!sourceKey) {
    sourceKey = list?.[0]?.id != null ? String(list[0].id) : null;
  }

  const doc = sourceKey ? await fetchInterviewById(sourceKey) : null;
  const allBlocks = ((doc?.content as any[]) || []);

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
        items={list.map((o: any) => ({ id: o.id, title: o.title }))}
        hrefFor={(id) => `/interview?source=${encodeURIComponent(String(id))}`}
        backHref="/"
        backLabel="Вернуться на главную"
      />

      <div className="site-container py-10 md:py-12">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">Interviews</h1>

        {pageBlocks.length ? (
          <InterviewBlocks blocks={pageBlocks as any} sourceTitle={doc?.title} />
        ) : null}

        <BlocksPagination
          page={currentPage}
          totalPages={totalPages}
          hrefFor={(p) => {
            const params = new URLSearchParams();
            if (sourceKey) params.set("source", String(sourceKey));
            params.set("page", String(p));
            return `/interview?${params.toString()}`;
          }}
        />
      </div>
    </main>
  );
}
