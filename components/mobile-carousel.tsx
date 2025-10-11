"use client"

import type { ReactNode } from "react"

interface MobileCarouselProps {
  children: ReactNode[]
  className?: string
  showArrows?: boolean
  showDots?: boolean
}

export default function MobileCarousel({
  children,
  className = "",
  showArrows = true,
  showDots = true,
}: MobileCarouselProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 gap-4">
        {children.map((child, index) => (
          <div key={index} className="w-full">
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
