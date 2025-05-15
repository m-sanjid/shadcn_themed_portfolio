"use client"

import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST API", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Jest", "Testing Library"],
  },
]

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {skillCategories.map((category) => (
        <Card key={category.title}>
          <CardHeader>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>My {category.title.toLowerCase()} skills and technologies</CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.skills.map((skill) => (
                <motion.div key={skill} variants={item}>
                  <Badge variant="secondary">{skill}</Badge>
                </motion.div>
              ))}
            </motion.div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

