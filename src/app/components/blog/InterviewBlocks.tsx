import BlogOverlayPair from "./BlogOverlayPair";
import BlogCardGrid from "./BlogCardGrid";
import BlogOverlayHero from "./BlogOverlayHero";
import type { InterviewBlock } from "@/fetch/types/interview.type";

export default function InterviewBlocks({
  blocks = [] as InterviewBlock[],
  sourceTitle,
}: {
  blocks?: InterviewBlock[];
  sourceTitle?: string;
}) {
  const computedLabel = sourceTitle ? `СМИ: ${sourceTitle}` : undefined;
  return (
    <section className="mt-8 flex flex-col gap-y-[55px]">
      {blocks.map((block: any, idx: number) => {
        switch (block.__typename) {
          case "InterviewOverlayPair": {
            const items = (block.items || []).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              dateLabel: computedLabel,
            }));
            return <BlogOverlayPair key={idx} items={items} />;
          }
          case "InterviewCardGrid": {
            const items = (block.items || []).map((it: any) => ({
              href: it.href || '#',
              image: it.image?.url || '',
              title: it.title || '',
              description: it.description || '',
              dateLabel: computedLabel,
            }));
            return <BlogCardGrid key={idx} items={items} isInterview />;
          }
          case "InterviewOverlayHero": {
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
