"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { getProcedures } from "@/lib/procedures-data"
import UniversalSection from "@/components/universal-section"

const procedures = getProcedures()

function ProcedureCard({ procedure }: { procedure: (typeof procedures)[0] }) {
  return (
    <Card className="overflow-hidden group cursor-pointer h-full">
      <div className="relative h-48">
        <Image
          src={procedure.image || "/placeholder.svg"}
          alt={procedure.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent-600 transition-colors">{procedure.name}</h3>
        <p className="text-gray-600 mb-4">{procedure.description}</p>
        <div className="flex justify-between items-center">
          {procedure.price && <span className="text-lg font-semibold text-accent-600">{procedure.price}</span>}
          {procedure.duration && <span className="text-sm text-gray-500">{procedure.duration}</span>}
        </div>
      </div>
    </Card>
  )
}

function ViewAllProceduresCard() {
  return (
    <Card className="overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-dashed border-accent-200">
      <div className="text-center p-6">
        <div className="text-4xl mb-4">🏥</div>
        <h3 className="font-medium text-accent-700 mb-2">Все процедуры</h3>
        <p className="text-sm text-accent-600 mb-4">Посмотрите полный список наших процедур</p>
        <Link href="/services/procedures">
          <Button className="bg-accent-600 hover:bg-accent-700">Все процедуры</Button>
        </Link>
      </div>
    </Card>
  )
}

export default function ServicesSection() {
  const displayProcedures = procedures.slice(0, 3)

  const procedureItems = [
    ...displayProcedures.map((procedure) => (
      <Link key={procedure.id} href="/services/procedures">
        <ProcedureCard procedure={procedure} />
      </Link>
    )),
    <ViewAllProceduresCard key="view-all" />,
  ]

  const rightAction = (
    <Link href="/services">
      <Button variant="link" className="text-accent-600">
        Показать все
      </Button>
    </Link>
  )

  return (
    <UniversalSection
      title="Популярные процедуры"
      subtitle="Самые востребованные услуги нашей клиники"
      backgroundColor="white"
      desktopLayout="grid"
      mobileCarousel={false}
      rightAction={rightAction}
    >
      {procedureItems}
    </UniversalSection>
  )
}
