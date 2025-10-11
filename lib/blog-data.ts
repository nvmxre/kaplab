import {blogPosts} from "@/data/blog-posts";

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured?: boolean
  slug: string
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  return blogPosts.filter((post) => post.featured)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return blogPosts.find((post) => post.slug === slug)
}

export async function getRecentBlogPosts(limit = 4): Promise<BlogPost[]> {
  return blogPosts.slice(0, limit)
}
