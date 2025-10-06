export default function InterviewPage() {
  return (
    <main className="text-neutral-900">
      {/* Blue filter bar */}
      <div className="bg-[#0B4CC0]">
        <div className="site-container py-4 flex flex-wrap items-center gap-3 text-white">
          <button className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="text-lg">↩</span>
            Вернуться ко всем новостям
          </button>
          <div className="flex items-center gap-3 ml-auto">
            {['Дождь','Радио Свобода','The Insider Live','Первый Отдел'].map((l, i)=> (
              <span key={i} className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container py-10 md:py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">ИНТЕРВЬЮ</h1>

        {/* Top hero */}
        <article className="rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)] mb-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop"
              alt="Hero Interview"
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

        {/* Row of 3 interview cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src={
                  i === 0
                    ? 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop'
                    : i === 1
                    ? 'https://images.unsplash.com/photo-1517512006864-0b19df9a83f9?q=80&w=1600&auto=format&fit=crop'
                    : 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop'
                }
                alt="Interview"
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <div className="text-[11px] font-semibold tracking-wide text-neutral-600 mb-2">СМИ: РАДИО СВОБОДА</div>
                <h3 className="font-extrabold text-base leading-snug mb-2">
                  Путин игнорирует смерть министра. Массовые обыски в России. Трамп обещает помочь Украине
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">Мессенджер: МАК</p>
                <button className="w-full h-10 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800">
                  Смотреть интервью
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Mid hero */}
        <article className="mt-10 rounded-xl overflow-hidden ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop"
              alt="Hero Interview 2"
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

        {/* Bottom row of cards */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <article key={i} className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.1)] overflow-hidden">
              <img
                src={
                  i === 0
                    ? 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop'
                    : i === 1
                    ? 'https://images.unsplash.com/photo-1517512006864-0b19df9a83f9?q=80&w=1600&auto=format&fit=crop'
                    : 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop'
                }
                alt="Interview"
                className="w-full h-44 object-cover"
              />
              <div className="p-5">
                <div className="text-[11px] font-semibold tracking-wide text-neutral-600 mb-2">СМИ: THE INSIDER LIVE</div>
                <h3 className="font-extrabold text-base leading-snug mb-2">
                  Смерть топ‑менеджеров в «Газпроме»: расследование | Пророчился ФСБ в делах о госизмене | Прослушка
                </h3>
                <p className="text-neutral-700 text-sm leading-relaxed mb-4">Дело о госизмене и шпионаже</p>
                <button className="w-full h-10 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800">
                  Смотреть интервью
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}





