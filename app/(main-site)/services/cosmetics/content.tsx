"use client"

import { useState } from "react"
import UniversalServiceCard from "@/components/universal-service-card"
import BookingModal from "@/components/booking-modal"
import MobileCardSlider from "@/components/mobile-card-slider"
import { getServicesByCategory } from "@/lib/services-data"

export default function CosmeticsPageContent() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<any>(null)

    const cosmetics = getServicesByCategory("cosmetics")

    const handleBooking = (service: any) => {
        setSelectedService(service)
        setIsBookingModalOpen(true)
    }

    return (
        <div className={"max-w-screen"}>
            <h1 className="text-3xl font-bold mb-4">Косметология</h1>
            <p className="text-lg text-muted-foreground mb-8">
                Профессиональные косметологические процедуры для здоровья и красоты кожи
            </p>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
                {cosmetics.map((program: any) => (
                    <UniversalServiceCard key={program.id} service={program} onBooking={handleBooking} />
                ))}
            </div>

            {/* Mobile Slider */}
            <div className="flex flex-col gap-4 md:hidden">
                {cosmetics.map((program: any) => (
                    <UniversalServiceCard key={program.id} service={program} onBooking={handleBooking} />
                ))}
            </div>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                service={selectedService}
            />
        </div>
    )
}
