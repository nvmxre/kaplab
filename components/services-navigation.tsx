"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { getServicesCount, getAllServicesCount } from "@/lib/services-data"

type NavigationType = {
  name: string,
  href: string,
  category: "all" | "programs" | "iv-drips" | "diagnostics" | "cosmetics",
  enabled?: boolean,
}

const navigationItems: NavigationType[] = [
  { name: "Все услуги", href: "/services", category: "all" as const, enabled: true },
  { name: "Капельницы", href: "/services/iv-drips", category: "iv-drips" as const, enabled: true },
  { name: "Программы", href: "/services/programs", category: "programs" as const, enabled: true },
  { name: "Диагностика", href: "/services/diagnostics", category: "diagnostics" as const, enabled: true },
  { name: "Косметология", href: "/services/cosmetics", category: "cosmetics" as const, enabled: true },
]

interface ServicesNavigationProps {
  onItemClick?: () => void
}

export default function ServicesNavigation({ onItemClick }: ServicesNavigationProps) {
  const pathname = usePathname()

  function isServiceActive(currentPath: string, linkPath: string) {
    // Normalize paths (remove leading/trailing slashes)
    const current = currentPath.replace(/^\/|\/$/g, '');
    const link = linkPath.replace(/^\/|\/$/g, '');

    // Split into segments
    const currentParts = current.split('/');
    const linkParts = link.split('/');

    // If current path is exactly '/services', only the "All Services" link should be active
    if (current === 'services' && link === 'services') {
      return true;
    }

    // Check if current path starts with link path
    if (currentParts.length < linkParts.length) {
      return false;
    }

    // Ensure all segments match
    for (let i = 0; i < linkParts.length; i++) {
      if (currentParts[i] !== linkParts[i]) {
        return false;
      }
    }

    // If link is '/services', it should only be active when current path is exactly '/services'
    if (link === 'services') {
      return current === 'services';
    }

    // For deeper paths (e.g., '/services/iv-drips'), ensure exact or sub-path match
    return true;
  }

  return (
      <nav className="bg-white rounded-lg p-4 lg:p-6 lg:sticky lg:top-24">
        <ul className="space-y-1 lg:space-y-2">
          {navigationItems.map((item) => {
            const isActive = isServiceActive(pathname, item.href)
            const count =
                item.category === "all" ? getAllServicesCount() : item.category ? getServicesCount(item.category) : null

            return (
                <li key={item.href}>
                  <Link
                      href={item.href}
                      className={cn(
                          "flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors opacity-50 cursor-not-allowed pointer-events-none",
                          isActive
                              ? "bg-primary/5 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-gray-50",
                          (item.enabled ?? false) && "opacity-100 cursor-pointer pointer-events-auto"
                      )}
                  >
                    <span className="truncate pr-2">{item.name}</span>
                    {count && (
                        <span
                            className={cn(
                                "text-xs px-2 py-0.5 rounded-full flex-shrink-0",
                                isActive ? "bg-primary/5 text-primary" : "bg-gray-100 text-gray-600",
                            )}
                        >
                    {count}
                  </span>
                    )}
                  </Link>
                </li>
            )
          })}
        </ul>
      </nav>
  )
}
