"use client"

import type React from "react"

import {useState, type ReactNode} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"
import {Badge} from "@/components/ui/badge";

interface UniversalSectionProps {
    id?: string
    title: string
    subtitle?: string
    backgroundColor?: "white" | "gray"
    children: ReactNode[]
    desktopLayout?: "grid" | "masonry"
    mobileCarousel?: boolean
    showMobileControls?: boolean
    rightAction?: ReactNode
    className?: string
}

export default function UniversalSection(
    {
        id,
        title,
        subtitle,
        backgroundColor = "white",
        children,
        desktopLayout = "grid",
        mobileCarousel = true,
        showMobileControls = true,
        rightAction,
        className = "",
    }: UniversalSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    const totalSlides = children.length
    const minSwipeDistance = 50

    const nextSlide = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentSlide((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1))
        setTimeout(() => setIsTransitioning(false), 500)
    }

    const prevSlide = () => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
        setTimeout(() => setIsTransitioning(false), 500)
    }

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentSlide) return
        setIsTransitioning(true)
        setCurrentSlide(index)
        setTimeout(() => setIsTransitioning(false), 500)
    }

    // Touch handlers
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            nextSlide()
        } else if (isRightSwipe) {
            prevSlide()
        }
    }

    const bgClass = backgroundColor === "gray" ? "bg-gray-50" : "bg-white"

    return (
        <section id={id ?? id} className={`py-8 sm:py-12 ${bgClass} ${className}`}>
            <div className="container px-4">
                {/* Desktop Header */}
                <div className="space-y-4 mb-6 hidden sm:block">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                        {title}
                    </h1>
                    {subtitle && <p className="max-w-[600px] text-gray-600 md:text-xl">
                        {subtitle}
                    </p>}
                </div>
                {/*<div className="text-center mb-8 hidden sm:block">*/}
                {/*  <h2 className="text-2xl sm:text-3xl font-bold mb-4"></h2>*/}
                {/*  {subtitle && <p className="text-gray-600 max-w-2xl mx-auto"></p>}*/}
                {/*</div>*/}

                {/* Desktop Layout */}
                <div className="hidden sm:block">
                    {desktopLayout === "masonry" ? (
                        // Masonry layout for blog
                        <div className="grid md:grid-cols-4 gap-4 h-[600px]">
                            {/* Large featured item */}
                            <div className="md:col-span-2 md:row-span-2">{children[0]}</div>
                            {/* Medium item */}
                            <div className="md:col-span-2">{children[1]}</div>
                            {/* Small items */}
                            {children.slice(2).map((child, index) => (
                                <div key={index + 2}>{child}</div>
                            ))}
                        </div>
                    ) : (
                        // Regular grid layout
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {children.map((child, index) => (
                                <div key={index}>{child}</div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Layout */}
                <div className="block sm:hidden space-y-4">
                    {/* Mobile Header with Controls */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold">{title}</h2>
                            {subtitle && <p className="text-gray-600 text-sm mt-1">{subtitle}</p>}
                        </div>
                        {mobileCarousel && showMobileControls && (
                            <div className="flex gap-2 ml-4">
                                <button
                                    onClick={prevSlide}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="h-5 w-5"/>
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="h-5 w-5"/>
                                </button>
                            </div>
                        )}
                    </div>

                    {mobileCarousel ? (
                        // Mobile Carousel
                        <>
                            <div
                                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                    }}
                                >
                                    {children.map((child, index) => (
                                        <div key={index} className="w-full flex-shrink-0 px-2">
                                            {child}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dots Navigation */}
                            {totalSlides > 1 && (
                                <div className="flex justify-center mt-6 space-x-2">
                                    {children.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                                currentSlide === index ? "bg-primary" : "bg-gray-300"
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        // Mobile List
                        <div className="space-y-4">
                            {children.map((child, index) => (
                                <div key={index}>{child}</div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Action (like "Показать все") */}
                {rightAction && <div className="flex justify-center sm:justify-end mt-8">{rightAction}</div>}
            </div>
        </section>
    )
}
