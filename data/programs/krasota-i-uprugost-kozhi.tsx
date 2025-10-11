"use server"

export const ProgramKrasotaIUprugostKozhi = () => (
    <div className="max-w-4xl mx-auto px-2 font-sans">
        {/* Заголовок и оффер */}
        <section className="mb-4 text-center">
            <h1 className="text-xl font-bold text-primary mb-1">
                Революция в омоложении кожи: верните коже молодость и упругость без операций!
            </h1>
            <p className=" text-secondary mb-2">
                Инновационная инфузионная терапия для естественного омоложения
            </p>
            <div className="border border-primary rounded p-2">
                <p className="font-bold">
                    Комплексная программа "Красота и упругость кожи": <span className="text-primary">155 000₽</span>
                </p>
            </div>
        </section>

        {/* Что входит */}
        <section className="mb-4">
            <h2 className="font-bold text-primary mb-1">Включает:</h2>
            <ul className=" space-y-1">
                <li className="flex items-start">
                    <span className="text-primary mr-1">•</span>
                    <span>10 сеансов инфузионной терапии</span>
                </li>
                <li className="flex items-start">
                    <span className="text-primary mr-1">•</span>
                    <span>Полное обследование крови</span>
                </li>
                <li className="flex items-start">
                    <span className="text-primary mr-1">•</span>
                    <span>Индивидуальные протоколы капельниц</span>
                </li>
                <li className="flex items-start">
                    <span className="text-primary mr-1">•</span>
                    <span>Неограниченные консультации врача</span>
                </li>
            </ul>
        </section>

        {/* Описание */}
        <section className="mb-4 ">
            <p className="mb-2">
                Забудьте о бесконечных кремах с временным эффектом. Наша инфузионная терапия работает на клеточном уровне.
            </p>
            <p className="font-semibold text-primary">
                Клиника КАПЛАБ — передовые технологии внутривенного омоложения:
            </p>
        </section>

        {/* Преимущества */}
        <section className="mb-4">
            <div className="grid grid-cols-2 gap-2 ">
                {[
                    "Стимуляция коллагена",
                    "Восстановление упругости",
                    "Здоровое сияние кожи",
                    "Повышение энергии",
                    "Укрепление иммунитета",
                    "Глубокий детокс",
                    "Нормализация гормонов"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-1">✓</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Диагностика */}
        <section className="mb-4">
            <h2 className="font-bold text-primary mb-1 ">Научный подход к вашей красоте</h2>
            <h3 className="font-semibold  mb-1">ДИАГНОСТИКА:</h3>
            <ul className=" space-y-1">
                <li>Общий и биохимический анализ крови</li>
                <li>Консультации с врачом</li>
                <li>Индивидуальные протоколы</li>
            </ul>
        </section>

        {/* Курс лечения */}
        <section className="mb-4">
            <h3 className="font-semibold  mb-1">ИНДИВИДУАЛЬНЫЙ КУРС:</h3>
            <div className="">
                <p className="font-medium">5 коллаген-капельниц:</p>
                <p className="mb-2">Стимуляция выработки коллагена</p>
                <p className="font-medium">5 аминокислотных капельниц:</p>
                <p>Насыщение нутриентами</p>
            </div>
        </section>

        {/* Почему мы */}
        <section className="mt-4">
            <h3 className="font-semibold text-primary mb-1">ПОЧЕМУ КАПЛАБ?</h3>
            <ul className="space-y-1">
                <li>• Научный подход</li>
                <li>• Индивидуальные планы</li>
                <li>• Комплексное воздействие</li>
                <li>• Безопасность и комфорт</li>
            </ul>
        </section>
    </div>
)