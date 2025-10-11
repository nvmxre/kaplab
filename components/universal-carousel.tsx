"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface UniversalCarouselProps {
  children: ReactNode[]
  className?: string
  autoplay?: boolean
  autoplayDelay?: number
  showArrows?: boolean
  showDots?: boolean
  loop?: boolean
  slidesPerView?: number
  spacing?: number
}

export default function UniversalCarousel({
  children,
  className = "",
  autoplay = false,
  autoplayDelay = 5000,
  showArrows = true,
  showDots = true,
  loop = false,
  slidesPerView = 1,
  spacing = 16,
}: UniversalCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const totalSlides = children.length

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? (loop ? 0 : prev) : prev + 1))
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? (loop ? totalSlides - 1 : 0) : prev - 1))
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setProgress(0)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    if (!autoplay) return

    const startAutoplay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)

      setProgress(0)

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 100 / (autoplayDelay / 50)
        })
      }, 50)

      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoplayDelay)
    }

    startAutoplay()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
    }
  }, [currentSlide, autoplay, autoplayDelay])

  const handleMouseEnter = () => {
    if (!autoplay) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current)
  }

  const handleMouseLeave = () => {
    if (!autoplay) return
    const startAutoplay = () => {
      setProgress(0)

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 100 / (autoplayDelay / 50)
        })
      }, 50)

      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoplayDelay)
    }

    startAutoplay()
  }

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full flex">
        {children.map((child, index) => {
          let position = "translate-x-full opacity-0"
          if (index === currentSlide) {
            position = "translate-x-0 opacity-100"
          } else if (index === currentSlide - 1 || (currentSlide === 0 && index === totalSlides - 1)) {
            position = "-translate-x-full opacity-0"
          }

          return (
            <div key={index} className={`absolute inset-0 transition-all duration-700 ease-in-out ${position}`}>
              {child}
            </div>
          )
        })}
      </div>

      {showArrows && (
        <div className="absolute bottom-6 right-6 z-30 flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-white/90 hover:bg-white text-gray-700 rounded-lg p-3 backdrop-blur-sm transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/90 hover:bg-white text-gray-700 rounded-lg p-3 backdrop-blur-sm transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {showDots && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {children.map((_, index) => (
            <div
              key={index}
              className="relative w-12 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer"
              onClick={() => goToSlide(index)}
            >
              <div
                className={`absolute inset-0 bg-white rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-full" : "w-0"
                }`}
              />
              {index === currentSlide && autoplay && (
                <div
                  className="absolute inset-0 bg-white/60 rounded-full transition-all duration-75 ease-linear"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
