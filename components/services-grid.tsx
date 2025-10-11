"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import UniversalServiceCard from "@/components/universal-service-card";
import UniversalSection from "@/components/universal-section";

interface UniversalService {
  id: number
  title?: string
  slug?: string
  disabled?: boolean
  name?: string
  description?: string
  price?: string | number
  duration?: string
  image: string
  category?: string[]
}

interface UniversalServiceCardProps {
  // service: UniversalService
  onBooking: (service: UniversalService) => void
}

const featuredServices: UniversalService[] = [
  {
    "id": 1,
    "title": "Суперэффективная капельница «Быстрое восстановление»",
    "slug": "iv-drips/quick-recovery",
    "description": "Быстро восполняет энергию в организме и повышают работоспособность, концентрацию внимания и качество сна",
    "price": 12000,
    "disabled": false,
    "duration": "от 30 мин до 2 часов",
    "image": "/assets/iv-therapy/stress/1.webp",
    "category": ["Стресс, усталость, мигрень", "Дефицит витаминов и железа", "Детокс организма и аллергия", "Восстановление после тренировок", "Восстановление после болезни (Ковида, ОРВИ, Гриппа)", "Похмелье или отравление"]
  },
  {
    "id": 2,
    "title": "Капельница «Золушка»",
    "slug": "iv-drips/cinderella",
    "description": "Коктейль молодости «Золушка» предотвращает старение кожи, улучшает самочувствие.",
    "price": 8000,
    "disabled": false,
    "duration": "от 30 мин до 2 часов",
    "image": "/assets/iv-therapy/stress/2.webp",
    "category": ["Стресс, усталость, мигрень", "Красота и молодость", "Для стройности"]
  },
  {
    "id": 3,
    "title": "Восстановление на дому",
    "slug": "iv-drips/home-recovery",
    "disabled": false,
    "description": "Снятие усталости, бодрость, улучшение самочувствия",
    "price": 16000,
    "duration": "от 30 мин до 2 часов",
    "image": "/assets/iv-therapy/stress/3.webp",
    "category": ["Стресс, усталость, мигрень", "Восстановление после тренировок", "Активность мозга и концентрация внимания"]
  },
]

function ViewAllCard() {
  return (
    <Card className="overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-dashed border-primary-200">
      <div className="text-center p-6">
        <div className="text-4xl mb-4">+</div>
        <h3 className="font-medium text-primary-700 mb-2">Еще больше услуг</h3>
        <p className="text-sm text-primary-600 mb-4">Посмотрите полный каталог наших процедур</p>
        <Link href="/services">
          <Button className="bg-primary-600 hover:bg-primary-700">Все услуги</Button>
        </Link>
      </div>
    </Card>
  )
}

export default function ServicesGrid({ onBooking }: UniversalServiceCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Show max 5 services + 1 "view all" card
  const displayServices = featuredServices.slice(0, 5)
  const totalSlides = displayServices.length + 1 // +1 for "view all" card

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [totalSlides])

  return (
      <UniversalSection
          id="services-grid"
          title="Популярные процедуры"
          subtitle="Самые востребованные капельницы наших пациентов"
          backgroundColor="gray"
          desktopLayout="grid"
          mobileCarousel={true}
          showMobileControls={true}
      >

        {/* Desktop and Tablet Grid */}
          {...displayServices.map((service) => (
            // <Link key={service.id} href="/services/iv-drips">
              <UniversalServiceCard service={service} onBooking={onBooking} />
            // </Link>
          ))}
          <ViewAllCard />
    </UniversalSection>
  )
}
