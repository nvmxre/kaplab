import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"

interface UltrasoundService {
  id: number
  title: string
  description: string
  price: string
  image: string
}

interface UltrasoundCardProps {
  service: UltrasoundService
}

export default function UltrasoundCard({ service }: UltrasoundCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-pink-600 text-white px-2 py-1 rounded-full">
          <span className="text-sm font-bold">{service.price}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium">{service.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-4 w-4 text-pink-600" />
          <span className="font-medium">{service.price}</span>
        </div>
        <Button className="w-full bg-pink-600 hover:bg-pink-700">Записаться</Button>
      </div>
    </Card>
  )
}
