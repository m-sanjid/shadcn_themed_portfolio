import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight, Github, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ProjectCard } from "./components/project-card"
import { BlogPostCard } from "./components/blog-post-card"
import { SkillsSection } from "./components/skills-section"
import { DraggableSection } from "./components/draggable-section"
import { ThemeToggle } from "./components/theme-toggle"

export default function Home() {
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
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <main className="container py-8">
        <section className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="max-w-2xl text-muted-foreground">
            Full-stack developer specializing in React, Next.js, and TypeScript. Building beautiful, performant, and
            accessible web applications.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://twitter.com">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
          </div>
        </section>

        <DraggableSection title="Featured Projects" className="mb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<ProjectCardSkeleton />}>
              <ProjectCard
                title="E-commerce Platform"
                description="A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS."
                tags={["Next.js", "TypeScript", "Tailwind CSS"]}
                image="/placeholder.svg?height=200&width=300"
                href="/projects/ecommerce"
              />
            </Suspense>
            <Suspense fallback={<ProjectCardSkeleton />}>
              <ProjectCard
                title="Task Management App"
                description="A drag-and-drop task management application with real-time updates."
                tags={["React", "Firebase", "Framer Motion"]}
                image="/placeholder.svg?height=200&width=300"
                href="/projects/task-management"
              />
            </Suspense>
            <Suspense fallback={<ProjectCardSkeleton />}>
              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered content generator using OpenAI's GPT-4 API."
                tags={["Next.js", "OpenAI", "Vercel AI SDK"]}
                image="/placeholder.svg?height=200&width=300"
                href="/projects/ai-content-generator"
              />
            </Suspense>
          </div>
          <div className="mt-4 text-right">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/projects">
                View all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </DraggableSection>

        <DraggableSection title="Latest Blog Posts" className="mb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<BlogPostCardSkeleton />}>
              <BlogPostCard
                title="Building a Portfolio with Next.js"
                excerpt="Learn how to build a developer portfolio using Next.js, TypeScript, and Tailwind CSS."
                date="May 15, 2023"
                tags={["Next.js", "Portfolio", "Web Development"]}
                href="/blog/building-portfolio-nextjs"
              />
            </Suspense>
            <Suspense fallback={<BlogPostCardSkeleton />}>
              <BlogPostCard
                title="The Power of Server Components"
                excerpt="Exploring React Server Components and how they improve performance in Next.js applications."
                date="April 22, 2023"
                tags={["React", "Server Components", "Performance"]}
                href="/blog/power-of-server-components"
              />
            </Suspense>
            <Suspense fallback={<BlogPostCardSkeleton />}>
              <BlogPostCard
                title="Styling with Tailwind CSS"
                excerpt="A comprehensive guide to styling your applications with Tailwind CSS."
                date="March 10, 2023"
                tags={["CSS", "Tailwind", "Styling"]}
                href="/blog/styling-with-tailwind"
              />
            </Suspense>
          </div>
          <div className="mt-4 text-right">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">
                View all posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </DraggableSection>

        <DraggableSection title="Skills" className="mb-12">
          <SkillsSection />
        </DraggableSection>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>I'm always open to new opportunities and collaborations.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Feel free to reach out if you have any questions or want to work together.</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:hello@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    hello@example.com
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCardSkeleton() {
  return (
    <Card>
      <CardHeader className="p-0">
        <Skeleton className="h-[200px] w-full rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-6">
        <Skeleton className="mb-2 h-6 w-2/3" />
        <Skeleton className="mb-4 h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
      </CardContent>
    </Card>
  )
}

function BlogPostCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <Skeleton className="mb-4 h-4 w-1/4" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardContent>
    </Card>
  )
}

