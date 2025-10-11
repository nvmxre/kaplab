"use client"

import { useState, useEffect } from "react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { List } from "lucide-react"

interface Heading {
    text: string
    level: 2 | 3
    id: string
}

interface TableOfContentsProps {
    headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-20% 0% -35% 0%",
                threshold: 0,
            },
        )

        // Наблюдаем за всеми заголовками с небольшой задержкой
        const observeHeadings = () => {
            headings.forEach(({ id }) => {
                const element = document.getElementById(id)
                if (element) {
                    observer.observe(element)
                }
            })
        }

        // Задержка для инициализации после рендера компонентов
        const timer = setTimeout(observeHeadings, 100)

        return () => {
            clearTimeout(timer)
            observer.disconnect()
        }
    }, [headings])

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
            // Обновляем URL с якорем
            window.history.pushState(null, "", `#${id}`)
        }
    }

    if (headings.length === 0) return null

    return (
        <div className="bg-gray-50 rounded-lg">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                    <List className="w-5 h-5" />
                    Содержание статьи
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <nav>
                    <ul className="space-y-3">
                        {headings.map(({ text, level, id }) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToHeading(id)}
                                    className={cn(
                                        "text-left hover:text-primary-600 transition-colors w-full text-wrap leading-relaxed",
                                        level === 2 ? "text-base font-medium" : "text-sm ml-4",
                                        activeId === id ? "text-primary-600 font-semibold" : "text-gray-700",
                                    )}
                                >
                                    {text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </CardContent>
        </div>
    )
}
