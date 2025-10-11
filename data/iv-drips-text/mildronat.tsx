"use server"
export const DripMildronat = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельница с Милдронатом</h1>

        <p className="mb-2 text-secondary"><strong>Цена:</strong> от 1 500 ₽</p>
        <p className="mb-4"><strong>Длительность:</strong> от 30 мин до 2 часов</p>

        <p className="mb-4">
            Капельницы с Милдронатом — это эффективный способ улучшить работу сердца, восстановить силы после нагрузок и
            поддержать кровообращение мозга. Процедура особенно полезна при заболеваниях сердечно-сосудистой системы и в
            периоды интенсивной физической или умственной активности.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Милдронат 5 мл</li>
            <li>Раствор натрия хлорид 0,9% 100 мл</li>
        </ul>

        <div className="bg-secondary p-3 rounded mb-4">
            <h3 className="font-semibold text-primary">При покупке от 6 капельниц:</h3>
            <p>6-ая капельница в подарок</p>
            <p className="mt-2 text-sm text-muted-foreground italic">Входит в состав только основных курсов</p>
        </div>

        <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Инфаркт миокарда (восстановительный период)</li>
            <li>Стенокардия</li>
            <li>Хроническая сердечная недостаточность</li>
            <li>Кардиомиопатия</li>
            <li>Инсульт и его последствия</li>
            <li>Цереброваскулярная недостаточность</li>
            <li>Физические и умственные перегрузки</li>
            <li>Пониженная работоспособность</li>
            <li>Период восстановления после болезни</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Эффекты:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Повышение выносливости и тонуса</li>
            <li>Улучшение питания сердечной мышцы</li>
            <li>Активизация кровообращения в головном мозге</li>
            <li>Сокращение числа приступов стенокардии</li>
            <li>Быстрое восстановление после нагрузок</li>
            <li>Ускорение реабилитации после болезней</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Как проходит процедура:</h2>
        <ol className="list-decimal list-inside pl-5 mb-4">
            <li>Осмотр врача, сбор анамнеза</li>
            <li>Подбор количества процедур (от 1 до 10)</li>
            <li>Подготовка раствора и подключение капельницы</li>
            <li>Инфузия длительностью от 30 мин до 2 часов</li>
            <li>Контроль состояния пациента и рекомендации по лечению</li>
        </ol>

        <h2 className="text-lg font-bold text-primary mb-2">Почему выбирают Kaplab:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Удобное расположение в центре Москвы</li>
            <li>Профессиональные врачи и медсестры</li>
            <li>Сертифицированные препараты</li>
            <li>Возможность проведения процедур на дому</li>
            <li>Индивидуальный подход и высокий уровень сервиса</li>
        </ul>

        <div className="text-center mt-8">
            <a href="#consultation"
               className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition">
                Записаться на консультацию
            </a>
        </div>
    </div>
)