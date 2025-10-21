import BlogOverlayPair from "./BlogOverlayPair";
import BlogCardGrid from "./BlogCardGrid";
import BlogOverlayHero from "./BlogOverlayHero";
import type { InterviewBlock } from "@/fetch/types/interview.type";
import {toDateLabel} from "./PressBlocks"


export default function InterviewBlocks({
  blocks = [] as InterviewBlock[],
  sourceTitle,
}: {
  blocks?: InterviewBlock[];
  sourceTitle?: string;
}) {
  const now = Date.now();
  const canShow = (iso?: string) => {
    if (!iso) return true;
    const ts = Date.parse(iso);
    if (Number.isNaN(ts)) return true;
    return ts <= now;
  };
  const computedLabel = sourceTitle ? `Интервью: ${sourceTitle}` : undefined;
	console.log(blocks);
  return (
    <section className="mt-8 flex flex-col gap-y-[55px]">
      {blocks.map((block: any, idx: number) => {
        switch (block.__typename) {
          case "InterviewOverlayPair":
	   case "InterviewOverlayPairHub": {
            const items = (block.items || [])
              .filter((it: any) => canShow(it.visibleFrom))
              .map((it: any) => ({
                href: it.href || "#",
                image: it.image?.url || "",
                title: it.title || "",
                dateLabel:  (computedLabel ??    (it.linkedInterview?.title      ? `Интервью: ${it.linkedInterview.title}`      : "")) +  (it.visibleFrom ? `<br/><span class="text-[11px] text-[#fff] mt-1 whitespace-pre-line">${toDateLabel(it.visibleFrom)}</span>` : ""),
              }));
            return <BlogOverlayPair key={idx} items={items} />;
          }
          case "InterviewCardGrid": 
	  case "InterviewCardGridHub": {
            const items = (block.items || [])
              .filter((it: any) => canShow(it.visibleFrom))
              .map((it: any) => ({
                href: it.href || "#",
                image: it.image?.url || "",
                title: it.title || "",
                description: it.description || "",
		sourceLabel: computedLabel ?? (it.linkedInterview?.title ? `Интервью: ${it.linkedInterview.title}` : undefined),
                dateLabel: toDateLabel(it.visibleFrom),
              }));
            return <BlogCardGrid key={idx} items={items} isInterview />;
          }
          case "InterviewOverlayHero": 
	  case "InterviewOverlayHeroHub": {
            const it = block;
            if (!canShow(it.visibleFrom)) return null;
            const item = it
              ? {
                  href: it.href || "#",
                  image: it.image?.url || "",
                  title: it.title || "",
                  subtitle: it.subtitle || "",
                  dateLabel:  (computedLabel ??    (it.linkedInterview?.title      ? `Интервью: ${it.linkedInterview.title}`      : "")) +  (it.visibleFrom ? `<br/><span class="text-[11px] text-[#fff] mt-1 whitespace-pre-line">${toDateLabel(it.visibleFrom)}</span>` : ""),
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
