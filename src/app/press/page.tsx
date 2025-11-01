import CategoriesChips from "@/app/components/blog/CategoriesChips";
import PressBlocks from "@/app/components/blog/PressBlocks";
import BlocksPagination from "@/app/components/blog/BlocksPagination";
import { fetchPressList, fetchPressById } from "@/fetch/press.fetch";
import { getServerLocale } from "@/fetch/locale";
import { fetchSiteGlobals } from "@/fetch/siteglobals.fetch";

export const dynamic = "force-dynamic";

type SearchParams = { source?: string | string[]; page?: string | string[] };

// --- SEO ---
export async function generateMetadata({ searchParams }: { searchParams: SearchParams }) {
  const rawSource = searchParams?.source ?? null;
  const sourceKey: string | null = Array.isArray(rawSource) ? rawSource[0] : rawSource ?? null;
  const isHub = !sourceKey;

  if (isHub) {
    const globals = await fetchSiteGlobals();
    const baseTitle = globals?.press?.meta?.metaTitle || "All press";
    const description = globals?.press?.meta?.metaDescription || "";
    const page = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page;
    const pageSuffix = page && Number(page) > 1 ? ` — Page ${Number(page)}` : "";
    return {
      title: `${baseTitle}${pageSuffix}`,
      description,
      openGraph: {
        title: `${baseTitle}${pageSuffix}`,
        description,
      },
    };
  }

  const pressDoc = sourceKey ? await fetchPressById(Number(sourceKey)) : null;
  const baseTitle = pressDoc?.meta?.metaTitle || pressDoc?.title || "Press source";
  const description =
    pressDoc?.meta?.metaDescription || `Press source: ${pressDoc?.title ?? "Unknown"}.`;

  const page = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page;
  const pageSuffix = page && Number(page) > 1 ? ` — Page ${Number(page)}` : "";

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
  const globals = await fetchSiteGlobals();

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
      return ts > now ? 0 : ts; // ignore future-dated items
    };
    switch (block.__typename) {
      case "PressOverlayHero":
      case "PressOverlayHeroHub":
        return parse((block as any).visibleFrom);
      case "PressCardGrid":
      case "PressCardGridHub": {
        const items = (block as any).items || [];
        return items.reduce((acc: number, it: any) => Math.max(acc, parse(it?.visibleFrom)), 0);
      }
      case "PressOverlayPair":
      case "PressOverlayPairHub": {
        const items = (block as any).items || [];
        return items.reduce((acc: number, it: any) => Math.max(acc, parse(it?.visibleFrom)), 0);
      }
      default:
        return 0;
    }
  };

  // Build combined "hub-like" blocks from all docs
  const buildCombinedPressBlocks = async () => {
    const docs = await Promise.all(
      (pressList || []).map(async (d: any) => {
        const full = await fetchPressById(d.id);
        return full || { id: d.id, title: d.title, icon: d.icon, content: [] };
      })
    );

    const combined: any[] = [];
    for (const doc of docs) {
      const linkedPress = {
        id: doc.id,
        title: doc.title,
        icon: doc.icon,
      };
      for (const b of (doc.content || [])) {
        if (!b || !b.__typename) continue;
        if (b.__typename === "PressCardGrid") {
          combined.push({
            __typename: "PressCardGridHub",
            items: (b.items || []).map((it: any) => ({
              href: it.href,
              title: it.title,
              description: it.description,
              visibleFrom: it.visibleFrom,
              image: it.image,
              linkedPress,
            })),
          });
        } else if (b.__typename === "PressOverlayPair") {
          combined.push({
            __typename: "PressOverlayPairHub",
            items: (b.items || []).map((it: any) => ({
              href: it.href,
              title: it.title,
              visibleFrom: it.visibleFrom,
              image: it.image,
              linkedPress,
            })),
          });
        } else if (b.__typename === "PressOverlayHero") {
          combined.push({
            __typename: "PressOverlayHeroHub",
            href: b.href,
            title: b.title,
            subtitle: b.subtitle,
            visibleFrom: b.visibleFrom,
            image: b.image,
            linkedPress,
          });
        }
      }
    }

    // sort by latest visibleFrom desc
    combined.sort((a, b) => getBlockLatestTs(b) - getBlockLatestTs(a));
    return combined;
  };

  // Decide blocks source (hub = combined from all docs, else from specific doc)
  let allBlocks: any[] = [];
  let pressDoc: any = null;
  if (isHub) {
    allBlocks = await buildCombinedPressBlocks();
  } else if (sourceKey) {
    pressDoc = await fetchPressById(sourceKey);
    allBlocks = (pressDoc?.content as any[]) || [];
  }

  // Merge consecutive card-grid blocks into one
  const mergeCardGrids = (blocks: any[]) => {
    const cardTypes = new Set(["PressCardGrid", "PressCardGridHub"]);
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
    { id: "hub", title: globals?.press?.allTitle || "All press" },
    ...pressList.map((o: any) => ({ id: String(o.id), title: o.title })),
  ];
  const locale = await getServerLocale();

  const ALL_PRESS =
    locale === "uk"
      ? "Уся преса"
      : locale === "ru"
      ? "Вся пресса"
      : locale === "fr"
      ? "Toute la presse"
      : "All press";

  return (
    <main className="text-neutral-900">
      <CategoriesChips
        selectedId={sourceKey ?? "hub"}
        items={chipItems}
        hrefFor={(id) => (id === "hub" ? "/press" : `/press?source=${encodeURIComponent(String(id))}`)}
        backHref="/"
        backLabel={(globals?.categories?.backToHome && globals.categories.backToHome.trim()) || undefined}
        hubTitle={(globals?.press?.allTitle && globals.press.allTitle.trim()) || ALL_PRESS}
      />

      <div className="max-w-[1318px] mx-auto px-4 py-10 md:py-25">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 uppercase">
          {isHub ? (globals?.press?.allTitle || ALL_PRESS) : (pressDoc?.title || "Press")}
        </h1>

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
