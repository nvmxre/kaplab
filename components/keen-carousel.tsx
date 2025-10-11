"use client"

import { useState, type ReactNode } from "react"
import { useKeenSlider, type KeenSliderInstance } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface KeenCarouselProps {
  children: ReactNode[]
  className?: string
  slideClassName?: string
  showArrows?: boolean
  showDots?: boolean
  loop?: boolean
  autoplay?: boolean
  autoplayDelay?: number
  slidesPerView?: number | "auto"
  spacing?: number
  breakpoints?: {
    [key: string]: {
      slidesPerView?: number | "auto"
      spacing?: number
    }
  }
}

export default function KeenCarousel({
  children,
  className = "",
  slideClassName = "",
  showArrows = true,
  showDots = true,
  loop = false,
  autoplay = false,
  autoplayDelay = 3000,
  slidesPerView = 1,
  spacing = 16,
  breakpoints = {},
}: KeenCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop,
      mode: "free-snap",
      slides: {
        perView: slidesPerView,
        spacing,
      },
      breakpoints,
      initial: 0,
      created() {
        setLoaded(true)
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
    autoplay
      ? [
          (slider: KeenSliderInstance) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, autoplayDelay)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      : [],
  )

  return (
    <div className={`relative ${className}`}>
      <div ref={sliderRef} className="keen-slider">
        {children.map((child, idx) => (
          <div key={idx} className={`keen-slider__slide ${slideClassName}`}>
            {child}
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && showArrows && (
        <>
          <button
            className="carousel-arrow prev"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            className="carousel-arrow next"
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </>
      )}

      {loaded && instanceRef.current && showDots && (
        <div className="carousel-dots">
          {Array.from({ length: children.length }).map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
