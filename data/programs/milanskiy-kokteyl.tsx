"use server"

export const ProgramMilanskiyKokteyl = () => (
    <div className="max-w-3xl mx-auto px-4 font-sans">
        {/* Оффер */}
        <section className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-primary mb-3">
                Курс капельниц «Миланский коктейль»
            </h1>
            <div className="bg-secondary p-4 rounded-lg mb-4">
                <p className="font-semibold">
                    + консультация и сопровождение врача в подарок
                </p>
                <p className="text-lg">
                    Стоимость одной процедуры: <span className="text-primary font-bold">18 000₽</span>
                </p>
            </div>
        </section>

        {/* Описание */}
        <section className="mb-8">
            <p className="mb-3 italic">
                Чувствуете усталость и не можете быстро восстановиться после тренировок? Хотите вернуть бодрость и улучшить внешний вид?
            </p>
            <p className="mb-3">
                «Миланский коктейль» — комплекс для повышения жизненного тонуса, разработанный для спортсменов итальянского «Интера» и доказавший свою эффективность!
            </p>
        </section>

        {/* Показания */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Кому подойдет?</h2>
            <div className="grid md:grid-cols-2 gap-3">
                {[
                    "Профессиональным спортсменам",
                    "Любителям фитнеса",
                    "Бодибилдерам",
                    "Активным людям",
                    "После приема антибиотиков",
                    "При хронической усталости",
                    "Для детоксикации организма"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Преимущества */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Почему выбирают?</h2>
            <div className="space-y-3">
                {[
                    "Быстрое восстановление после нагрузок",
                    "Глубокая детоксикация организма",
                    "Улучшение состояния кожи и волос",
                    "Поддержка сердечно-сосудистой системы",
                    "Ускорение обмена веществ",
                    "Повышение жизненного тонуса"
                ].map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Состав */}
        <section className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-3">Уникальный состав:</h2>
            <div className="space-y-4">
                {[
                    {
                        name: "Глутатион",
                        action: "Главный детоксикант организма",
                        effect: "Очищает печень, повышает выносливость"
                    },
                    {
                        name: "Езафосфин",
                        action: "Энергетический бустер",
                        effect: "Позволяет выдерживать серьезные нагрузки"
                    },
                    {
                        name: "Епаргресиовит",
                        action: "Витаминный комплекс",
                        effect: "Улучшает работу печени, обновляет клетки"
                    },
                    {
                        name: "Фолиевая кислота",
                        action: "Для кроветворения",
                        effect: "Укрепляет иммунитет, улучшает сосуды"
                    },
                    {
                        name: "Инозин",
                        action: "Кардиопротектор",
                        effect: "Нормализует обменные процессы"
                    }
                ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-3">
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-secondary">{item.action}</p>
                        <p>{item.effect}</p>
                    </div>
                ))}
            </div>
            <p className="mt-3 text-sm italic">
                Дозировка компонентов подбирается индивидуально
            </p>
        </section>

        {/* Итог */}
        <section className="bg-secondary p-4 rounded-lg">
            <p className="font-bold text-primary mb-2">
                Не откладывайте здоровье на потом!
            </p>
            <p>
                Пройдите курс «Миланского коктейля» и почувствуйте, как ваше тело обретает силу, а жизнь наполняется энергией.
            </p>
        </section>
    </div>
)