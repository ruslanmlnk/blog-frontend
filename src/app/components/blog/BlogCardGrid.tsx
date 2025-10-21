import Link from "next/link";
import Image from "next/image";

export type CardItem = {
  href: string;
  image: string;
  title: string;
  dateLabel?: string;
  description?: string;
  avatar?: string;
  sourceLabel?: string;
};

export default function BlogCardGrid({
  items = [] as CardItem[],
  twoCols = false,
  isInterview = false,
}: {
  items?: CardItem[];
  twoCols?: boolean;
  isInterview?: boolean;
}) {
  return (
    <section
      className={`grid grid-cols-1 ${
        twoCols ? "md:grid-cols-2" : "md:grid-cols-3"
      } gap-[35px]`}
    >
      {items.map((it, i) => (
        <article
          key={i}
          className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
        >
          <Link href={it.href}>
            <div className="relative w-full h-[234px]">
              <Image
                src={it.image}
                alt={it.title}
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Link>

          <div className="flex flex-col flex-1 py-[35px] px-4">
              <div className="mb-[25px]">
                <div className="flex items-center gap-3">
                  {it.avatar ? (<div className="relative w-10 h-10 rounded-full overflow-hidden">
                   <Image
                      src={it.avatar}
                      alt={it.sourceLabel || "source"}
                      fill
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>):''}
                  <div className="flex flex-col">
                    {it.sourceLabel && (
                      <span className="text-[12px] font-bold text-[#767676] uppercase">
                        {it.sourceLabel}
                      </span>
                    )}
                    {it.dateLabel && (
                      <span className="text-[12px] text-[#767676] mt-1 whitespace-pre-line">
                        {it.dateLabel}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            

            <h3 className="font-bold text-base leading-[160%] mb-[25px]">
              <Link href={it.href}>
                {it.title.length > 112
                  ? `${it.title.slice(0, 112)}...`
                  : it.title}
              </Link>
            </h3>

            {it.description && (
              <p className="text-[#767676] text-base leading-[22px] tracking-[-0.4px] mb-auto">
                {it.description.length > 75
                  ? `${it.description.slice(0, 75)}...`
                  : it.description}
              </p>
            )}

            {isInterview && (
              <div className="mt-4">
                <Link
                  href={it.href}
                  className="w-full h-10 inline-flex items-center justify-center rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800"
                >
                  Смотреть интервью
                </Link>
              </div>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
