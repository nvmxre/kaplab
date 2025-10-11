import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CosmetologyService {
  id: number
  title: string
  description: string
  image: string
}

interface CosmetologyCardProps {
  service: CosmetologyService
}

export default function CosmetologyCard({ service }: CosmetologyCardProps) {
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
        <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
        <Button className="w-full bg-pink-600 hover:bg-pink-700">Узнать больше</Button>
      </div>
    </Card>
  )
}
