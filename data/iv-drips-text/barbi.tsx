"use server"
export const DripBarbi = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельница «Барби»</h1>

        <p className="mb-2 text-secondary"><strong>Цена:</strong> от 10 000 ₽</p>
        <p className="mb-4"><strong>Длительность:</strong> от 30 мин до 2 часов</p>

        <p className="mb-4">
            Капельница «Барби» — это инфузионная терапия, направленная на одновременное улучшение состояния кожи, волос
            и ногтей. Процедура помогает восполнить дефицит питательных веществ, обеспечивая быстрый и видимый
            результат.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Жировая эмульсия</li>
            <li>Комплекс микроэлементов</li>
            <li>Витамины группы B</li>
        </ul>

        <div className="bg-secondary p-3 rounded mb-4">
            <h3 className="font-semibold text-primary">При покупке от 6 капельниц:</h3>
            <p>6-ая капельница в подарок</p>
        </div>

        <h2 className="text-lg font-bold text-primary mb-2">Эффекты:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Увлажнение и улучшение состояния кожи</li>
            <li>Укрепление и ускоренный рост ногтей</li>
            <li>Увеличение густоты и блеска волос</li>
            <li>Восполнение дефицита витаминов и микроэлементов</li>
            <li>Общее улучшение внешнего вида</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Сухость кожи, ломкость ногтей и волос</li>
            <li>Снижение эластичности кожи</li>
            <li>Недостаток витаминов группы B</li>
            <li>Подготовка к важным мероприятиям</li>
            <li>Желание быстро улучшить внешний вид</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Противопоказания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Беременность и лактация</li>
            <li>Возраст до 18 лет</li>
            <li>Аллергия на компоненты капельницы</li>
            <li>Серьёзные хронические заболевания</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Как проводится:</h2>
        <ol className="list-decimal list-inside pl-5 mb-4">
            <li>Консультация с врачом и при необходимости — чек-ап</li>
            <li>Подбор индивидуальной дозировки</li>
            <li>Подготовка раствора и дезинфекция</li>
            <li>Инфузия в комфортных условиях</li>
            <li>Контроль состояния пациента</li>
        </ol>

        <div className="bg-secondary p-3 rounded">
            <h3 className="font-semibold text-primary">Рекомендации:</h3>
            <p>Капельница особенно эффективна перед важными событиями или сменой сезона. Для выраженного эффекта
                рекомендуется пройти курс процедур по индивидуальной схеме.</p>
        </div>
    </div>
)