"use server"
export const DripCitoflavin = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельница Цитофлавин</h1>

        <p className="mb-2 text-secondary"><strong>Цена:</strong> 2 000 ₽</p>
        <p className="mb-4"><strong>Длительность:</strong> от 30 мин до 2 часов</p>

        <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Цитофлавин 10 мл</li>
            <li>Раствор натрия хлорид 0,9% 100 мл</li>
        </ul>

        <div className="bg-secondary p-3 rounded mb-4">
            <h3 className="font-semibold text-primary">При покупке от 6 капельниц:</h3>
            <p>6-ая капельница в подарок</p>
            <p className="mt-2 text-sm text-muted-foreground italic">Входит в состав только основных курсов</p>
        </div>

        <p className="mb-4">
            Капельница Цитофлавин – эффективная поддержка мозга. Препарат содержит витамины группы В, нуклеозид и янтарную кислоту, что помогает при неврологических и сосудистых нарушениях, а также при усталости и переутомлении.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Что такое Цитофлавин?</h2>
        <p className="mb-4">
            В состав входят инозин, никотинамид, рибофлавин и янтарная кислота — природные компоненты, нормализующие обмен веществ, улучшающие мозговое кровообращение, очищающие организм и укрепляющие нервную систему.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Диабетическая полинейропатия</li>
            <li>Восстановление после инсульта</li>
            <li>Церебральный атеросклероз</li>
            <li>Энцефалопатия, в том числе после интоксикаций и наркоза</li>
            <li>Профилактика сосудистых и когнитивных нарушений</li>
            <li>Хроническая усталость и стресс</li>
            <li>Умственные и физические перегрузки</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Преимущества Kaplab:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Профессиональное проведение и индивидуальный подход</li>
            <li>Строгое соблюдение правил и стерильности</li>
            <li>Возможность вызова врача на дом в любое время суток</li>
            <li>Доброжелательность и опыт специалистов</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Этапы процедуры:</h2>
        <ol className="list-decimal list-inside pl-5 mb-4">
            <li>Приготовление раствора Цитофлавина с физраствором</li>
            <li>Выбор вены и антисептическая обработка кожи</li>
            <li>Наложение жгута (при необходимости), введение и фиксация иглы</li>
            <li>Снятие жгута и настройка скорости подачи раствора</li>
            <li>Контроль состояния пациента во время процедуры</li>
            <li>Удаление иглы и закрытие места прокола пластырем</li>
            <li>Предоставление рекомендаций после процедуры</li>
        </ol>

        <h2 className="text-lg font-bold text-primary mb-2">Противопоказания и побочные эффекты:</h2>
        <ul className="list-disc list-inside pl-5 mb-8">
            <li>Индивидуальная непереносимость компонентов</li>
            <li>Беременность и грудное вскармливание</li>
            <li>Нарушения свертываемости крови</li>
            <li>Психические нарушения</li>
            <li>Возраст до 18 лет</li>
        </ul>
    </div>
)