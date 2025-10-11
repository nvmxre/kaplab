"use server"
export const DripTioktovayaKislota = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельница с тиоктовой кислотой</h1>

        <p className="mb-2 text-secondary"><strong>Цена:</strong> от 2 000 ₽</p>
        <p className="mb-4"><strong>Длительность:</strong> от 30 мин до 2 часов</p>

        <p className="mb-4">
            Капельницы с тиоктовой кислотой способствуют восстановлению при полинейропатии, метаболических нарушениях,
            заболеваниях печени и общем истощении. Препарат оказывает антиоксидантное и общеукрепляющее действие,
            улучшает работу нервной системы и обмен веществ.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Тиоктовая кислота 300 мг (10 мл)</li>
            <li>Раствор натрия хлорид 0,9% 100 мл</li>
        </ul>

        <div className="bg-secondary p-3 rounded mb-4">
            <h3 className="font-semibold text-primary">При покупке от 6 капельниц:</h3>
            <p>6-ая капельница в подарок</p>
            <p className="mt-2 text-sm text-muted-foreground italic">Входит в состав только основных курсов</p>
        </div>

        <h2 className="text-lg font-bold text-primary mb-2">Эффекты:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Уменьшение выраженности неврологических нарушений</li>
            <li>Улучшение нервной проводимости</li>
            <li>Стимуляция обмена веществ</li>
            <li>Поддержка функции печени</li>
            <li>Общее тонизирующее и антиоксидантное действие</li>
            <li>Профилактика преждевременного старения</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Сахарный диабет и диабетическая полинейропатия</li>
            <li>Метаболические расстройства</li>
            <li>Заболевания печени</li>
            <li>Интоксикации</li>
            <li>Хроническая усталость и стресс</li>
            <li>Снижение иммунитета</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Противопоказания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Возраст до 18 лет</li>
            <li>Беременность и грудное вскармливание</li>
            <li>Индивидуальная непереносимость компонентов</li>
            <li>Нарушения свертываемости крови</li>
            <li>Психические заболевания</li>
            <li>Тяжёлые системные патологии</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Как проводится:</h2>
        <ol className="list-decimal list-inside pl-5 mb-4">
            <li>Индивидуальный подбор дозировки</li>
            <li>Подготовка раствора и оборудования (ампула вскрывается перед применением)</li>
            <li>Асептическая обработка рук и кожи в месте введения</li>
            <li>Введение иглы и подключение инфузионной системы</li>
            <li>Настройка скорости капельного введения</li>
            <li>Наблюдение за состоянием пациента до завершения процедуры</li>
            <li>Удаление иглы и наложение повязки</li>
        </ol>

        <div className="bg-secondary p-3 rounded">
            <h3 className="font-semibold text-primary">Рекомендации:</h3>
            <p>Курс капельниц с тиоктовой кислотой рекомендуется проходить под контролем врача, особенно при наличии
                диабета или хронической усталости. Инфузия может проводиться как в клинике, так и на дому для вашего
                комфорта.</p>
        </div>
    </div>
)