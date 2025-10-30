import Link from "next/link";
import Image from "next/image";

export default function HomeTrends({
  title = "Тренды",
  items = [] as any[],
}: {
  title?: string;
  items?: any[];
}) {
  const now = Date.now();
  const canShow = (iso?: string) => {
    if (!iso) return true;
    const ts = Date.parse(iso);
    if (Number.isNaN(ts)) return true;
    return ts <= now;
  };

  return (
    <div className="bg-white rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-[25px] py-[45px]">
      <h4 className="text-[17px] font-bold text-[#151515] mb-[30px] leading-[160%]">{title}</h4>
      <div className="space-y-5">
        {items
          .filter((it) => canShow(it?.visibleFrom))
          .map((it, i) => (
            <Link
              key={i}
              href={`/blog/${it?.article?.slug ?? ""}`}
              className={`flex gap-[15px] ${
                i !== items.length - 1 ? "border-b border-[#E0E0E0]" : ""
              } pb-[20px]`}
            >
              <div className="relative min-w-[75px] w-[75px] h-[75px] rounded-full overflow-hidden">
                <Image
                  src={it?.article?.bg?.url ?? ""}
                  alt={it?.article?.bg?.alt ?? it?.article?.title ?? "avatar"}
                  fill
                  className="object-cover rounded-full"
                  sizes="75px"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[12px] font-semibold text-[#151515] leading-[160%]">
                  {it?.article?.title ?? ""}
                </p>
                {it?.article?.description && (
                  <p className="text-[11px] text-[#666] leading-[150%] mt-[4px]">
                    {it.article.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

