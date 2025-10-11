"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Link from "next/link"
import { getPatientStories } from "@/lib/patient-stories-data"

const patientStories = getPatientStories()

function StoryCard({ story }: { story: (typeof patientStories)[0] }) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full min-h-[200px]">
      <div className="relative h-48">
        <Image
          src={story.image || "/placeholder.svg"}
          alt="История пациента"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <Play className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium">{story.title}</h3>
        </div>
      </div>
    </Card>
  )
}

function ViewAllStoriesCard() {
  return (
    <Card className="overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-dashed border-purple-200 min-h-[200px]">
      <div className="text-center p-6">
        <div className="text-4xl mb-4">🎥</div>
        <h3 className="font-medium text-purple-700 mb-2">Все истории</h3>
        <p className="text-sm text-purple-600 mb-4">Смотрите больше историй наших пациентов</p>
        <Link href="/patient-stories">
          <Button className="bg-purple-600 hover:bg-purple-700">Все истории</Button>
        </Link>
      </div>
    </Card>
  )
}

export default function PatientStoriesSection() {
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

  const displayStories = patientStories.slice(0, 3)
  const allItems = [...displayStories, { id: "view-all", isViewAll: true }]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Истории пациентов</h2>
          <div className="flex gap-2 sm:hidden">
            <button
              onClick={() => api?.scrollPrev()}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop and Tablet Grid */}
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayStories.map((story) => (
            <Link key={story.id} href="/patient-stories">
              <StoryCard story={story} />
            </Link>
          ))}
          <ViewAllStoriesCard />
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
                    <ViewAllStoriesCard />
                  ) : (
                    <Link href="/patient-stories">
                      <StoryCard story={item} />
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
