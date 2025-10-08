//import Image from "next/image";

type HomeFeaturedProps = {
  image: string;
  alt?: string;
  dateLabel: string;
  title: string; // Can contain <br/>; rendered as HTML
  description: string;
};

export default function HomeFeatured({
  image,
  alt = "Featured",
  dateLabel,
  title,
  description,
}: HomeFeaturedProps) {
  return (
    <article className="mb-5 rounded-[10px] overflow-hidden bg-white ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <img src={image} alt={alt} className="w-full h-auto md:h-[492.05px] object-cover" />
      <div className="py-[35px] px-[10px] md:py-[35px] text-center flex flex-col items-center">
        <div className="text-[12px] font-bold text-[#767676] leading-[8px] text-center">{dateLabel}</div>
        <h2
          className="text-[18px] text-[#151515] md:text-[24px] font-bold leading-[160%] mt-[15px]"
          // Title can include simple HTML like <br/>
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-center text-[#767676] text-base tracking-[-0.4px] leading-[22px] max-w-[590px] mt-[13px]">
          {description}
        </p>
      </div>
    </article>
  );
}

