"use server"
export const DripProtivGerpesa = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Оффер */}
        <section className="mb-6 text-center">
            <h1 className="text-xl font-bold text-primary mb-3">
                Эффективное подавление вируса герпеса с курсом капельниц
            </h1>
            <div className="bg-secondary p-4 rounded-lg mb-4">
                <p className="font-semibold mb-2">
                    1 процедура: <span className="text-primary">9 000₽</span>
                </p>
                <p>При курсе от 6 процедур — 6-ая процедура в подарок</p>
            </div>
        </section>

        {/* Описание */}
        <section className="mb-6">
            <p className="mb-4">
                Эффективный способ подавления вируса герпеса. Стимулирует иммунный ответ, устраняет симптомы и продлевает период ремиссии.
            </p>
        </section>

        {/* Состав */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Состав:</h2>
            <ul className="list-inside space-y-2 pl-5">
                {['Калий', 'Магний', 'Натрий', 'Хлор', 'Янтарная кислота', 'L-лизин', 'Глутамил-Цистеинил-Глицин', 'Витамин С'].map((item) => (
                    <li key={item} className="list-disc">{item}</li>
                ))}
            </ul>
        </section>

        {/* Длительность */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Длительность:</h2>
            <p>от 30 мин до 2 часов</p>
        </section>

        {/* Как проводится */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Как проводится</h2>
            <ol className="list-inside space-y-2 pl-5">
                <li className="list-decimal">Приготовление раствора</li>
                <li className="list-decimal">Введение иглы в вену</li>
                <li className="list-decimal">Настройка скорости введения</li>
            </ol>
        </section>

        {/* Показания и противопоказания */}
        <section className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
                <h2 className="text-xl font-bold text-primary mb-3">Показания</h2>
                <ul className="list-inside space-y-2 pl-5">
                    {[
                        "Первые симптомы герпеса",
                        "Профилактика обострений",
                        "Частые обострения",
                        "Иммунодефицитные состояния"
                    ].map((item, index) => (
                        <li key={index} className="list-disc">{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-bold text-primary mb-3">Противопоказания</h2>
                <ul className="list-inside space-y-2 pl-5">
                    {[
                        "Беременность",
                        "Лактация",
                        "Возраст до 18 лет",
                        "Нарушения свертываемости крови"
                    ].map((item, index) => (
                        <li key={index} className="list-disc">{item}</li>
                    ))}
                </ul>
            </div>
        </section>

        {/* Результаты */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">Результаты</h2>
            <ul className="list-inside space-y-2 pl-5">
                {[
                    "Быстрое устранение симптомов",
                    "Увеличение периода ремиссии",
                    "Профилактика осложнений",
                    "Уменьшение частоты простуд",
                    "Улучшение общего состояния",
                    "Повышение жизненного тонуса"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </section>

        {/* О процедуре */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-3">О процедуре</h2>
            <div className="bg-secondary p-4 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Компоненты:</h3>
                <ul className="list-inside space-y-2 pl-5">
                    <li className="list-disc">Аминокислоты - иммуностимулирующий эффект</li>
                    <li className="list-disc">Антиоксиданты - выводят вредные вещества</li>
                    <li className="list-disc">Витамин С - стимулирует иммунитет</li>
                    <li className="list-disc">Минеральные вещества</li>
                </ul>
            </div>
        </section>
    </div>
)