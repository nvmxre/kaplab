"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import { HeadingWithAnchor } from "./heading-with-anchor"

interface Heading {
    text: string
    level: 2 | 3
    id: string
}

interface ArticleContentProps {
    content: string
    onHeadingsExtracted?: (headings: Heading[]) => void
}

export function ArticleContent({ content, onHeadingsExtracted }: ArticleContentProps) {
    const [processedContent, setProcessedContent] = useState<string[]>([])

    // Memoize the content processing to avoid re-processing on every render
    const { headings, contentParts } = useMemo(() => {
        if (typeof window === "undefined") {
            return { headings: [], contentParts: [content] }
        }

        const parser = new DOMParser()
        const doc = parser.parseFromString(content, "text/html")

        // Extract headings
        const headingElements = doc.querySelectorAll("h2, h3")
        const extractedHeadings: Heading[] = []

        let processedContent = content

        headingElements.forEach((heading) => {
            const level = Number.parseInt(heading.tagName.charAt(1)) as 2 | 3
            const text = heading.textContent || ""
            const id = text
                .toLowerCase()
                .replace(/[^a-zа-я0-9\s]/gi, "")
                .replace(/\s+/g, "-")
                .replace(/^-|-$/g, "")

            extractedHeadings.push({ text, level, id })

            const originalHtml = heading.outerHTML
            const newHtml = `<div data-heading="${level}" data-id="${id}" data-text="${text}"></div>`

            processedContent = processedContent.replace(originalHtml, newHtml)
        })

        const contentParts = processedContent.split(/(<div data-heading="[23]"[^>]*><\/div>)/)

        return { headings: extractedHeadings, contentParts }
    }, [content])

    // Stable callback to avoid re-renders
    const stableOnHeadingsExtracted = useCallback(onHeadingsExtracted || (() => {}), [onHeadingsExtracted])

    // Call onHeadingsExtracted only when headings change
    useEffect(() => {
        if (headings.length > 0) {
            stableOnHeadingsExtracted(headings)
        }
    }, [headings, stableOnHeadingsExtracted])

    // Set processed content only when contentParts change
    useEffect(() => {
        setProcessedContent(contentParts)
    }, [contentParts])

    return (
        <div>
            {processedContent.map((part, index) => {
                const headingMatch = part.match(/data-heading="(\d)" data-id="([^"]*)" data-text="([^"]*)"/)

                if (headingMatch) {
                    const [, level, id, text] = headingMatch
                    return (
                        <HeadingWithAnchor
                            key={`${id}-${index}`}
                            level={Number.parseInt(level) as 2 | 3}
                            id={id}
                            className={level === "2" ? "text-xl font-bold mt-8 mb-4" : "text-lg font-semibold mt-6 mb-3"}
                        >
                            {text}
                        </HeadingWithAnchor>
                    )
                }

                return <div key={`content-${index}`} dangerouslySetInnerHTML={{ __html: part }} />
            })}
        </div>
    )
}
