"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import { getRecentBlogPosts, type BlogPost } from "@/lib/blog-data"
import UniversalSection from "@/components/universal-section"

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group overflow-hidden relative cursor-pointer h-full min-h-[300px]">
      <div className="relative h-full">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-4">
          <div className="flex items-center gap-4 mb-3 opacity-90 text-xs">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            {/*<div className="flex items-center gap-1">*/}
            {/*  <User className="h-3 w-3" />*/}
            {/*  <span>{post.author}</span>*/}
            {/*</div>*/}
          </div>
          <h3 className="font-bold mb-2 text-lg">{post.title}</h3>
          <p className="opacity-90 line-clamp-2 text-xs">{post.excerpt}</p>
        </div>
      </div>
    </Card>
  )
}

function ViewAllBlogCard() {
  return (
    <Card className="overflow-hidden h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-dashed border-primary-200 min-h-[300px]">
      <div className="text-center p-6">
        <div className="text-4xl mb-4">📚</div>
        <h3 className="font-medium text-primary-700 mb-2">Все статьи</h3>
        <p className="text-sm text-primary-600 mb-4">Читайте больше полезных материалов о здоровье</p>
        <Link href="/blog">
          <Button className="bg-primary-600 hover:bg-primary-700">Все статьи</Button>
        </Link>
      </div>
    </Card>
  )
}

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    getRecentBlogPosts(3).then(setBlogPosts)
  }, [])

  if (blogPosts.length === 0) {
    return null
  }

  const blogItems = [
    ...blogPosts.map((post) => (
      <Link key={post.id} href={`/app/(main-site)/blog/${post.slug}`}>
        <BlogCard post={post} />
      </Link>
    )),
    <ViewAllBlogCard key="view-all" />,
  ]

  return (
    <UniversalSection
      title="Блог о здоровье"
      subtitle="Полезные статьи и советы от наших экспертов"
      backgroundColor="white"
      desktopLayout="masonry"
      mobileCarousel={true}
      showMobileControls={true}
    >
      {blogItems}
    </UniversalSection>
  )
}
