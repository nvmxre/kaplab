"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"


import ServicesNavigation from "@/components/services-navigation"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // Добавить функцию для обработки клика
  const handleDrawerToggle = () => {
    console.log("Drawer toggle clicked, current state:", isDrawerOpen)
    setIsDrawerOpen(!isDrawerOpen)
  }

  useScrollToTop()

  const getPageTitle = (path: string) => {
    const segments = path.split("/").filter(Boolean)
    const lastSegment = segments.length === 2 ? segments[segments.length - 1] : segments[segments.length - 2]

    const pageNames: Record<string, string> = {
      services: "Услуги",
      programs: "Программы",
      "iv-drips": "Капельницы",
      diagnostics: "Диагностика",
      cosmetics: "Косметология",
    }

    return pageNames[lastSegment] || "Все услуги"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 pt-16">
        <div className="container px-4 py-4 lg:py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-4 lg:mb-6">
            <Link href="/public" className="hover:text-foreground">
              Главная
            </Link>{" "}
            <span className="hidden sm:inline">&gt;</span>
            <span className="sm:hidden">/</span>{" "}
            <Link href="/services" className="hover:text-foreground">
              Услуги
            </Link>{" "}
            <span className="hidden sm:inline">&gt;</span>
            <span className="sm:hidden">/</span> <span>{getPageTitle(pathname)}</span>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mb-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleDrawerToggle}>
              <Menu className="h-4 w-4" />
              Категории услуг
            </Button>

            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Категории услуг</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-6">
                  <ServicesNavigation onItemClick={() => setIsDrawerOpen(false)} />
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <div className="flex gap-4 lg:gap-8">
            {/* Desktop Sidebar Navigation */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <ServicesNavigation />
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">{children}</div>
          </div>
        </div>
      </main>
      
    </div>
  )
}
