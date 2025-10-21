// app/interview/page.tsx
import CategoriesChips from "@/app/components/blog/CategoriesChips";
import InterviewBlocks from "@/app/components/blog/InterviewBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import { fetchInterviewList, fetchInterviewById } from "@/fetch/interview.fetch";
import { fetchInterviewHub } from "@/fetch/interviewhub.fetch";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type SearchParams = { source?: string | string[]; page?: string | string[] };

/* ───────── SEO ───────── */
export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const list = await fetchInterviewList();
  const rawSource = searchParams?.source ?? null;
  const sourceKey = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;

  // Хаб (без ?source)
  if (!sourceKey) {
    const hub = await fetchInterviewHub();
    const baseTitle = hub?.meta?.metaTitle || hub?.title || "Інтерв’ю";
    const description = hub?.meta?.metaDescription || hub?.description || "Збірка інтерв’ю.";
    return {
      title: baseTitle,
      description,
      openGraph: { title: baseTitle, description },
    };
  }

  // Конкретне інтерв’ю
  const doc = await fetchInterviewById(Number(sourceKey));
  const baseTitle = doc?.meta?.metaTitle || doc?.title || "Інтерв’ю";
  const description =
    doc?.meta?.metaDescription || `Інтерв’ю: ${doc?.title ?? "добірка матеріалів"}.`;

  const pageParam = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page;
  const pageSuffix = pageParam && Number(pageParam) > 1 ? ` — сторінка ${Number(pageParam)}` : "";

  return {
    title: `${baseTitle}${pageSuffix}`,
    description,
    openGraph: { title: `${baseTitle}${pageSuffix}`, description },
  };
}

/* ───────── PAGE ───────── */
export default async function InterviewPage({ searchParams }: { searchParams: SearchParams }) {
  const list = await fetchInterviewList();

  const rawSource = searchParams?.source ?? null;
  const sourceKey: string | null = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;

  const isHub = !sourceKey;
  const hub = await fetchInterviewHub();
  const doc = !isHub && sourceKey ? await fetchInterviewById(Number(sourceKey)) : null;

  const allBlocks = (isHub ? (hub?.content as any[]) : (doc?.content as any[])) || [];

  // Пагінація — тільки для окремого інтерв’ю
  const perPage = 5;
  const rawPage = searchParams?.page ?? 1;
  const pageNum = Math.max(1, Number(Array.isArray(rawPage) ? rawPage[0] : rawPage) || 1);
  const totalPages = isHub ? 1 : Math.max(1, Math.ceil(allBlocks.length / perPage));
  const currentPage = isHub ? 1 : Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageBlocks = isHub ? allBlocks : allBlocks.slice(start, start + perPage);

  // Chips: першим – хаб (без параметра), далі – окремі інтерв’ю
  const chipItems = [
    { id: "hub", title: hub?.title || "Усі інтерв’ю" },
    ...list.map((o: any) => ({ id: String(o.id), title: o.title })),
  ];
  console.log("INTERVIEW", JSON.stringify(hub));
  return (
    <main className="text-neutral-900">
      <CategoriesChips
        selectedId={sourceKey ?? "hub"}
        items={chipItems}
        hrefFor={(id) => (id === "hub" ? "/interview" : `/interview?source=${encodeURIComponent(String(id))}`)}
        backHref="/"
        backLabel="Вернуться на главную"
      />

      <div className="site-container py-10 md:py-12">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-[74px] uppercase">
          {isHub ? (hub?.title || "Інтерв’ю") : (doc?.title || "Інтерв’ю")}
        </h1>

        {pageBlocks.length ? (
          <InterviewBlocks
            blocks={pageBlocks as any}
            // У режимі хабу не передаємо sourceTitle — кожна картка підставить з linkedInterview.title
            sourceTitle={isHub ? undefined : doc?.title}
          />
        ) : null}

        {!isHub && (
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
        )}
      </div>
    </main>
  );
}
