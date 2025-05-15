"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { GripVertical } from "lucide-react"

interface DraggableSectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function DraggableSection({ title, children, className = "" }: DraggableSectionProps) {
  const [isDragging, setIsDragging] = useState(false)
  const constraintsRef = useRef(null)

  return (
    <motion.section
      className={`relative ${className}`}
      ref={constraintsRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 flex items-center">
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className="mr-3 cursor-grab active:cursor-grabbing"
        >
          <GripVertical className="h-6 w-6 text-muted-foreground" />
        </motion.div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

