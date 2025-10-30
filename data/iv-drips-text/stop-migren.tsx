"use server"
export const DripStopMigren = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Заголовок */}
        <h1 className="text-xl font-bold text-primary mb-4">Капельница «Стоп Мигрень»</h1>

        {/* Состав и цена */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
                <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
                <ul className="list-inside space-y-1">
                    {[
                        "Витамин В2",
                        "Витамин B3",
                        "Инозин",
                        "Янтарная кислота",
                        "L-лизин",
                        "Магний",
                        "Витамин В6"
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
                    <p className="text-lg font-bold text-primary">9 000 ₽</p>
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
                Идеальный вариант для людей, страдающих от частых головных болей и реагирующих на погоду! Содержит вещества, уменьшающие головную боль и улучшающие самочувствие.
            </p>
        </div>

        {/* Польза компонентов */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Польза компонентов:</h2>
            <ul className="list-inside space-y-3">
                {[
                    "Комплекс витаминов группы В - улучшает клеточное дыхание и кровообращение",
                    "Инозин - нормализует энергетический обмен",
                    "Янтарная кислота - борется с усталостью",
                    "Магний - уменьшает спазмы сосудов",
                    "L-лизин - укрепляет стенки сосудов"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </div>

        {/* Показания и противопоказания */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
                <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
                <ul className="list-inside space-y-1">
                    {[
                        "Частые головные боли",
                        "Метеозависимость",
                        "Мигрени",
                        "Стресс и переутомление"
                    ].map((item, index) => (
                        <li key={index} className="list-disc">{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold text-primary mb-2">Противопоказания:</h2>
                <ul className="list-inside space-y-1">
                    {[
                        "Беременность",
                        "Грудное вскармливание",
                        "Аллергия на компоненты",
                        "Нарушения свертываемости крови"
                    ].map((item, index) => (
                        <li key={index} className="list-disc">{item}</li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Этапы процедуры */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Как проводится:</h2>
            <ol className="list-inside space-y-1">
                {[
                    "Осмотр врача",
                    "Подготовка препаратов",
                    "Введение иглы",
                    "Настройка системы",
                    "Контроль состояния"
                ].map((step, index) => (
                    <li key={index} className="list-decimal">{step}</li>
                ))}
            </ol>
        </div>

        {/* Результаты */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Результаты:</h2>
            <ul className="list-inside space-y-1">
                {[
                    "Уменьшение головной боли",
                    "Улучшение самочувствия",
                    "Снижение частоты приступов",
                    "Повышение работоспособности"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </div>
    </div>
)