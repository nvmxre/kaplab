"use server"
export const ProgramWomenHealth = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Оффер */}
        <section className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-primary mb-3">
                Верните себе сияние, энергию и баланс с курсом капельниц «Женское Здоровье»!
            </h1>
            <div className="bg-secondary p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">
                    Чек-ап Женское здоровье + первая капельница: <span className="text-primary">7 990₽</span> вместо <span className="line-through">25 000₽</span>
                </p>
                <div className="text-left">
                    <p className="mb-1">• Общий анализ крови с лейкоцитарной формулой</p>
                    <p className="mb-1">• Биохимический анализ крови</p>
                    <p className="mb-1">• Анализ на витамины D, B9, B12, ТТГ</p>
                    <p className="mb-1">• Консультация врача</p>
                    <p>• Первая капельница курса</p>
                </div>
            </div>
        </section>

        {/* Описание */}
        <section className="mb-8">
            <p className="mb-4">
                Преобразите свое самочувствие и внешность с помощью уникальной внутривенной инфузии, созданной специально для женщин! Наш комплекс борется с гормональными нарушениями, восполняет дефицит витаминов, замедляет старение и возвращает уверенность в себе.
            </p>

            <h2 className="text-xl font-bold text-primary mb-3">Кому подойдет наш комплекс?</h2>
            <ul className="list-inside space-y-2 pl-5">
                <li className="list-disc">Гормональные скачки: ранний климакс, пременопауза, эндометриоз</li>
                <li className="list-disc">Усталость и стресс: хроническая усталость, бессонница, выгорание</li>
                <li className="list-disc">Проблемы кожи: морщины, дряблость, пигментация, акне</li>
                <li className="list-disc">Нарушения метаболизма и веса</li>
            </ul>
        </section>

        {/* Результаты */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Что вы получите уже после первого сеанса?</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {[
                    "Спокойствие вместо приливов — нормализация гормонального фона",
                    "Сияние молодой кожи — разглаживание морщин и осветление пигментации",
                    "Энергия 24/7 — витамины группы B против усталости",
                    "Защита изнутри — детоксикация и укрепление иммунитета",
                    "Ускоренный метаболизм — контроль веса и уровня сахара"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Состав */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Инновационный внутривенный комплекс:</h2>
            <div className="space-y-4">
                {[
                    "Глутатион: детоксикация, антиоксидантная защита, омоложение кожи",
                    "Комплекс аминокислот: восстановление белкового баланса",
                    "Тиоктовая кислота: контроль сахара, антиоксидантное действие",
                    "Гепатопротектор: поддержка печени",
                    "Витаминный комплекс: энергия и метаболизм"
                ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-3">
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Преимущества */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Преимущества терапии:</h2>
            <ul className="list-inside space-y-2 pl-5">
                {[
                    "Гормональный баланс — уменьшение симптомов климакса",
                    "Омоложение кожи — улучшение эластичности",
                    "Энергия и жизненные силы — снижение утомляемости",
                    "Детоксикация организма — очищение печени",
                    "Укрепление иммунитета"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </section>

        {/* Цены */}
        <section className="mb-8 bg-secondary p-4 rounded-lg">
            <h2 className="text-xl font-bold text-primary mb-2">Подарите себе обновление уже сегодня!</h2>
            <p className="mb-2">• Чек-ап + первая капельница — 7 990₽ вместо 25 000₽</p>
            <p>• Капельница «Женское здоровье» — 12 000₽</p>
        </section>

        {/* Противопоказания */}
        <section className="p-4 bg-gray-50 rounded-lg">
            <h2 className="text-lg font-bold text-primary mb-2">Противопоказания:</h2>
            <ul className="space-y-1 pl-5">
                {[
                    "Беременность и лактация",
                    "Онкологические заболевания",
                    "Возраст до 18 лет",
                    "Аллергия на компоненты",
                    "Обострение хронических заболеваний"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </section>
    </div>
)