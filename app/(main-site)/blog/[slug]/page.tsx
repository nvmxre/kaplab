import Image from "next/image"
import Link from "next/link"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {Calendar, Clock, ArrowLeft, Phone, MapPin} from 'lucide-react'
import {fullArticles, blogPosts} from "@/data/blog-posts"
import {HeadingWithAnchor} from "@/components/heading-with-anchor"
import {ArticleContentWrapper} from "@/components/article-content-wrapper"
import type {Metadata} from "next"
import {AnchorLinkHandler} from "@/components/anchor-link-handler"
import {BookingButton} from "@/components/booking-button";

interface PageProps {
    params: {
        slug: string
    }
}

// Генерируем статические параметры для всех статей
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

// Генерируем метаданные для каждой статьи
export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const article = fullArticles[params.slug as keyof typeof fullArticles]

    if (!article) {
        return {
            title: "Статья не найдена",
        }
    }

    return {
        title: `${article.title} | Клиника Инфузионной Терапии`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    }
}

// Ревалидация каждые 24 часа
export const revalidate = 86400

export default function BlogArticlePage({params}: PageProps) {
    const article = fullArticles[params.slug as keyof typeof fullArticles]

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-xl font-bold mb-4">Статья не найдена</h1>
                    <Link href="/blog" className="text-primary-600 hover:underline">
                        Вернуться к блогу
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <article className="min-h-screen bg-gray-50">
                <AnchorLinkHandler/>
                {/* Hero Section */}
                <div className="relative h-64 md:h-80">
                    <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>

                    <div className="absolute inset-0 flex items-end">
                        <div className="container mx-auto px-4 pb-8">
                            <div className="max-w-6xl mx-auto">
                                <div className="flex flex-col gap-3 mb-4">
                                    <Badge className="bg-primary-600 text-white self-start">{article.category}</Badge>
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors self-start"
                                    >
                                        <ArrowLeft className="w-4 h-4"/>
                                        Назад к блогу
                                    </Link>
                                </div>

                                <HeadingWithAnchor level={1}
                                                   className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                                    {article.title}
                                </HeadingWithAnchor>

                                <p className="text-lg text-gray-200 mb-4 max-w-3xl">{article.excerpt}</p>

                                <div className="flex items-center gap-4 text-white/80 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4"/>
                                        {article.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4"/>
                                        {article.readTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-8">
                    <div className="max-w-6xl mx-auto">
                        <ArticleContentWrapper content={article.content}/>
                    </div>
                </div>

                {/* About Clinic Section - Bottom */}
                <div className="bg-white border-t">
                    <div className="container mx-auto px-4 py-12">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                                <div className="lg:col-span-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">О клинике КАПЛАБ</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Клиника КАПЛАБ — ведущий центр современной медицины в Москве,
                                        специализирующийся на
                                        инновационных методах лечения. Мы предлагаем персонализированный подход к
                                        каждому пациенту и
                                        используем только проверенные протоколы терапии.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <Phone className="w-5 h-5 text-primary-600 flex-shrink-0"/>
                                            <div>
                                                <p className="font-medium text-gray-900">Телефон</p>
                                                <p className="text-gray-600">+7 (495) 473-43-52</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0"/>
                                            <div>
                                                <p className="font-medium text-gray-900">Адрес</p>
                                                <p className="text-gray-600">121170, город Москва, Поклонная ул, д. 4, помещ. 97</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <BookingButton />
                                    <Button asChild variant="outline"
                                            className="border-primary-600 text-primary-600 hover:bg-primary-50 w-full">
                                        <Link href="https://yandex.ru/maps/-/CHWZNQPe" target="_blank" rel="noopener noreferrer">
                                        <MapPin className="w-4 h-4 mr-2"/>
                                        Как добраться
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
