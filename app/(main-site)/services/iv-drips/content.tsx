"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MobileCarousel from "@/components/mobile-carousel"
import UniversalServiceCard from "@/components/universal-service-card"
import BookingModal from "@/components/booking-modal"
import { getServicesByCategory } from "@/lib/services-data"

const serviceTypes = [
    "Все", "Стресс, усталость, мигрень",
    "Похмелье или отравление",
    "Красота и молодость",
    "Для стройности",
    "Дефицит витаминов и железа",
    "Детокс организма и аллергия",
    "Восстановление после тренировок",
    "Восстановление после болезни (Ковида, ОРВИ, Гриппа)",
    "Активность мозга и концентрация внимания",
    "Отдельные препараты для составных капельниц",
]

export default function IVDripsPageContent() {
    const [selectedType, setSelectedType] = useState("Все")
    const [filteredDrips, setFilteredDrips] = useState<any[]>([])
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<any>(null)

    const allDrips = getServicesByCategory("iv-drips")

    const handleBooking = (service: any) => {
        setSelectedService(service)
        setIsBookingModalOpen(true)
    }

    useEffect(() => {
        if (selectedType === "Все") {
            setFilteredDrips(allDrips);
        } else {
            setFilteredDrips(
                allDrips.filter((drip: any) =>
                    Array.isArray(drip.category)
                        ? drip.category.includes(selectedType)
                        : drip.category === selectedType
                )
            );
        }
    }, [selectedType, allDrips]);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Витаминные капельницы</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Витаминные капельницы и медицинские препараты для восстановления, красоты, здоровья и лечения
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
                {serviceTypes.map((type) => (
                    <Button
                        className={"max-w-[44vw] md:max-w-[20ch] lg:max-w-full"}
                        key={type}
                        variant={selectedType === type ? "default" : "outline"}
                        onClick={() => setSelectedType(type)}
                        // className={
                        //   selectedType === type ? "bg-pink-600 hover:bg-pink-700" : "border-pink-200 text-pink-600 hover:bg-pink-50"
                        // }
                    >
                        <span className={"overflow-ellipsis overflow-hidden whitespace-nowrap"}>{type}</span>
                        <Badge variant="secondary" className="ml-2">
                            {
                                type === "Все"
                                    ? allDrips.length
                                    : allDrips.filter((drip: any) =>
                                        Array.isArray(drip.category)
                                            ? drip.category.includes(type)
                                            : drip.category === type
                                    ).length
                            }
                        </Badge>
                    </Button>
                ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrips.map((drip) => (
                    <UniversalServiceCard key={drip.id} service={drip} onBooking={handleBooking} />
                ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden">
                <MobileCarousel showArrows={true} showDots={true}>
                    {filteredDrips.map((drip) => (
                        <UniversalServiceCard key={drip.id} service={drip} onBooking={handleBooking} />
                    ))}
                </MobileCarousel>
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                service={selectedService}
            />
        </>
    )
}
