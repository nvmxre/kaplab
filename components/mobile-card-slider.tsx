"use client"

import { useState, useEffect, type ReactNode } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

interface MobileCardSliderProps {
  children: ReactNode[]
  className?: string
  showArrows?: boolean
  showDots?: boolean
}

export default function MobileCardSlider({
  children,
  className = "",
  showArrows = true,
  showDots = true,
}: MobileCardSliderProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative max-w-screen">
      <Carousel
        setApi={setApi}
        className={`w-full ${className}`}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {children.map((child, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-1/2 lg:basis-1/3">
              <div className="h-full">{child}</div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {showArrows && (
          <>
            <CarouselPrevious className="left-2 h-10 w-10 bg-white hover:bg-gray-50 border shadow-lg text-gray-700 hover:text-gray-900" />
            <CarouselNext className="right-2 h-10 w-10 bg-white hover:bg-gray-50 border shadow-lg text-gray-700 hover:text-gray-900" />
          </>
        )}
      </Carousel>

      {showDots && children.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
