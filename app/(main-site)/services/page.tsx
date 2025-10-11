"use client"

import {useEffect} from "react"
import Link from "next/link"
import {Card} from "@/components/ui/card"
import {getServicesCount} from "@/lib/services-data"
import {cn} from "@/lib/utils";

const serviceCategories = [
    {
        name: "Капельницы",
        description: "45 видов витаминных капельниц для восстановления, красоты, здоровья и лечения",
        href: "/services/iv-drips",
        icon: "💉",
        count: getServicesCount("iv-drips"),
        enabled: true
    },
    {
        name: "Программы",
        description: "Комплексные программы лечения и восстановления",
        href: "/services/programs",
        icon: "📋",
        count: getServicesCount("programs"),
        enabled: true
    },
    {
        name: "Диагностика",
        description: "Комплексная диагностика состояния здоровья",
        href: "/services/diagnostics",
        icon: "🔍",
        count: getServicesCount("diagnostics"),
        enabled: true
    },
    {
        name: "Косметология",
        description: "Комплексная диагностика состояния здоровья",
        href: "/services/cosmetics",
        icon: "💆‍♀️",
        count: getServicesCount("cosmetics"),
        enabled: true
    },
]

export default function ServicesPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Все услуги клиники КАПЛАБ</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Мы предлагаем широкий спектр медицинских услуг: от витаминных капельниц до комплексных программ
                восстановления и
                косметологических процедур.
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {serviceCategories.map((category) => (
                    <Link
                        key={category.name}
                        href={category.href}
                        className={cn(
                            "block h-full",
                            (!category.enabled) && "opacity-50 cursor-not-allowed pointer-events-none"
                        )}
                    >
                        <Card
                            className="p-6 h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-3xl flex-shrink-0">{category.icon}</div>
                                <div className="flex-1 min-h-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold">{category.name}</h3>
                                        <span
                                            className="text-sm bg-pink-100 text-pink-600 px-2 py-1 rounded-full flex-shrink-0">
                      {category.count}
                    </span>
                                    </div>
                                    <p className="text-muted-foreground text-sm">{category.description}</p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Почему выбирают нас</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Профессиональные врачи</h3>
                        <p className="text-muted-foreground text-sm">
                            Все наши специалисты имеют высшую квалификацию и многолетний опыт работы
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Сертифицированные препараты</h3>
                        <p className="text-muted-foreground text-sm">
                            Используем только качественные препараты с подтвержденной эффективностью
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Современное оборудование</h3>
                        <p className="text-muted-foreground text-sm">Клиника оснащена новейшим медицинским
                            оборудованием</p>
                    </div>
                </div>
            </div>
        </>
    )
}
