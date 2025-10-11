"use server"

export const DripProtivPohmelya = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Hero Section */}
            <div className="bg-primary p-6 ">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex space-x-4">
          <span className="bg-secondary px-3 py-1 rounded-full text-sm">
            Экспресс чек-ап
          </span>
                            <span className="bg-secondary px-3 py-1 rounded-full text-sm">
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
                        <p className="mb-2">Янтарная кислота, меглюмин, рибоксин</p>
                        <p>Метионин, витамин В3, витамин C</p>
                        <h3 className="text-lg font-semibold text-primary mt-4 mb-1">Длительность:</h3>
                        <p>от 30 мин до 2 часов</p>
                    </div>

                    <div className="bg-secondary p-6 rounded-lg">
                        <div className="mb-4 pb-4 border-b border-secondary-300">
                            <h3 className="text-lg font-semibold text-primary">1 процедура</h3>
                            <p className="text-2xl font-bold text-primary">7 000 ₽</p>
                        </div>
                        <div className="p-4 bg-secondary-200 rounded-lg">
                            <p className="font-bold text-primary">При курсе от 6 процедур:</p>
                            <p className="text-primary">6-ая процедура в подарок</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                    <p className="mb-4">
                        Быстрое и эффективное избавление от симптомов. Уже через 1-2 часа исчезнут все следы вчерашнего
                        застолья, вернется бодрость и положительный настрой.
                    </p>
                </div>

                {/* Benefits */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Преимущества:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-secondary-300">
                            <h3 className="font-bold text-primary mb-1">Быстрое действие</h3>
                            <p className="text-sm">Эффект заметен уже через 15-30 минут</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-secondary-300">
                            <h3 className="font-bold text-primary mb-1">Комплексное очищение</h3>
                            <p className="text-sm">Выведение продуктов распада алкоголя</p>
                        </div>
                    </div>
                </div>

                {/* Components */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-primary mb-3">Что входит:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {title: "Витамины", desc: "Нормализуют обмен веществ"},
                            {title: "Антиоксиданты", desc: "Защищают клетки"},
                            {title: "Детоксиканты", desc: "Очищают организм"},
                            {title: "Регидратация", desc: "Устраняет обезвоживание"}
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-secondary-300">
                                <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Effects */}
                <div className="mb-8 bg-secondary p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-primary mb-3">Устраняет симптомы:</h2>
                    <div className="flex flex-wrap gap-2">
                        {["Головная боль", "Тошнота", "Слабость", "Головокружение", "Дрожь", "Жажда"].map((item, index) => (
                            <span key={index} className="bg-white px-3 py-1 rounded-full text-sm">
            {item}
          </span>
                        ))}
                    </div>
                </div>

                {/* Procedure */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-primary mb-3">Как проходит:</h2>
                    <div className="bg-secondary p-6 rounded-lg">
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Осмотр специалиста</li>
                            <li>Приготовление раствора</li>
                            <li>Введение иглы</li>
                            <li>Введение раствора (30 мин - 2 часа)</li>
                            <li>Получение рекомендаций</li>
                        </ol>
                    </div>
                </div>

                {/* Why Us */}
                <div className="mb-8 bg-primary p-6 text-white rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Почему выбирают нас:</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Опытные врачи</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Быстрый выезд</span>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Безопасность</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-secondary mr-2">✓</span>
                                <span>Доступные цены</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Final Section */}
                <div className="text-center p-6 bg-primary text-white rounded-lg">
                    <p>
                        Не терпите дискомфорт - закажите процедуру с выездом на дом или посетите нашу клинику!
                    </p>
                </div>
            </div>
        </div>
    )
}