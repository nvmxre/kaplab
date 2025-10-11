"use client"

import React from "react"
import {useState, useEffect, useRef} from "react"
import {Button} from "@/components/ui/button"
import {ChevronLeft, ChevronRight, Sparkles, Zap, Heart, Crown, Loader2} from "lucide-react"
import Image from "next/image"
import {cn} from "@/lib/utils"
import Link from "next/link"

type SlideType = {
    id: number,
    name: string,
    href: string,
    description: string,
    image: string,
    fetchPriority: "high" | "auto" | "low" | undefined,
    icon: React.JSX.Element,
    loading?: "lazy" | "eager" | undefined,
}

const slides: SlideType[] = [
    {
        id: 1,
        name: "Снижение веса Super",
        href: "/services/programs/super",
        description:
            "Анализы + консультация и сопровождение врача + жиросжигающие капельницы + капельницы от отеков и метаболические уколы",
        image: "/assets/programs/super.jpg",
        fetchPriority: "high",
        icon: <Sparkles className="w-6 h-6"/>,
    },
    {
        id: 2,
        name: "Женское здоровье",
        href: "/services/programs/zhenskoe-zdorovie",
        description:
            "Верните себе сияние, энергию и баланс с курсом капельниц «Женское Здоровье»!",
        image: "/assets/programs/women-health.jpg",
        fetchPriority: "auto",
        loading: "lazy",
        icon: <Heart className="w-6 h-6"/>,
    },
    {
        id: 3,
        name: "Мужское здоровье",
        href: "/services/programs/muzhskoe-zdorovie",
        description:
            "Современный ритм жизни не щадит даже самых сильных мужчин. Но у нас есть решение!",
        image: "/assets/programs/men-health.jpg",
        fetchPriority: "auto",
        loading: "lazy",
        icon: <Zap className="w-6 h-6"/>,
    },
]

interface UniversalService {
    id: number
    title?: string
    name?: string
    description?: string
    href?: string
    price?: string | number
    duration?: string
    image?: string
    category?: string[]
}

interface UniversalServiceCardProps {
    // service: UniversalService
    onBooking: (service: UniversalService) => void
}

