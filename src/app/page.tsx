import CategoriesPanel from "@/app/components/blog/CategoriesPanel";
import BlogCardGrid from "@/app/components/blog/BlogCardGrid";

import HomeFeatured from "@/app/components/blog/HomeFeatured";

export default function Home() {
  return (
    <main className="site-container py-8 md:py-12 text-neutral-900">
      {/* Brand Heading */}
      <h1 className="text-4xl md:text-[109px] font-bold">
        PARUBETS ANALYTICS
      </h1>
      <p className="mt-4 pl-[9px] text-[#151515] text-[18.7px] leading-[22px] tracking-[-0.4px]">
        Независимый аналитический центр, исследующий политические репрессии, войну и нарушения прав человека в Восточной Европе
      </p>

      {/* Main content grid */}
      <section className="mt-[74px] grid grid-cols-1 md:grid-cols-[828.5px_415px] md:gap-[36px] gap-[36px]">
        {/* Left: Featured article */}
        <div className="flex flex-col gap-[55px]">
          <HomeFeatured
            image="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop"
            alt="Featured"
            dateLabel="17 июля 2025 17:32"
            title={`94 приговора в месяц по делам о «терроризме» выносят<br/>в России. Это в 3,5 раза больше, чем в 2021 году`}
            description="С 2022 года в России наблюдается значительный рост числа дел о «терроризме», которые рассматривают российские суды. Уже в 2023 г..."
          />

          {/* Article grid (2 cols) */}
<BlogCardGrid
twoCols
items={[
{
href: '#',
image:
'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
dateLabel: '19 АВГУСТА 2023 10:03',
title:
'Не менее 18,5 тысяч человек осудили в России за дезертирство и самовольное оставление части за время полномасш...',
description:
'За 33 года существования полной и сокращенной службы срочной службы в Украине впервые закончилось осеннее засед...',
},
{
href: '#',
image:
'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
dateLabel: '19 АВГУСТА 2023 10:03',
title:
'Не менее 18,5 тысяч человек осудили в России за дезертирство и самовольное оставление части за время полномасш...',
description:
'За 33 года существования полной и сокращенной службы срочной службы в Украине впервые закончилось осеннее засед...',
},
{
href: '#',
image:
'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
dateLabel: '19 АВГУСТА 2023 10:03',
title:
'Не менее 18,5 тысяч человек осудили в России за дезертирство и самовольное оставление части за время полномасш...',
description:
'За 33 года существования полной и сокращенной службы срочной службы в Украине впервые закончилось осеннее засед...',
},
{
href: '#',
image:
'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop',
dateLabel: '19 АВГУСТА 2023 10:03',
title:
'Не менее 18,5 тысяч человек осудили в России за дезертирство и самовольное оставление части за время полномасш...',
description:
'За 33 года существования полной и сокращенной службы срочной службы в Украине впервые закончилось осеннее засед...',
},
]}
/>

          

          {/* Pagination */}
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span>1 / 3</span>
            <button className="px-4 py-2 rounded-md bg-neutral-900 text-white font-semibold hover:bg-neutral-800">Далее</button>
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="space-y-8">
          {/* Categories card */}
          <CategoriesPanel />

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
