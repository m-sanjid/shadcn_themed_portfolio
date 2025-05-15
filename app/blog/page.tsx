import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BlogPostCard } from "../components/blog-post-card"

const blogPosts = [
  {
    title: "Building a Portfolio with Next.js",
    excerpt: "Learn how to build a developer portfolio using Next.js, TypeScript, and Tailwind CSS.",
    date: "May 15, 2023",
    tags: ["Next.js", "Portfolio", "Web Development"],
    href: "/blog/building-portfolio-nextjs",
  },
  {
    title: "The Power of Server Components",
    excerpt: "Exploring React Server Components and how they improve performance in Next.js applications.",
    date: "April 22, 2023",
    tags: ["React", "Server Components", "Performance"],
    href: "/blog/power-of-server-components",
  },
  {
    title: "Styling with Tailwind CSS",
    excerpt: "A comprehensive guide to styling your applications with Tailwind CSS.",
    date: "March 10, 2023",
    tags: ["CSS", "Tailwind", "Styling"],
    href: "/blog/styling-with-tailwind",
  },
  {
    title: "Framer Motion Animations",
    excerpt: "How to add smooth animations to your React applications using Framer Motion.",
    date: "February 28, 2023",
    tags: ["React", "Animation", "Framer Motion"],
    href: "/blog/framer-motion-animations",
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "Best practices for using TypeScript in your web development projects.",
    date: "January 15, 2023",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    href: "/blog/typescript-best-practices",
  },
  {
    title: "Building a REST API with Node.js",
    excerpt: "A step-by-step guide to building a RESTful API with Node.js and Express.",
    date: "December 5, 2022",
    tags: ["Node.js", "API", "Backend"],
    href: "/blog/building-rest-api-nodejs",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/projects" className="text-sm font-medium hover:underline">
              Projects
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container py-8">
        <div className="mb-8 flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Blog</h1>
        </div>

        <div className="mb-8">
          <Input type="search" placeholder="Search blog posts..." className="max-w-md" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.title}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              tags={post.tags}
              href={post.href}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

