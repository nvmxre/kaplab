"use client"

import type React from "react"
import { useState } from "react"
import { Link2, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime" // Import JSX to declare the variable

interface HeadingWithAnchorProps {
    level: 1 | 2 | 3 | 4 | 5 | 6
    children: React.ReactNode
    id?: string
    className?: string
}

export function HeadingWithAnchor({ level, children, id, className }: HeadingWithAnchorProps) {
    const [copied, setCopied] = useState(false)

    // Создаем ID из текста заголовка если не передан
    const headingId =
        id ||
        children
            ?.toString()
            .toLowerCase()
            .replace(/[^a-zа-я0-9\s]/gi, "")
            .replace(/\s+/g, "-")
            .replace(/^-|-$/g, "") ||
        ""

    const copyToClipboard = async () => {
        try {
            const url = `${window.location.origin}${window.location.pathname}#${headingId}`
            await navigator.clipboard.writeText(url)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy: ", err)
        }
    }

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

    return (
        <HeadingTag id={headingId} className={cn("group relative scroll-mt-20", className)}>
            <button
                onClick={copyToClipboard}
                className="absolute -left-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700"
                title="Скопировать ссылку"
                type="button"
            >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
            </button>
            {children}
        </HeadingTag>
    )
}
