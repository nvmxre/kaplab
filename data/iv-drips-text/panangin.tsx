"use server"
export const DripPanangin = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельница с Панангином</h1>

        <p className="mb-2 text-secondary"><strong>Цена:</strong> от 1 500 ₽</p>
        <p className="mb-4"><strong>Длительность:</strong> от 30 мин до 2 часов</p>

        <p className="mb-4">
            Капельница с Панангином — это процедура инфузионной терапии, направленная на восполнение дефицита калия и
            магния в организме. Она помогает нормализовать сердечный ритм, снять мышечные спазмы и улучшить общее
            самочувствие, особенно при хронической усталости и высоких физических нагрузках.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Панангин 10 мл</li>
            <li>Раствор глюкозы 5% 100 мл</li>
        </ul>

        <div className="bg-secondary p-3 rounded mb-4">
            <h3 className="font-semibold text-primary">При покупке от 6 капельниц:</h3>
            <p>6-ая капельница в подарок</p>
            <p className="mt-2 text-sm text-muted-foreground italic">Входит в состав только основных курсов</p>
        </div>

        <h2 className="text-lg font-bold text-primary mb-2">Эффекты:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Нормализация сердечного ритма</li>
            <li>Восполнение дефицита калия и магния</li>
            <li>Снижение мышечных спазмов и судорог</li>
            <li>Улучшение электролитного баланса</li>
            <li>Повышение энергетического обмена</li>
            <li>Снижение утомляемости</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Дефицит калия и магния</li>
            <li>Аритмии и нарушения сердечного ритма</li>
            <li>Мышечные судороги</li>
            <li>Хроническая усталость</li>
            <li>Восстановление после физических нагрузок</li>
            <li>Общее истощение организма</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Противопоказания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Гиперкалиемия или гипермагниемия</li>
            <li>Почечная недостаточность</li>
            <li>Сахарный диабет (для раствора глюкозы)</li>
            <li>Беременность и лактация</li>
            <li>Индивидуальная непереносимость компонентов</li>
            <li>Возраст до 18 лет</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Как проводится:</h2>
        <ol className="list-decimal list-inside pl-5 mb-4">
            <li>Консультация врача и проверка показаний</li>
            <li>Подготовка раствора с Панангином и глюкозой</li>
            <li>Обработка кожи и введение катетера</li>
            <li>Настройка инфузионной скорости</li>
            <li>Контроль состояния пациента во время введения</li>
            <li>Завершение процедуры и наложение повязки</li>
        </ol>

        <div className="bg-secondary p-3 rounded">
            <h3 className="font-semibold text-primary">Рекомендации:</h3>
            <p>Курс капельниц с Панангином особенно полезен в период восстановления после стресса, физических перегрузок
                и при симптомах дефицита электролитов. Рекомендуется пройти обследование перед началом терапии.</p>
        </div>
    </div>
)