"use server"
export const DripRemaxol = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельница Ремаксол</h1>

        <p className="mb-2 text-secondary"><strong>Цена:</strong> 3 500 ₽</p>
        <p className="mb-4"><strong>Длительность:</strong> от 30 мин до 2 часов</p>

        <h2 className="text-lg font-bold text-primary mb-2">Состав:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Раствор Ремаксол 400 мл</li>
        </ul>

        <div className="bg-secondary p-3 rounded mb-4">
            <h3 className="font-semibold text-primary">При покупке от 6 капельниц:</h3>
            <p>6-ая капельница в подарок</p>
            <p className="mt-2 text-sm text-muted-foreground italic">Входит в состав только основных курсов</p>
        </div>

        <p className="mb-4">
            Ремаксол – готовый препарат для инфузии, обладающий гепатопротекторными свойствами. Он содержит аминокислоты, органические кислоты, антиоксиданты и витамины, которые препятствуют разрушению гепатоцитов и активизируют их восстановление, улучшая функцию печени.
        </p>

        <h2 className="text-lg font-bold text-primary mb-2">Показания:</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>Патологии печени и желчевыводящих путей (хронический гепатит, холестаз, фиброз, жировая дегенерация и др.)</li>
            <li>Острые и хронические интоксикации (алкоголь, лекарства, токсины)</li>
            <li>Профилактика при повышенных нагрузках на печень</li>
            <li>Восстановление после тяжелых инфекций и медикаментозных курсов</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Этапы процедуры:</h2>
        <ol className="list-decimal list-inside pl-5 mb-4">
            <li>Осмотр врача, анализ жалоб и подбор терапии</li>
            <li>Внутривенное введение раствора Ремаксол с контролем состояния пациента</li>
            <li>Рекомендации по дальнейшему лечению и восстановлению</li>
        </ol>

        <h2 className="text-lg font-bold text-primary mb-2">Преимущества Kaplab:</h2>
        <ul className="list-disc list-inside pl-5 mb-8">
            <li>Использование сертифицированных препаратов</li>
            <li>Высокая квалификация врачей и медсестер</li>
            <li>Индивидуальный подход к лечению</li>
            <li>Возможность проведения процедур на дому</li>
            <li>Максимальный комфорт и безопасность</li>
        </ul>
    </div>
)