"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import UniversalSection from "@/components/universal-section"

interface Testimonial {
  id: number
  name: string
  image: string
  rating: number
  text: string
  service?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Алина Сидорова",
    image: "/testimonial-female-1.png",
    rating: 5,
    text: "Прошла курс витаминных капельниц для повышения иммунитета. Результат превзошел ожидания - чувствую себя бодрой и энергичной. Персонал очень внимательный!",
  },
  {
    id: 2,
    name: "Кирилл Волков",
    image: "/testimonial-male-1.png",
    rating: 5,
    text: "Регулярно прохожу детокс-программы в клинике. Процедуры проходят комфортно, врачи профессиональные. Заметил значительное улучшение самочувствия.",
  },
  {
    id: 3,
    name: "Мария Петрова",
    image: "/testimonial-female-2.png",
    rating: 5,
    text: "Отличная клиника! Делала антивозрастную терапию - кожа стала более упругой и здоровой. Очень довольна результатом и сервисом.",
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    image: "/testimonial-male-2.png",
    rating: 5,
    text: "После стрессового периода на работе прошел восстановительную терапию. Капельницы помогли быстро восстановить силы и нормализовать сон.",
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="p-6 h-full min-h-[200px]">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold">{testimonial.name}</h4>
          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{testimonial.text}</p>
    </Card>
  )
}

export default function TestimonialsSection() {
  const testimonialItems = testimonials.map((testimonial) => (
    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  ))

  return (
    <UniversalSection
      title="Отзывы пациентов"
      subtitle="Что говорят наши пациенты о качестве наших услуг"
      backgroundColor="white"
      desktopLayout="grid"
      mobileCarousel={true}
      showMobileControls={true}
    >
      {testimonialItems}
    </UniversalSection>
  )
}
