"use server"
export const DripProteinOptimization = () => (
    <div className="font-sans bg-white text-gray-900 max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">

            <div className="flex flex-col items-center mb-12">
                <div>
                    <p className="text-lg mb-6">
                        Попробуйте программу «Комплекс по оптимизации белкового обмена для повышения результата тренировок на массу» от Каплаб.
                    </p>
                    <p className="mb-6">
                        Наш инновационный метод разработан на основе передовых исследований о метаболизме. В разработке участвовали профессионалы,
                        которые работают на стыке медицины и спорта.
                    </p>
                </div>
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                    <h2 className="text-xl font-bold mb-4 text-primary-900">«Комплекс по оптимизации белкового обмена для повышения результата тренировок на массу»</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-primary-800">ПРОДОЛЖИТЕЛЬНОСТЬ</h3>
                            <p>3 месяца</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-primary-800">ЧАСТОТА ПРОЦЕДУР</h3>
                            <p>1-2 раза в неделю</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-primary-800">АНАЛИЗЫ</h3>
                            <p>Включены</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-primary-800">КОНСУЛЬТАЦИИ И СОПРОВОЖДЕНИЕ ВРАЧЕЙ</h3>
                            <p>Включены</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Description Section */}
        <section className="mb-16">
            <p className="text-lg mb-8">
                С помощью программы вы не только наберёте необходимый мышечный объем, но и в целом повысите свои силовые показатели и улучшите качество своей жизни. Сначала мы предложим вам сдать обширный комплекс анализов, а после этого врач даст расшифровку результатов. Таким образом вы получаете эффективное долгосрочное решение с индивидуальным подходом.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-primary-900">Содержание программы:</h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-12">
                {[
                    "Обширный комплекс анализов",
                    "Консультация и сопровождение врача",
                    "Протоколы по восполнению белка (6 капельниц)",
                    "Протоколы по восполнению аминокислот (6 капельниц)",
                    "Протоколы для ускорения метаболизма (6 капельниц)",
                    "Протоколы Детокс (3 капельницы)"
                ].map((item, index) => (
                    <li key={index} className="flex items-start bg-primary-50 p-4 rounded-lg gap-1">
                        <svg className="min-w-5 w-5 min-h-5 h-5 mt-0.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>

        {/* Details Sections */}
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-primary-900">Подробнее о программе:</h2>

            {[
                {
                    title: "Сдача комплекса анализов",
                    content: "Анализы позволяют собрать точную информацию о состоянии вашего организма. Вы узнаете, есть ли у вас гормональный дисбаланс, дефицит витаминов и/или микроэлементов и сбои в работе внутренних органов."
                },
                {
                    title: "Профессиональная поддержка на каждом этапе",
                    content: "Вы получите подробную расшифровку анализов от врача-эксперта, а затем мы подстроим комплекс по оптимизации белкового обмена под вас."
                },
                {
                    title: "Протоколы по восполнению белка",
                    content: "Белок — это один из самых важных элементов организма. Он восстанавливает ткани, защищает организм от инфекций, насыщает клетки кислородом, делает кожу эластичной и помогает набрать мышечную массу. Капельницы от Каплаб компенсируют недостаток белка, и за счёт этого мышечная масса набирается быстрее."
                },
                {
                    title: "Протоколы по восполнению аминокислот",
                    content: "Аминокислоты играют ключевую роль в разных физиологических процессах. При интенсивных физических нагрузках потребность организма в них возрастает. Благодаря нашим капельницам восстановление мышц после спорта у вас будет проходить гораздо быстрее."
                },
                {
                    title: "Протоколы для ускорения метаболизма",
                    content: "Метаболизм отвечает за функционирование гормональной системы, энергообмен и скорость обмена веществ. Ускорение метаболизма — важная часть программы, ведь благодаря этому у вас повысится уровень энергии, и вы сможете быстрее восстанавливаться после тренировок."
                },
                {
                    title: "Протоколы Детокс",
                    content: "Протоколы Детокс необходимы для того, чтобы помочь организму избавиться от токсинов, нормализовать работу пищеварительной системы и в целом улучшить ваше самочувствие."
                }
            ].map((section, index) => (
                <div key={index} className="mb-8">
                    <h3 className="text-xl font-bold mb-3 text-primary-800">{section.title}</h3>
                    <p>{section.content}</p>
                </div>
            ))}
        </section>

        {/* Results Section */}
        <section className="mb-16 bg-primary-50 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-primary-900">Результат</h2>
            <ul className="grid md:grid-cols-2 gap-4">
                {[
                    "Увеличение объема мышц — наращивание мышечной массы, повышение силы и выносливости",
                    "Уменьшение объема жировой ткани — за счет активизации обменных процессов",
                    "Ускорение метаболизма — улучшение обмена веществ, повышение уровня энергии",
                    "Улучшение общей физической формы — в результате вас ждёт стройная осанка, гибкость и красивое тело",
                    "Энергия и активность — за счёт ускорения метаболизма и насыщения клеток кислородом"
                ].map((item, index) => (
                    <li key={index} className="flex items-start gap-1">
                        <svg className="min-w-5 w-5 min-h-5 h-5 mt-0.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>

        {/* Indications & Contraindications */}
        <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-green-50 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 text-green-800">Показания</h2>
                <ul className="space-y-2">
                    {[
                        "Снижение мышечной массы",
                        "Некоторые заболевания сердечно-сосудистой системы",
                        "Избыточный вес",
                        "Длительное восстановление после тренировок",
                        "Низкий уровень физической активности",
                        "Онкологические и неврологические заболевания",
                        "Травмы"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-red-50 p-6 rounded-xl">
                <h2 className="text-xl font-bold mb-4 text-red-800">Противопоказания</h2>
                <ul className="space-y-2">
                    {[
                        "Тяжелые заболевания сердечно-сосудистой системы",
                        "Болезни опорно-двигательного аппарата",
                        "Острые воспалительные заболевания",
                        "Заболевания почек",
                        "Беременность и период лактации"
                    ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-red-600 mr-2">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    </div>

)