export default function HeroCarousel({onBooking}: UniversalServiceCardProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50

    const resetAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            setIsAnimating(true)
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)
    }

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        resetAutoSlide()
    }

    const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        resetAutoSlide()
    }

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return
        setIsAnimating(true)
        setCurrentSlide(index)
        resetAutoSlide()
    }

    // Touch handlers for swipe gestures
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

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 1000)
        return () => clearTimeout(timer)
    }, [currentSlide])

    useEffect(() => {
        // Initialize component and remove loading state
        const initTimer = setTimeout(() => {
            setIsLoading(false)
            resetAutoSlide()
        }, 100)

        return () => {
            clearTimeout(initTimer)
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    const current = slides[currentSlide]

    // Calculate cube rotation based on current slide
    const getCubeRotation = () => {
        const rotationY = currentSlide * -90 // Each slide rotates 90 degrees
        return `rotateY(${rotationY}deg)`
    }

    const getContentTransitionClasses = () => {
        const baseClasses = `transition-all duration-800 ease-out`

        if (!isAnimating) {
            return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
        }

        return `${baseClasses} opacity-0 translate-y-6 scale-95`
    }

    // Get accent color for grid background
    const getAccentGridColor = (accent?: string) => {
        switch (accent) {
            case "amber":
                return "rgba(245, 158, 11, 0.08)" // amber-500 with low opacity
            case "purple":
                return "rgba(147, 51, 234, 0.08)" // purple-600 with low opacity
            case "pink":
                return "rgba(236, 72, 153, 0.08)" // pink-500 with low opacity
            case "orange":
                return "rgba(249, 115, 22, 0.08)" // orange-500 with low opacity
            default:
                return "rgba(11, 77, 112, 0.05)" // primary-500 with low opacity
        }
    }

    // Get accent color for borders (same as buttons - primary-600)
    const getAccentBorderColor = () => {
        return "rgba(20, 184, 166, 0.3)" // primary-600 with 30% opacity
    }

    // Show loading state
    if (isLoading) {
        return (
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                {/*<video*/}
                {/*    className="absolute inset-0 w-full h-full object-cover opacity-50 invert"*/}
                {/*    src="/assets/dna-video.mp4"*/}
                {/*    autoPlay*/}
                {/*    loop*/}
                {/*    muted*/}
                {/*    playsInline*/}
                {/*/>*/}
                <Image src={"/assets/hero-bg.jpg"} alt={"Каплаб"}
                       className="absolute inset-0 w-full h-full object-cover" fill loading={"lazy"}/>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-stone-800/50 to-stone-900/70"/>
                <div className="absolute inset-0 bg-black/20"/>

                {/* Loading Spinner */}
                <div className="relative z-10 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-primary-400 animate-spin"/>
                </div>
            </section>
        )
    }

    return (
        <>
            {/* CSS Styles for Cube Faces */}
            <style jsx>{`
                .cube-container {
                    perspective: 1200px;
                }

                .cube {
                    transform-style: preserve-3d;
                }

                .cube-face {
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    left: 50%;
                    top: 50%;
                    margin-left: -100px;
                    margin-top: -100px;
                    backface-visibility: hidden;
                }

                .cube-face-0 {
                    transform: rotateY(0deg) translateZ(100px);
                }

                .cube-face-1 {
                    transform: rotateY(90deg) translateZ(100px);
                }

                .cube-face-2 {
                    transform: rotateY(180deg) translateZ(100px);
                }

                .cube-face-3 {
                    transform: rotateY(270deg) translateZ(100px);
                }

                @media (min-width: 1024px) {
                    .cube-face {
                        width: 400px;
                        height: 400px;
                        margin-left: -200px;
                        margin-top: -200px;
                    }

                    .cube-face-0 {
                        transform: rotateY(0deg) translateZ(200px);
                    }

                    .cube-face-1 {
                        transform: rotateY(90deg) translateZ(200px);
                    }

                    .cube-face-2 {
                        transform: rotateY(180deg) translateZ(200px);
                    }

                    .cube-face-3 {
                        transform: rotateY(270deg) translateZ(200px);
                    }
                }
            `}</style>

            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                ref={containerRef}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Video Background */}
                {/*<video*/}
                {/*    className="absolute inset-0 w-full h-full object-cover opacity-50 invert"*/}
                {/*    src="/assets/dna-video.mp4"*/}
                {/*    autoPlay*/}
                {/*    loop*/}
                {/*    muted*/}
                {/*    playsInline*/}
                {/*/>*/}
                <Image src={"/assets/hero-bg.jpg"} alt={"Каплаб"}
                       className="absolute inset-0 w-full h-full object-center object-cover" loading={"lazy"} fill/>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-stone-800/50 to-stone-900/70"/>

                {/* Additional subtle overlay for better readability */}
                <div className="absolute inset-0 bg-black/20"/>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                        {/* Content Side */}
                        <div className="space-y-6 sm:space-y-8 lg:pr-8 text-center lg:text-left">
                            {/* Icon with subtle animation */}
                            <div
                                className={`hidden md:inline-flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary-600 text-white transform transition-all duration-500 ${isAnimating ? "scale-105 rotate-3" : "scale-100 rotate-0"}`}
                            >
                                {current.icon}
                            </div>

                            {/* Title with professional typography */}
                            <div className="space-y-4 sm:space-y-6">
                                <h1
                                    className={cn(
                                        `flex items-center justify-center md:justify-start gap-2 md:gap-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight`,
                                        getContentTransitionClasses(),
                                    )}
                                    style={{
                                        transitionDelay: isAnimating ? "0ms" : "150ms",
                                        fontFamily: "system-ui, -apple-system, sans-serif",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    <span className={"md:hidden"}>{current.icon}</span> {current.name}
                                </h1>

                                <p
                                    className={cn(
                                        `text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl leading-relaxed mx-auto lg:mx-0`,
                                        getContentTransitionClasses(),
                                    )}
                                    style={{
                                        transitionDelay: isAnimating ? "0ms" : "250ms",
                                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                    }}
                                >
                                    {current.description}
                                </p>
                            </div>

                            {/* CTA Buttons matching your design */}
                            <div
                                className={cn(
                                    `flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start`,
                                    getContentTransitionClasses(),
                                )}
                                style={{transitionDelay: isAnimating ? "0ms" : "350ms"}}
                            >
                                <Button
                                    size="lg"
                                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] w-full sm:w-auto shadow-lg"
                                    onClick={() => onBooking({id: current.id, title: current.name})}
                                >
                                    Записаться на прием
                                </Button>
                                <Button
                                    asChild
                                    variant="ghost"
                                    size="lg"
                                    className="text-white  px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium hover:bg-white/10 rounded-lg transition-all duration-300 w-full sm:w-auto border border-white/20 backdrop-blur-sm"
                                >
                                    <Link href={current.href}>
                                        Узнать больше
                                    </Link>
                                </Button>
                            </div>

                            {/* Navigation Controls - Desktop */}
                            <div className="hidden sm:flex items-center gap-4 pt-4 justify-center lg:justify-start">
                                {/* Previous Arrow */}
                                <button
                                    onClick={prevSlide}
                                    disabled={isAnimating}
                                    className="flex items-center justify-center w-10 h-10 bg-primary-600 hover:bg-primary-700 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                                >
                                    <ChevronLeft className="w-5 h-5"/>
                                </button>

                                {/* Next Arrow */}
                                <button
                                    onClick={nextSlide}
                                    disabled={isAnimating}
                                    className="flex items-center justify-center w-10 h-10 bg-primary-600 hover:bg-primary-700 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                                >
                                    <ChevronRight className="w-5 h-5"/>
                                </button>

                                {/* Slide Indicators */}
                                <div className="flex space-x-3 ml-2">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index === currentSlide ? "bg-primary-400 w-8" : "bg-white/40 hover:bg-white/60"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Navigation Controls - Mobile */}
                            <div className="flex sm:hidden items-center gap-3 pt-2 justify-center">
                                {/* Previous Arrow */}
                                <button
                                    onClick={prevSlide}
                                    disabled={isAnimating}
                                    className="flex items-center justify-center w-8 h-8 bg-primary-600 hover:bg-primary-700 text-white rounded shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                                >
                                    <ChevronLeft className="w-4 h-4"/>
                                </button>

                                {/* Next Arrow */}
                                <button
                                    onClick={nextSlide}
                                    disabled={isAnimating}
                                    className="flex items-center justify-center w-8 h-8 bg-primary-600 hover:bg-primary-700 text-white rounded shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                                >
                                    <ChevronRight className="w-5 h-5"/>
                                </button>

                                {/* Mobile Slide Indicators */}
                                <div className="flex space-x-2 ml-1">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index === currentSlide ? "bg-primary-400 w-6" : "bg-white/40"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3D Cube Side */}
                        <div className="relative lg:pl-8 order-first lg:order-last">
                            {/* 3D Cube Container */}
                            <div
                                className="cube-container relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl mx-auto h-56 lg:h-[500px]">
                                {/* 3D Cube */}
                                <div
                                    className="cube relative w-full h-full transition-transform duration-1000 ease-out"
                                    style={{
                                        transform: getCubeRotation(),
                                    }}
                                >
                                    {/* Cube Faces */}
                                    {slides.map((slide: SlideType, index) => (
                                        <div key={index}
                                             className={cn(`backdrop-blur cube-face flex items-center justify-center`, `cube-face-${index}`)}>
                                            {/* Cube Face Background with Grid and Teal Border */}
                                            <div
                                                className="absolute inset-0 bg-white/50 border-2 border-primary-600"
                                                //                       style={{
                                                //                           backgroundImage: `
                                                //   linear-gradient(${getAccentGridColor()} 1px, transparent 1px),
                                                //   linear-gradient(90deg, ${getAccentGridColor()} 1px, transparent 1px)
                                                // `,
                                                //                           backgroundSize: "16px 16px",
                                                //                           backgroundPosition: "0 0, 0 0",
                                                //                       }}
                                            />

                                            {/* Subtle glow effect */}
                                            <div className="absolute inset-0 bg-primary/40 blur-2xl opacity-20"/>

                                            {/* Image Container */}
                                            <div
                                                className="relative z-10 p-0.5 flex items-center justify-center w-full h-full">
                                                <Image
                                                    src={slide.image || "/placeholder.svg"}
                                                    alt={slide.name}
                                                    width={200}
                                                    height={200}
                                                    fetchPriority={slide.fetchPriority}
                                                    loading={slide.loading && slide.loading}
                                                    className="w-full h-full object-cover pointer-events-none select-none"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Reflection/Shadow beneath the cube - separate object */}
                                {/*<div*/}
                                {/*    className="absolute w-48 h-24 lg:w-80 lg:h-40 opacity-30"*/}
                                {/*    style={{*/}
                                {/*        bottom: "-60px",*/}
                                {/*        left: "50%",*/}
                                {/*        transform: "translateX(-50%) rotateX(90deg) scaleY(0.5)",*/}
                                {/*        background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",*/}
                                {/*        borderRadius: "50%",*/}
                                {/*        filter: "blur(8px)",*/}
                                {/*        zIndex: -1,*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
