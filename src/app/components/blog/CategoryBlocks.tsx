import { CategoryBlock } from "@/fetch/types/articleCategories.type";
import BlogOverlayPair from "./BlogOverlayPair";
import BlogCardGrid from "./BlogCardGrid";
import BlogOverlayHero from "./BlogOverlayHero";

const toDateLabel = (iso?: string): string | undefined => {
  try {
    if (!iso) return undefined;
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { day: "2-digit", month: "long", year: "numeric" });
  } catch {
    return undefined;
  }
};

export default function CategoryBlocks({
  blocks = [] as CategoryBlock[],
  avatarUrl,
  sourceLabel,
}: {
  blocks?: CategoryBlock[];
  avatarUrl?: string;
  sourceLabel?: string;
}) {
  return (
    <section className="mt-8 flex flex-col gap-y-[55px]">
      {blocks.map((block, idx) => {
        console.log(block.__typename);
        switch (block.__typename) {
          case "CategoryOverlayPair": {
            const items = (block as any).items?.map((it: any) => ({
              href: `/blog/${it.article?.slug}`,
              image: it.article?.bg?.url || "",
              title: it.article?.title || "",
              dateLabel: toDateLabel(it.article?.createdAt),
            }));
            return <BlogOverlayPair key={idx} items={items} />;
          }
          case "CategoryCardGrid": {
            const items = (block as any).items?.map((it: any) => ({
              href: `/blog/${it.article?.slug}`,
              image: it.article?.bg?.url || "",
              title: it.article?.title || "",
              description: it.article?.description || "",
              dateLabel: toDateLabel(it.article?.createdAt),
              avatar: avatarUrl,
              sourceLabel: sourceLabel,
            }));
            return <BlogCardGrid key={idx} items={items} />;
          }
          case "CategoryOverlayHero": {
            const a = (block as any).article;
            console.log(a.category);
            const item = a
              ? {
                  href: `/blog/${a.slug}`,
                  image: a.bg?.url || "",
                  // Show category as main title, article title as subtitle
                  title: a.category?.title || "",
                  subtitle: a.title || "",
                  dateLabel: toDateLabel(a.createdAt),
                }
              : undefined;
            return <BlogOverlayHero key={idx} item={item} />;
          }
          default:
            return null;
        }
      })}
    </section>
  );
}
