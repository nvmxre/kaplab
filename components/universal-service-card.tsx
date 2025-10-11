"use client"

import Image from "next/image"
import {Card} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Clock, Banknote} from "lucide-react"
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import {cn} from "@/lib/utils";

export interface UniversalService {
    id: number
    title?: string
    name?: string
    slug?: string
    bullets?: string[]
    disabled?: boolean
    description?: string
    price?: string | number
    duration?: string
    image: string
    category?: string[]
}

interface UniversalServiceCardProps {
    service: UniversalService
    onBooking: (service: UniversalService) => void
}

export default function UniversalServiceCard({service, onBooking}: UniversalServiceCardProps) {
    const formatPrice = (price: string | number | undefined) => {
        if (!price) return null
        if (typeof price === "number") return `${price.toLocaleString()} ₽`
        if (typeof price === "string") {
            // Remove existing currency symbols and convert to rubles
            const numericPrice = price.replace(/[^\d]/g, "")
            if (numericPrice) {
                return `${Number.parseInt(numericPrice).toLocaleString()} ₽`
            }
        }
        return price
    }

    const title = service.title || service.name || ""

    return (
        <Card
            className="flex flex-col overflow-hidden group cursor-pointer h-full hover:shadow-lg transition-shadow duration-300">
            <div className={cn("relative", service.image ? "h-96" : "pt-8")}>
                {service.image && <Image
                    src={service.image}
                    alt={title}
                    fill
                    className="object-cover"
                />}
                {/*<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />*/}

                {service.category && (
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div
                                className="absolute flex gap-1 items-center top-4 left-4 bg-primary/15 backdrop-blur-lg px-2 py-1 rounded-full">
                                <span
                                    className="text-xs font-medium">{Array.isArray(service.category) ? service.category.slice(0, 1) : service.category}</span>
                                {Array.isArray(service.category) && <span
                                    className="text-xs font-medium text-accent">+{service.category.length - 1}</span>}
                            </div>
                        </TooltipTrigger>
                        {Array.isArray(service.category) &&
                            <TooltipContent>
                                <ul className="list-inside">
                                    {service.category.map((category, index) => <li key={category}><span className="text-accent">{index+1}.</span> {category}</li>)}
                                </ul>
                            </TooltipContent>
                        }
                    </Tooltip>
                )}

                {/*{service.price && (*/}
                {/*  <div className="absolute top-4 right-4 bg-accent-600 text-white px-2 py-1 rounded-full">*/}
                {/*    <span className="text-sm font-bold">{formatPrice(service.price)}</span>*/}
                {/*  </div>*/}
                {/*)}*/}
            </div>

            <div className="mt-auto p-4">
                <h3 className="font-medium mb-1">{title}</h3>
                { service.description && <p className="text-sm text-muted-foreground mb-4">{service.description}</p> }
                { service.bullets && <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">Вы получите:{service.bullets.map(bullet => <li>{bullet}</li>)}</ul> }

                <div className="mt-auto flex items-center gap-4 mb-4">
                    {service.price && (
                        <div className="flex items-center gap-2">
                            <Banknote className="h-4 w-4 text-primary"/>
                            <span className="font-medium">{formatPrice(service.price)}</span>
                        </div>
                    )}
                    {service.duration && (
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary"/>
                            <span className="text-sm text-muted-foreground">{service.duration}</span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <Button variant="default" onClick={() => onBooking(service)}>
                        Записаться
                    </Button>

                    { service.slug && <Button asChild disabled={service.disabled ?? true} variant="outline">
                        <Link href={service.slug}>
                            Подробнее
                        </Link>
                    </Button> }
                </div>
            </div>
        </Card>
    )
}
