"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "Online-клиника",
    description: "Доступная медицинская помощь в любое время и из любой точки мира",
    image: "/hero-slide-1.png",
    buttonText: "Онлайн консультация",
    buttonLink: "/services",
  },
  {
    id: 2,
    title: "Профессиональные врачи",
    description: "Консультации у лучших специалистов с многолетним опытом работы",
    image: "/hero-slide-2.png",
    buttonText: "Выбрать врача",
    buttonLink: "/doctors",
  },
  {
    id: 3,
    title: "Современные технологии",
    description: "Используем передовые методы диагностики и лечения",
    image: "/hero-slide-3.png",
    buttonText: "Узнать больше",
    buttonLink: "/about",
  },
]

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", updateCurrent)
    updateCurrent()

    return () => {
      api.off("select", updateCurrent)
    }
  }, [api])

  return (
    <section className="relative h-[600px] overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative h-full">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-accent-600/90 z-10" />
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
                <div className="absolute inset-0 z-20">
                  <div className="container max-w-6xl h-full flex items-center px-4">
                    <div className="max-w-2xl text-white">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                      <p className="text-xl md:text-2xl mb-8 opacity-90">{slide.description}</p>
                      <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100" asChild>
                        <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Navigation Buttons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => api?.scrollPrev()}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => api?.scrollNext()}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Custom Progress Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className="relative w-12 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
              onClick={() => {
                if (api) {
                  api.scrollTo(index)
                  setCurrent(index)
                }
              }}
            >
              <div
                className={`absolute inset-0 bg-white rounded-full transition-all duration-300 ${
                  index === current ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      </Carousel>
    </section>
  )
}
