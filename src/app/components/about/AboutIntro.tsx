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
      <h2 className="mt-10 md:mt-12 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug tracking-tight">
        {lead}
      </h2>

      <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
        {items.map((it, idx) => (
          <div key={idx}>
            <h3 className="text-[#0B4CC0] font-extrabold uppercase tracking-wide text-sm">{it.title}</h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

