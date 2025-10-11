"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselApi = {
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  selectedScrollSnap: () => number
  on: (event: string, callback: () => void) => void
  off: (event: string, callback: () => void) => void
}

type CarouselProps = {
  opts?: {
    align?: string
    loop?: boolean
  }
  setApi?: (api: CarouselApi) => void
  className?: string
  children: React.ReactNode
}

type CarouselContextProps = {
  currentSlide: number
  totalSlides: number
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  api: CarouselApi | null
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ opts, setApi, className, children, ...props }, ref) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [totalSlides, setTotalSlides] = React.useState(0)
    const [isTransitioning, setIsTransitioning] = React.useState(false)

    const scrollPrev = React.useCallback(() => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentSlide((prev) => {
        const newSlide = opts?.loop ? (prev === 0 ? totalSlides - 1 : prev - 1) : Math.max(0, prev - 1)
        return newSlide
      })
      setTimeout(() => setIsTransitioning(false), 500)
    }, [isTransitioning, totalSlides, opts?.loop])

    const scrollNext = React.useCallback(() => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentSlide((prev) => {
        const newSlide = opts?.loop ? (prev === totalSlides - 1 ? 0 : prev + 1) : Math.min(totalSlides - 1, prev + 1)
        return newSlide
      })
      setTimeout(() => setIsTransitioning(false), 500)
    }, [isTransitioning, totalSlides, opts?.loop])

    const scrollTo = React.useCallback(
      (index: number) => {
        if (isTransitioning || index >= totalSlides || index < 0) return
        setIsTransitioning(true)
        setCurrentSlide(index)
        setTimeout(() => setIsTransitioning(false), 500)
      },
      [isTransitioning, totalSlides],
    )

    const api = React.useMemo<CarouselApi>(
      () => ({
        scrollPrev,
        scrollNext,
        scrollTo,
        selectedScrollSnap: () => currentSlide,
        on: () => {},
        off: () => {},
      }),
      [scrollPrev, scrollNext, scrollTo, currentSlide],
    )

    React.useEffect(() => {
      if (setApi) {
        setApi(api)
      }
    }, [api, setApi])

    React.useEffect(() => {
      // Count direct CarouselItem children to set total slides
      let slideCount = 0
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === CarouselContent) {
          React.Children.forEach(child.props.children, (contentChild) => {
            if (React.isValidElement(contentChild) && contentChild.type === CarouselItem) {
              slideCount++
            }
          })
        }
      })
      setTotalSlides(slideCount)
    }, [children])

    return (
      <CarouselContext.Provider
        value={{
          currentSlide,
          totalSlides,
          scrollPrev,
          scrollNext,
          scrollTo,
          api,
        }}
      >
        <div ref={ref} className={cn("relative", className)} {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    )
  },
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { currentSlide } = useCarousel()

    // Filter out non-CarouselItem children
    const validChildren = React.Children.toArray(children).filter(
      (child) => React.isValidElement(child) && child.type === CarouselItem,
    )

    return (
      <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${validChildren.length * 100}%`,
          }}
        >
          {validChildren}
        </div>
      </div>
    )
  },
)
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { totalSlides } = useCarousel()
    return (
      <div
        ref={ref}
        className={cn("min-w-0 flex-grow-0 flex-shrink-0 max-w-screen", className)}
        style={{ width: `${100 / totalSlides}%` }}
        {...props}
      />
    )
  },
)
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    const { scrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        className={cn("absolute left-2 top-1/2 -translate-y-1/2 z-30", className)}
        onClick={scrollPrev}
        {...props}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  },
)
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, ...props }, ref) => {
    const { scrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        className={cn("absolute right-2 top-1/2 -translate-y-1/2 z-30", className)}
        onClick={scrollNext}
        {...props}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  },
)
CarouselNext.displayName = "CarouselNext"

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
