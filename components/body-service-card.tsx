import Image from "next/image"
import { Card } from "@/components/ui/card"

interface BodyService {
  id: number
  title: string
  description: string
  image: string
}

interface BodyServiceCardProps {
  service: BodyService
}

export default function BodyServiceCard({ service }: BodyServiceCardProps) {
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
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium">{service.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </div>
    </Card>
  )
}
