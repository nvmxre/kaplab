"use server"

export const DripDetox = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero Section */}
            <div className="bg-primary p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex space-x-4">
          <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm">
            Экспресс чек-ап
          </span>
                            <span className="bg-secondary text-primary px-3 py-1 rounded-full text-sm">
            Консультация терапевта
          </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Composition & Pricing */}
            <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-secondary p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-primary mb-3">Состав:</h2>
                        <p className="mb-2">Гептрал, глутатион</p>
                        <p>Витамин В6, витамин В12</p>
                        <h3 className="text-lg font-semibold text-primary mt-4 mb-1">Длительность:</h3>
                        <p>от 30 мин до 2 часов</p>
                    </div>

                    <div className="bg-secondary p-6 rounded-lg">
                        <div className="mb-4 pb-4 border-b border-primary">
                            <h3 className="text-lg font-semibold text-primary">1 процедура</h3>
                            <p className="text-2xl font-bold text-primary">9 000 ₽</p>
                        </div>
                        <div className="p-4 bg-primary text-primary-foreground rounded-lg">
                            <p className="font-bold">При курсе от 6 процедур:</p>
                            <p>скидка 20% + экспресс чек-ап в подарок</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="mb-4">
                        Глубокое очищение организма от вредных веществ, улучшение работы печени, стимуляция иммунитета и омоложение на клеточном уровне.
                    </p>
                </div>

                {/* Components */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-primary mb-3">Ключевые компоненты:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {title: "Гептрал", desc: "Восстанавливает работу печени"},
                            {title: "Глутатион", desc: "Мощный антиоксидант"},
                            {title: "Витамин В6", desc: "Нормализует нервную систему"},
                            {title: "Витамин В12", desc: "Стимулирует иммунитет"}
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-primary">
                                <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-primary mb-3">Эффект:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Очищение от токсинов</li>
                            <li>Нормализация работы органов</li>
                            <li>Восстановление баланса</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Снижение вязкости крови</li>
                            <li>Устранение интоксикации</li>
                            <li>Клеточное омоложение</li>
                        </ul>
                    </div>
                </div>

                {/* Procedure */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Как проводится:</h2>
                    <ol className="list-decimal pl-5 space-y-2">
                        <li>Консультация и анализы</li>
                        <li>Индивидуальный подбор состава</li>
                        <li>Безболезненное введение</li>
                        <li>Введение раствора</li>
                        <li>Медицинский контроль</li>
                    </ol>
                </div>

                {/* Indications */}
                <div className="mb-8 bg-primary p-6 text-primary-foreground rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Показания:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold mb-1">Общие:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Курильщикам</li>
                                <li>Плохая экология</li>
                                <li>Стрессы</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">Медицинские:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Интоксикации</li>
                                <li>Хроническая усталость</li>
                                <li>Нарушения обмена</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="mb-8 bg-primary p-6 text-primary-foreground rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Результаты:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-bold mb-1">Физическое состояние:</h3>
                            <ul className="space-y-1">
                                <li className="flex items-start">
                                    <span className="text-primary-foreground mr-2">✓</span>
                                    <span>Улучшение самочувствия</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-foreground mr-2">✓</span>
                                    <span>Повышение энергии</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-1">Внешний вид:</h3>
                            <ul className="space-y-1">
                                <li className="flex items-start">
                                    <span className="text-primary-foreground mr-2">✓</span>
                                    <span>Улучшение кожи</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-foreground mr-2">✓</span>
                                    <span>Омоложение</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Final Section */}
                <div className="text-center p-6 bg-primary text-primary-foreground rounded-lg">
                    <p className="font-bold">
                        Очистите организм и почувствуйте себя обновленным!
                    </p>
                </div>
            </div>
        </div>
    )
}