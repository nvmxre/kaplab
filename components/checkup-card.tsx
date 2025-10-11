import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign } from "lucide-react"

interface CheckupProgram {
  id: number
  name: string
  description: string
  price: number
  duration: string
}

interface CheckupCardProps {
  program: CheckupProgram
}

export default function CheckupCard({ program }: CheckupCardProps) {
  return (
    <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
      <p className="text-muted-foreground mb-4">{program.description}</p>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-pink-600" />
          <span className="font-medium">${program.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-pink-600" />
          <span className="text-sm text-muted-foreground">{program.duration}</span>
        </div>
      </div>

      <Button className="w-full bg-pink-600 hover:bg-pink-700">Записаться</Button>
    </Card>
  )
}
