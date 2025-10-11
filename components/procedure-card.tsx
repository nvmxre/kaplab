import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Procedure {
  id: number
  name: string
  description: string
  image: string
  price?: string
  duration?: string
}

interface ProcedureCardProps {
  procedure: Procedure
}

export default function ProcedureCard({ procedure }: ProcedureCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={procedure.image || "/placeholder.svg"}
          alt={procedure.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {procedure.price && (
          <div className="absolute top-4 right-4 bg-pink-600 text-white px-2 py-1 rounded-full">
            <span className="text-sm font-bold">{procedure.price}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium">{procedure.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-4">{procedure.description}</p>
        {procedure.duration && <p className="text-xs text-muted-foreground mb-4">Длительность: {procedure.duration}</p>}
        <Button className="w-full bg-pink-600 hover:bg-pink-700">Записаться</Button>
      </div>
    </Card>
  )
}
