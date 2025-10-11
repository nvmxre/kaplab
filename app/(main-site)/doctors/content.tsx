"use client"

import {useState, useEffect} from "react"
import Image from "next/image"
import {Card} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer"
import {MapPin, Clock, GraduationCap} from "lucide-react"
import {getAllDoctors} from "@/lib/doctors"

import UniversalSection from "@/components/universal-section"
import {BookingButton} from "@/components/booking-button"
import {useMediaQuery} from "@/hooks/use-media-query";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

interface Doctor {
    id: number
    name: string
    specialty: string
    image: string
    experience?: string
    education?: string | string[]
    professonalDevelopment?: string | string[]
    additionalEducation?: string | string[]
    specializations?: string[]
    schedule?: string
    higherEducation?: string | string[]
    professionalDevelopment?: string | string[]
}

function EducationDrawer({doctor}: { doctor: Doctor }) {
    const renderEducationField = (title: string, content: string | string[] | undefined) => {
        if (!content) return null

        const contentArray = Array.isArray(content) ? content : [content]

        return (
            <div className="px-3 space-y-2">
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <div className="space-y-2">
                    {contentArray.map((item, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const isMobile = useMediaQuery("(max-width: 768px)")

    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <GraduationCap className="h-4 w-4 mr-2"/>
                        Образование
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="w-full sm:max-w-md">
                    <DrawerHeader>
                        <DrawerTitle className="text-left">Образование</DrawerTitle>
                        <DrawerDescription className="text-left">
                            {doctor.name} - {doctor.specialty}
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="mt-6 space-y-6">
                        {renderEducationField("Высшее/среднее специальное образование", doctor.higherEducation || doctor.education)}

                        {renderEducationField(
                            "Курсы повышения квалификации",
                            doctor.professionalDevelopment || doctor.additionalEducation,
                        )}

                        {!doctor.higherEducation &&
                            !doctor.education &&
                            !doctor.professionalDevelopment &&
                            !doctor.additionalEducation && (
                                <div className="text-center py-8">
                                    <GraduationCap className="h-12 w-12 mx-auto text-gray-300 mb-4"/>
                                    <p className="text-gray-500">Информация об образовании не указана</p>
                                </div>
                            )}
                    </div>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <GraduationCap className="h-4 w-4 mr-2"/>
                    Образование
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-left">Образование</DialogTitle>
                    <DialogDescription className="text-left">
                        {doctor.name} - {doctor.specialty}
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-6">
                    {renderEducationField("Высшее/среднее специальное образование", doctor.higherEducation || doctor.education)}

                    {renderEducationField(
                        "Курсы повышения квалификации",
                        doctor.professionalDevelopment || doctor.additionalEducation,
                    )}

                    {!doctor.higherEducation &&
                        !doctor.education &&
                        !doctor.professionalDevelopment &&
                        !doctor.additionalEducation && (
                            <div className="text-center py-8">
                                <GraduationCap className="h-12 w-12 mx-auto text-gray-300 mb-4"/>
                                <p className="text-gray-500">Информация об образовании не указана</p>
                            </div>
                        )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

function DoctorCard({doctor}: { doctor: Doctor }) {
    return (
        <Card className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
            <div className="relative h-64 sm:h-80">
                <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    fill
                    className="object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {doctor.experience || "Опыт 5+ лет"}
                    </Badge>
                </div>
            </div>

            <div className="mt-auto p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {doctor.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">{doctor.specialty}</p>

                {doctor.education && <p className="text-gray-600 text-sm mb-4 line-clamp-1">{doctor.education}</p>}
                {doctor.additionalEducation &&
                    <p className="text-gray-600 text-sm mb-4 line-clamp-1">{doctor.additionalEducation}</p>}

                {doctor.specializations && (
                    <div className="flex flex-wrap gap-1 mb-4">
                        {doctor.specializations.slice(0, 3).map((spec, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {spec}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="space-y-2 mb-4">
                    {doctor.schedule && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4"/>
                            <span>{doctor.schedule}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4"/>
                        <span>Клиника на Чистых прудах</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <BookingButton service={{id: doctor.id, doctor: doctor.name}}/>
                    <EducationDrawer doctor={doctor}/>
                </div>
            </div>
        </Card>
    )
}

const DoctorsPageContent = () => {
    const [doctors, setDoctors] = useState<any>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllDoctors().then((data) => {
            // Добавляем дополнительные данные к врачам
            const enhancedDoctors = data.map((doctor) => ({
                ...doctor,
                schedule: "Пн-Пт 9:00-20:00",
                description: "Опытный специалист с многолетней практикой. Индивидуальный подход к каждому пациенту.",
                // Примеры данных об образовании
                higherEducation: doctor.education,
                professionalDevelopment: doctor.professionalDevelopment,
            }))
            setDoctors(enhancedDoctors)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <>
                <main className="min-h-screen bg-gray-50 pt-16">
                    <div className="container mx-auto py-10">
                        <div className="text-center">Загрузка...</div>
                    </div>
                </main>
            </>
        )
    }

    return (
        <>
            <main className="min-h-screen pt-16">
                {/* Doctors Section with Carousel */}
                <UniversalSection
                    title="Наши специалисты"
                    subtitle="Опытные врачи готовы помочь вам"
                    backgroundColor="white"
                    desktopLayout="grid"
                    mobileCarousel={true}
                    showMobileControls={true}
                >
                    {doctors.map((doctor: Doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor}/>
                    ))}
                </UniversalSection>

                {/* CTA Section */}
                <div className="text-center mt-12 sm:mt-16">
                    <div className="bg-white rounded-lg p-6 sm:p-8 border">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">Не нашли нужного специалиста?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Свяжитесь с нами, и мы поможем подобрать врача под ваши потребности
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div>
                                <BookingButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DoctorsPageContent;
