import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "../components/project-card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/placeholder.svg?height=200&width=300",
    href: "/projects/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates.",
    tags: ["React", "Firebase", "Framer Motion"],
    image: "/placeholder.svg?height=200&width=300",
    href: "/projects/task-management",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generator using OpenAI's GPT-4 API.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK"],
    image: "/placeholder.svg?height=200&width=300",
    href: "/projects/ai-content-generator",
  },
  {
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances with charts and insights.",
    tags: ["React", "D3.js", "Firebase"],
    image: "/placeholder.svg?height=200&width=300",
    href: "/projects/finance-dashboard",
  },
  {
    title: "Social Media Platform",
    description: "A social media platform with real-time messaging and notifications.",
    tags: ["Next.js", "Socket.io", "MongoDB"],
    image: "/placeholder.svg?height=200&width=300",
    href: "/projects/social-media",
  },
  {
    title: "Weather App",
    description: "A weather application with location-based forecasts and interactive maps.",
    tags: ["React", "OpenWeather API", "Mapbox"],
    image: "/placeholder.svg?height=200&width=300",
    href: "/projects/weather-app",
  },
]

export default function ProjectsPage() {
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
          <h1 className="text-3xl font-bold">Projects</h1>
        </div>

        <div className="mb-8">
          <Input type="search" placeholder="Search projects..." className="max-w-md" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

