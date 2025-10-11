import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Booster {
  id: number
  title: string
  description: string
  image: string
  price: number
}

interface BoosterCardProps {
  booster: Booster
}

export default function BoosterCard({ booster }: BoosterCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={booster.image || "/placeholder.svg"}
          alt={booster.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 bg-pink-600 text-white px-2 py-1 rounded-full">
          <span className="text-sm font-bold">${booster.price}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium">{booster.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-4">{booster.description}</p>
        <Button className="w-full bg-pink-600 hover:bg-pink-700">Заказать</Button>
      </div>
    </Card>
  )
}
