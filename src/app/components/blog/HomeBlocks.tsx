import HomeFeatured from "./HomeFeatured";
import BlogCardGrid from "./BlogCardGrid";

const toDate = (iso?: string) => {
  try {
    if (!iso) return undefined;
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return undefined;
  }
};

export default function HomeBlocks({ blocks = [] as any[] }) {
  const now = Date.now();
  const canShow = (iso?: string) => {
    if (!iso) return true;
    const ts = Date.parse(iso);
    if (Number.isNaN(ts)) return true;
    return ts <= now;
  };
  return (
    <>
      {blocks.map((b, idx) => {
        switch (b.__typename) {
          case "HomeFeatured":
          case "homeFeatured":
            if (!canShow(b.visibleFrom)) return null;
            return (
              <HomeFeatured
                key={idx}
                image={b.article?.bg?.url || ""}
                dateLabel={toDate(b.visibleFrom) || ""}
                title={b.article?.title}
                description={b.article?.description}
                href={`/blog/${b.article?.slug}`}
              />
            );
          case "CategoryCardGrid":
          case "categoryCardGrid": {
            const items = (b.items || [])
              .filter((it: any) => canShow(it.visibleFrom))
              .map((it: any) => ({
              href: `/blog/${it.article?.slug}`,
              image: it.article?.bg?.url || "",
              title: it.article?.title || "",
              description: it.article?.description || "",
              dateLabel: toDate(it.visibleFrom),
            }));
            if (!items.length) return null;
            return <BlogCardGrid key={idx} twoCols items={items} />;
          }
          default:
            return null;
        }
      })}
    </>
  );
}
