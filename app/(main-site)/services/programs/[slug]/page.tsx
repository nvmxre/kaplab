import { notFound } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


import { Clock } from "lucide-react"
import {DripSuper} from "@/data/iv-drips-text/super";
import {DripProteinOptimization} from "@/data/iv-drips-text/protein-optimization";
import {BookingButton} from "@/components/booking-button";
import {ProgramOmolozhenieIznutri} from "@/data/programs/omolozhenie-iznutri";
import {ProgramMetabolicheskiyStart} from "@/data/programs/metabolicheskiy-start";
import {ProgramKrasotaIUprugostKozhi} from "@/data/programs/krasota-i-uprugost-kozhi";
import {ProgramWomenHealth} from "@/data/programs/women-health";
import {ProgramMenHealth} from "@/data/programs/men-health";
import {ProgramMilanskiyKokteyl} from "@/data/programs/milanskiy-kokteyl";
import {ProgramSemeynoeSchastie} from "@/data/programs/semeynoe-schastie";
import {Metadata} from "next";

// Данные о капельницах
const programsData: any = {
    "super": {
        metaTitle: "Капельница «Super Detox» — мощное очищение | КАПЛАБ",
        metaDescription: "«Super Detox» сочетает глутатион, витамины и антиоксиданты для глубокого очищения организма. КАПЛАБ: стерильность, лицензия, результат за 45 мин.",
        name: "Снижение веса Super",
        description: "Анализы + консультация и сопровождение врача + жиросжигающие капельницы + капельницы от отеков и метаболические уколы",
        type: "Снижение веса",
        duration: "от 30 мин до 2 часов",
        text: <DripSuper/>
    },
    "protein-optimization": {
        metaTitle: "Protein Optimization — аминокислотная капельница | КАПЛАБ",
        metaDescription: "Protein Optimization — аминокислотная смесь для спортсменов и восстановления мышц. КАПЛАБ принесёт капельницу к вам домой, удобная запись онлайн.",
        name: "Комплекс по оптимизации белкового обмена",
        description: "У вас не получается самостоятельно набрать мышечную массу? Вам тяжело даётся восстановление после тренировок?",
        type: "Снижение веса",
        duration: "от 30 мин до 2 часов",
        text: <DripProteinOptimization/>
    },
    "omolozhenie-iznutri": {
        name: "Программа «Омоложение изнутри»",
        description: "Верните молодость на клеточном уровне!",
        type: "Омоложение",
        duration: "4-недельный курс",
        text: <ProgramOmolozhenieIznutri/>
    },
    "metabolicheskiy-start": {
        name: "Программа «Метаболический старт»",
        description: "Устали от диет, которые не работают? Вес возвращается снова и снова, а самочувствие оставляет желать лучшего? Возможно, дело не только в калориях.",
        type: "Похудение",
        duration: "4-недельный курс",
        text: <ProgramMetabolicheskiyStart/>
    },
    "krasota-i-uprugost-kozhi": {
        name: "Комплексная программа Красота и упругость кожи",
        description: "Забудьте о бесконечных кремах и процедурах с временным эффектом. Мы предлагаем революционный подход — инфузионную терапию для омоложения кожи, которая работает на клеточном уровне.",
        type: "Красота",
        duration: "10 сеансов",
        text: <ProgramKrasotaIUprugostKozhi/>
    },
    "zhenskoe-zdorovie": {
        name: "Женское здоровье",
        "description": "Верните себе сияние, энергию и баланс с курсом капельниц «Женское Здоровье»!",
        type: "Чек-ап + капельница",
        duration: "от 30 мин до 2 часов",
        text: <ProgramWomenHealth/>
    },
    "muzhskoe-zdorovie": {
        metaTitle: "Капельница «Мужское здоровье» на дому | КАПЛАБ, Москва",
        metaDescription: "Капельница «Мужское здоровье» улучшает выносливость и метаболизм. Лицензированный врач КАПЛАБ подберёт дозу и приедет на дом в Москве.",
        name: "Мужское здоровье",
        description: "Современный ритм жизни не щадит даже самых сильных мужчин. Но у нас есть решение!",
        type: "Курс капельниц",
        "duration": "4 сеанса",
        text: <ProgramMenHealth/>
    },
    "milanskiy-kokteyl": {
        metaTitle: "Миланский коктейль — витаминная капельница | КАПЛАБ",
        metaDescription: "Фирменный «Миланский коктейль» КАПЛАБ восстанавливает после стресса и перелётов: витамины, минералы, антиоксиданты. Вызовите специалиста 24/7.",
        name: "Миланский коктейль",
        "description": "Чувствуете усталость и не можете быстро восстановиться после интенсивных тренировок? Хотите вернуть себе бодрость, улучшить самочувствие и внешний вид?",
        type: "Курс капельниц",
        duration: "от 30 мин до 2 часов на сеанс",
        text: <ProgramMilanskiyKokteyl/>
    },
    "semeynoe-schastie": {
        name: "Семейное счастье",
        "description": "Программа помогает восстановить эмоциональную близость, улучшить взаимопонимание и повысить качество отношений через комплексное воздействие на организм.",
        type: "Курс капельниц",
        duration: "4 сеанса",
        text: <ProgramSemeynoeSchastie/>
    },
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: { slug: string };
}): Promise<Metadata> {
    const canonicalUrl = `https://www.drops-lab.ru/services/programs/${params.slug}`;

    return {
        title: programsData[params.slug].metaTitle ? programsData[params.slug].metaTitle : `Программа «${programsData[params.slug].name}» | КАПЛАБ`,
        description: programsData[params.slug].metaDescription ? programsData[params.slug].metaDescription : programsData[params.slug].description,
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

interface PageProps {
    params: {
        slug: string
    }
}

export default function ProgramPage({ params }: PageProps) {
    const program = programsData[params.slug as keyof typeof programsData]

    if (!program) {
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
                                    {program.type}
                                </Badge>
                                {program.price && <span className="text-2xl font-bold text-pink-600">{program.price}</span> }
                            </div>
                            <h1 className="text-3xl font-bold mb-4 text-balance text-center">{program.name}</h1>
                            {program.description && <p className="text-lg italic text-muted-foreground text-balance text-center">{program.description}</p> }
                        </div>

                        {/* Image */}
                        {program.image && <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                            <Image
                                src={program.image || "/placeholder.svg?height=400&width=800&query=medical+iv+program"}
                                alt={program.name}
                                fill
                                className="object-cover"
                            />
                        </div> }
                        {program.text}
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

                            <BookingButton className={"mt-4"} service={{id: program.name, title: program.name}} />
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                                    <Clock className="h-4 w-4" />
                                    <span>{program.duration}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
