import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import {ArrowRightIcon, Calendar, Clock} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const BentoBlogGrid = ({
                           children,
                           className,
                       }: {
    children: ReactNode
    className?: string
}) => {
    return (
        <div className={cn("grid w-full auto-rows-[12rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
            {children}
        </div>
    )
}

const BentoBlogCard = ({
                           title,
                           className,
                           image,
                           category,
                           excerpt,
                           href,
                           date,
                           readTime,
                           cta = "Читать статью",
                       }: {
    title: string
    className: string
    image: string
    category: string
    excerpt: string
    href: string
    date: string
    readTime: string
    cta?: string
}) => (
    <div
        className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl",
            // light styles
            "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            // dark styles
            "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        {/* Background Image */}
        <div className="absolute inset-0">
            <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex transform-gpu flex-col justify-end h-full p-4 transition-all duration-300 group-hover:-translate-y-12 text-white">
            <Badge className="absolute top-4 left-4 bg-primary-600 hover:bg-primary-700 text-white border-0 text-xs">
                {category}
            </Badge>

            <div className="space-y-1">
                <h3 className="text-sm font-bold text-white leading-tight line-clamp-2">{title}</h3>
                <p className="text-gray-200 text-xs line-clamp-2 max-w-lg">{excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {date}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readTime}
                    </div>
                </div>
            </div>
        </div>

        {/* CTA Button */}
        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20",
            )}
        >
            <Button
                variant="secondary"
                asChild
                size="sm"
                className="bg-primary-600 hover:bg-primary-700 text-white border-0 text-xs"
            >
                <Link href={href}>
                    {cta}
                    <ArrowRightIcon className="ml-2 h-3 w-3" />
                </Link>
            </Button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.1]" />
    </div>
)

export { BentoBlogCard, BentoBlogGrid }
