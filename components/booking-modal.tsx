"use client"

import React, {useState, useCallback, useEffect} from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMediaQuery } from "@/hooks/use-media-query"
import {useMaskito} from "@maskito/react";
import options from "@/lib/mask"
import {toast} from "sonner"

interface BookingService {
    id: number
    title?: string
    doctor?: string
    price?: string | number
}

interface BookingModalProps {
    isOpen: boolean
    onClose: () => void
    reachGoal?: string | null
    ymId?: number
    service?: BookingService
    source?: string
}

interface BookingFormProps {
    service?: BookingService
    onClose: () => void
    onSubmit: (data: { name: string; phone: string, doctor?: string, title?: string }) => void
    initialData?: { name: string; phone: string, doctor?: string, title?: string }
}

const BookingForm = React.memo(({ service, onClose, onSubmit, initialData }: BookingFormProps) => {
    const [formData, setFormData] = useState(initialData || { name: "", phone: "", doctor: service?.doctor, title: service?.title })
    const maskedInputRef = useMaskito({options});

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault()
        toast.success("Заявка успешно отправлена!")
        onSubmit(formData)
    }, [formData, onSubmit])

    useEffect(() => {
        console.log(formData.phone.length)
    }, [formData]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }, [])

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mb-24">
            {service?.doctor && (
                <div>
                    <Label htmlFor="doctor">Врач</Label>
                    <Input
                        id="doctor"
                        value={formData.doctor}
                        readOnly
                        className="bg-gray-50 cursor-not-allowed"
                    />
                </div>
            )}
            {service?.title && (
                <div>
                    <Label htmlFor="service">Услуга</Label>
                    <Input
                        id="service"
                        value={formData.title}
                        readOnly
                        className="bg-gray-50 cursor-not-allowed"
                    />
                </div>
            )}
            <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Введите ваше имя"
                    required
                />
            </div>

            <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                    ref={maskedInputRef}
                    id="phone"
                    type="tel"
                    minLength={16}
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 123-45-67"
                    required
                />
            </div>

            <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" required className="mt-1" />
                <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    Я согласен(-на) на обработку персональных данных.
                </Label>
            </div>

            <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                    Отмена
                </Button>
                <Button type="submit" className="flex-1 bg-accent-600 hover:bg-accent-700">
                    Записаться
                </Button>
            </div>
        </form>
    )
})

export default function BookingModal({ isOpen, onClose, reachGoal = null, ymId, service, source }: BookingModalProps) {
    const isMobile = useMediaQuery("(max-width: 768px)")

    const handleSubmit = useCallback((formData: { name: string; phone: string; doctor?: string; title?: string }) => {
        console.log("Booking submitted:", { ...formData, source })
        fetch("/api/lead", {
            method: "POST",
            body: JSON.stringify({
                phone: formData.phone,
                name: formData.name,
                doctor: formData.doctor || undefined,
                title: formData.title || undefined
            })

        }).then(res => res.json().then(console.log))
        fetch("/api/tg-form", {
            method: "POST",
            body: JSON.stringify({
                phone: formData.phone,
                name: formData.name,
                doctor: formData.doctor || undefined,
                title: formData.title || undefined
            })
        }).then(res => res.json().then(console.log))

        if (typeof window !== "undefined" && (window as any).ym && (reachGoal !== null) && ymId) {
            (window as any).ym(ymId,'reachGoal',reachGoal);
        }
        onClose()
    }, [onClose, service, source])

    // if (isMobile) {
    //     return (
    //         <Drawer open={isOpen} onOpenChange={onClose}>
    //             <DrawerContent>
    //                 <DrawerHeader>
    //                     <DrawerTitle>Запись на прием</DrawerTitle>
    //                 </DrawerHeader>
    //                 <div className="px-4 pb-4">
    //                     <BookingForm
    //                         service={service}
    //                         onClose={onClose}
    //                         onSubmit={handleSubmit}
    //                     />
    //                 </div>
    //             </DrawerContent>
    //         </Drawer>
    //     )
    // }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Запись на прием</DialogTitle>
                </DialogHeader>
                <BookingForm
                    service={service}
                    onClose={onClose}
                    onSubmit={handleSubmit}
                />
            </DialogContent>
        </Dialog>
    )
}