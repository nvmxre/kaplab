"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import UniversalCarousel from "@/components/universal-carousel"

const slides = [
  {
    id: 1,
    title: "22 витаминные капельницы на выбор",
    description: "Выберите капельницу под свои цели и потребности. Профессиональные врачи, сертифицированные препараты",
    image: "/hero-slide-1.png",
    buttonText: "Выбрать капельницу",
    buttonLink: "/services",
  },
  {
    id: 2,
    title: "Экспресс чек-ап капельницы",
    description: "Быстрая диагностика и подбор оптимальной программы восстановления для вашего организма",
    image: "/hero-slide-2.png",
    buttonText: "Пройти чек-ап",
    buttonLink: "#consultation",
  },
  {
    id: 3,
    title: "Капельницы с витаминами в 3 раза эффективнее БАДов",
    description: "Прямое попадание в кровь обеспечивает максимальную биодоступность и быстрый результат",
    image: "/hero-slide-3.png",
    buttonText: "Узнать больше",
    buttonLink: "#about",
  },
]

function HeroSlide({ slide, index }: { slide: (typeof slides)[0]; index: number }) {
  return (
    <div className="relative w-full h-[600px]">
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
            <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white" asChild>
              <Link href={slide.buttonLink}>{slide.buttonText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSectionSimple() {
  return (
    <UniversalCarousel
      className="h-[600px]"
      autoplay={true}
      autoplayDelay={5000}
      loop={true}
      showArrows={true}
      showDots={true}
    >
      {slides.map((slide, index) => (
        <HeroSlide key={slide.id} slide={slide} index={index} />
      ))}
    </UniversalCarousel>
  )
}
