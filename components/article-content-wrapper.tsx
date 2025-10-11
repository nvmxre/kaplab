"use client"

import { useState, useCallback } from "react"
import { ArticleContent } from "./article-content"
import { TableOfContents } from "./table-of-contents"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

interface Heading {
    text: string
    level: 2 | 3
    id: string
}

interface ArticleContentWrapperProps {
    content: string
}

export function ArticleContentWrapper({ content }: ArticleContentWrapperProps) {
    const [headings, setHeadings] = useState<Heading[]>([])

    // Stable callback to prevent unnecessary re-renders
    const handleHeadingsExtracted = useCallback((extractedHeadings: Heading[]) => {
        setHeadings((prev) => {
            // Only update if headings actually changed
            if (prev.length !== extractedHeadings.length || prev.some((h, i) => h.id !== extractedHeadings[i]?.id)) {
                return extractedHeadings
            }
            return prev
        })
    }, [])

    return (
        <div className="grid lg:grid-cols-5 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
                <div className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-headings:leading-tight prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900">
                    <ArticleContent content={content} onHeadingsExtracted={handleHeadingsExtracted} />
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
                {/* Table of Contents */}
                {headings.length > 0 && (
                    <div className="sticky top-24">
                        <TableOfContents headings={headings} />
                    </div>
                )}
            </div>
        </div>
    )
}
