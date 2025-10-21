import BlogOverlayPair from "./BlogOverlayPair";
import BlogCardGrid from "./BlogCardGrid";
import BlogOverlayHero from "./BlogOverlayHero";
import type { PressBlock } from "@/fetch/types/press.type";


export const toDateLabel = (
  iso?: string,
  tz: string = 'Europe/Kyiv'
): string | undefined => {
  try {
    if (!iso) return undefined;
    const d = new Date(iso);

    // рахуємо КОЖНУ частину в заданій TZ
    const day = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', timeZone: tz }).format(d);
    const month = new Intl.DateTimeFormat('ru-RU', { month: 'long', timeZone: tz }).format(d); // «июль»
    const year = new Intl.DateTimeFormat('ru-RU', { year: 'numeric', timeZone: tz }).format(d);

    return `${day} ${month}, ${year}`;
  } catch {
    return undefined;
  }
};


const truncate = (text: string, maxLength = 75) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
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
  console.log(blocks);
  const now = Date.now();
  const canShow = (iso?: string) => {
    if (!iso) return true;
    const ts = Date.parse(iso);
    if (Number.isNaN(ts)) return true;
    return ts <= Date.now();
  };
  const computedLabel = sourceTitle ? `СМИ: ${sourceTitle}` : undefined;
  console.log(sourceTitle ? computedLabel : `СМИ: ascas`);
  return (
    <section className="mt-8 flex flex-col gap-y-[55px]">
      {blocks.map((block: any, idx: number) => {
        switch (block.__typename) {
          case "PressOverlayPair": 
          case "PressOverlayPairHub":{
            const items = (block.items || []).filter((it: any) => canShow(it.visibleFrom)).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              dateLabel: toDateLabel(it.visibleFrom),
            }));
            if (!items.length) return null;
            return <BlogOverlayPair key={idx} items={items} />;
          }
          case "PressCardGrid":
          case "PressCardGridHub": {
            const items = (block.items || []).filter((it: any) => canShow(it.visibleFrom)).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              description: truncate(it.description || '', 75),
              dateLabel: toDateLabel(it.visibleFrom),
              avatar: avatarUrl ||  it.linkedPress?.icon.url,
              sourceLabel: sourceTitle ? computedLabel : `СМИ: ${it.linkedPress?.title}`,
            }));
            console.log(items)
            if (!items.length) return null;
            return <BlogCardGrid key={idx} items={items} />;
          }
          case "PressOverlayHero":
          case "PressOverlayHeroHub":{
            const it = block;
            if (!canShow(it.visibleFrom)) return null;
            const item = it
              ? {
                  href: it.href || '#',
                  image: it.image?.url || '',
                  title: it.title || '',
                  subtitle: truncate(it.subtitle || '', 75),
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



