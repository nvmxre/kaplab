"use server"
export const DripCinderella = () => (

    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Hero Section */}
        <div className="p-4 lg:p-8">
            <div className="flex justify-center items-start">
                <div>
                    <h1 className="text-3xl font-bold mb-2"></h1>
                    <ul className="space-y-2 mb-6 items-center">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            Разглаживание морщин
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            Повышение тонуса кожи
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            Антиоксидантная защита
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Composition & Pricing */}
        <div className="p-4 lg:p-8">
            <div className="grid md:grid-cols-2 gap-4 lg:p-8 mb-8">
                <div className="bg-accent-50 p-6 rounded-xl">
                    <h2 className="text-xl font-bold text-accent-700 mb-4">Состав капельницы:</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start">
            <span className="bg-accent-100 text-accent-700 rounded-full p-1 mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </span>
                            <span>витамин С, глутатион, альфа-липоевая кислота</span>
                        </li>
                    </ul>
                    <h3 className="text-lg font-semibold text-accent-700 mt-6 mb-2">Длительность 1 процедуры:</h3>
                    <p className="text-gray-700">от 30 мин до 2 часов</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="mb-6 p-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700">1 капельница</h3>
                        <p className="text-2xl font-bold text-gray-800">8 000 ₽</p>
                    </div>
                    <div className="mb-6 p-4 border-b border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700">Курс из 3 капельниц</h3>
                        <div className="flex items-center">
                            <p className="text-gray-500 line-through mr-3">24 000 ₽</p>
                            <p className="text-2xl font-bold text-gray-800">18 000 ₽</p>
                        </div>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="font-bold text-gray-700">Шестая капельница в подарок</p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mb-8">
                <p className="text-gray-700 mb-6">
                    Капельница «Золушка» – beauty-процедура, позволяющая за неделю получить anti-age результат, которого
                    придется ждать не менее 3-х месяцев при приеме таблеток с аналогичным составом. Курс процедур
                    моментально повысит упругость кожи, уменьшит выраженность морщин и других возрастных изменений,
                    устранит мелкие несовершенства и благотворно скажется на работе всего организма.
                </p>
            </div>

            {/* What is it */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-accent-700 mb-4">Что такое капельницы «Золушка»</h2>
                <p className="text-gray-700 mb-4">
                    Cinderella или капельница красоты «Золушка» – быстродействующий, эффективный против возрастных
                    изменений внутривенный «коктейль», разработанный пластическим хирургом из Южной Кореи. Благодаря
                    своему уникальному составу и отличным результатам она стала популярной beauty-процедурой во всем
                    мире.
                </p>
            </div>

            {/* Components */}
            <div className="mb-8 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Активные компоненты:</h3>
                <p className="text-gray-700 mb-4">
                    Активными компонентами капельницы выступают средства с выраженными антиоксидантными свойствами. Они
                    связывают свободные радикалы, провоцирующие опасный окислительный стресс, выводят тяжелые металлы и
                    другие вредные вещества. В их число входят:
                </p>

                <div className="flex flex-col gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-accent-600 mb-2">Глутатион</h4>
                        <p className="text-gray-700 text-sm">
                            Естественный антиоксидант, синтезируемый печенью. Отличается мощным действием. Часто его
                            выработка ухудшается на фоне неправильного питания, употребления алкоголя, после отравлений
                            и в других ситуациях. Также глутатион обладает способностью повышать стрессоустойчивость.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-accent-600 mb-2">Витамин С</h4>
                        <p className="text-gray-700 text-sm">
                            Известный иммуномодулятор, который так же обладает антиоксидантными свойствами. Кроме того,
                            аскорбиновая кислота необходима для синтеза коллагеновых волокон.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-accent-600 mb-2">Альфа-липоевая кислота (ALA)</h4>
                        <p className="text-gray-700 text-sm">
                            Природный антиоксидант, вырабатываемый митохондриями клеток. С возрастом процесс синтеза
                            угнетается. Альфа-липоевая кислота снижает содержание жиров в тканях, активизирует
                            метаболические процессы, улучшает микроциркуляцию.
                        </p>
                    </div>
                </div>
            </div>

            {/* Benefits */}
            <div className="mb-8 bg-accent-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-accent-700 mb-4">Эффект от процедуры:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>усиливает синтез коллагена</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>замедляет процессы старения</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>устраняет проблемы с кожей</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>выводит вредные вещества</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>улучшает работу печени</span>
                        </li>
                    </ul>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>нормализует обмен веществ</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>снижает уровень холестерина</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>улучшает работу нервной системы</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>повышает качество сна</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-accent-500 mr-2">✓</span>
                            <span>укрепляет иммунитет</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Comparison */}
            <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Почему капельница эффективнее БАДов?</h3>
                <p className="text-gray-700 mb-4">
                    Безусловно, получить все вышеперечисленные антиоксиданты можно введя в рацион их природные источники
                    или же принимая БАДы. Но получения такого же эффекта, как дает капельница «Золушка», придется ждать
                    как минимум несколько месяцев.
                </p>
                <p className="text-gray-700 font-semibold">
                    При внутривенном введении препараты попадают непосредственно в кровь, а потому не подвергаются
                    разрушению в ЖКТ. При этом их биодоступность повышается до 90—100%.
                </p>
            </div>

            {/* Procedure */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-accent-700 mb-4">Подготовка и особенности проведения</h2>
                <p className="text-gray-700 mb-4">
                    Внутривенные инфузии проводятся после осмотра терапевтом. Это обеспечивает правильный подбор
                    необходимых препаратов и их дозировки, исключение рисков в связи с наличием противопоказаний.
                </p>
                <p className="text-gray-700 mb-4">
                    В «КапЛаб» каждый пациент получает индивидуальную программу терапии, учитывающую все персональные
                    особенности. Капельница ставится опытной медсестрой в процедурном кабинете. В среднем ее проведение
                    занимает 30—50 минут, иногда длительность процедуры может быть увеличена до 2 часов, что обусловлено
                    индивидуальной реакцией организма на внутривенное введение раствора.
                </p>
                <p className="text-gray-700">
                    До окончания манипуляции медсестра находится рядом с пациентом, внимательно контролируя его
                    состояние. При плохой психологической переносимости инфузий она поддержит пациента, поможет
                    успокоиться и пройти процедуру с максимальным комфортом.
                </p>
            </div>

            {/* Indications */}
            <div className="mb-8 bg-accent-50 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-accent-700 mb-4">Когда стоит сделать капельницу «Золушка»</h2>
                <p className="text-gray-700 mb-4">
                    Процедура показана всем, кто заботиться о своем здоровье и внешнем виде в профилактических целях.
                    Цена капельницы «Золушка» с глутатионом позволяет использовать ее и женщинам, и мужчинам в качестве
                    экстренного средства при подготовке к важным мероприятиям.
                </p>
                <p className="text-gray-700 mb-4 font-semibold">
                    Особенно актуальна процедура для жителей больших городов, которые ежедневно подвергаются воздействию
                    массы внешних негативных факторов.
                </p>

                <h3 className="font-bold text-gray-800 mt-6 mb-3">Также пройти курс капельниц стоит:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>при проблемах с кожей, потере упругости</li>
                        <li>при признаках фотостарения, гиперпигментации</li>
                        <li>при отеках лица, мешках под глазами</li>
                        <li>при склонности к воспалениям кожи</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>после приема агрессивных лекарств</li>
                        <li>после перенесения инфекционных заболеваний</li>
                        <li>после интоксикаций (алкогольных, пищевых)</li>
                        <li>при избыточном весе</li>
                    </ul>
                </div>
            </div>

            {/* Contraindications */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Ограничения к выполнению процедур</h2>
                <p className="text-gray-700 mb-4">
                    За счет наличия в составе только естественных для организма веществ капельница «Синдерелла»
                    отличается высоким профилем безопасности, хорошо переноситься и имеет короткий перечень
                    противопоказаний.
                </p>
                <h3 className="font-bold text-gray-800 mb-2">Она не рекомендована:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>пациентам младше 18 лет</li>
                    <li>беременным и кормящим женщинам</li>
                    <li>при аллергии на используемые препараты</li>
                    <li>при тяжелых хронических заболеваниях</li>
                    <li>при психических расстройствах</li>
                </ul>
            </div>

            {/* Results */}
            <div className="mb-8 bg-gradient-to-r from-gray-500 to-accent-500 p-4 lg:p-8  rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Эффект от терапии</h2>
                <p className="mb-6">
                    «Синдерелла» оказывает комплексное омолаживающее воздействие на весь организм, что подтверждают
                    многочисленные положительные отзывы о капельнице «Золушка». А поскольку ее цена сопоставима с
                    месячным запасом БАДов, которые обладают гораздо более низкой биодоступностью, а эффект наступает
                    уже после первых процедур, это обуславливает ее высокую популярность.
                </p>

                <h3 className="text-xl font-bold mb-4">Благодаря курсу капельниц удается:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>повысить упругость и тонус кожи</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>улучшить цвет лица</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>устранить несовершенства кожи</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>улучшить состояние волос</span>
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>нормализовать обмен веществ</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>избавиться от бессонницы</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>укрепить иммунитет</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>повысить жизненный тонус</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)