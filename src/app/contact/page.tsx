export default function ContactPage() {
  return (
    <main className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 py-8 md:py-12 text-neutral-900">
      {/* Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
        СВЯЖИТЕСЬ С НАМИ
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-base sm:text-lg text-neutral-600 leading-relaxed">
        Если у вас есть вопросы, предложения по сотрудничеству или вы хотите поделиться информацией — свяжитесь с нами через форму ниже. Мы открыты к партнерствам, экспертным консультациям и совместным проектам в области политики и прав человека. Все сообщения рассматриваются конфиденциально.
      </p>

      {/* Card with form + image */}
      <section className="mt-10 md:mt-14">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-5 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Form */}
          <form className="order-2 md:order-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 content-start">
            <input
              type="text"
              placeholder="Имя"
              className="col-span-1 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              className="col-span-1 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
            <input
              type="email"
              placeholder="Почта"
              className="md:col-span-2 w-full rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
            <textarea
              placeholder="Сообщение"
              rows={5}
              className="md:col-span-2 w-full resize-y rounded-lg bg-neutral-100 border border-neutral-200 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
            <button
              type="button"
              className="md:col-span-2 inline-flex items-center justify-center h-12 rounded-lg bg-blue-700 text-white font-semibold tracking-wide hover:bg-blue-800 transition-colors"
            >
              ОТПРАВИТЬ
            </button>
          </form>

          {/* Image area */}
          <div className="order-1 md:order-2 relative rounded-xl overflow-hidden min-h-[220px] md:min-h-[360px] bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
              alt="Contact Visual"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-md ring-1 ring-neutral-200 flex items-center justify-center">
              <span className="text-blue-700 text-xl">↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer moved to global layout */}
    </main>
  );
}
