export default function Press() {
  return (
    <main className="text-neutral-900">
      {/* Blue filter bar */}
      <div className="bg-[#0B4CC0]">
        <div className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 py-4 flex flex-wrap items-center gap-3 text-white">
          <button className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="text-lg">↩</span>
            Вернуться ко всем новостям
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">
              Украина
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

      <div className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 py-10 md:py-12">
        {/* Page title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8">
          МЫ В СМИ
        </h1>

        {/* Hero feature */}
        <article className="rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] mb-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop"
              alt="Feature"
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-[11px] font-semibold opacity-90 mb-2">СМИ: ПЕРВЫЙ ОТДЕЛ</div>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Шпионское ПО Monokle. Как программист сорвал спецоперацию ФСБ и раскрыл их важнейшую тайну
              </h2>
            </div>
          </div>
        </article>

        {/* 3-column grid of cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <img
                src={
                  i % 3 === 0
                    ? "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop"
                    : i % 3 === 1
                    ? "https://images.unsplash.com/graphic-design/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
                }
                alt="Press"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-neutral-600 font-semibold mb-2">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full" />
                  СМИ: ПЕРВЫЙ ОТДЕЛ
                  <span className="ml-auto">10 ИЮНЯ 2025</span>
                </div>
                <h3 className="font-extrabold text-base leading-snug">
                  Как нарушались права адвокатов в 2024 году
                </h3>
              </div>
            </article>
          ))}
        </section>

        {/* Two overlay features side-by-side */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <article key={i} className="rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <div className="relative">
                <img
                  src={
                    i === 0
                      ? "https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1600&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1600&auto=format&fit=crop"
                  }
                  alt="Feature"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[11px] font-semibold opacity-90 mb-2">СМИ: THE INSIDER</div>
                  <h3 className="text-xl font-extrabold leading-snug">
                    Не менее 18,5 тысяч человек осудили в России за дезертирство и самовольное оставление части
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* International grid */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <article key={i} className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src={
                  i % 3 === 0
                    ? "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                    : i % 3 === 1
                    ? "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
                }
                alt="Intl"
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-neutral-600 font-semibold mb-2">
                  <span className="inline-block w-2 h-2 bg-black rounded-full" />
                  CNN: THE INSIDER
                  <span className="ml-auto">07 ИЮНЯ 2025</span>
                </div>
                <h3 className="font-extrabold text-base leading-snug">
                  Stalin Makes a Comeback in Putin’s Wartime Crackdown on Dissent
                </h3>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom hero feature */}
        <article className="mt-12 rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop"
              alt="Feature"
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-[11px] font-semibold opacity-90 mb-2">СМИ: ПЕРВЫЙ ОТДЕЛ</div>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Шпионское ПО Monokle. Как программист сорвал спецоперацию ФСБ и раскрыл их важнейшую тайну
              </h2>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
