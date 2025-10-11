import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Service {
  id: number
  name: string
  description: string
  price?: string
  image: string
  category?: string
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {service.category && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-xs font-medium text-primary-600">{service.category}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium mb-1">{service.name}</h3>
          {service.price && <p className="text-sm opacity-90">{service.price}</p>}
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </div>
    </Card>
  )
}
