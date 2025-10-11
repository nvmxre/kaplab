import Image from "next/image"
import { Card } from "@/components/ui/card"

interface Doctor {
  id: number
  name: string
  specialty: string
  image: string
  experience?: string
  description?: string
}

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full">
      <div className="relative h-64">
        <Image
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-medium">{doctor.name}</h3>
          <p className="text-sm opacity-90">{doctor.specialty}</p>
          {doctor.experience && <p className="text-xs opacity-75">{doctor.experience}</p>}
        </div>
      </div>
      {doctor.description && (
        <div className="p-4">
          <p className="text-sm text-muted-foreground">{doctor.description}</p>
        </div>
      )}
    </Card>
  )
}
