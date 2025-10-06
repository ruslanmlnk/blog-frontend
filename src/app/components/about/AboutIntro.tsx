type Item = {
  title: string;
  text: string;
};

export default function AboutIntro({
  lead,
  items,
}: {
  lead: string;
  items: Item[];
}) {
  return (
    <section>
      <h2 className="mt-10 md:mt-[45px] text-[20px] md:text-[24px] font-bold whitespace-pre-line leading-[160%]">
        {lead.replace(/\\n/g, '\n')}
      </h2>

      <div className="mt-10 md:mt-[45px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-[70px] md:gap-y-[21px]">
        {items.map((it, idx) => (
          <div key={idx}>
            <h3 className="text-[#0243A5] font-bold tracking-[-0.4px] text-base">{it.title}</h3>
            <p className="mt-4 mb-6 text-[14px] tracking-[-0.4px] leading-[165%]">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

