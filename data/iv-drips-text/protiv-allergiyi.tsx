"use server"

export const DripProtivAllergiyi = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 font-sans">
            {/* Оффер */}
            <section className="mb-8 bg-secondary p-6  rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Капельница «Против аллергии»</h1>
                <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                        <span className="mr-2">✓</span> При аллергии на животных
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">✓</span> При пищевой аллергии
                    </li>
                    <li className="flex items-center">
                        <span className="mr-2">✓</span> При аллергии на тополиный пух
                    </li>
                </ul>
            </section>

            {/* Состав и цена */}
            <section className="mb-8 grid md:grid-cols-2 gap-6">
                <div className="bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Состав капельницы:</h2>
                    <p className="mb-2">Калий, магний, натрий, хлор, янтарная кислота, L-лизин,</p>
                    <p>Тиосульфат натрия, Глутамил-Цистеинил-Глицин, Кальция глюконат</p>
                </div>

                <div className="bg-primary p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary-foreground mb-1">1 капельница</h3>
                    <p className="text-2xl font-bold text-primary-foreground mb-4">9 000 ₽</p>
                    <p className="font-semibold text-primary-foreground">При покупке от 6 капельниц:</p>
                    <p className="text-primary-foreground">6-ая капельница в подарок</p>
                </div>
            </section>

            {/* Описание */}
            <section className="mb-8">
                <p className="mb-4">
                    Капельница «Против аллергии» – эффективный метод борьбы с различными проявлениями аллергии. Дает быстрый результат при минимальном риске побочных эффектов.
                </p>
                <p>
                    Процедура исключает нагрузку на ЖКТ и обеспечивает комплексное воздействие на организм при аллергических реакциях.
                </p>
            </section>

            {/* Виды аллергии */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-3">Частые виды аллергии:</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-primary p-4 rounded-lg">
                        <h3 className="font-bold text-primary mb-1">Пищевая аллергия</h3>
                        <p className="text-sm">Кожный зуд, крапивница, возможны анафилактические реакции</p>
                    </div>
                    <div className="border border-primary p-4 rounded-lg">
                        <h3 className="font-bold text-primary mb-1">Поллинозы</h3>
                        <p className="text-sm">Непереносимость цветочной пыльцы, заложенность носа, чихание</p>
                    </div>
                    <div className="border border-primary p-4 rounded-lg">
                        <h3 className="font-bold text-primary mb-1">На животных</h3>
                        <p className="text-sm">Кожные и респираторные реакции</p>
                    </div>
                </div>
            </section>

            {/* Эффект */}
            <section className="mb-8 bg-secondary p-6 rounded-lg">
                <h2 className="text-xl font-bold text-primary mb-3">Эффект от процедуры:</h2>
                <ul className="space-y-2">
                    {[
                        "Ускорение выведения аллергенов из организма",
                        "Нормализация циркуляции крови",
                        "Улучшение работы иммунной системы",
                        "Снижение выраженности аллергических реакций"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Процедура */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-3">Как проводится процедура:</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Пациент размещается на кушетке</li>
                    <li>Медсестра готовит раствор</li>
                    <li>Бережно вводится игла</li>
                    <li>Процедура занимает 30-120 минут</li>
                </ol>
            </section>

            {/* Противопоказания */}
            <section className="mb-8 bg-gray-100 p-6 rounded-lg">
                <h2 className="text-xl font-bold text-primary mb-3">Противопоказания:</h2>
                <ul className="list-disc pl-5 space-y-1">
                    {[
                        "Беременность и лактация",
                        "Возраст до 18 лет",
                        "Тяжелые хронические заболевания",
                        "Индивидуальная непереносимость"
                    ].map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* Итог */}
            <section className="bg-primary p-6 rounded-lg text-center">
                <h2 className="text-xl font-bold text-primary-foreground mb-3">
                    Избавьтесь от симптомов аллергии быстро и безопасно!
                </h2>
                <p className="mb-4 text-primary-foreground">
                    Капельница «Против аллергии» - эффективное решение для возвращения к полноценной жизни без дискомфорта.
                </p>
            </section>
        </div>
    )
}