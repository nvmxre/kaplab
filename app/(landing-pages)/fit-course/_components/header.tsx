"use client"

import {useState} from "react"
import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Menu, Phone, Clock} from "lucide-react"
import BookingModal from "@/components/booking-modal"
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer"

export default function FitCourseHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
    const [service, setService] = useState<any>(undefined)

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
                {/*<nav className="hidden lg:flex items-center gap-8">*/}
                {/*    <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">*/}
                {/*        Услуги*/}
                {/*    </Link>*/}
                {/*    <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">*/}
                {/*        О клинике*/}
                {/*    </Link>*/}
                {/*    <Link href="#promotions" className="text-sm font-medium hover:text-primary transition-colors">*/}
                {/*        Акции*/}
                {/*    </Link>*/}
                {/*    <Link href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">*/}
                {/*        Контакты*/}
                {/*    </Link>*/}
                {/*</nav>*/}

                {/* Contact Info & CTA */}
                <div className="flex items-center gap-4">
                    <div className="hidden xl:block">
                        <a href="tel:84954734352" className="flex items-center gap-2 text-sm font-medium">
                            <Phone className="h-4 w-4 text-primary" />
                            +7 (495) 473-43-52
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=74950854823&text=Здравствуйте!%20Хочу%20записаться%20на%20услугу:"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-green-600"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                            </svg>
                            WhatsApp: +7 495 085-48-23
                        </a>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            9:00-20:00 Без выходных
                        </div>
                    </div>

                    <Button
                        onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsBookingModalOpen(true)
                            setService({
                                id: 1337,
                                title: "Акция: Курс жиросжигающих капельниц",
                                price: "20000"
                            })
                        }}
                    >
                        Записаться
                    </Button>

                    {/* Mobile Menu Button */}
                    {/*<Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>*/}
                    {/*    <Menu className="h-6 w-6" />*/}
                    {/*</Button>*/}
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Меню</DrawerTitle>
                    </DrawerHeader>
                    <div className="px-4 pb-6">
                        {/* Mobile Navigation */}
                        <nav className="space-y-1 mb-6">
                            <Link href="#services" className="block text-lg font-medium py-3 border-b" onClick={() => setIsMobileMenuOpen(false)}>
                                Услуги
                            </Link>
                            <Link href="#about" className="block text-lg font-medium py-3 border-b" onClick={() => setIsMobileMenuOpen(false)}>
                                О клинике
                            </Link>
                            <Link href="#promotions" className="block text-lg font-medium py-3 border-b" onClick={() => setIsMobileMenuOpen(false)}>
                                Акции
                            </Link>
                            <Link href="#contacts" className="block text-lg font-medium py-3" onClick={() => setIsMobileMenuOpen(false)}>
                                Контакты
                            </Link>
                        </nav>

                        {/* Mobile CTA Buttons */}
                        <div className="flex flex-col gap-2">
                            <Button
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setIsBookingModalOpen(true)
                                    setService(undefined)
                                }}
                            >
                                Записаться
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setIsBookingModalOpen(true)
                                    setService({title: "Капельница на выезд"})
                                }}
                            >
                                Капельница на выезд
                            </Button>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>

            <BookingModal
                isOpen={isBookingModalOpen}
                reachGoal={"lead"}
                ymId={103914546}
                service={service}
                onClose={() => setIsBookingModalOpen(false)}
                source="header"
            />
        </header>
    )
}
