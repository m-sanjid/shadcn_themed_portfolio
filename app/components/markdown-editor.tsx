"use client"

import type React from "react"

import { useState } from "react"
import ReactMarkdown from "react-markdown"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

interface MarkdownEditorProps {
  initialValue?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export function MarkdownEditor({
  initialValue = "",
  onChange,
  placeholder = "Write your content here...",
}: MarkdownEditorProps) {
  const [value, setValue] = useState(initialValue)
  const [activeTab, setActiveTab] = useState<string>("write")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onChange?.(newValue)
  }

  return (
    <div className="rounded-md border">
      <Tabs defaultValue="write" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between border-b px-4">
          <TabsList className="grid w-[200px] grid-cols-2">
            <TabsTrigger value="write">Write</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const textarea = document.querySelector("textarea")
                if (textarea) {
                  const start = textarea.selectionStart
                  const end = textarea.selectionEnd
                  const newValue = value.substring(0, start) + "**Bold**" + value.substring(end)

                  setValue(newValue)
                  onChange?.(newValue)

                  // Set cursor position after the inserted text
                  setTimeout(() => {
                    textarea.focus()
                    textarea.selectionStart = start + 2
                    textarea.selectionEnd = start + 6
                  }, 0)
                }
              }}
            >
              B
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const textarea = document.querySelector("textarea")
                if (textarea) {
                  const start = textarea.selectionStart
                  const end = textarea.selectionEnd
                  const newValue = value.substring(0, start) + "*Italic*" + value.substring(end)

                  setValue(newValue)
                  onChange?.(newValue)

                  setTimeout(() => {
                    textarea.focus()
                    textarea.selectionStart = start + 1
                    textarea.selectionEnd = start + 7
                  }, 0)
                }
              }}
            >
              I
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const textarea = document.querySelector("textarea")
                if (textarea) {
                  const start = textarea.selectionStart
                  const end = textarea.selectionEnd
                  const newValue = value.substring(0, start) + "[Link](https://example.com)" + value.substring(end)

                  setValue(newValue)
                  onChange?.(newValue)

                  setTimeout(() => {
                    textarea.focus()
                    textarea.selectionStart = start + 1
                    textarea.selectionEnd = start + 5
                  }, 0)
                }
              }}
            >
              Link
            </Button>
          </div>
        </div>
        <TabsContent value="write" className="p-0">
          <Textarea
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="min-h-[300px] resize-y rounded-none border-0 p-4 focus-visible:ring-0"
          />
        </TabsContent>
        <TabsContent value="preview" className="p-4">
          {value ? (
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          ) : (
            <p className="text-muted-foreground">Nothing to preview</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

