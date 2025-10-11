"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getHealthTopics } from "@/lib/health-topics-data"

const healthTopics = getHealthTopics()

function HealthCard({ topic }: { topic: (typeof healthTopics)[0] }) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full">
      <div className="relative h-48">
        <Image
          src={topic.image || "/placeholder.svg"}
          alt={topic.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">{topic.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{topic.title}</h3>
        <p className="text-gray-600 mb-4">{topic.description}</p>
        <Button variant="link" className="text-purple-600 p-0">
          Читать далее <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

function ViewAllHealthCard() {
  return (
    <Card className="overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-dashed border-purple-200">
      <div className="text-center p-6">
        <div className="text-4xl mb-4">📖</div>
        <h3 className="font-medium text-purple-700 mb-2">Все материалы</h3>
        <p className="text-sm text-purple-600 mb-4">Изучайте больше информации о здоровье</p>
        <Link href="/health-topics">
          <Button className="bg-purple-600 hover:bg-purple-700">Все материалы</Button>
        </Link>
      </div>
    </Card>
  )
}

export default function AboutSection() {
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

  const displayTopics = healthTopics.slice(0, 3)
  const allItems = [...displayTopics, { id: "view-all", isViewAll: true }]

  return (
    <section className="py-12 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Рассказываем о здоровье, питании и медицине</h2>
            <div className="flex gap-2 sm:hidden">
              <button
                onClick={() => api?.scrollPrev()}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                aria-label="Previous topic"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                aria-label="Next topic"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши эксперты делятся знаниями и советами для поддержания вашего здоровья и благополучия
          </p>
        </div>

        {/* Desktop and Tablet Grid */}
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTopics.map((topic) => (
            <Link key={topic.id} href="/health-topics">
              <HealthCard topic={topic} />
            </Link>
          ))}
          <ViewAllHealthCard />тзь
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allItems.map((item, index) => (
                <CarouselItem key={item.id || index} className="pl-2 md:pl-4 basis-[85%]">
                  {item.isViewAll ? (
                    <ViewAllHealthCard />
                  ) : (
                    <Link href="/health-topics">
                      <HealthCard topic={item} />
                    </Link>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {allItems.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-purple-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
