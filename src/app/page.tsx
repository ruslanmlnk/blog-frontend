export default function Home() {
  return (
    <main className="site-container py-8 md:py-12 text-neutral-900">
      {/* Brand Heading */}
      <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
        PARUBETS ANALYTICS
      </h1>
      <p className="mt-4 text-neutral-600 max-w-3xl">
        Независимый аналитический центр, исследующий политические репрессии, войну и нарушения прав человека в Восточной Европе
      </p>

      {/* Main content grid */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left: Featured article */}
        <div className="md:col-span-8">
          <article className="rounded-2xl overflow-hidden bg-white ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop"
              alt="Featured"
              className="w-full h-[420px] object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="text-xs font-semibold tracking-wide text-neutral-500 mb-3 flex gap-6">
                <span>17 ИЮЛЯ 2023 19:32</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
                94 приговора в месяц по делам о «терроризме» выносят в России. Это в 3,5 раза больше, чем в 2021 году
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                С 2022 года в России наблюдается значительный рост числа дел о «терроризме», который затрагивает российское общество. Уже в 2023 г...
              </p>
            </div>
          </article>

          {/* Article grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <article key={i} className="rounded-xl overflow-hidden bg-white ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop"
                  alt="Article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="text-[11px] font-semibold tracking-wide text-neutral-500 mb-2">19 АВГУСТА 2023 10:03</div>
                  <h3 className="font-extrabold text-lg leading-snug mb-2">
                    Не менее 18,5 тысяч человек осудили в России за дезертирство и самовольное оставление части за время полномасш...
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    За 33 года существования полной и сокращенной службы срочной службы в Украине впервые закончилось осеннее засед...
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Big feature again */}
          <article className="mt-12 rounded-2xl overflow-hidden bg-white ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1600&auto=format&fit=crop"
              alt="Feature"
              className="w-full h-[420px] object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="text-xs font-semibold tracking-wide text-neutral-500 mb-3">17 ИЮЛЯ 2023 19:32</div>
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-3">
                94 приговора в месяц по делам о «терроризме» выносят в России. Это в 3,5 раза больше, чем в 2021 году
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                С 2022 года в России наблюдается значительный рост числа дел о «терроризме», который затрагивает российское общество. Уже в 2023 г...
              </p>
            </div>
          </article>

          {/* Bottom grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <article key={i} className="rounded-xl overflow-hidden bg-white ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                  alt="Article"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <div className="text-[11px] font-semibold tracking-wide text-neutral-500 mb-2">27 АВГУСТА 2023 12:34</div>
                  <h3 className="font-extrabold text-base leading-snug mb-2">
                    Более 300 украинских военных, участвовавших в боях в Курской области, осуждены в России за «терро..."
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">
                    22 августа депутаты заявили о намерениях окружного суда вынести постановление по статье...
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-between text-sm text-neutral-600">
            <span>1 / 3</span>
            <button className="px-4 py-2 rounded-md bg-neutral-900 text-white font-semibold hover:bg-neutral-800">Далее</button>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="md:col-span-4 space-y-8">
          {/* Categories card */}
          <div className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4">
            <h4 className="text-sm font-bold text-neutral-700 mb-3">Категории</h4>
            <div className="space-y-3">
              <button className="w-full h-11 rounded-lg bg-blue-700 text-white font-semibold flex items-center justify-between px-4">
                <span>Украина</span>
                <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">•</span>
              </button>
              <button className="w-full h-11 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 font-semibold flex items-center justify-between px-4">
                Репрессии в России
              </button>
              <button className="w-full h-11 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 font-semibold flex items-center justify-between px-4">
                Политика и выборы
              </button>
              <button className="w-full h-11 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 font-semibold flex items-center justify-between px-4">
                Европа
              </button>
            </div>
          </div>

          {/* Trending card */}
          <div className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4">
            <h4 className="text-sm font-bold text-neutral-700 mb-3">В тренде</h4>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="text-sm text-neutral-700 leading-snug">
                    Не менее 18,5 тысяч человек осудили в России за дезертирство и самовольное оставление части...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
