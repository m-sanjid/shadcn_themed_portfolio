"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  tags: string[]
  href: string
}

export function BlogPostCard({ title, excerpt, date, tags, href }: BlogPostCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Link href={href} className="block h-full">
        <Card className="h-full transition-colors hover:border-primary/50">
          <CardContent className="p-6">
            <CardTitle className="mb-2">{title}</CardTitle>
            <CardDescription className="text-xs">{date}</CardDescription>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">{excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0">
            <span className="text-sm font-medium text-primary">Read more</span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}

