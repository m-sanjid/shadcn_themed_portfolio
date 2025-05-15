"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  href: string
}

export function ProjectCard({ title, description, tags, image, href }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-[200px] w-full overflow-hidden">
            <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.4 }}>
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription className="mb-4">{description}</CardDescription>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild>
            <Link href={href}>View Project</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

