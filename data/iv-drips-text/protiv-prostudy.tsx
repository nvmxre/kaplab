"use server"
export const DripProtivProstudy = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Оффер */}
        <section className="mb-6">
            <h1 className="text-xl font-bold text-primary mb-3">Капельница «Против простуды»</h1>
            <div className="bg-secondary p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">
                    1 процедура: <span className="text-primary">9 000₽</span>
                </p>
                <p>При курсе от 6 процедур — 6-ая процедура в подарок</p>
            </div>
        </section>

        {/* Состав */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Состав:</h2>
            <ul className="list-inside space-y-2 pl-5">
                {[
                    "Витамин С",
                    "Инозина глицил-цистеинил-глутамат",
                    "Этилметилгидроксипиридина сукцинат",
                    "Калий",
                    "Магний",
                    "Натрий",
                    "Хлор",
                    "Янтарная кислота"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </section>

        {/* Длительность */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Длительность:</h2>
            <p>от 30 мин до 2 часов</p>
        </section>

        {/* Описание */}
        <section className="mb-6">
            <p className="mb-4">
                Капельница помогает уменьшить длительность и тяжесть течения болезни, а также восстановиться после нее в кратчайшие сроки.
            </p>
        </section>

        {/* Показания */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Когда нужна процедура?</h2>
            <ul className="list-inside space-y-2 pl-5">
                {[
                    "Повышении температуры тела",
                    "Насморке, першении в горле",
                    "Головной боли",
                    "Ломоте в теле",
                    "Общей слабости",
                    "Потере аппетита"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </section>

        {/* Как проходит */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Как проходит процедура:</h2>
            <ol className="list-inside space-y-2 pl-5">
                <li className="list-decimal">Осмотр пациента и подбор состава</li>
                <li className="list-decimal">Приготовление раствора</li>
                <li className="list-decimal">Введение иглы и настройка системы</li>
                <li className="list-decimal">Контроль состояния во время процедуры</li>
                <li className="list-decimal">Получение рекомендаций</li>
            </ol>
        </section>

        {/* Особенности */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Особенности:</h2>
            <div className="bg-secondary p-4 rounded-lg">
                <ul className="list-inside space-y-2 pl-5">
                    {[
                        "Витамины",
                        "Макро- и микроэлементы",
                        "Иммуномодуляторы",
                        "Антиоксиданты",
                        "Цитопротекторы",
                        "Регидратирующие компоненты"
                    ].map((item, index) => (
                        <li key={index} className="list-disc">{item}</li>
                    ))}
                </ul>
            </div>
        </section>

        {/* Результаты */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Результаты:</h2>
            <ul className="list-inside space-y-2 pl-5">
                {[
                    "Быстрое улучшение состояния",
                    "Снижение температуры",
                    "Уменьшение симптомов",
                    "Ускорение выздоровления",
                    "Восстановление сил"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </section>
    </div>
)