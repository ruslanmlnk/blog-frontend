import BlogOverlayHero from "@/app/components/blog/BlogOverlayHero";
import BlogOverlayPair from "@/app/components/blog/BlogOverlayPair";
import BlogCardGrid from "@/app/components/blog/BlogCardGrid";

export default function Press() {
  return (
    <main className="text-neutral-900">
      {/* Blue filter bar (static for now) */}
      <div className="bg-[#0B4CC0]">
        <div className="site-container py-4 flex flex-wrap items-center gap-3 text-white">
          <button className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="text-lg">※</span>
            Фильтры публикаций
          </button>
          <div className="flex items-center gap-3 ml-auto">
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">Акцент</span>
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">Длинные материалы</span>
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">Аналитика</span>
            <span className="inline-flex items-center h-9 rounded-lg bg-white/10 text-white font-semibold px-3 text-sm">Обновления</span>
          </div>
        </div>
      </div>

      <div className="site-container py-10 md:py-12">
        {/* Page title */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">В СМИ</h1>

        {/* Hero feature (BlogOverlayHero) */}
        <div className="mb-8">
          <BlogOverlayHero
            item={{
              href: "#",
              image:
                "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop",
              dateLabel: "СМИ: Первый Отдел",
              title: "Шпионское ПО Monokle",
              subtitle:
                "Как программист сорвал спецоперацию ФСБ и раскрыл их важнейшую тайну",
            }}
          />
        </div>

        {/* 3-column grid of cards (BlogCardGrid) */}
        <div>
          <BlogCardGrid
            items={[
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1600&auto=format&fit=crop',
                dateLabel: '10 АВГ 2025',
                title: 'Исследователи зафиксировали значительный рост числа дел о «терроризме»',
                description: 'С 2022 года в России наблюдается значительный рост числа дел о «терроризме»...'
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/graphic-design/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
                dateLabel: '10 АВГ 2025',
                title: 'Данные указывают на новый всплеск репрессий в регионах',
                description: 'С 2022 года в России наблюдается значительный рост числа дел о «терроризме»...'
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
                dateLabel: '10 АВГ 2025',
                title: 'Аналитики отмечают рост дел по «экстремизму»',
                description: 'С 2022 года в России наблюдается значительный рост числа дел о «терроризме»...'
              },
            ]}
          />
        </div>

        {/* Two overlay features side-by-side (BlogOverlayPair) */}
        <div className="mt-10">
          <BlogOverlayPair
            items={[
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=1600&auto=format&fit=crop',
                dateLabel: 'СМИ: THE INSIDER',
                title: 'Не менее 18,5 тысяч человек осудили в России за дезертирство',
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1600&auto=format&fit=crop',
                dateLabel: 'СМИ: THE INSIDER',
                title: 'Не менее 18,5 тысяч человек осудили в России за дезертирство',
              },
            ]}
          />
        </div>

        {/* International grid (BlogCardGrid) */}
        <div className="mt-10">
          <BlogCardGrid
            items={[
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
                dateLabel: '07 АВГ 2025',
                title: 'Stalin Makes a Comeback in Putin’s Wartime Crackdown on Dissent',
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
                dateLabel: '07 АВГ 2025',
                title: 'European outlets cover new human rights report',
              },
              {
                href: '#',
                image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
                dateLabel: '07 АВГ 2025',
                title: 'Global media highlights legal crackdown statistics',
              },
            ]}
          />
        </div>

        {/* Bottom hero feature (BlogOverlayHero) */}
        <div className="mt-12">
          <BlogOverlayHero
            item={{
              href: '#',
              image:
                'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1600&auto=format&fit=crop',
              dateLabel: 'СМИ: Первый Отдел',
              title: 'Шпионское ПО Monokle',
              subtitle:
                'Как программист сорвал спецоперацию ФСБ и раскрыл их важнейшую тайну',
            }}
          />
        </div>
      </div>
    </main>
  );
}
