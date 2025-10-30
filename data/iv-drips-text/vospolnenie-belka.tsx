"use server"

export const DripVospolnenieBelka = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero Section - Simplified */}
            <div className="bg-primary p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-secondary px-3 py-1 rounded-full text-sm">
        Экспресс чек-ап
      </span>
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm">
        Консультация терапевта
      </span>
                </div>
            </div>

            {/* Composition & Pricing */}
            <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-secondary p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-primary mb-3">Состав:</h2>
                        <p className="mb-2">L-изолейцин, L-лейцин, L-лизин, L-метионин, L-фенилаланин</p>
                        <p>L-треонин, L-триптофан, L-валин, L-аргинин, L-гистидин, глицин</p>
                        <h3 className="text-lg font-semibold text-primary mt-4 mb-1">Длительность:</h3>
                        <p>от 30 мин до 2 часов</p>
                    </div>

                    <div className="bg-secondary p-6 rounded-lg">
                        <div className="mb-4 pb-4 border-b border-secondary">
                            <h3 className="text-lg font-semibold text-primary">1 процедура</h3>
                            <p className="text-2xl font-bold text-primary">8 000 ₽</p>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="font-bold text-primary">При курсе от 6 процедур:</p>
                            <p className="text-primary">6-ая процедура в подарок</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="mb-4">
                        Комплекс грамотно подобранных аминокислот помогает восполнить дефициты, улучшить самочувствие и восстановить энергию.
                    </p>
                    <p>
                        Благотворно влияет на состояние кожи, волос и ногтей, обеспечивая выраженный омолаживающий эффект.
                    </p>
                </div>

                {/* Benefits */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary mb-3">Основные функции:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                <span>Метаболические процессы</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                <span>Образование новых клеток</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                <span>Работа нервной системы</span>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                <span>Иммунные реакции</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                <span>Умственная деятельность</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                <span>Защита от свободных радикалов</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Effects */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-primary mb-3">Результаты:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {title: "Для кожи", desc: "Улучшение цвета и упругости"},
                            {title: "Для волос", desc: "Уменьшение выпадения"},
                            {title: "Для ногтей", desc: "Укрепление пластин"},
                            {title: "Для организма", desc: "Прилив энергии"}
                        ].map((item, index) => (
                            <div key={index} className="border border-secondary p-4 rounded-lg">
                                <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indications */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Показания:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Постоянная усталость</li>
                            <li>Снижение мотивации</li>
                            <li>Ослабление иммунитета</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Нарушения пищеварения</li>
                            <li>Проблемы с кожей</li>
                            <li>Выпадение волос</li>
                        </ul>
                    </div>
                </div>

                {/* Contraindications */}
                <div className="mb-8 bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Противопоказания:</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Возраст до 18 лет</li>
                        <li>Беременность и лактация</li>
                        <li>Серьезные хронические заболевания</li>
                    </ul>
                </div>

                {/* Final Section */}
                <div className="text-center p-6 bg-primary text-white rounded-lg">
                    <p>
                        Курс процедур способствует омоложению и улучшению общего состояния здоровья.
                    </p>
                </div>
            </div>
        </div>
    )
}