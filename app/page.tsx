"use client"
import ServicesGrid from "@/components/services-grid"
import DoctorsSection from "@/components/doctors-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import ConsultationForm from "@/components/consultation-form"
import BlogSection from "@/components/blog-section"
import {useState} from "react";
import BookingModal from "@/components/booking-modal";
import ReelsTestimonials from "@/components/reels-testimonials"
import HeroCarousel from "@/components/hero-carousel";

export default function Home() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
    const [selectedService, setSelectedService] = useState<any>(null)
    const handleBooking = (service: any) => {
        setSelectedService(service)
        setIsBookingModalOpen(true)
    }
    return (
        <>
            <HeroCarousel onBooking={handleBooking}/>
            <ServicesGrid onBooking={handleBooking}/>
            <DoctorsSection/>
            {/*<BlogSection/>*/}
            <ReelsTestimonials/>
            {/*<TestimonialsSection />*/}
            <FaqSection/>
            <ContactSection/>
            {/*<ConsultationForm/>*/}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                service={selectedService}
            />
        </>
    )
}
