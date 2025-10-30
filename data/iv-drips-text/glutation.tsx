"use server"
export const DripGlutation = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Заголовок */}
        <h1 className="text-xl font-bold text-primary mb-4">Капельница «Глутатион»</h1>

        {/* Состав и цена */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
                <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
                <ul className="list-inside space-y-1">
                    <li className="list-disc font-medium">Глутатион</li>
                </ul>
                <div className="mt-4 bg-secondary p-3 rounded">
                    <p className="text-primary">Мощный антиоксидант для детоксикации и омоложения</p>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <h3 className="font-semibold text-primary">Длительность:</h3>
                    <p>от 30 мин до 2 часов</p>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold text-primary">1 процедура:</h3>
                    <p className="text-lg font-bold text-primary">8 000 ₽</p>
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
                Капельницы с глутатионом помогают ликвидировать окислительный стресс, вызванный стрессом, плохой экологией и другими факторами. Оказывают оздоровительный и anti-age эффект.
            </p>
        </div>

        {/* Функции */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Основные функции:</h2>
            <ul className="list-inside space-y-1">
                {[
                    "Обезвреживает токсины и тяжелые металлы",
                    "Обеспечивает правильный синтез ДНК",
                    "Замедляет процессы старения",
                    "Укрепляет иммунную систему",
                    "Защищает клетки от окисления"
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
                    "Профилактика старения",
                    "Увядание кожи",
                    "Повышенная утомляемость",
                    "Нарушения сна",
                    "Заболевания печени",
                    "Кожные проблемы"
                ].map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                ))}
            </ul>
        </div>

        {/* Противопоказания */}
        <div className="mb-6">
            <h2 className="text-lg font-bold text-primary mb-2">Противопоказания:</h2>
            <ul className="list-inside space-y-1">
                {[
                    "Возраст до 18 лет",
                    "Беременность и лактация",
                    "Индивидуальная непереносимость",
                    "Пожилой возраст (с осторожностью)"
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
                    "Уменьшение пигментации",
                    "Повышение эластичности кожи",
                    "Нормализация обмена веществ",
                    "Защита печени",
                    "Укрепление иммунитета",
                    "Повышение энергичности"
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
                    "Приготовление раствора",
                    "Введение иглы",
                    "Настройка скорости",
                    "Отдых во время процедуры"
                ].map((step, index) => (
                    <li key={index} className="list-decimal">{step}</li>
                ))}
            </ol>
        </div>
    </div>
)