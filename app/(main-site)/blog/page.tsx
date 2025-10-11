import {BentoBlogCard} from "../../../components/bento-blog"
import {blogPosts} from "../../../data/blog-posts"
import {BlogPagination} from "../../../components/blog-pagination"
import Link from "next/link"
import {ArrowLeft} from "lucide-react"
import type {Metadata} from "next"
;
;

export const metadata: Metadata = {
    title: "Блог | Клиника Инфузионной Терапии",
    description: "Экспертные статьи о современных методах инфузионной терапии, витаминных капельницах и детоксикации",
}

// Генерируем страницу статически с ревалидацией каждые 24 часа
export const revalidate = 86400

interface BlogPageProps {
    searchParams: {
        page?: string
    }
}

const POSTS_PER_PAGE = 6

export default function BlogPage({searchParams}: BlogPageProps) {
    const currentPage = Number(searchParams.page) || 1
    const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

    // Вычисляем индексы для текущей страницы
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const currentPosts = blogPosts.slice(startIndex, endIndex)

    return (
        <>
            <main className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-8">
                        <div className="max-w-4xl mx-auto">
                            <Link
                                href="/public"
                                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-6"
                            >
                                <ArrowLeft className="w-4 h-4"/>
                                На главную
                            </Link>

                            <h1 className="text-3xl md:text-4xl font-bold mb-4">Блог клиники</h1>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                Профессиональные материалы о современных методах инфузионной терапии, витаминных
                                капельницах, детоксикации
                                и других инновационных методах лечения
                            </p>
                        </div>
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                            {currentPosts.map((post) => (
                                <BentoBlogCard
                                    key={post.id}
                                    title={post.title}
                                    className="col-span-1 row-span-1"
                                    image={post.image}
                                    category={post.category}
                                    excerpt={post.excerpt}
                                    href={`/blog/${post.slug}`}
                                    date={post.date}
                                    readTime={post.readTime}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12">
                                <BlogPagination currentPage={currentPage} totalPages={totalPages}
                                                totalPosts={blogPosts.length}/>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}
