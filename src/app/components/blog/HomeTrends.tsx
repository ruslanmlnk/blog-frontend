import Link from "next/link";
//import Image from "next/image";

export default function HomeTrends({
  title = "Тренды",
  items = [] as any[],
}: {
  title?: string;
  items?: any[];
}) {
  return (
    <div className="bg-white rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-[25px] py-[45px]">
      <h4 className="text-[17px] font-bold text-[#151515] mb-[30px] leadin-[160%]">{title}</h4>
      <div className="space-y-5">
        {items.map((it, i) => (
          <Link key={i} href={`/blog/${it?.article?.slug ?? ''}`} className={`flex gap-[15px] ${i !== items.length - 1 ? 'border-b border-[#E0E0E0]' : ''} pb-[20px]`}>
            <img
              src={it?.article?.bg?.url ?? ''}
              alt={it?.article?.bg?.alt ?? it?.article?.title ?? 'avatar'}
              className="min-w-[75px] w-[75px] h-[75px] rounded-full object-cover"
              loading="lazy"
            />
            <p className="text-[12px] font-semibold text-[#151515] leading-[160%]">
              {it?.article?.title ?? ''}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

