"use server"
export const DripEnergizer = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Заголовок */}
        <h1 className="text-xl font-bold text-primary mb-4">Капельница «Энерджайзер»</h1>

        {/* Состав и цена */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
                <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
                <ul className="list-inside space-y-1">
                    {[
                        "L-карнитин",
                        "Витамин В2",
                        "Витамин B3",
                        "Инозин",
                        "Янтарная кислота",
                        "Этилметилгидроксипиридина сукцинат",
                        "Витамин С"
                    ].map((item, index) => (
                        <li key={index} className="list-disc">{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <div className="mb-4">
                    <h3 className="font-semibold text-primary">Длительность:</h3>
                    <p>от 30 мин до 2 часов</p>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold text-primary">1 процедура:</h3>
                    <p className="text-lg font-bold text-primary">6 000 ₽</p>
                </div>
                <div className="bg-secondary p-3 rounded">
                    <p className="font-semibold text-primary">При курсе от 6 процедур:</p>
                    <p>6-ая процедура в подарок</p>
                </div>
            </div>
        </div>

        {/* Описание */}
        <div className="mb-6">
            <p>
                Капельница «Энерджайзер» помогает быстро повысить продуктивность, добиться высокой концентрации внимания и восстановиться после интенсивных нагрузок.
            </p>
        </div>

        {/* Действие компонентов */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Действие компонентов:</h2>
            <ul className="list-inside space-y-1">
                {[
                    "Восстанавливают нервную систему",
                    "Активизируют обмен веществ",
                    "Улучшают доставку энергии в клетки",
                    "Способствуют восстановлению клеток",
                    "Укрепляют иммунитет"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </div>

        {/* Показания */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
            <ul className="list-inside space-y-1">
                {[
                    "Хроническая усталость",
                    "Переутомление",
                    "Снижение работоспособности",
                    "Дневная сонливость",
                    "Восстановление после болезни"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </div>

        {/* Эффекты */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Эффекты:</h2>
            <ul className="list-inside space-y-1">
                {[
                    "Прилив сил",
                    "Повышение концентрации",
                    "Улучшение памяти",
                    "Рост работоспособности",
                    "Нормализация сна"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </div>

        {/* Процедура */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Как проводится:</h2>
            <ol className="list-inside space-y-1">
                {[
                    "Консультация врача",
                    "Подготовка раствора",
                    "Введение иглы",
                    "Настройка скорости подачи",
                    "Контроль состояния"
                ].map((step, index) => (
                    <li key={index} className="list-decimal">{step}</li>
                ))}
            </ol>
        </div>
    </div>
)