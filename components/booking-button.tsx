"use client"
import {LucideIcon, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import BookingModal from "@/components/booking-modal";
import {cn} from "@/lib/utils";

export interface BookingService {
    id: number
    title?: string
    doctor?: string
    price?: string | number
}

export const BookingButton = ({className, reachGoal = null, ymId, btnText, withIcon = false, btnIcon: Icon, variant, service, fullWidth = true}: {className?: string, btnText?: string, reachGoal?: string | null, ymId?: number, withIcon?: boolean, btnIcon?: LucideIcon, variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined, service?: BookingService, fullWidth?: boolean}) => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

    return (
        <>
            <Button variant={variant} onClick={() => {
                setIsBookingModalOpen(true)
            }} className={cn(className, fullWidth && "w-full")}>
                {withIcon && (Icon ? <Icon className="w-4 h-4 mr-2"/> : <Phone className="w-4 h-4 mr-2"/>)}
                {btnText ? btnText : "Записаться на прием"}
            </Button>
            <BookingModal
                isOpen={isBookingModalOpen}
                reachGoal={reachGoal}
                ymId={ymId}
                onClose={() => setIsBookingModalOpen(false)}
                service={service}
            />
        </>
    )
}