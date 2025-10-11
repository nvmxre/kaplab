"use server"

export const ProgramMenHealth = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Оффер */}
        <section className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-primary mb-3">
                Курс капельниц «Мужское здоровье»
            </h1>
            <div className="bg-secondary p-4 rounded-lg mb-4">
                <p className="font-semibold">
                    + консультация и сопровождение врача в подарок
                </p>
                <p className="text-lg">
                    Стоимость одной процедуры: <span className="text-primary font-bold">18 000₽</span>
                </p>
            </div>
        </section>

        {/* Описание проблемы */}
        <section className="mb-8">
            <p className="mb-3 italic">
                Вы чувствуете, что силы покидают вас? Усталость, стресс и снижение либидо стали вашими постоянными спутниками?
            </p>
            <p className="mb-3">
                Современный ритм жизни не щадит даже самых сильных мужчин. Но у нас есть решение!
            </p>
            <p className="font-medium text-primary">
                Курс «Мужское здоровье» — научно обоснованный способ вернуть энергию, выносливость и уверенность. Всего 4 процедуры — и вы снова на пике формы!
            </p>
        </section>

        {/* Показания */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Почему мужчины выбирают нашу программу?</h2>
            <div className="grid md:grid-cols-2 gap-3">
                {[
                    "Постоянная усталость, даже после отдыха",
                    "Снижение работоспособности",
                    "Проблемы с либидо и эректильной функцией",
                    "Планирование отцовства",
                    "Хронический стресс",
                    "Восстановление после нагрузок",
                    "Профилактика заболеваний простаты",
                    "Общее укрепление здоровья"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Состав программы */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Что входит в программу:</h2>
            <div className="space-y-4">
                {[
                    {
                        title: "Витамины группы B",
                        effect: "Энергия и концентрация",
                        benefits: [
                            "Активируют метаболизм",
                            "Улучшают устойчивость к стрессу",
                            "Устраняют хроническую усталость"
                        ]
                    },
                    {
                        title: "Витамин C",
                        effect: "Природный защитник",
                        benefits: [
                            "Мощный антиоксидант",
                            "Укрепляет сосуды",
                            "Повышает иммунитет"
                        ]
                    },
                    {
                        title: "Аминокислоты",
                        effect: "Сила и потенция",
                        benefits: [
                            "Улучшают кровоснабжение",
                            "Повышают выносливость",
                            "Поддерживают гормональный фон"
                        ]
                    },
                    {
                        title: "Минералы",
                        effect: "Фундамент здоровья",
                        benefits: [
                            "Цинк для тестостерона",
                            "Селен для репродуктивной функции",
                            "Магний для сердца"
                        ]
                    },
                    {
                        title: "Антиоксиданты",
                        effect: "Клеточная защита",
                        benefits: [
                            "Защита от старения",
                            "Снижение воспалений",
                            "Улучшение работы печени"
                        ]
                    },
                    {
                        title: "Детоксиканты",
                        effect: "Очищение организма",
                        benefits: [
                            "Выведение токсинов",
                            "Улучшение микроциркуляции",
                            "Нормализация баланса"
                        ]
                    }
                ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-3">
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-secondary mb-1">{item.effect}</p>
                        <ul className="list-disc pl-5">
                            {item.benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

        {/* Процедуры */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Как проходит курс?</h2>
            <p>
                Оптимальный протокол: <span className="font-semibold">4 процедуры</span> с интервалом <span className="font-semibold">2 раза в неделю</span>. Такой режим обеспечивает постепенное и качественное восстановление баланса организма.
            </p>
        </section>

        {/* Результаты */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Результаты после курса:</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {[
                    "Повышение физической и умственной активности",
                    "Глубокая детоксикация организма",
                    "Улучшение репродуктивного здоровья",
                    "Нормализация кровообращения",
                    "Укрепление иммунитета",
                    "Восстановление мужской силы"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Итог */}
        <section className="bg-secondary p-4 rounded-lg">
            <p className="font-bold text-primary mb-2">
                «Мужское Здоровье» — современное решение для восстановления энергии и мужской силы
            </p>
            <p>
                Восстановите энергию и работоспособность за <span className="font-semibold">4 сеанса</span>!
            </p>
        </section>
    </div>
)