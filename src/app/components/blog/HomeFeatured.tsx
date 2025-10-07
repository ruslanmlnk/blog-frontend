export default function HomeFeatured() {
  return (
    <article className="mb-5 rounded-[10px] overflow-hidden bg-white ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <img
        src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop"
        alt="Featured"
        className="w-full h-[492.05px] object-cover"
      />
      <div className="py-[35px] px-[10px] md:py-[35px] text-center flex flex-col items-center">
        <div className="text-[12px] font-bold text-[#767676] leading-[8px] text-center">
          17 июля 2025 17:32
        </div>
        <h2 className="text-2xl text-[#151515] md:text-[24px] font-bold leading-[160%] mt-[15px]">
          94 приговора в месяц по делам о «терроризме» выносят<br/>в России. Это в 3,5 раза больше, чем в 2021 году
        </h2>
        <p className="text-center text-[#767676] text-base tracking-[-0.4px] leading-[22px] max-w-[590px] mt-[13px]">
          С 2022 года в России наблюдается значительный рост числа дел о «терроризме», которые рассматривают российские суды. Уже в 2023 г...
        </p>
      </div>
    </article>
  );
}

