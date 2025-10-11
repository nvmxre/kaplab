"use server"

import { BookingButton } from "@/components/booking-button"

export const DripEnergy = () => (

    <div className="max-w-3xl mx-auto px-4 font-sans">
        <h1 className="text-xl font-bold text-primary mb-4">Капельницы «Энергия»</h1>
        <p className="text-lg font-semibold text-green-700 mb-4">
            Программа восстановления энергии и выносливости — от 6 000 ₽
        </p>

        <p className="mb-4">
            Усталость, снижение концентрации, апатия, плохое восстановление после тренировок или болезни — это сигналы, что организму нужна поддержка. Капельницы «Энергия» восстанавливают силы и запускают внутренние резервы.
        </p>

        <p className="mb-4 font-medium text-gray-800">
            Состав подбирается в зависимости от ваших задач — от базового уровня поддержки до максимального антиоксидантного эффекта и укрепления сердечно-сосудистой системы.
        </p>

        <BookingButton service={{id: 0, title: "Капельница «Энергия»"}} />

        <h2 className="mt-12 text-lg font-bold text-primary mb-2">Кому подойдет</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>При хронической усталости и энергетических провалах</li>
            <li>В период восстановления после болезней или тренировок</li>
            <li>При интенсивной умственной или физической нагрузке</li>
            <li>Во время приёма статинов, при дефиците Q10</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Как работает</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li><strong>Быстрое восстановление:</strong> активизация энергетического обмена и митохондрий</li>
            <li><strong>Прямое усвоение:</strong> вещества сразу поступают в кровь и начинают работать</li>
            <li><strong>Комплексный эффект:</strong> поддержка сердца, сосудов, мышц и иммунитета</li>
        </ul>

        <h2 className="text-lg font-bold text-primary mb-2">Варианты капельниц</h2>
        <div className="space-y-4 mb-6">
            <div className="border p-4 rounded-lg bg-gray-50">
                <h3 className="text-md font-semibold text-primary mb-1">Энергия База — 6 000 ₽</h3>
                <p>
                    <strong>Состав:</strong> L-карнитин, Инозин, Янтарная кислота, Этилметилгидроксипиридина сукцинат, Витамин С.
                    <br />
                    <strong>Эффект:</strong> Повышение работоспособности, снижение усталости, активация метаболизма.
                </p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
                <h3 className="text-md font-semibold text-primary mb-1">Энергия Стандарт — 9 000 ₽</h3>
                <p>
                    <strong>Состав:</strong> Базовый + Фосфокреатин, Коэнзим Q10.
                    <br />
                    <strong>Эффект:</strong> Энергия для сердца и мышц, антиоксидантная защита, замедление старения.
                </p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
                <h3 className="text-md font-semibold text-primary mb-1">Энергия Super — 12 000 ₽</h3>
                <p>
                    <strong>Состав:</strong> Стандарт + В-комплекс, Аскорбиновая кислота.
                    <br />
                    <strong>Эффект:</strong> Максимальный энергетический заряд, поддержка ЦНС и иммунитета, метаболическая перезагрузка.
                </p>
            </div>
        </div>

        <h2 className="text-lg font-bold text-primary mb-2">Почему выбирают нас</h2>
        <ul className="list-disc list-inside pl-5 mb-4">
            <li>100% усвоение полезных веществ без нагрузки на ЖКТ</li>
            <li>Проведение процедуры в клинике или на дому</li>
            <li>Индивидуальный подбор состава врачом-специалистом</li>
        </ul>

        <div className="bg-yellow-100 p-4 rounded text-sm text-gray-800 mb-6">
            ⚡ <strong>Хватит жить в режиме энергосбережения!</strong> Попробуйте капельницу «Энергия» и ощутите разницу уже после первой процедуры.
        </div>

        <BookingButton service={{id: 0, title: "Капельница «Энергия»"}} />
    </div>


)