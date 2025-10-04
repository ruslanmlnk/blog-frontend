export default function Footer() {
  return (
    <footer className="mt-24">
      {/* Upper footer */}
      <div className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-extrabold tracking-widest text-neutral-700 uppercase">
              РАССЫЛКА НОВОСТЕЙ
            </h3>
            <p className="mt-3 text-neutral-600">
              Подпишитесь на еженедельную рассылку, чтобы получать актуальные новости
            </p>
            <div className="mt-4">
              <div className="flex items-center gap-3 bg-neutral-100 border border-neutral-200 rounded-lg px-3 py-2.5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)] max-w-xl">
                <input
                  type="email"
                  placeholder="Введите свой адрес электронной почты"
                  className="flex-1 bg-transparent outline-none text-[15px] placeholder-neutral-500 px-1"
                />
                <button
                  className="shrink-0 h-10 px-4 rounded-md bg-blue-700 text-white font-semibold uppercase text-[13px] tracking-wide hover:bg-blue-800 transition-colors shadow-[0_2px_0_rgba(0,0,0,0.15)]"
                >
                  подписаться
                </button>
              </div>
            </div>
          </div>

          {/* Divider column: Details */}
          <div className="md:border-l md:border-neutral-200 md:pl-10">
            <h3 className="text-xs font-extrabold tracking-widest text-neutral-700 uppercase">
              ДЕТАЛЬНЕЕ
            </h3>
            <ul className="mt-3 space-y-2 text-neutral-800">
              <li className="hover:text-neutral-950 cursor-pointer">О центре</li>
              <li className="hover:text-neutral-950 cursor-pointer">Публикации</li>
              <li className="hover:text-neutral-950 cursor-pointer">В СМИ</li>
              <li className="hover:text-neutral-950 cursor-pointer">Интервью</li>
              <li className="hover:text-neutral-950 cursor-pointer">Контакты</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-extrabold tracking-widest text-neutral-700 uppercase">
              КАТЕГОРИИ
            </h3>
            <ul className="mt-3 space-y-2 text-neutral-800">
              <li className="hover:text-neutral-950 cursor-pointer">Украина</li>
              <li className="hover:text-neutral-950 cursor-pointer">Репрессии в России</li>
              <li className="hover:text-neutral-950 cursor-pointer">Политика и выборы</li>
              <li className="hover:text-neutral-950 cursor-pointer">Европа</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-[1286px] mx-auto px-6 sm:px-8 md:px-10 py-5 flex items-center justify-between text-sm text-neutral-600">
          <a className="hover:text-neutral-900" href="#">Политика конфиденциальности</a>
          <div>© 2025 Parubets Analytics. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
}
