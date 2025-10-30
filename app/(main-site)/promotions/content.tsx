"use client"

import React, {useEffect, useState} from "react"
import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"


import BookingModal from "@/components/booking-modal"

interface TimeLeft {
    hours: number
    minutes: number
    seconds: number
}

type PromoItemType = {
    id: number;
    title: string;
    src: string;
    oldPrice: string;
    newPrice: string;
    bullets: string[];
    href?: string;
}

export function useCountdownTimer(): TimeLeft {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({hours: 0, minutes: 0, seconds: 0})

    useEffect(() => {
        const calculateTimeLeft = (): TimeLeft => {
            const now = new Date()
            const moscowTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Moscow"}))

            // Следующий день в 00:00 по МСК
            const tomorrow = new Date(moscowTime)
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(0, 0, 0, 0)

            const difference = tomorrow.getTime() - moscowTime.getTime()

            if (difference > 0) {
                return {
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                }
            }

            return {hours: 0, minutes: 0, seconds: 0}
        }

        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return timeLeft
}

const promos: PromoItemType[] = [
    {
        id: 6,
        title: "Курс жиросжигающих капельниц",
        src: "/assets/landing-pages/fit-course.png",
        newPrice: "20.000",
        oldPrice: "29.000",
        bullets: [
            "Ускоряют обмен веществ и запускают жиросжигание",
            "Без строгих диет и изнурительных тренировок",
            "До -5 кг за курс капельниц"
        ],
        href: "/fit-course"
    },
    {
        id: 0,
        title: "Чек-ап + капельница «Омоложение изнутри»",
        src: "/assets/programs/weight-loss.jpg",
        newPrice: "14.990",
        oldPrice: "33.500",
        bullets: [
            "Клеточное восстановление",
            "Активацию метаболизма",
            "Борьбу с признаками старения",
            "Глубокую детоксикацию",
            "Улучшение качества кожи",
            "Восстановление энергии"
        ]
    },
    {
        id: 1,
        title: "Чек-ап + капельница «Женское здоровье»",
        src: "/assets/programs/women-health.jpg",
        newPrice: "9.990",
        oldPrice: "25.000",
        bullets: [
            "Общий анализ крови с лейкоцитарной формулой",
            "Биохимический анализ крови",
            "Анализ на витамины D, B9, B12, ТТГ",
            "Консультация врача",
            "Первая капельница курса"
        ]
    },
    {
        id: 2,
        title: "Чек-ап + капельница «Метаболический старт»",
        src: "/assets/programs/metabolicheskiy-start.jpg",
        newPrice: "14.990",
        oldPrice: "35.500",
        bullets: [
            "4 недели с посещением раз в неделю",
            "Консультации врача с контролем показателей",
            "Биоимпедансное сканирование тела",
            "Контрольные анализы (HOMA, глюкоза, инсулин)",
            "4 капельницы 'Ускорение метаболизма'",
            "4 процедуры пептидной терапии",
            "Общий и биохимический анализ крови",
            "Анализ гормонов щитовидной железы",
            "Витамины B9, B12, D",
            "Для женщин: половые гормоны"
        ]
    },
    {
        id: 3,
        title: "3 капельницы «Золушка»",
        src: "/assets/iv-therapy/stress/2.webp",
        newPrice: "18.000",
        oldPrice: "24.000",
        bullets: [
            "Сопровождение врача-специалиста - 0 руб.",
            "Анализ на ферритин и гемоглобин - 0 руб.",
            "Акция действует только на 3 капельницы"
        ]
    },
    {
        id: 4,
        title: "Экспресс чек-ап + капельница",
        src: "/assets/iv-therapy/vitamins/1.webp",
        newPrice: "5.990",
        oldPrice: "15.100",
        bullets: [
            "Клинический анализ крови с лейкоцитарной формулой",
            "Биохимический анализ крови",
            "Бесплатная консультация врача-терапевта",
            "Анализ имеющихся проблем",
            "Рекомендации по выздоровлению",
            "В акции участвуют капельницы «Против утомления», «Против стресса», «Стоп мигрень», «Энерджайзер», «Активность мозга», «Снижение веса»"
        ]
    },
    {
        id: 5,
        title: "Одна капельница «Железодефицит Easy»",
        src: "/assets/iv-therapy/fit/1.webp",
        newPrice: "4.900",
        oldPrice: "8.000",
        bullets: [
            "Сопровождение врача - 0 руб.",
            "Анализ на ферритин и гемоглобин - 0 руб.",
            "Акция действует только на первую капельницу",
        ]
    }
]

const CountdownTimer = React.memo(() => {
    const timeLeft = useCountdownTimer();

    return (
        <div className="mb-6">
            <span className="text-sm mb-2 block">до конца акции:</span>
            <div className="flex items-center gap-2 text-2xl font-mono">
                <span>{String(timeLeft.hours).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
        </div>
    );
});


export default function PromotionsPageContent() {
    const [isBookingOpen, setIsBookingOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<{ id: number; title: string; price: string } | undefined>()

    const handleBookingClick = (service: { id: number; title: string; price: string }) => {
        setSelectedService(service)
        setIsBookingOpen(true)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const PromoItem = React.memo(({item, onBook}: {
        item: PromoItemType,
        onBook: (service: { id: number; title: string; price: string }) => void
    }) => (
        <div className="relative rounded-lg p-2 lg:p-8 mb-12 border-2 border-dashed border-accent">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                <Image
                    src={item.src}
                    alt={item.title}
                    height={400}
                    width={400}
                    className="object-contain rounded-lg z-10"
                />
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-6 ">{item.title.toUpperCase()}</h2>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl line-through">{item.oldPrice} ₽</span>
                        <span className="text-3xl text-accent font-bold">{item.newPrice} ₽</span>
                    </div>

                    <CountdownTimer/>

                    <div className="mb-6">
                        <h3 className="font-semibold mb-3">Вы получаете:</h3>
                        <ul className="space-y-2">
                            {item.bullets.map(bullet => (
                                <li key={bullet} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-[#EC0E76] rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                            className="bg-[#EC0E76] hover:bg-[#d60c6a]"
                            onClick={() => onBook({id: item.id, title: `Акция: ${item.title}`, price: item.newPrice})}
                        >
                            Воспользоваться предложением
                        </Button>
                        {item.href &&
                            <Button asChild
                                    className="bg-[#EC0E76]/15 text-[#EC0E76] hover:bg-[#d60c6a] hover:text-white"
                            >
                                <Link href={item.href}>
                                    Подробнее
                                </Link>
                            </Button>
                        }
                    </div>
                </div>
                <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="absolute blur-lg opacity-50 inset-0 object-cover rounded-lg"
                />
            </div>
        </div>
    ));


    return (
        <div className="flex flex-col max-w-screen">

            <main className="flex-1 pt-16">
                <section className="py-12 bg-gray-50">
                    <div className="container px-4">
                        {/* Breadcrumb */}
                        <nav className="text-sm text-muted-foreground mb-6">
                            <Link href="/public" className="hover:text-foreground">
                                Главная
                            </Link>{" "}
                            &gt; <span>Акции</span>
                        </nav>

                        <h1 className="text-3xl font-bold text-center mb-4">Акции и скидки</h1>

                        {promos.map(promo => (
                            <PromoItem key={promo.id} item={promo} onBook={handleBookingClick}/>
                        ))}

                        {/* Дополнительная информация */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 text-center ">Как воспользоваться
                                акцией</h2>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <div
                                        className="w-16 h-16 bg-[#EC0E76] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                        1
                                    </div>
                                    <h3 className="font-semibold mb-2 ">Позвоните нам</h3>
                                    <p className="text-sm text-gray-600">Свяжитесь с нами по телефону или оставьте
                                        заявку на сайте</p>
                                </div>
                                <div>
                                    <div
                                        className="w-16 h-16 bg-[#EC0E76] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                        2
                                    </div>
                                    <h3 className="font-semibold mb-2 ">Назовите акцию</h3>
                                    <p className="text-sm text-gray-600">При записи обязательно укажите название
                                        интересующей акции</p>
                                </div>
                                <div>
                                    <div
                                        className="w-16 h-16 bg-[#EC0E76] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                        3
                                    </div>
                                    <h3 className="font-semibold mb-2 ">Получите скидку</h3>
                                    <p className="text-sm text-gray-600">Скидка будет применена при оплате услуг в
                                        клинике</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <BookingModal
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                service={selectedService}
                source="Страница акций"
            />
        </div>
    )
}
