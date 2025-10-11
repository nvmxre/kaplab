"use server"
export const DripRiboksin = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельница с Рибоксином</h1>

        <p className="mb-2 text-secondary"><strong>Цена:</strong> от 1 500 ₽</p>
        <p className="mb-4"><strong>Длительность:</strong> от 30 мин до 2 часов</p>

        <p className="mb-4">
            Капельница с Рибоксином — это процедура, направленная на улучшение работы сердечно-сосудистой системы и
            общее восстановление организма. Рибоксин способствует нормализации сердечного ритма, улучшению обменных
            процессов, снижению утомляемости и профилактике ишемических изменений в тканях.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Рибоксин 200 мг (10 мл)</li>
            <li>Раствор натрия хлорид 0,9% 100 мл</li>
        </ul>

        <div className="bg-secondary p-3 rounded mb-4">
            <h3 className="font-semibold text-primary">При покупке от 6 капельниц:</h3>
            <p>6-ая капельница в подарок</p>
            <p className="mt-2 text-sm text-muted-foreground italic">Входит в состав только основных курсов</p>
        </div>

        <h2 className="text-lg font-bold text-primary mb-2">Эффекты:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Нормализация сердечного ритма</li>
            <li>Улучшение кровоснабжения миокарда</li>
            <li>Антигипоксическое действие</li>
            <li>Снижение утомляемости</li>
            <li>Стимуляция обмена веществ</li>
            <li>Повышение активности ферментов</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Инфаркт миокарда (в период восстановления)</li>
            <li>Ишемическая болезнь сердца</li>
            <li>Аритмии</li>
            <li>Метаболические нарушения</li>
            <li>Гепатиты, цирроз печени</li>
            <li>Общая усталость после физнагрузок</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Противопоказания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Гиперчувствительность к препарату</li>
            <li>Подагра</li>
            <li>Беременность и лактация</li>
            <li>Возраст до 18 лет</li>
            <li>Нарушения свертываемости крови</li>
            <li>Психические заболевания</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Как проводится:</h2>
        <ol className="list-decimal list-inside pl-5 mb-4">
            <li>Осмотр пациента и выбор вены</li>
            <li>Подготовка раствора и инфузионной системы</li>
            <li>Антисептическая обработка и установка иглы</li>
            <li>Настройка скорости капельницы</li>
            <li>Наблюдение за состоянием пациента</li>
            <li>Завершение процедуры и наложение повязки</li>
        </ol>

        <div className="bg-secondary p-3 rounded">
            <h3 className="font-semibold text-primary">Рекомендации:</h3>
            <p>Курс инфузионной терапии с Рибоксином особенно эффективен при интенсивных физических нагрузках, в период
                восстановления после заболеваний сердца и печени. Может сочетаться с другими препаратами, например,
                Панангином, для усиления эффекта.</p>
        </div>
    </div>
)