"use server"

export const DripVinoslivostKNagruzkam = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero Section */}
            <div className="bg-primary p-6 text-primary-foreground">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Выносливость к нагрузкам</h1>
                        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm">
            Экспресс чек-ап
          </span>
                            <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm">
            Консультация терапевта
          </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Composition & Pricing */}
            <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-secondary p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-primary mb-3">Состав:</h2>
                        <p className="mb-2">Витамин В2, Витамин B3, Инозин</p>
                        <p>Янтарная кислота, Мельдоний, Витамины В6, В12</p>
                        <h3 className="text-lg font-semibold text-primary mt-4 mb-1">Длительность:</h3>
                        <p>от 30 мин до 2 часов</p>
                    </div>

                    <div className="bg-secondary p-6 rounded-lg">
                        <div className="mb-4 pb-4 border-b border-primary">
                            <h3 className="text-lg font-semibold text-primary">1 процедура</h3>
                            <p className="text-2xl font-bold text-primary">9 000 ₽</p>
                        </div>
                        <div className="p-4 bg-primary text-primary-foreground rounded-lg">
                            <p className="font-bold">При курсе от 6 процедур:</p>
                            <p>6-ая процедура в подарок</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="mb-4">
                        Специальный состав для восстановления после тренировок, повышения выносливости и поддержки сердечно-сосудистой системы.
                    </p>
                </div>

                {/* Benefits */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Польза:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {title: "Энергетический обмен", desc: "Активизация на клеточном уровне"},
                            {title: "Сердечно-сосудистая система", desc: "Укрепление сердечной мышцы"},
                            {title: "Метаболизм", desc: "Ускорение и выведение продуктов распада"},
                            {title: "Восстановление", desc: "Быстрое восстановление после нагрузок"}
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-primary">
                                <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indications */}
                <div className="mb-8 bg-primary p-6 text-primary-foreground rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Показания:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Интенсивные тренировки</li>
                            <li>Подготовка к соревнованиям</li>
                            <li>Физические перегрузки</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Умственное переутомление</li>
                            <li>Снижение выносливости</li>
                            <li>Нарушение водного баланса</li>
                        </ul>
                    </div>
                </div>

                {/* Why Us */}
                <div className="mb-8 bg-primary p-6 text-primary-foreground rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Преимущества:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Индивидуальный подбор состава</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Сертифицированные препараты</span>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Профессиональное сопровождение</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Возможность проведения на дому</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Procedure */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Этапы процедуры:</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Консультация врача</li>
                        <li>Приготовление раствора</li>
                        <li>Введение иглы</li>
                        <li>Введение раствора</li>
                        <li>Получение рекомендаций</li>
                    </ol>
                </div>

                {/* Contraindications */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Противопоказания:</h2>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Беременность и лактация</li>
                        <li>Аллергия на компоненты</li>
                        <li>Нарушения свертываемости крови</li>
                        <li>Почечная недостаточность</li>
                        <li>Возраст до 18 лет</li>
                    </ul>
                </div>

                {/* Final Section */}
                <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg">
                    <p className="font-bold">
                        Повысьте свою выносливость уже сегодня!
                    </p>
                </div>
            </div>
        </div>
    )
}