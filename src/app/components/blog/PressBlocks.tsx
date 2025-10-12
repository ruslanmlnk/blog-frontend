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
  const now = Date.now();
  const canShow = (iso?: string) => {
    if (!iso) return true;
    const ts = Date.parse(iso);
    if (Number.isNaN(ts)) return true;
    return ts <= Date.now();
  };
  const computedLabel = sourceTitle ? `СМИ: ${sourceTitle}` : undefined;
  return (
    <section className="mt-8 flex flex-col gap-y-[55px]">
      {blocks.map((block: any, idx: number) => {
        switch (block.__typename) {
          case "PressOverlayPair": {
            const items = (block.items || []).filter((it: any) => canShow(it.visibleFrom)).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              dateLabel: toDateLabel(it.date),
            }));
            if (!items.length) return null;
            return <BlogOverlayPair key={idx} items={items} />;
          }
          case "PressCardGrid": {
            const items = (block.items || []).filter((it: any) => canShow(it.visibleFrom)).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              description: it.description || '',
              dateLabel: toDateLabel(it.date),
              avatar: avatarUrl,
              sourceLabel: computedLabel,
            }));
            if (!items.length) return null;
            return <BlogCardGrid key={idx} items={items} />;
          }
          case "PressOverlayHero": {
            const it = block;
            if (!canShow(it.visibleFrom)) return null;
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



