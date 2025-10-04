export default function ArticlePage() {
  return (
    <main className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 py-8 md:py-12 text-neutral-900">
      {/* Breadcrumbs (simple) */}
      <nav className="text-sm text-neutral-500 mb-4">Публикации / Украина</nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
        94 приговора в месяц по делам о «терроризме» выносят в России. Это в 3,5 раза больше,
        чем в 2021 году
      </h1>

      {/* Meta */}
      <div className="mt-4 text-sm text-neutral-500">17 июля 2023 19:32 • 8 мин чтения</div>

      {/* Cover */}
      <figure className="mt-6">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop"
          alt="Судебная зала"
          className="w-full rounded-lg ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
        />
        <figcaption className="mt-2 text-xs text-neutral-500">
          Фото: иллюстративное изображение судебного заседания
        </figcaption>
      </figure>

      {/* Body */}
      <article className="mt-8 space-y-4 text-neutral-700 leading-relaxed">
        <p>
          С 2022 года в России наблюдается значительный рост числа дел о «терроризме». Мы изучили
          судебную статистику и открытые данные, чтобы понять динамику и причины этого тренда.
        </p>
        <p>
          В исследовании применялись методы контент-анализа и сопоставления судебных вердиктов с публичными
          заявлениями силовых ведомств. Ниже — ключевые визуализации и выводы исследования.
        </p>
      </article>

      {/* Chart 1 */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-extrabold mb-3">Динамика новых уголовных дел о «терроризме»</h2>
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1500&auto=format&fit=crop"
          alt="График 1"
          className="w-full rounded-md ring-1 ring-neutral-200 shadow-sm"
        />
        <p className="mt-3 text-neutral-600">
          На графике видно ускорение темпов роста с 2022 года и пиковые значения в 2024–2025 годах.
        </p>
      </section>

      {/* Chart 2 */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-extrabold mb-3">Среднее число приговоров по годам</h2>
        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1500&auto=format&fit=crop"
          alt="График 2"
          className="w-full rounded-md ring-1 ring-neutral-200 shadow-sm"
        />
        <ul className="mt-3 list-disc list-inside text-neutral-700">
          <li>Резкий рост после 2022 года.</li>
          <li>Повышение доли дел по ст. 205.2 УК РФ («оправдание терроризма»).</li>
          <li>Стабильный рост в регионах, прилегающих к зоне боевых действий.</li>
        </ul>
      </section>

      {/* Subsections */}
      <section className="mt-10 space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-extrabold">«Терроризм» и пропаганда</h3>
          <p className="mt-2 text-neutral-700">
            Анализ кейсов показывает, что значительная часть дел квалифицируется по «речевым» статьям.
            Это усиливает общую статистику и влияет на общественное восприятие угрозы.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-extrabold">Возраст и социальный профиль осуждённых</h3>
          <p className="mt-2 text-neutral-700">
            Средний возраст постепенно снижается. Среди осуждённых всё чаще встречаются студенты и молодые специалисты,
            вовлечённые в дела по «оправданию терроризма».
          </p>
          <img
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1500&auto=format&fit=crop"
            alt="График 3"
            className="mt-4 w-full rounded-md ring-1 ring-neutral-200 shadow-sm"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="mt-10">
        <h3 className="text-lg md:text-xl font-extrabold">Выводы</h3>
        <p className="mt-2 text-neutral-700">
          Усиление политических статей и смещение акцента на «речевые» составы преступлений объясняют значительную часть роста
          статистики. Мы продолжаем мониторинг по 2025 году и регулярно обновляем показатели.
        </p>
      </section>

      {/* Recommended on blue */}
      <section className="mt-12 -mx-6 sm:-mx-8 md:-mx-10 bg-[#0B4CC0]">
        <div className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 py-8">
          <h4 className="text-white text-xl font-extrabold mb-6">Рекомендованные статьи</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <article key={i} className="bg-white rounded-xl ring-1 ring-neutral-200 shadow-[0_6px_18px_rgba(0,0,0,0.12)] overflow-hidden">
                <img
                  src={
                    i % 2 === 0
                      ? 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1200&auto=format&fit=crop'
                      : 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop'
                  }
                  alt="Recommended"
                  className="w-full h-28 object-cover"
                />
                <div className="p-4">
                  <div className="text-[11px] font-semibold tracking-wide text-neutral-500 mb-1">19 АВГУСТА 2023 10:03</div>
                  <h5 className="font-extrabold text-sm leading-snug">
                    94 приговора в месяц по делам о «терроризме» выносят в России
                  </h5>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
