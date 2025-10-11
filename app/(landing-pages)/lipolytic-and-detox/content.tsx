"use client";
import React from "react";
import Image from "next/image";
import DoctorsSection from "@/components/doctors-section";
import ReelsTestimonials from "@/components/reels-testimonials";
import { BookingButton, BookingService } from "@/components/booking-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import GradientText from "@/components/gradient-text";

export default function LipoDetoxLanding() {
    const service: BookingService = {
        id: 1441,
        title: "Липолитик (1 зона) + капельница Детокс",
        price: "9000",
    };

    return (
        <>
            {/* HERO */}
            <section className="w-full pt-20 xl:pt-20 pb-12 xl:pb-20">
                <div className="container px-4">
                    <nav className="text-sm text-muted-foreground mb-6">
                        <span>Главная</span> &gt; <span>Липолитик + Детокс</span>
                    </nav>

                    <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#cbb3bf] via-70% via-[#ecdbe3] to-[#d9c5cf] relative flex flex-col p-4 xl:p-8 min-h-24">
                        <div className="z-10 grid grid-cols-1 xl:grid-cols-2">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-3xl font-bold sm:text-5xl text-primary">
                                    Идеальная фигура и кубики на животе — без изнурительных диет
                                </h1>
                                <h3 className="text-xl font-semibold text-primary">
                                    Липолитик (1 зона: живот или бока) + капельница «Детокс»
                                </h3>

                                <h3 className="text-lg font-base tracking-tighter sm:text-2xl xl:text-2xl/none">
                                    <GradientText
                                        colors={["#0d587f", "#ec0e76", "#0d587f", "#ec0e76", "#0d587f"]}
                                        animationSpeed={10}
                                        showBorder={false}
                                        className="text-primary text-3xl lg:text-5xl font-bold"
                                    >
                                        9&nbsp;000 ₽
                                    </GradientText>
                                    вместо <s>19&nbsp;000 ₽</s>
                                </h3>

                                <ul className="list-disc list-inside marker:text-primary">
                                    <li>Четкий рельеф: липолитик точечно разрушает жировые клетки в зоне живота и боков.</li>
                                    <li>Уйдут отеки и появится легкость в теле: капельница «Детокс» очищает организм и ускоряет метаболизм.</li>
                                    <li>Комфортно и быстро: 15–30 минут процедура + расслабляющая инфузия.</li>
                                </ul>

                                <BookingButton
                                    reachGoal={"lead"}
                                    ymId={103914546}
                                    btnText={"Записаться на консультацию"}
                                    variant={"secondary"}
                                    service={service}
                                />
                                <p className="text-xs text-muted-foreground -mt-3">
                                    *Стоимость указана за первую процедуру.
                                </p>
                            </div>
                        </div>

                        <Image
                            className="hidden xl:block absolute inset-0 object-cover"
                            src={"/assets/landing-pages/fit-course.png"}
                            alt={"Липолитик + капельница Детокс"}
                            fill
                        />
                    </div>
                </div>
            </section>

            {/* WHY SYNERGY */}
            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 mb-8">
                        Почему это работает в 2 раза эффективнее?
                    </h2>
                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">Липолитик</h3>
                            <p className="text-gray-700 mt-2">
                                Точечно разрушает жировые отложения — это не «общая» потеря веса, а прицельная работа с проблемной
                                зоной. Помогает проявиться прессу и уменьшить объем.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">Капельница «Детокс»</h3>
                            <p className="text-gray-700 mt-2">
                                Очищает печень и организм, выводит продукты распада жира, усиливает и закрепляет результат. Дарит
                                прилив энергии и ощущение легкости.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">Быстро и комфортно</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>15–30 минут на липолитик, капельница — от 30 минут до 2 часов.</li>
                                <li>Минимальная болезненность и без длительной реабилитации.</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">Результат и сроки</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>Первые изменения — через 5–7 дней.</li>
                                <li>Окончательный эффект — через 3–4 недели.</li>
                                <li>Обычно требуется 2–4 процедуры с интервалом ~1 месяц.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* TARGET ZONES + BENEFITS */}
            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <div className="space-y-4 mb-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                            Идеальные контуры без разрезов и наркоза
                        </h2>

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-600 md:text-xl">
                                    Инъекционные липолитики — точечное растворение жира там, где диеты и спорт бессильны.
                                </p>

                                <div className="pt-6 space-y-6">
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none opacity-25">/01</span>
                                        <p className="text-gray-600 md:text-xl">
                                            Быстро: сама процедура занимает 15–30 минут.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none opacity-25">/02</span>
                                        <p className="text-gray-600 md:text-xl">
                                            Комфортно: обезболивающий крем + тончайшая игла, минимум дискомфорта.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none opacity-25">/03</span>
                                        <p className="text-gray-600 md:text-xl">
                                            Точно: работаем только с проблемными зонами — пресизионная разметка перед инъекциями.
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-5xl text-primary font-bold select-none opacity-25">/04</span>
                                        <p className="text-gray-600 md:text-xl">
                                            Стойко: эффект — за счёт разрушения мембран жировых клеток и их естественного выведения.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden xl:block w-full h-full rounded-2xl bg-gradient-to-r from-[#d9c5cf] via-30% via-[#ecdbe3] to-[#d9c5cf]" />
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                            {[
                                { title: "Живот и бока", desc: "Проявите пресс: минус локальные жировые отложения." },
                                { title: "«Галифе» на бедрах", desc: "Коррекция сложных зон, не поддающихся тренировкам." },
                                { title: "Спина и зона бюстгальтера", desc: "Убираем валики и неровности рельефа." },
                            ].map((item, i) => (
                                <div className="p-4 rounded-2xl bg-primary text-white" key={i}>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT GOES */}
            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <div className="space-y-4 mb-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                            Как проходит процедура
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center justify-center w-full h-full">
                                <Image
                                    className={"object-cover rounded-2xl"}
                                    src="/assets/landing-pages/fit-course-2.jpg"
                                    alt="Инъекционный липолитик"
                                    height={1120}
                                    width={1680}
                                />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <span className="text-5xl text-primary font-bold select-none opacity-25">/01</span>
                                    <p className="text-gray-600 md:text-xl">
                                        Врач осматривает, собирает анамнез, исключает противопоказания и делает разметку зон.
                                    </p>
                                </div>
                                <div>
                                    <span className="text-5xl text-primary font-bold select-none opacity-25">/02</span>
                                    <p className="text-gray-600 md:text-xl">
                                        Наносим крем-анестетик для комфорта. Серией микроинъекций вводим препарат в ПЖК.
                                    </p>
                                </div>
                                <div>
                                    <span className="text-5xl text-primary font-bold select-none opacity-25">/03</span>
                                    <p className="text-gray-600 md:text-xl">
                                        Обрабатываем зону, даем рекомендации (легкий массаж, питьевой режим) для идеального результата.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <BookingButton
                                reachGoal={"lead"}
                                ymId={103914546}
                                btnText={"Получить бесплатную консультацию"}
                                fullWidth={false}
                                service={service}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* DETOX IV */}
            <section className="w-full py-12 xl:py-20 bg-gradient-to-r from-[#ecdbe3] to-[#d9c5cf]">
                <div className="container px-4 grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                            Капельница «Детокс» — мощное очищение и энергия
                        </h2>
                        <p className="text-gray-700 md:text-xl">
                            Вещества попадают сразу в кровь, минуя ЖКТ — 100% усвоение и быстрый старт действия.
                        </p>

                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>
                                <b>Гептрал</b>: восстанавливает и защищает печень.
                            </li>
                            <li>
                                <b>Глутатион</b>: сильнейший антиоксидант, выводит тяжелые металлы, придает коже сияние.
                            </li>
                            <li>
                                <b>Витамины B6 и B12</b>: энергия, поддержка нервной системы и ускорение метаболизма.
                            </li>
                        </ul>

                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                            <BookingButton
                                reachGoal={"lead"}
                                ymId={103914546}
                                btnText={"Записаться на консультацию"}
                                fullWidth={false}
                                service={service}
                            />
                            <BookingButton
                                reachGoal={"lead"}
                                ymId={103914546}
                                variant={"secondary"}
                                btnText={"Получить скидку"}
                                fullWidth={false}
                                service={service}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center relative w-full h-96 rounded-2xl overflow-hidden">
                        <Image
                            src="/assets/iv-therapy/detox/3.webp"
                            alt="Капельница Детокс"
                            height={358}
                            width={295}
                            className="max-h-[35vh] w-auto xl:max-h-full"
                        />
                    </div>
                </div>
            </section>

            {/* RESULTS & FOR WHOM */}
            <section className="w-full py-12 xl:py-20">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 mb-8">
                        Какой результат вы получите?
                    </h2>

                    <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-3">
                            <h3 className="text-xl font-semibold text-primary">После 1-й процедуры</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>Ясность в голове и прилив энергии.</li>
                                <li>Уйдут отеки и чувство тяжести.</li>
                                <li>Нормализация сна и улучшение настроения.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">После курса</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>Укрепление иммунитета, меньше простуд.</li>
                                <li>Уходят хроническая усталость и головные боли.</li>
                                <li>Более упругая и сияющая кожа.</li>
                                <li>Наладится пищеварение и работа кишечника.</li>
                                <li>Ускорится метаболизм и снижение веса.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-gray-100 xl:col-span-2">
                            <h3 className="text-xl font-semibold text-primary">Кому особенно подходит?</h3>
                            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                                <li>Жителям мегаполиса.</li>
                                <li>В период стресса и высоких нагрузок.</li>
                                <li>После праздников, отравления или болезни.</li>
                                <li>При нерегулярном питании и недосыпе.</li>
                                <li>Для профилактики и здорового старения.</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl bg-primary xl:col-span-3">
                            <h3 className="text-xl font-semibold text-white">
                                Готовы сделать первый шаг к телу мечты без операций?
                            </h3>
                            <p className="text-gray-200 mt-2">
                                Наш эксперт ответит на вопросы, рассчитает стоимость именно для вашего случая и составит персональный
                                план коррекции.
                            </p>
                            <div className="mt-4">
                                <BookingButton
                                    reachGoal={"lead"}
                                    ymId={103914546}
                                    className="px-8 py-4 rounded-2xl bg-white hover:bg-gray-100 text-primary font-semibold"
                                    btnText={"Получить бесплатную консультацию"}
                                    fullWidth={false}
                                    service={service}
                                />
                            </div>
                            <p className="text-gray-300 text-xs mt-3">
                                *Имеются противопоказания. Необходима консультация специалиста.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <ReelsTestimonials />

            {/* CTA STRIP */}
            <section className="w-full py-12 xl:py-20 bg-gradient-to-r from-[#ecdbe3] to-[#d9c5cf]">
                <div className="container px-4 text-center space-y-6">
                    <h2 className="text-3xl font-bold sm:text-5xl text-gray-900">
                        Быстрый старт к идеальному весу — уже сегодня
                    </h2>
                    <p className="text-gray-700">
                        Комбо из липолитика и «Детокс»-капельницы ускоряет результат и закрепляет его.
                    </p>
                    <p className="text-gray-700 font-semibold">
                        Специальное предложение действует ограниченное время.
                    </p>

                    <BookingButton
                        reachGoal={"lead"}
                        ymId={103914546}
                        className="px-8 py-4 rounded-2xl bg-primary text-white font-semibold"
                        btnText={"Начать путь к идеальной фигуре"}
                        fullWidth={false}
                        service={service}
                    />
                </div>
            </section>

            {/* DOCTORS */}
            <DoctorsSection />

            {/* FAQ */}
            <section className="py-12 bg-gray-50">
                <div className="container px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Вопрос-ответ</h2>
                            <p className="text-muted-foreground mb-6">
                                Нужна дополнительная информация? Здесь собрали самые частые вопросы о процедуре.
                            </p>
                        </div>

                        <div>
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                        <span className="text-left font-medium">Сколько держится эффект?</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2">
                                        Зависит от образа жизни и веса. В среднем — несколько месяцев. Для стойкого результата рекомендуем курс 2–4 процедуры.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                        <span className="text-left font-medium">Есть ли противопоказания?</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2">
                                        Да. Противопоказаны беременность, лактация, аллергии на компоненты и ряд хронических состояний. Перед началом — обязательная консультация врача.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                        <span className="text-left font-medium">Будет ли больно или долго восстанавливаться?</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2">
                                        Используем крем-анестетик и тончайшие иглы — дискомфорт минимален. Реабилитация, как правило, не требуется.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                                        <span className="text-left font-medium">Когда ждать результат?</span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4 pt-2">
                                        Первые изменения заметны через 5–7 дней, окончательный результат — через 3–4 недели.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <p className="text-xs text-muted-foreground mt-4">
                                *Процедура имеет противопоказания. Необходима консультация специалиста.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
