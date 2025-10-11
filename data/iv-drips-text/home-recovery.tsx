"use server"
export const DripHomeRecovery = () => (

    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Hero Section */}
        <div className="p-8">
            <div className="flex justify-between items-start">
                <div>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            Быстро восстановит организм после болезни, сильного утомления или операции
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            Эффект сразу после одной процедуры
                        </li>
                        <li className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                            </svg>
                            Выезд в любую точку Москвы в пределах МКАД (на дом, в офис)
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Composition & Pricing */}
        <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-accent-50 p-6 rounded-xl">
                    <h2 className="text-xl font-bold text-accent-700 mb-4">Состав капельницы:</h2>
                    <p className="text-gray-700">Электролиты, антиоксиданты, аминокислоты, витамины</p>
                    <h3 className="text-lg font-semibold text-accent-700 mt-6 mb-2">Длительность 1 процедуры:</h3>
                    <p className="text-gray-700">от 30 мин до 2 часов</p>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                    <div className="mb-6 p-4 border-b border-teal-200">
                        <h3 className="text-lg font-semibold text-teal-700">1 капельница</h3>
                        <p className="text-2xl font-bold text-teal-800">16 000 ₽</p>
                    </div>
                    <div className="p-4 bg-teal-100 rounded-lg">
                        <p className="font-bold text-teal-700">При покупке от 6 капельниц:</p>
                        <p className="text-teal-800">6-ая капельница в подарок</p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mb-8">
                <p className="text-gray-700 mb-6">
                    Капельница «Восстановление на дому» – экспресс-средство для восстановления работоспособности,
                    хорошего настроя после перенесения болезни, злоупотребления алкоголем, пищевого отравления,
                    интенсивных тренировок и в других ситуациях. Процедура быстро возвращает силы и хорошее
                    самочувствие, позволяя не откладывать на потом запланированные встречи, переговоры, перелеты или
                    другие важные дела.
                </p>
                <p className="text-gray-700 font-medium">
                    Выезд специалиста можно запланировать на удобное время в любую точку Москвы в пределах МКАД или же
                    оформить срочный вызов.
                </p>
            </div>

            {/* What is it */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-accent-700 mb-4">Что такое капельницы «Восстановление на дому»</h2>
                <p className="text-gray-700 mb-4">
                    Капельница на дому – выгодное со всех точек зрения решение, позволяющее избежать траты времени на
                    поездку до клиники инфузионной терапии и избежать связанных с этим неудобств. Особенно удобно
                    воспользоваться услугой при плохом самочувствии, ограниченных возможностях, высокой занятости или
                    просто нежелании выходить из дома по тем или иным причинам.
                </p>
            </div>

            {/* Components */}
            <div className="mb-8 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Состав и действие компонентов:</h3>
                <p className="text-gray-700 mb-4">
                    Оптимально подобранный состав компонентов капельницы позволяет добиться существенного улучшения
                    самочувствия уже после первой процедуры.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-accent-600 mb-2">Электролиты</h4>
                        <p className="text-gray-700 text-sm">
                            Нормализуют водно-солевой баланс, устраняют последствия обезвоживания, возникающего при
                            интоксикации алкоголем, пищевых отравлениях, после лихорадки, поддерживают нормальную работу
                            нервной системы и мышц.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-accent-600 mb-2">Антиоксиданты</h4>
                        <p className="text-gray-700 text-sm">
                            Нейтрализуют свободные радикалы, повреждающие клетки, провоцирующие ускоренное старение,
                            также связывают тяжелые металлы и вредные вещества, стимулируют иммунитет.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-accent-600 mb-2">Комплекс аминокислот</h4>
                        <p className="text-gray-700 text-sm">
                            Нормализуют течение метаболических процессов, поддерживают работу иммунной системы,
                            активизируют процессы регенерации тканей, работу головного мозга, становятся источником
                            дополнительной энергии.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-accent-600 mb-2">Витамины</h4>
                        <p className="text-gray-700 text-sm">
                            Восполняют имеющиеся дефициты, улучшают течение обменных процессов, нормализуют работу
                            нервной системы и организма в целом.
                        </p>
                    </div>
                </div>
            </div>

            {/* Procedure */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-accent-700 mb-4">Подготовка и особенности проведения</h2>
                <p className="text-gray-700 mb-4">
                    Вызывая на дом или в офис специалиста для проведения капельницы, следует заранее продумать, где
                    удобнее всего проводить процедуру. Другой специальной подготовки не требуется.
                </p>

                <div className="bg-accent-50 p-6 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold text-accent-700 mb-3">Процесс проведения:</h3>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                        <li>Медсестра оценит состояние вен и выберет наиболее подходящую для проведения процедуры.</li>
                        <li>Безболезненно введет иглу (манипуляция не доставляет боли и дискомфорта).</li>
                        <li>Закрепит иглу пластырем и настроит нужную скорость подачи раствора.</li>
                        <li>От начала и до окончания процедуры будет находиться рядом с пациентом.</li>
                    </ol>
                </div>
            </div>

            {/* Indications */}
            <div className="mb-8 bg-teal-50 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-teal-700 mb-4">Показания к проведению</h2>
                <p className="text-gray-700 mb-4">
                    Воспользоваться услугой «Восстановление на дому» показано в следующих случаях:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Признаки интоксикации различного происхождения</li>
                        <li>Сильное утомление после интенсивных тренировок</li>
                        <li>Сбой биологических ритмов после длительного авиаперелета</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Перенесение инфекционного заболевания</li>
                        <li>После проведения пластической или другой операции</li>
                        <li>Пищевое отравление</li>
                    </ul>
                </div>
            </div>

            {/* Contraindications */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Ограничения к выполнению процедур</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Беременность и лактация</li>
                    <li>Тяжелые нарушения функций почек</li>
                    <li>Психические расстройства</li>
                    <li>Лица младше 18 лет</li>
                    <li>Нарушения свертываемости крови</li>
                    <li>Индивидуальная непереносимость компонентов</li>
                </ul>
            </div>

            {/* Results */}
            <div className="mb-8 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Эффект от терапии</h2>
                <p className="mb-6">
                    Капельница «Восстановление на дому» поможет уже через считанные часы прийти в норму или существенно
                    улучшить общее самочувствие. Никакие таблетки не способны подарить столь быстрый результат благодаря
                    непосредственной доставке лекарственных средств в кровь.
                </p>

                <h3 className="text-xl font-bold mb-4">Результаты:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>Уменьшение тошноты, головной боли и других симптомов</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>Устранение слабости и усталости</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>Прилив сил и восстановление работоспособности</span>
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>Улучшение общего состояния и настроения</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>Нормализация сна</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span>Укрепление иммунитета</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

)