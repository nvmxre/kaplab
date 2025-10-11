"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogPaginationProps {
    currentPage: number
    totalPages: number
    totalPosts: number
}

export function BlogPagination({ currentPage, totalPages, totalPosts }: BlogPaginationProps) {
    const searchParams = useSearchParams()

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", pageNumber.toString())
        return `/blog?${params.toString()}`
    }

    const getVisiblePages = () => {
        const delta = 2
        const range = []
        const rangeWithDots = []

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i)
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, "...")
        } else {
            rangeWithDots.push(1)
        }

        rangeWithDots.push(...range)

        if (currentPage + delta < totalPages - 1) {
            rangeWithDots.push("...", totalPages)
        } else {
            rangeWithDots.push(totalPages)
        }

        return rangeWithDots
    }

    const visiblePages = totalPages > 1 ? getVisiblePages() : [1]

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Stats */}
            <p className="text-sm text-gray-600">
                Показано {(currentPage - 1) * 6 + 1}-{Math.min(currentPage * 6, totalPosts)} из {totalPosts} статей
            </p>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <Button
                    variant="outline"
                    size="sm"
                    asChild={currentPage > 1}
                    disabled={currentPage <= 1}
                    className={cn("flex items-center gap-2 whitespace-nowrap", currentPage <= 1 && "opacity-50 cursor-not-allowed")}
                >
                    {currentPage > 1 ? (
                        <Link href={createPageURL(currentPage - 1)}>
                            <ChevronLeft className="w-4 h-4" />
                        </Link>
                    ) : (
                          <ChevronLeft className="w-4 h-4" />
                    )}
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                    {visiblePages.map((page, index) => (
                        <div key={index}>
                            {page === "..." ? (
                                <span className="px-3 py-2 text-gray-500">...</span>
                            ) : (
                                <Button
                                    variant={currentPage === page ? "default" : "outline"}
                                    asChild={currentPage !== page}
                                    className={"min-w-10"}
                                >
                                    {currentPage === page ? (
                                        <span>{page}</span>
                                    ) : (
                                        <Link href={createPageURL(page as number)}>{page}</Link>
                                    )}
                                </Button>
                            )}
                        </div>
                    ))}
                </div>

                {/* Next Button */}
                <Button
                    variant="outline"
                    size="sm"
                    asChild={currentPage < totalPages}
                    disabled={currentPage >= totalPages}
                    className={cn("flex items-center whitespace-nowrap gap-2", currentPage >= totalPages && "opacity-50 cursor-not-allowed")}
                >
                    {currentPage < totalPages ? (
                        <Link href={createPageURL(currentPage + 1)}>
                            <ChevronLeft className="w-4 h-4 rotate-180" />
                        </Link>
                    ) : (
                          <ChevronLeft className="w-4 h-4 rotate-180" />
                    )}
                </Button>
            </div>
        </div>
    )
}
