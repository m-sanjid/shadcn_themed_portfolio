import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

// This would typically come from a database or CMS
const projectData = {
  ecommerce: {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription:
      "This e-commerce platform provides a seamless shopping experience with features like product search, filtering, cart management, checkout process, and order tracking. It's built with Next.js for server-side rendering and optimized performance, TypeScript for type safety, and Tailwind CSS for responsive design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    image: "/placeholder.svg?height=400&width=800",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Responsive product catalog with search and filtering",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe integration",
      "User authentication and account management",
      "Order history and tracking",
      "Admin dashboard for product and order management",
    ],
    technologies: [
      "Next.js for server-side rendering and API routes",
      "TypeScript for type safety and better developer experience",
      "Tailwind CSS for responsive and customizable UI",
      "Stripe for payment processing",
      "PostgreSQL for data storage",
      "Prisma as ORM for database access",
      "NextAuth.js for authentication",
    ],
  },
  "task-management": {
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates.",
    longDescription:
      "This task management application helps users organize their work with a drag-and-drop interface for managing tasks across different stages. It features real-time updates, task assignments, due dates, and progress tracking. The app is built with React for the frontend, Firebase for real-time database and authentication, and Framer Motion for smooth animations.",
    tags: ["React", "Firebase", "Framer Motion", "Tailwind CSS", "React DnD"],
    image: "/placeholder.svg?height=400&width=800",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Drag-and-drop task management across different stages",
      "Real-time updates for collaborative work",
      "Task assignments and due dates",
      "Progress tracking and statistics",
      "Customizable boards and columns",
      "Notifications for task updates",
    ],
    technologies: [
      "React for building the user interface",
      "Firebase Realtime Database for real-time data synchronization",
      "Firebase Authentication for user management",
      "Framer Motion for smooth animations and transitions",
      "React DnD for drag-and-drop functionality",
      "Tailwind CSS for styling",
    ],
  },
  "ai-content-generator": {
    title: "AI Content Generator",
    description: "An AI-powered content generator using OpenAI's GPT-4 API.",
    longDescription:
      "This AI content generator helps users create high-quality content for various purposes, such as blog posts, social media updates, product descriptions, and more. It leverages OpenAI's GPT-4 API to generate human-like text based on user prompts and preferences. The application is built with Next.js for the frontend and API routes, with a focus on performance and user experience.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg?height=400&width=800",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "AI-powered content generation for various formats",
      "Customizable tone, style, and length",
      "Content editing and refinement",
      "Template library for quick starts",
      "Content history and favorites",
      "Export options for different platforms",
    ],
    technologies: [
      "Next.js for the frontend and API routes",
      "OpenAI GPT-4 API for content generation",
      "Vercel AI SDK for efficient AI integration",
      "TypeScript for type safety",
      "Tailwind CSS for responsive design",
      "Vercel Edge Functions for optimal performance",
    ],
  },
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params
  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4">The project you're looking for doesn't exist.</p>
        <Button asChild className="mt-4">
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    )
  }

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
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{project.title}</h1>
        </div>

        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">Overview</h2>
            <p className="mb-6 text-muted-foreground">{project.longDescription}</p>

            <h2 className="mb-4 text-2xl font-bold">Features</h2>
            <ul className="mb-6 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h2 className="mb-4 text-2xl font-bold">Technologies</h2>
            <ul className="mb-6 space-y-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Project Links</h3>
                <div className="flex flex-col gap-4">
                  <Button asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                </div>
                <Separator className="my-6" />
                <h3 className="mb-4 text-xl font-bold">Contact</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Interested in this project? Feel free to reach out for more information or collaboration
                  opportunities.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

