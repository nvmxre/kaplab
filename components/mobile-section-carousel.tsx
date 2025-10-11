"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MobileSectionCarouselProps {
  children: ReactNode[]
  className?: string
  showArrows?: boolean
  showDots?: boolean
}

export default function MobileSectionCarousel({
  children,
  className = "",
  showArrows = true,
  showDots = true,
}: MobileSectionCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Mouse handlers for desktop drag support
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState<number | null>(null)

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart(e.clientX)
    e.preventDefault()
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart) return
    e.preventDefault()
  }

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart) return

    const distance = dragStart - e.clientX
    const isLeftDrag = distance > minSwipeDistance
    const isRightDrag = distance < -minSwipeDistance

    if (isLeftDrag) {
      nextSlide()
    } else if (isRightDrag) {
      prevSlide()
    }

    setIsDragging(false)
    setDragStart(null)
  }

  const onMouseLeave = () => {
    setIsDragging(false)
    setDragStart(null)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Header with title and controls */}
      <div className="flex items-center justify-between mb-8">
        <div></div>
        {showArrows && (
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
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

      {showDots && totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-purple-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
