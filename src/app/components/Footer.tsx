export default function Footer() {
  return (
    <footer className="mt-22">
      {/* Upper footer */}
      <div className="site-container">
        <div className="md:flex md:items-start">
          {/* Newsletter (fixed width 581px) */}
          <div className="w-full md:w-[581px]">
            <h3 className="text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">
              РАССЫЛКА НОВОСТЕЙ
            </h3>
            <p className="mt-[18px] text-[#000] text-[14px]">
              Подпишитесь на еженедельную рассылку, чтобы получать актуальные новости
            </p>
            <div className="mt-4">
              <div className="w-full flex items-center gap-3 bg-neutral-100 border border-neutral-200 rounded-lg px-2 md:px-4 py-3 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]">
                <input
                  type="email"
                  placeholder="Введите свой адрес электронной почты"
                  className="flex-1 bg-transparent outline-none text-[15px] placeholder-neutral-500 px-1"
                />
                <button
                  className="shrink-0 h-10 px-4 rounded-md bg-blue-700 text-white font-semibold uppercase text-[10px] md:text-[13px] tracking-wide hover:bg-blue-800 transition-colors"
                >
                  подписаться
                </button>
              </div>
            </div>
          </div>

          {/* Right cluster (ml 200px, width 505px -> two cols 252px + 1px border + 252px) */}
          <div className="w-full not-md:gap-10 md:w-[505px] md:ml-[200px] flex flex-col not-md:my-[20px] gap-y-[20px] md:flex-row min-h-[330px]">
            {/* Details column (252px, with left divider) */}
            <div className=" md:w-[314px] box-border md:border-l md:border-neutral-200 md:pl-10">
              <h3 className="text-[14px] md:text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">
                ДЕТАЛЬНЕЕ
              </h3>
              <ul className="mt-3 space-y-[10px] leading-[27px] text-[#000] whitespace-nowrap">
                <li className="hover:text-neutral-950 cursor-pointer">О центре</li>
                <li className="hover:text-neutral-950 cursor-pointer">Публикации</li>
                <li className="hover:text-neutral-950 cursor-pointer">В СМИ</li>
                <li className="hover:text-neutral-950 cursor-pointer">Интервью</li>
                <li className="hover:text-neutral-950 cursor-pointer">Контакты</li>
              </ul>
            </div>
            {/* Categories column (252px, with left divider) */}
            <div className=" md:w-[191px] box-border md:border-l md:border-neutral-200 md:pl-10">
              <h3 className="text-[14px] md:text-[12px] font-extrabold text-neutral-700 uppercase tracking-widest">
                КАТЕГОРИИ
              </h3>
              <ul className="mt-3 space-y-[10px] leading-[27px] text-[#000] whitespace-nowrap">
                <li className="hover:text-neutral-950 cursor-pointer">Украина</li>
                <li className="hover:text-neutral-950 cursor-pointer">Репрессии в России</li>
                <li className="hover:text-neutral-950 cursor-pointer">Политика и выборы</li>
                <li className="hover:text-neutral-950 cursor-pointer">Европа</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E0E0E0]">
        <div className="site-container not-md:text-center not-md:gap-2 not-md:py-[20px] md:h-[117px] flex not-md:flex-col items-center justify-between text-sm text-neutral-600">
          <a className="hover:text-neutral-900" href="#">Политика конфиденциальности</a>
          <div>© 2025 Parubets Analytics. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
}

