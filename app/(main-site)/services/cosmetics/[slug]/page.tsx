import { notFound } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


import { Clock } from "lucide-react"
import {DripSuper} from "@/data/iv-drips-text/super";
import {DripProteinOptimization} from "@/data/iv-drips-text/protein-optimization";
import {BookingButton} from "@/components/booking-button";

// Данные о капельницах
const cosmeticsData: any = {
    "super": {
        name: "Снижение веса Super",
        description: "Анализы + консультация и сопровождение врача + жиросжигающие капельницы + капельницы от отеков и метаболические уколы",
        type: "Снижение веса",
        duration: "от 30 мин до 2 часов",
        text: <DripSuper/>
    },
    "protein-optimization": {
        name: "Комплекс по оптимизации белкового обмена",
        description: "У вас не получается самостоятельно набрать мышечную массу? Вам тяжело даётся восстановление после тренировок?",
        type: "Снижение веса",
        duration: "от 30 мин до 2 часов",
        text: <DripProteinOptimization/>
    },
}

interface PageProps {
    params: {
        slug: string
    }
}

export default function DiagnosticsPage({ params }: PageProps) {
    const cosmetics = cosmeticsData[params.slug as keyof typeof cosmeticsData]

    if (!cosmetics) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="lg:px-4 py-8">

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <Badge variant="outline" className="text-pink-600 border-pink-200">
                                    {cosmetics.type}
                                </Badge>
                                {cosmetics.price && <span className="text-2xl font-bold text-pink-600">{cosmetics.price}</span> }
                            </div>
                            <h1 className="text-3xl font-bold mb-4 text-balance text-center">{cosmetics.name}</h1>
                            {cosmetics.description && <p className="text-lg italic text-muted-foreground text-balance text-center">{cosmetics.description}</p> }
                        </div>

                        {/* Image */}
                        {cosmetics.image && <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                            <Image
                                src={cosmetics.image || "/placeholder.svg?height=400&width=800&query=medical+iv+cosmetics"}
                                alt={cosmetics.name}
                                fill
                                className="object-contain"
                            />
                        </div> }
                        {cosmetics.text}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="p-6 sticky top-24">

                            <div className="space-y-4 text-sm">
                                <div>
                                    <h4 className="font-medium mb-2">Подготовка к процедуре:</h4>
                                    <ul className="space-y-1 text-muted-foreground">
                                        <li>• Легкий завтрак за 2 часа</li>
                                        <li>• Исключить алкоголь за 24 часа</li>
                                        <li>• Принести результаты анализов</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2">После процедуры:</h4>
                                    <ul className="space-y-1 text-muted-foreground">
                                        <li>• Отдых 15-20 минут</li>
                                        <li>• Обильное питье</li>
                                        <li>• Избегать физических нагрузок</li>
                                    </ul>
                                </div>

                                <div className="pt-4 border-t">
                                    <p className="text-xs text-muted-foreground">
                                        Процедура проводится только после консультации врача и при отсутствии противопоказаний.
                                    </p>
                                </div>
                            </div>

                            <BookingButton className={"mt-4"} service={{id: cosmetics.name, title: cosmetics.name}} />
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{cosmetics.duration}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
