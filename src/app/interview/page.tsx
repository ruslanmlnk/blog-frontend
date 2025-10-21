// app/interview/page.tsx
import CategoriesChips from "@/app/components/blog/CategoriesChips";
import InterviewBlocks from "@/app/components/blog/InterviewBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import { fetchInterviewList, fetchInterviewById } from "@/fetch/interview.fetch";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

type SearchParams = { source?: string | string[]; page?: string | string[] };

/* SEO */
export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const rawSource = searchParams?.source ?? null;
  const sourceKey = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;

  if (!sourceKey) {
    const baseTitle = "Всі інтерв'ю";
    const description = "Усі інтерв'ю, відсортовані за датою (новіші спочатку).";
    return {
      title: baseTitle,
      description,
      openGraph: { title: baseTitle, description },
    };
  }

  const doc = await fetchInterviewById(Number(sourceKey));
  const baseTitle = doc?.meta?.metaTitle || doc?.title || "Інтерв'ю";
  const description = doc?.meta?.metaDescription || `Інтерв'ю: ${doc?.title ?? "невідоме джерело"}.`;

  const pageParam = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page;
  const pageSuffix = pageParam && Number(pageParam) > 1 ? ` — сторінка ${Number(pageParam)}` : "";

  return {
    title: `${baseTitle}${pageSuffix}`,
    description,
    openGraph: { title: `${baseTitle}${pageSuffix}`, description },
  };
}

/* PAGE */
export default async function InterviewPage({ searchParams }: { searchParams: SearchParams }) {
  const list = await fetchInterviewList();

  const rawSource = searchParams?.source ?? null;
  const sourceKey: string | null = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;

  const isHub = !sourceKey;

  // Helper: compute latest visibleFrom timestamp for a block (in ms)
  const getBlockLatestTs = (block: any): number => {
    const now = Date.now();
    const parse = (iso?: string) => {
      if (!iso) return 0;
      const ts = Date.parse(iso);
      if (Number.isNaN(ts)) return 0;
      return ts > now ? 0 : ts;
    };
    switch (block.__typename) {
      case "InterviewOverlayHero":
      case "InterviewOverlayHeroHub":
        return parse((block as any).visibleFrom);
      case "InterviewCardGrid":
      case "InterviewCardGridHub": {
        const items = (block as any).items || [];
        return items.reduce((acc: number, it: any) => Math.max(acc, parse(it?.visibleFrom)), 0);
      }
      case "InterviewOverlayPair":
      case "InterviewOverlayPairHub": {
        const items = (block as any).items || [];
        return items.reduce((acc: number, it: any) => Math.max(acc, parse(it?.visibleFrom)), 0);
      }
      default:
        return 0;
    }
  };

  // Build combined "hub-like" blocks from all interview docs
  const buildCombinedInterviewBlocks = async () => {
    const docs = await Promise.all(
      (list || []).map(async (d: any) => {
        const full = await fetchInterviewById(d.id);
        return full || { id: d.id, title: d.title, content: [] };
      })
    );

    const combined: any[] = [];
    for (const doc of docs) {
      const linkedInterview = {
        id: doc.id,
        title: doc.title,
      };
      for (const b of (doc.content || [])) {
        if (!b || !b.__typename) continue;
        if (b.__typename === "InterviewCardGrid") {
          combined.push({
            __typename: "InterviewCardGridHub",
            items: (b.items || []).map((it: any) => ({
              href: it.href,
              title: it.title,
              description: it.description,
              visibleFrom: it.visibleFrom,
              image: it.image,
              linkedInterview,
            })),
          });
        } else if (b.__typename === "InterviewOverlayPair") {
          combined.push({
            __typename: "InterviewOverlayPairHub",
            items: (b.items || []).map((it: any) => ({
              href: it.href,
              title: it.title,
              visibleFrom: it.visibleFrom,
              image: it.image,
              linkedInterview,
            })),
          });
        } else if (b.__typename === "InterviewOverlayHero") {
          combined.push({
            __typename: "InterviewOverlayHeroHub",
            href: b.href,
            title: b.title,
            subtitle: b.subtitle,
            visibleFrom: b.visibleFrom,
            image: b.image,
            linkedInterview,
          });
        }
      }
    }

    combined.sort((a, b) => getBlockLatestTs(b) - getBlockLatestTs(a));
    return combined;
  };

  // Decide blocks source
  let allBlocks: any[] = [];
  let doc: any = null;
  if (isHub) {
    allBlocks = await buildCombinedInterviewBlocks();
  } else if (sourceKey) {
    doc = await fetchInterviewById(Number(sourceKey));
    allBlocks = (doc?.content as any[]) || [];
  }

  // Merge consecutive card-grid blocks into one
  const mergeCardGrids = (blocks: any[]) => {
    const cardTypes = new Set(["InterviewCardGrid", "InterviewCardGridHub"]);
    const result: any[] = [];
    let pending: any | null = null;
    for (const b of blocks) {
      if (cardTypes.has(b?.__typename)) {
        if (pending && pending.__typename === b.__typename) {
          pending = { ...pending, items: [ ...(pending.items || []), ...(b.items || []) ] };
        } else {
          if (pending) result.push(pending);
          pending = { ...b, items: [ ...(b.items || []) ] };
        }
      } else {
        if (pending) { result.push(pending); pending = null; }
        result.push(b);
      }
    }
    if (pending) result.push(pending);
    return result;
  };

  const mergedBlocks = mergeCardGrids(allBlocks);

  const perPage = 5;
  const rawPage = searchParams?.page ?? 1;
  const pageNum = Math.max(1, Number(Array.isArray(rawPage) ? rawPage[0] : rawPage) || 1);
  const totalPages = Math.max(1, Math.ceil(mergedBlocks.length / perPage));
  const currentPage = Math.min(pageNum, totalPages);
  const start = (currentPage - 1) * perPage;
  const pageBlocks = mergedBlocks.slice(start, start + perPage);

  const chipItems = [
    { id: "hub", title: "Всі інтерв'ю" },
    ...list.map((o: any) => ({ id: String(o.id), title: o.title })),
  ];

  return (
    <main className="text-neutral-900">
      <CategoriesChips
        selectedId={sourceKey ?? "hub"}
        items={chipItems}
        hrefFor={(id) => (id === "hub" ? "/interview" : `/interview?source=${encodeURIComponent(String(id))}`)}
        backHref="/"
        backLabel="Повернутися на головну"
      />

      <div className="site-container py-10 md:py-12">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-[74px] uppercase">
          {isHub ? "Всі інтерв'ю" : (doc?.title || "Інтерв'ю")}
        </h1>

        {pageBlocks.length ? (
          <InterviewBlocks
            blocks={pageBlocks as any}
            sourceTitle={isHub ? undefined : doc?.title}
          />
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
