import BlogOverlayPair from "./BlogOverlayPair";
import BlogCardGrid from "./BlogCardGrid";
import BlogOverlayHero from "./BlogOverlayHero";
import type { PressBlock } from "@/fetch/types/press.type";

const toDateLabel = (iso?: string): string | undefined => {
  try {
    if (!iso) return undefined;
    const d = new Date(iso);
    const day = String(d.getDate());
    const month = d.toLocaleString('ru-RU', { month: 'long' });
    const year = d.getFullYear();
    return `${day} ${month}, ${year}`;
  } catch {
    return undefined;
  }
};


export default function PressBlocks({
  blocks = [] as PressBlock[],
  sourceTitle,
  avatarUrl,
}: {
  blocks?: PressBlock[];
  sourceTitle?: string;
  avatarUrl?: string;
}) {
  const computedLabel = sourceTitle ? `СМИ: ${sourceTitle}` : undefined;
  return (
    <section className="mt-8 flex flex-col gap-y-[55px]">
      {blocks.map((block: any, idx: number) => {
        switch (block.__typename) {
          case "PressOverlayPair": {
            const items = (block.items || []).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              dateLabel: toDateLabel(it.date),
            }));
            return <BlogOverlayPair key={idx} items={items} />;
          }
          case "PressCardGrid": {
            const items = (block.items || []).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              description: it.description || '',
              dateLabel: toDateLabel(it.date),
              avatar: avatarUrl,
              sourceLabel: computedLabel,
            }));
            return <BlogCardGrid key={idx} items={items} />;
          }
          case "PressOverlayHero": {
            const it = block;
            const item = it
              ? {
                  href: it.href || '#',
                  image: it.image?.url || '',
                  title: it.title || '',
                  subtitle: it.subtitle || '',
                  dateLabel: computedLabel,
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
