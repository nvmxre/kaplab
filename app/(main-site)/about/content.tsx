"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


import { Award, Users, Clock, Shield, Heart, Target } from "lucide-react"
import {BookingButton} from "@/components/booking-button";

const achievements = [
    { icon: Users, title: "5000+", subtitle: "Довольных пациентов" },
    { icon: Award, title: "5 лет", subtitle: "Успешной работы" },
    { icon: Clock, title: "24/7", subtitle: "Поддержка пациентов" },
    { icon: Shield, title: "100%", subtitle: "Безопасность процедур" },
]

const values = [
    {
        icon: Heart,
        title: "Забота о пациентах",
        description: "Индивидуальный подход к каждому пациенту и внимание к его потребностям",
    },
    {
        icon: Award,
        title: "Профессионализм",
        description: "Высококвалифицированные врачи с многолетним опытом работы",
    },
    {
        icon: Target,
        title: "Результативность",
        description: "Использование только проверенных методов лечения с доказанной эффективностью",
    },
    {
        icon: Shield,
        title: "Безопасность",
        description: "Строгое соблюдение медицинских протоколов и стандартов качества",
    },
]

export default function AboutPageContent() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
                    <div className="container px-4">
                        {/* Breadcrumb */}
                        <nav className="text-sm text-muted-foreground mb-6">
                            <Link href="/" className="hover:text-foreground">
                                Главная
                            </Link>{" "}
                            &gt; <span>О клинике</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl font-bold mb-6">Клиника КАПЛАБ</h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Современная клиника витаминных капельниц в центре Москвы. Мы специализируемся на инфузионной терапии и
                                    предлагаем широкий спектр услуг для восстановления, красоты и здоровья.
                                </p>
                                <p className="text-muted-foreground mb-8">
                                    Наша миссия — сделать качественную медицинскую помощь доступной каждому. Мы используем только
                                    сертифицированные препараты и современное оборудование, а наши врачи имеют многолетний опыт работы в
                                    области инфузионной терапии.
                                </p>
                                <BookingButton fullWidth={false}/>
                            </div>
                            <div className="relative h-96 rounded-lg overflow-hidden">
                                <Image src="/assets/about.jpg" alt="Клиника КАПЛАБ" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievements */}
                <section className="py-12">
                    <div className="container px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <achievement.icon className="h-8 w-8 text-pink-600" />
                                    </div>
                                    <div className="text-3xl font-bold text-pink-600 mb-2">{achievement.title}</div>
                                    <div className="text-sm text-muted-foreground">{achievement.subtitle}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-12 bg-gray-50">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-8">Наша история</h2>
                            <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-center">
                                <div>
                                    <p className="text-muted-foreground mb-4">
                                        Клиника КАПЛАБ была основана в 2019 году группой врачей, объединенных общей идеей — сделать
                                        инфузионную терапию доступной и эффективной для каждого пациента.
                                    </p>
                                    <p className="text-muted-foreground mb-4">
                                        За годы работы мы помогли тысячам пациентов восстановить здоровье, улучшить самочувствие и повысить
                                        качество жизни. Наш опыт и профессионализм позволяют нам предлагать самые современные методы
                                        лечения.
                                    </p>
                                    <p className="text-muted-foreground">
                                        Сегодня КАПЛАБ — это современная клиника с собственной лабораторией, командой
                                        высококвалифицированных специалистов и репутацией надежного медицинского партнера.
                                    </p>
                                </div>
                                <div className="relative h-96 rounded-lg">
                                    <Image src="/assets/doctors/doctors.jpg" alt="Команда клиники КАПЛАБ" fill className="rounded-lg object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-12">
                    <div className="container px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Наши ценности</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <Card key={index} className="p-6 text-center">
                                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="h-8 w-8 text-pink-600" />
                                    </div>
                                    <h3 className="font-semibold mb-3">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">{value.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Licenses and Certificates */}
                <section className="py-12 bg-gray-50">
                    <div className="container px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">Лицензии и сертификаты</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <Card className="p-6 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Shield className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Лицензия Минздрава</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Лицензия на осуществление медицинской деятельности № Л041-01137-77/03196255
                                    </p>
                                </Card>
                                <Card className="p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Сертификат системы менеджмента качества медицинских услуг
                                    </p>
                                </Card>
                                <Card className="p-6 text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Аккредитация врачей</h3>
                                    <p className="text-sm text-muted-foreground">Все врачи имеют действующие сертификаты специалистов</p>
                                </Card>
                            </div>
                            <div className="text-center">
                                <p className="text-muted-foreground mb-4">
                                    Клиника КАПЛАБ работает в строгом соответствии с требованиями российского законодательства и
                                    международными стандартами качества медицинских услуг.
                                </p>
                                {/*<Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">*/}
                                {/*  Посмотреть документы*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Info */}
                <section className="py-12">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-8">Свяжитесь с нами</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                    <h3 className="font-semibold mb-2">Адрес</h3>
                                    <p className="text-muted-foreground text-sm">
                                        121170, город Москва, Поклонная ул, д. 4, помещ. 97
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Телефон</h3>
                                    <p className="text-muted-foreground text-sm">+7 (495) 473-43-52</p>
                                    <p className="text-muted-foreground text-sm">Ежедневно с 9:00 до 20:00</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Email</h3>
                                    <p className="text-muted-foreground text-sm">drops.lab@yandex.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
