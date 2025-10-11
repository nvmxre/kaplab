"use server"

export const DripCollagen = () => (
    <div className="font-sans bg-white text-gray-900 max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-pink-700">8 000 ₽</span>
                        <span className="text-gray-500 line-through">15 100 ₽</span>
                        <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
            Консультация врача в подарок!
          </span>
                    </div>

                    <p className="text-lg text-gray-700 mb-4">
                        Больше не нужно пить коллаген вечно! К тому же он не усваивается. Молодая кожа, здоровые
                        суставы, бодрость и энергия.
                    </p>

                    <p className="text-gray-700">
                        Коллагеностимулирующие капельницы — это внутривенные процедуры, направленные на усиление синтеза
                        коллагена в организме.
                    </p>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-8 text-center text-pink-800">Стоимость процедуры</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {name: "Капельница «База»", price: "8 000 ₽", oldPrice: "10 000 ₽"},
                    {name: "Капельница «Стандарт»", price: "10 000 ₽", oldPrice: "12 000 ₽"},
                    {name: "Капельница «Люкс»", price: "12 000 ₽", oldPrice: "14 000 ₽"}
                ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                        <h3 className="text-xl font-bold mb-3 text-pink-700">{item.name}</h3>
                        <div className="flex flex-col mb-4">
                            <span className="text-2xl font-bold text-pink-700">{item.price}</span>
                            <span className="text-gray-500 line-through ml-2">{item.oldPrice}</span>
                        </div>
                        {/*<BookingButton/>*/}
                    </div>
                ))}
            </div>

            <p className="text-center mt-6 text-primary-600 font-medium">
                Консультации и сопровождение врачей в подарок!
            </p>
        </section>

        {/* Description Section */}
        <section className="mb-16">
            <p className="text-lg text-gray-700 mb-8">
                Коллаген — ключевой структурный белок, обеспечивающий прочность и эластичность кожи, хрящей, суставов и
                соединительной ткани. С возрастом его выработка снижается, что приводит к морщинам, болям в суставах и
                замедленному восстановлению тканей.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-pink-800">Эффективность</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-pink-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2 text-pink-700">Для кожи:</h3>
                    <p>улучшение увлажненности, уменьшение морщин (исследования показывают умеренный эффект, но
                        требуется регулярное проведение процедур).</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2 text-pink-700">Для суставов:</h3>
                    <p>снижение боли при остеоартрите, укрепление хрящевой ткани.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2 text-pink-700">Регенерация:</h3>
                    <p>ускорение восстановления после травм или операций.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-pink-800">Показания к применению:</h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                    "Возрастные изменения кожи (потеря упругости, морщины)",
                    "Остеоартрит, артралгии",
                    "Реабилитация после травм, операций или спортивных нагрузок",
                    "Профилактика старения"
                ].map((item, index) => (
                    <li key={index} className="flex items-start bg-pink-50 p-4 rounded-lg">
                        <svg className="w-5 h-5 mt-0.5 mr-3 text-pink-600" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>

        {/* Components Section */}
        <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-pink-800">Основные компоненты</h2>
            <p className="mb-6">
                Капельницы обычно содержат комбинацию веществ, стимулирующих синтез коллагена:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
                {[
                    "Аминокислоты (пролин, лизин, глицин и др.) — «строительные блоки» коллагена.",
                    "Витамин С — кофактор для ферментов, синтезирующих коллаген.",
                    "Биотин — это (витамин H или В7) – помогает усваивать белки, жиры и углеводы, влияет на производство коллагена — увлажняет и поддерживает структуру кожи.",
                    "Витамин В5 (пантотеновая кислота) – водорастворимое органическое соединение, участвующее в обменных процессах, построении и развитии клеток организма.",
                    "Глутатион — является индикатором общего состояния клеток и способности переносить токсические нагрузки.",
                    "Янтарная кислота — эндогенный внутриклеточный метаболит.",
                    "Рибофлавин (витамин В2) является флавиновым коферментом (ФАД), активирующим сукцинатдегидрогеназу и другие окислительно-восстановительные реакции",
                    "Никотинамид (витамин РР), амидникотиновой кислоты. Никотинамид в клетках никотинамидадениндинуклеотида (НАД), необходим для клеточного дыхания и стимуляции синтеза АТФ.",
                    "Инозин — обладает способностью активировать ряд ферментов."
                ].map((item, index) => (
                    <div key={index} className="flex items-start p-4 border border-gray-200 rounded-lg">
                        <span className="text-pink-600 mr-3 font-bold mr-1">{index + 1}.</span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </section>

        {/* Advantages Section */}
        <section className="mb-16 bg-pink-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-pink-800">Преимущества перед другими методами</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {[
                    {
                        title: "Системное воздействие",
                        description: "Вещества поступают непосредственно в кровь"
                    },
                    {
                        title: "Медленное введение",
                        description: "Снижает риск побочных эффектов"
                    }
                ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm">
                        <h3 className="text-xl font-bold mb-2 text-pink-700">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Risks Section */}
        <section className="mb-16 bg-red-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-red-800">Риски и противопоказания</h2>

            <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Аллергические реакции на компоненты капельницы</span>
                </li>
                <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Побочные эффекты: тошнота, головная боль (при избытке витамина С или минералов).</span>
                </li>
                <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Противопоказания: беременность, почечная недостаточность, аутоиммунные заболевания (например, ревматоидный артрит).</span>
                </li>
                <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Важно: Перед применением обязательна консультация врача!</span>
                </li>
            </ul>

            <p className="mb-6">
                Коллагеностимулирующие капельницы могут быть полезны как часть комплексного подхода к антивозрастной
                терапии или восстановлению, но их эффективность варьируется в зависимости от индивидуальных
                особенностей. Рекомендуется сочетать их с коррекцией образа жизни, диетой и наружными средствами.
            </p>
        </section>
    </div>

)