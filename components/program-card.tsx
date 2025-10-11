import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Program {
  id: number
  name: string
  description: string
  image: string
  price?: string
  duration?: string
  category?: string
}

interface ProgramCardProps {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={program.image || "/placeholder.svg"}
          alt={program.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {program.category && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-pink-600 text-white">{program.category}</Badge>
          </div>
        )}
        {program.price && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-sm font-bold text-pink-600">{program.price}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium">{program.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
        {program.duration && <p className="text-xs text-muted-foreground mb-4">Длительность: {program.duration}</p>}
        <Button className="w-full bg-pink-600 hover:bg-pink-700">Записаться</Button>
      </div>
    </Card>
  )
}
