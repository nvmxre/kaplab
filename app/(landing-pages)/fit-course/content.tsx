"use client"
import React from "react";
import Image from "next/image"
import DoctorsSection from "@/components/doctors-section"
import ReelsTestimonials from "@/components/reels-testimonials"
import {BookingButton, BookingService} from "@/components/booking-button";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import GradientText from "@/components/gradient-text"

export default function FitCourseContent() {
    const service: BookingService = {
        id: 1337,
        title: "Акция: Курс жиросжигающих капельниц",
        price: "20000"
    }

    return (
        <>
            <section className="w-full pt-20 xl:pt-20 pb-12 xl:pb-20">
                <div className="container px-4">
                    <nav className="text-sm text-muted-foreground mb-6">
                        <span>Главная</span> &gt; <span>Курс жиросжигающих капельниц</span>
                    </nav>
                    <div
                        className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#cbb3bf] via-70% via-[#ecdbe3] to-[#d9c5cf] relative flex flex-col p-4 xl:p-8 min-h-24">
                        <div className="z-10 grid grid-cols-1 xl:grid-cols-2">
                            <div className="flex flex-col gap-6">
                                <h1 className={"text-3xl font-bold sm:text-5xl text-primary"}>Безопасное снижение веса под контролем врача</h1>
                                <h3 className="text-xl font-semibold text-primary">Курс капельниц для снижения веса</h3>
                                <h3 className={"text-lg font-base tracking-tighter sm:text-2xl xl:text-2xl/none"}>
                                    <GradientText
                                        colors={["#0d587f", "#ec0e76", "#0d587f", "#ec0e76", "#0d587f"]}
                                        animationSpeed={10}
                                        showBorder={false}
                                        className="text-primary text-3xl lg:text-5xl font-bold"
                                    >
                                        20.000 ₽
                                    </GradientText>
                                    вместо <s>29.000 ₽</s>
                                </h3>
                                <div>
                                    <ul className={"list-disc list-inside marker:text-primary"}>
                                        <li>Ускоряют обмен веществ и запускают жиросжигание.
                                        </li>
                                        <li>Без строгих диет и изнурительных тренировок.
                                        </li>
                                        <li>До -5&nbsp;кг за курс капельниц.
                                        </li>
                                    </ul>
                                </div>
                                <BookingButton  reachGoal={"lead"} ymId={103914546} btnText={"Получить скидку"} variant={"secondary"} service={service}/>
                            </div>
                        </div>
                        <Image className={"hidden xl:block absolute inset-0"}
                               src={"/assets/landing-pages/fit-course.png"}
                               alt={"Похудей на 4-5 кг за курс жиросжигающих капельниц!"} fill objectFit={"cover"}/>
                    </div>
                    {/*<div className="xl:hidden mt-4 rounded-3xl overflow-hidden relative min-h-48">*/}
                    {/*    <Image className={"absolute inset-0"} src={"/assets/landing-pages/fit-course.png"}*/}
                    {/*           alt={"Похудей на 4-5 кг за курс жиросжигающих капельниц!"} fill objectFit={"cover"}/>*/}
                    {/*</div>*/}
                </div>
            </section>

            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 mb-8">
                        Не очередная диета — а медицинский подход
                    </h2>
                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">Эффективные компоненты</h3>
                            <p className="text-gray-700 mt-2">
                                Мы используем компоненты с доказанной эффективностью (L-карнитин, альфа-липоевую кислоту
                                и др.).
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">Максимальное усвоение</h3>
                            <p className="text-gray-700 mt-2">
                                Препараты вводятся внутривенно, поэтому усвоение выше, чем при приёме таблеток.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">Опытные врачи</h3>
                            <p className="text-gray-700 mt-2">
                                Каждую процедуру ведёт врач с опытом более 5 лет.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">Бесплатная консультация</h3>
                            <p className="text-gray-700 mt-2">
                                Перед началом курса проводится бесплатная консультация и проверка противопоказаний.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <div className="space-y-4 mb-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                            Долгий результат, комфорт и забота о здоровье
                        </h1>
                        <div className={"grid grid-cols-1 xl:grid-cols-2 gap-6"}>
                            <div>
                                <p className="text-gray-600 md:text-xl text-balance">
                                    Что входит в курс капельниц?
                                </p>
                                <div className="pt-4 pb-10 space-y-10">
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none text-balance opacity-25">/01</span>
                                        <p className="text-gray-600 md:text-xl text-balance">
                                            Курс жиросжигающих капельниц (3 процедуры) – мощная поддержка организма в
                                            борьбе с лишним весом.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none text-balance opacity-25">/02</span>
                                        <p className="text-gray-600 md:text-xl text-balance">
                                            Капельница "Железодефицит Easy" – восстановит энергию и улучшит самочувствие.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none text-balance opacity-25">/03</span>
                                        <p className="text-gray-600 md:text-xl text-balance">
                                            Бесплатный анализ крови (ОАК + ферритин) – контроль здоровья перед курсом.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none text-balance opacity-25">/04</span>
                                        <p className="text-gray-600 md:text-xl text-balance">
                                            Консультация и сопровождение врача – индивидуальный подход и безопасность.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 md:text-xl text-balance">
                                    Как это работает? Мощный состав на страже вашей стройности:
                                </p>
                            </div>
                            <div
                                className="hidden xl:block w-full h-full rounded-2xl bg-gradient-to-r from-[#d9c5cf] via-30% via-[#ecdbe3] to-[#d9c5cf]"/>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "L-карнитин",
                                    desc: "Превращает упрямый жир в чистую энергию, ускоряя сжигание запасов!"
                                },
                                {
                                    title: "Альфа-липоевая кислота",
                                    desc: "Мощный антиоксидант, ускоряет метаболизм и повышает эффективность капельницы!"
                                },
                                {
                                    title: "Витамин С",
                                    desc: "Укрепляет организм, усиливает действие других компонентов и улучшает обмен веществ!"
                                },
                            ].map((item, i) => (
                                <div className={"p-4 rounded-2xl bg-primary text-white"} key={i}>
                                    <h3 className={"text-lg font-semibold"}>{item.title}</h3>
                                    <p className={"text-sm"}>{item.desc}</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <div className="space-y-4 mb-6">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                            Капельница для похудения – это ваш секрет успеха
                        </h1>
                        <div className={"grid grid-cols-1 xl:grid-cols-2 gap-6"}>
                            <div
                                className="flex items-center justify-center w-full h-full rounded-2xl bg-gradient-to-r from-[#d9c5cf] via-30% via-[#ecdbe3] to-[#d9c5cf]">
                                <Image className={"max-h-[35vh] w-auto xl:max-h-full"}
                                       src={"/assets/iv-therapy/fit/2.webp"} alt={"Капельница для похудения"}
                                       height={546} width={308}/>
                            </div>
                            <div>
                                <div className="space-y-10">
                                    <div>
                                        <span
                                            className="text-5xl text-primary font-bold select-none text-balance opacity-25">/01</span>
                                        <p className="text-gray-600 md:text-xl text-balance">
                                            Ускоряет метаболизм и расщепление жиров. Запускает ускоренный обмен веществ
                                            – организм начинает работать на сжигание жира!
                                        </p>
                                    </div>
                                    <div>
                                        <span
                                            className="text-5xl text-primary font-bold select-none text-balance opacity-25">/02</span>
                                        <p className="text-gray-600 md:text-xl text-balance">
                                            Снижает аппетит и выводит лишнюю жидкость
                                        </p>
                                    </div>
                                    <div>
                                        <span
                                            className="text-5xl text-primary font-bold select-none text-balance opacity-25">/03</span>
                                        <p className="text-gray-600 md:text-xl text-balance">
                                            Работает, пока вы отдыхаете: Читайте, смотрите кино, работайте или просто
                                            расслабляйтесь в нашем комфортном кабинете
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 xl:py-20 bg-gradient-to-r from-[#ecdbe3] to-[#d9c5cf]">
                <div className="container px-4 grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                            Превратите мечту о стройности в реальность легко!
                        </h2>
                        <p className="text-gray-700 md:text-xl">
                            Это ваш шанс сделать похудение эффективным, комфортным и безопасным!
                        </p>
                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                            <BookingButton  reachGoal={"lead"} ymId={103914546} btnText={"Записаться на консультацию"} fullWidth={false} service={service}/>
                            <BookingButton  reachGoal={"lead"} ymId={103914546} variant={"secondary"} btnText={"Получить скидку"} fullWidth={false}
                                           service={service}/>
                        </div>
                    </div>
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                        <Image src="/assets/landing-pages/fit-course-2.jpg" alt="Красивая подтянутая девушка" fill
                               className="object-cover"/>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 mb-8">
                        При обращении к нам вы получаете не просто капельницу, а КОМПЛЕКСНУЮ ЗАБОТУ:
                    </h2>
                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">Консультация терапевта</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>Забор крови на ключевые показатели.</li>
                                <li>Детальная расшифровка анализов врачом.</li>
                                <li>Понимание состояния здоровья: нет ли скрытых проблем или дефицитов?</li>
                            </ul>
                            <p className="text-sm text-gray-500 mt-2">
                                Важно! Все препараты назначаются строго индивидуально, только после осмотра врачом.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">Комфорт и уют</h3>
                            <p className="text-gray-700 mt-2">
                                Наслаждайтесь Wi-Fi, смотрите фильмы, читайте журналы — процедура проходит в
                                расслабляющей обстановке.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">Профессионализм и забота</h3>
                            <p className="text-gray-700 mt-2">
                                Наши медсестры ставят капельницы мягко и практически безболезненно.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">Индивидуальный подход</h3>
                            <p className="text-gray-700 mt-2">
                                Витаминные коктейли подбираются строго под ваши задачи и результаты анализов.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">Мощный оздоровительный эффект</h3>
                            <p className="text-gray-700 mt-2">
                                Полноценный курс капельниц заменяет целых 3 месяца приема витаминов и БАДов в таблетках!
                                Решайте проблему изнутри!
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-primary xl:col-span-2">
                            <h3 className="text-xl font-semibold text-white">Это ваш шанс сделать похудение эффективным,
                                комфортным и безопасным!</h3>
                            <p className="text-gray-200 mt-2">
                                Противопоказания: Беременность, лактация, возраст до 18 лет, тяжелые хронические
                                заболевания, индивидуальная непереносимость компонентов. <i>Обязательна предварительная
                                консультация с нашим врачом.</i>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*<section className="w-full py-12 xl:py-20">*/}
            {/*    <div className="container px-4 grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">*/}
            {/*        <div className="relative w-full h-96 rounded-2xl overflow-hidden">*/}
            {/*            <Image src="/assets/iv-therapy/fit/1.webp" alt="Капельница Железодефицит Easy" fill*/}
            {/*                   className="object-contain"/>*/}
            {/*        </div>*/}
            {/*        <div className="space-y-6">*/}
            {/*            <h2 className="text-3xl font-bold sm:text-5xl text-gray-900">Капельница "Железодефицит*/}
            {/*                Easy"</h2>*/}
            {/*            <p className="text-gray-400">Победите усталость и анемию. Забудьте о 3 месяцах таблеток –*/}
            {/*                почувствуйте прилив сил уже после первой процедуры!</p>*/}
            {/*            <p className="text-gray-700">Постоянная усталость, разбитость, ломкие ногти и выпадающие волосы?*/}
            {/*                Это не просто «плохой день» – это коварный дефицит железа, который крадет вашу энергию и*/}
            {/*                качество жизни! Таблетки действуют месяцами, а состояние лишь ухудшается?</p>*/}
            {/*            <ul className="list-disc list-inside marker:text-primary text-gray-700 space-y-1">*/}
            {/*                <li>Мгновенное действие: Железо попадает прямо в кровоток, минуя ЖКТ. Первые результаты –*/}
            {/*                    уже после 1 процедуры!*/}
            {/*                </li>*/}
            {/*                <li>100% усвоение: Никаких потерь из-за проблем с пищеварением! Максимальная польза от*/}
            {/*                    каждой капли.*/}
            {/*                </li>*/}
            {/*                <li>Восполняет дефицит железа и улучшает кислородный обмен. Повышает энергию и уменьшает*/}
            {/*                    усталость. Укрепляет иммунитет и улучшает состояние кожи.*/}
            {/*                </li>*/}
            {/*                <li>Без побочных эффектов ЖКТ: Ни тошноты, ни запоров, ни боли в желудке – только чистая*/}
            {/*                    польза.*/}
            {/*                </li>*/}
            {/*            </ul>*/}
            {/*            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">*/}
            {/*                <BookingButton  reachGoal={"lead"} ymId={103914546} btnText={"Записаться на консультацию"} fullWidth={false} service={service}/>*/}
            {/*                <BookingButton  reachGoal={"lead"} ymId={103914546} variant={"secondary"} btnText={"Узнать подробнее"} fullWidth={false}*/}
            {/*                               service={service}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <ReelsTestimonials/>

            <section className="w-full py-12 xl:py-20 bg-gradient-to-r from-[#ecdbe3] to-[#d9c5cf]">
                <div className="container px-4 text-center space-y-6">
                    <h2 className="text-3xl font-bold sm:text-5xl text-gray-900">Жиросжигающие капельницы – быстрый
                        старт к идеальному весу!</h2>
                    <p className="text-gray-700">Результат уже после первого сеанса: легкость в теле, уменьшение
                        объемов, прилив энергии.</p>
                    <p className="text-gray-700 font-semibold">Специальное предложение! Полный курс + бонусные процедуры
                        по сниженной цене.</p>
                    <p className="text-gray-600">Акция действует ограниченное время! Звоните: <span
                        className="font-bold"><a
                        href="tel:84954734352">+7 (495) 473-43-52</a></span></p>
                    <BookingButton  reachGoal={"lead"} ymId={103914546} className="px-8 py-4 rounded-2xl bg-primary text-white font-semibold"
                                   btnText={"Начать путь к идеальной фигуре"} fullWidth={false} service={service}/>
                </div>
            </section>

            {/*<HeroCarousel onBooking={handleBooking}/>*/}
            {/*<ServicesGrid onBooking={handleBooking}/>*/}
            <DoctorsSection/>
            <section className="py-12 bg-gray-50">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Вопрос-ответ</h2>
                            <p className="text-muted-foreground mb-6">
                                Нужна дополнительная информация? Наш раздел "Вопрос-ответ" отвечает на самые важные вопросы о наших
                                процедурах и услугах.
                            </p>
                        </div>

                        <div>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                        <span className="text-left font-medium">Сколько держится эффект?</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2">
                                        В среднем 3–6 месяцев, зависит от образа жизни.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                        <span className="text-left font-medium">Есть ли противопоказания?</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2">
                                        Да, врач проверяет перед процедурой.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                        <span className="text-left font-medium">Будет ли тошнить или кружиться голова?</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2">
                                        Нет, состав мягкий и безопасный, капельница проходит комфортно.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
