"use client"

import {useState} from "react"
import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {ChevronDown, Menu, Phone, Clock} from "lucide-react"
import {cn} from "@/lib/utils"
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer"
import {BookingButton} from "@/components/booking-button";

const servicesMenuData = [
    {
        category: "Капельницы",
        items: [
            {
                name: "Все капельницы",
                description: "47 видов витаминных капельниц",
                href: "/services/iv-drips",
                icon: "💉",
                enabled: true,
            },
            {
                name: "Коллагеностимулирующие",
                description: "Для красоты кожи и волос",
                href: "/services/iv-drips/collagen",
                icon: "✨",
                enabled: true,
            },
            {
                name: "Миланский коктейль",
                description: "Курс капельниц для красоты",
                href: "/services/programs/milanskiy-kokteyl",
                icon: "🍸",
                enabled: true,
            },
            {
                name: "Мужское здоровье",
                description: "Курс для мужского здоровья",
                href: "/services/programs/muzhskoe-zdorovie",
                icon: "👨",
                enabled: true,
            },
        ],
    },
    {
        category: "Диагностика",
        items: [
            {
                name: "Анализы",
                description: "Лабораторные исследования",
                href: "/services/diagnostics",
                icon: "🧪",
                enabled: true
            },
            {
                name: "Генетические тесты",
                description: "ДНК-диагностика",
                href: "/services/diagnostics",
                icon: "🧬",
                enabled: true
            },
            {
                name: "Экспресс чекап",
                description: "Быстрая комплексная диагностика",
                href: "/services/diagnostics",
                icon: "⏱️",
                enabled: true
            },
        ],
    },
    {
        category: "Программы",
        items: [
            {
                name: "Оптимизация белкового обмена",
                description: "Программа коррекции метаболизма",
                href: "/services/programs/protein-optimization",
                icon: "🥩",
                enabled: true
            },
            {
                name: "Снижение веса Super",
                description: "Эффективная программа похудения",
                href: "/services/programs/super",
                icon: "⚡",
                enabled: true
            },
            {
                name: "Все программы",
                description: "Комплексные программы лечения",
                href: "/services/programs",
                icon: "📋",
                enabled: true
            }
        ],
    },
]

export default function SiteHeader() {
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white/95 backdrop-blur-md border-b fixed top-0 left-0 right-0 z-50 max-w-[100vw]">
            <div className="container flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/logo-new-min.png"
                        alt="КАПЛАБ - Клиника инфузионной терапии"
                        width={180}
                        height={40}
                        className="h-10 w-auto"
                        quality={100}
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {/* Services Mega Menu */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesMenuOpen(true)}
                        onMouseLeave={() => setIsServicesMenuOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                            Все услуги
                            <ChevronDown
                                className={cn("h-4 w-4 transition-transform", isServicesMenuOpen && "rotate-180")}/>
                        </button>

                        {/* Invisible bridge to prevent menu from closing */}
                        {isServicesMenuOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] h-2 bg-transparent"/>
                        )}

                        {/* Mega Menu */}
                        {isServicesMenuOpen && (
                            <div
                                className="absolute top-full left-0 mt-2 w-[960px] bg-white rounded-lg shadow-xl border p-8 animate-in fade-in-0 zoom-in-95 duration-200">
                                <div className="grid grid-cols-3 gap-8">
                                    {servicesMenuData.map((category) => (
                                        <div key={category.category}>
                                            <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                                            <ul className="space-y-3">
                                                {category.items.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.enabled ? item.href : "#"}
                                                            className={cn(
                                                                "flex items-start gap-3 p-2 rounded-md hover:bg-pink-50 transition-colors group",
                                                                (!item.enabled) && "opacity-50 cursor-not-allowed pointer-events-none"
                                                            )}
                                                        >
                                                            <span className="text-lg">{item.icon}</span>
                                                            <div>
                                                                <div
                                                                    className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                                                                    {item.name}
                                                                </div>
                                                                <div
                                                                    className="text-xs text-gray-500">{item.description}</div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center text-sm font-medium text-accent-600 hover:text-accent-700"
                                    >
                                        Посмотреть все услуги →
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Other Menu Items */}
                    <Link href="/doctors" className="text-sm font-medium hover:text-primary transition-colors">
                        Врачи
                    </Link>
                    {/*<Link href="/_prices" className="text-sm font-medium hover:text-primary transition-colors">*/}
                    {/*  Цены*/}
                    {/*</Link>*/}
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        О клинике
                    </Link>
                    <Link href="/promotions" className="text-sm font-medium hover:text-primary transition-colors">
                        Акции
                    </Link>
                    {/*<Link href="/blog"*/}
                    {/*      className="text-sm font-medium hover:text-primary transition-colors opacity-25 pointer-events-none">*/}
                    {/*    Блог*/}
                    {/*</Link>*/}
                    <Link href="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
                        Контакты
                    </Link>
                </nav>

                {/* Contact Info & CTA */}
                <div className="flex items-center gap-4">
                    <div className="hidden xl:block">
                        <a href="tel:84954734352" className="flex items-center gap-2 text-sm font-medium">
                            <Phone className="h-4 w-4 text-primary"/>
                            +7 (495) 473-43-52
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=74950854823&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%98%87%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%3A"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 text-sm font-medium text-green-600">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                            </svg>
                            WhatsApp: +7 495 085-48-23
                        </a>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3"/>
                            9:00-20:00 Без выходных
                        </div>
                    </div>
                    <BookingButton fullWidth={false}  className={"hidden md:inline-flex"} />
                    <BookingButton fullWidth={false}  className={"hidden md:inline-flex"} variant={"outline"} btnText={"Капельница на выезд"} service={{id: 1337, title: "Капельница на выезд"}} />

                    {/* Mobile Menu Button */}
                    <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
                        <Menu className="h-6 w-6"/>
                    </Button>

                    {/* Mobile Menu Drawer */}
                    <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Меню</DrawerTitle>
                            </DrawerHeader>
                            <div className="px-4 pb-6">
                                {/* Contact Info */}
                                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                                        <Phone className="h-4 w-4 text-primary"/>
                                        +7 (495) 473-43-52
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-medium text-green-600 mb-1">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                                        </svg>
                                        WhatsApp: +7 495 085-48-23
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock className="h-3 w-3"/>
                                        9:00-20:00 Без выходных
                                    </div>
                                </div>

                                {/* Mobile Navigation */}
                                <nav className="space-y-1 mb-6">
                                    <Link
                                        href="/services"
                                        className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Все услуги
                                    </Link>
                                    <Link
                                        href="/doctors"
                                        className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Врачи
                                    </Link>
                                    <Link
                                        href="/prices"
                                        className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Цены
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        О клинике
                                    </Link>
                                    <Link
                                        href="/promotions"
                                        className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Акции
                                    </Link>
                                    {/*<Link*/}
                                    {/*    href="/blog"*/}
                                    {/*    className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"*/}
                                    {/*    onClick={() => setIsMobileMenuOpen(false)}*/}
                                    {/*>*/}
                                    {/*    Блог*/}
                                    {/*</Link>*/}
                                    <Link
                                        href="/contacts"
                                        className="block text-lg font-medium text-gray-900 py-3"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Контакты
                                    </Link>
                                </nav>

                                {/* Mobile CTA Button */}
                                <div className="flex flex-col gap-2">
                                    <BookingButton fullWidth={false} />
                                    <BookingButton fullWidth={false}  variant={"outline"} btnText={"Капельница на выезд"} service={{id: 1337, title: "Капельница на выезд"}} />
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    )
}
