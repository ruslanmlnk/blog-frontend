export default function Blog() {
  return (
    <main className="text-neutral-900">
      {/* Blue filter bar */}
      <div className="bg-[#0B4CC0]">
      <div className="max-w-[1286px] mx-auto px-6 py-4 flex flex-wrap items-center gap-3 text-white">
          <button className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="text-lg">↩</span>
            Вернуться ко всем новостям
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <span className="inline-flex items-center gap-2 h-9 rounded-lg bg-white text-neutral-900 font-semibold px-3 text-sm">
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-[#F9D21A]" /> Украина
            </span>
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">
              Репрессии в России
            </span>
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">
              Политика и выборы
            </span>
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">
              Европа
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1286px] mx-auto px-6 py-10 md:py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">УКРАИНА</h1>

        {/* Top 2 overlay cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <article key={i} className="rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <div className="relative">
                <img
                  src={
                    i === 0
                      ? "https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1600&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
                  }
                  alt="Feature"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[11px] font-semibold opacity-90 mb-2">17 АВГУСТА 2023 16:00</div>
                  <h3 className="text-xl font-extrabold leading-snug">
                    94 приговора в месяц по делам о «терроризме» выносят в России. Это в 3,5 раза больше, чем в 2021 году
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Row of 3 standard cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src={
                  i === 0
                    ? "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop"
                    : i === 1
                    ? "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                }
                alt="Article"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="text-[11px] font-semibold tracking-wide text-neutral-500 mb-2">19 АВГУСТА 2023 10:03</div>
                <h3 className="font-extrabold text-base leading-snug mb-2">
                  Более 300 украинских военных, участвовавших в боях в Курской области, осуждены в России за «терро..."
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  25 августа судом 2-го Западного окружного военного суда вынесен приговор по статье...
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Big overlay card */}
        <article className="mt-10 rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
              alt="Ukraine Feature"
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <div className="text-[11px] font-semibold opacity-90 mb-2">17 АВГУСТА 2023 16:00</div>
              <h3 className="text-2xl font-extrabold leading-snug">Украина</h3>
              <p className="mt-2 text-sm opacity-90">
                Сотни украинских защитников получили сроки за участие в боях в Курской области
              </p>
            </div>
          </div>
        </article>

        {/* Another row of 3 cards */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src={
                  i === 0
                    ? "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
                    : i === 1
                    ? "https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop"
                }
                alt="Article"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="text-[11px] font-semibold tracking-wide text-neutral-500 mb-2">27 АВГУСТА 2023 12:34</div>
                <h3 className="font-extrabold text-base leading-snug mb-2">
                  94 приговора в месяц по делам о «терроризме» выносят в России. Это в 3,5 раза больше, чем в 2021 году
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  С 2022 года в России наблюдается значительный рост числа дел о «терроризме»...
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom overlay pair */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <article key={i} className="rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <div className="relative">
                <img
                  src={
                    i === 0
                      ? "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1600&auto=format&fit=crop"
                  }
                  alt="Feature"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[11px] font-semibold opacity-90 mb-2">17 АВГУСТА 2023 16:00</div>
                  <h3 className="text-xl font-extrabold leading-snug">
                    94 приговора в месяц по делам о «терроризме» выносят в России. Это в 3,5 раза больше, чем в 2021 году
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Pagination */}
        <div className="mt-10 flex items-center justify-between">
          <div className="mx-auto border rounded-full px-6 py-2 text-sm text-neutral-600">1 / 3</div>
          <button className="px-4 py-2 rounded-md bg-neutral-900 text-white font-semibold hover:bg-neutral-800">Далее</button>
        </div>
      </div>
    </main>
  );
}



