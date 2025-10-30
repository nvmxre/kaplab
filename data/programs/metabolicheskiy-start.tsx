"use server"

export const ProgramMetabolicheskiyStart = () => (
    <div className="max-w-4xl mx-auto px-2 font-sans">
        {/* Первый экран с оффером */}
        <section className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-primary mb-2">Программа «Метаболический старт»</h1>
            <div className="bg-secondary p-2 rounded-lg">
                <p className="font-semibold">
                    Специальное предложение: чекап + консультация + капельница за
                    <span className="text-primary"> 14990₽</span> вместо
                    <span className="line-through"> 35 500₽</span>
                </p>
            </div>
        </section>

        {/* Описание проблемы */}
        <section className="mb-6">
            <p className="mb-2">
                Устали от диет, которые не работают? Вес возвращается снова и снова, а самочувствие оставляет желать лучшего?
            </p>
            <p className="mb-2">
                Избыточный вес – это часто комплексная проблема, отражающая метаболические нарушения, скрытые воспаления, сбои в системе детоксикации и гормональный дисбаланс.
            </p>
            <p className="font-medium text-primary">
                Программа «Метаболический старт» – ваш научно обоснованный путь к стройности и здоровью.
            </p>
        </section>

        {/* Подход */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-2">Мы подходим к похудению комплексно:</h2>
            <div className="space-y-3">
                {[
                    "Глубокая диагностика: анализ биохимических показателей, гормонов и витаминов для выявления причин лишнего веса",
                    "Индивидуальная стратегия: персонализированный план с еженедельными корректировками",
                    "Запуск метаболизма: активация естественных процессов сжигания жира, нормализация инсулина и детоксикация"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-1">•</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Что входит */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-2">Что входит в программу?</h2>
            <div className="grid gap-2">
                {[
                    "4 недели с посещением раз в неделю",
                    "Консультации врача с контролем показателей",
                    "Биоимпедансное сканирование тела",
                    "Контрольные анализы (HOMA, глюкоза, инсулин)",
                    "4 капельницы 'Ускорение метаболизма'",
                    "4 процедуры пептидной терапии"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-1">✓</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Чекап */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-2">Чекап включает:</h2>
            <div className="text-sm space-y-1">
                <p>• Общий и биохимический анализ крови</p>
                <p>• Анализ гормонов щитовидной железы</p>
                <p>• Витамины B9, B12, D</p>
                <p>• Для женщин: половые гормоны</p>
            </div>
        </section>

        {/* Результаты */}
        <section className="mb-6">
            <h2 className="text-xl font-bold text-primary mb-2">Ожидаемые результаты:</h2>
            <div className="grid grid-cols-2 gap-1 text-sm">
                {[
                    "Потеря 3-5 кг",
                    "Уменьшение отеков",
                    "Ускорение метаболизма",
                    "Снижение воспаления",
                    "Повышение энергии",
                    "Улучшение детоксикации"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-1">•</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary p-3 rounded-lg text-center">
            <p className="font-semibold mb-1">
                Стартуйте сегодня за <span className="text-primary">8 990₽</span> вместо <span className="line-through">35 500₽</span>
            </p>
            <p className="text-sm">Запись по телефону или на сайте</p>
            <p className="text-xs italic mt-1">Ваше здоровье — наш приоритет!</p>
        </section>
    </div>
)