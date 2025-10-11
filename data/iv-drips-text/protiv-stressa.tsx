"use server"

export const DripProtivStressa = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 font-sans">
            {/* Оффер */}
            <section className="mb-8">
                <div className="bg-secondary p-4 rounded-lg mb-4">
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="text-primary mr-2">+</span> Экспресс чек-ап
                        </li>
                        <li className="flex items-center">
                            <span className="text-primary mr-2">+</span> Консультация терапевта
                        </li>
                    </ul>
                </div>
            </section>

            {/* Состав */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-3">Состав капельницы:</h2>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        "Витамин В2",
                        "Витамин B3",
                        "Инозин",
                        "Янтарная кислота",
                        "Витамин В12",
                        "Витамин В6",
                        "Магний",
                        "Этилметилгидроксипиридина сукцинат"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-1"></span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Детали */}
            <section className="mb-8 grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-primary mb-1">Длительность процедуры:</h3>
                    <p>от 30 мин до 2 часов</p>
                </div>
                <div>
                    <h3 className="font-bold text-primary mb-1">Стоимость:</h3>
                    <p className="text-xl font-bold text-primary">6 000 ₽</p>
                </div>
                <div className="md:col-span-2 bg-secondary p-4 rounded-lg">
                    <p className="font-semibold">При покупке от 6 капельниц:</p>
                    <p>6-ая капельница в подарок</p>
                </div>
            </section>

            {/* Описание */}
            <section className="mb-8">
                <p className="mb-3">
                    Капельница «Против стресса» помогает преодолеть последствия эмоциональных переживаний и нервного
                    перенапряжения. Быстро возвращает спокойствие, бодрость и нормализует сон.
                </p>
                <p>
                    Дополнительно улучшает когнитивные способности: память, мышление, концентрацию внимания.
                </p>
            </section>

            {/* Спецпредложение */}
            <section className="mb-8 bg-secondary p-6 rounded-lg">
                <h2 className="text-xl font-bold text-primary mb-4 text-center">
                    Специальное предложение:
                </h2>
                <h3 className="font-bold text-primary mb-2">Экспресс чек-ап + капельница</h3>
                <ul className="space-y-2 mb-4">
                    {[
                        "Общий анализ крови",
                        "Биохимический анализ крови",
                        "Подробный анализ состояния здоровья",
                        "Рекомендации по выздоровлению",
                        "Консультация врача-терапевта",
                        "1 капельница по показаниям"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-1"></span>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>

                <div className="bg-white p-4 rounded-lg mb-4">
                    <div className="flex gap-2 items-center">
                            <span className="line-through text-gray-500">15 100 ₽</span>
                            <span className="text-xl font-bold text-primary ml-3">5 990 ₽</span>
                    </div>
                </div>
            </section>

            {/* Дополнительная информация */}
            <section>
                <h2 className="text-xl font-bold text-primary mb-3">О капельницах антистресс</h2>
                <p>
                    Современная жизнь полна стрессов и сложных задач. Многие сталкиваются с нарушениями сна, апатией,
                    синдромом хронической усталости. Наши капельницы помогают справиться с этими проблемами.
                </p>
            </section>
        </div>

    )
}