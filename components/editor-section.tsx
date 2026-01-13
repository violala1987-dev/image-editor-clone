"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, Sparkles, Loader2, AlertCircle } from "lucide-react"

// 图片压缩函数
const compressImage = (
  file: File,
  maxWidth: number = 1024,
  maxHeight: number = 1024,
  quality: number = 0.8
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      const img = new Image()
      img.src = event.target?.result as string
      img.onload = () => {
        // 计算新尺寸
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height
            height = maxHeight
          }
        }

        // 创建 canvas 并压缩
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          reject(new Error("无法获取 canvas context"))
          return
        }
        ctx.drawImage(img, 0, 0, width, height)

        // 转换为 base64，使用 JPEG 格式和指定质量
        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality)
        resolve(compressedDataUrl)
      }
      img.onerror = () => reject(new Error("图片加载失败"))
    }
    reader.onerror = () => reject(new Error("文件读取失败"))
  })
}

export function EditorSection() {
  const [prompt, setPrompt] = useState("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [rawContent, setRawContent] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isCompressing, setIsCompressing] = useState(false)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsCompressing(true)
      setError(null)

      try {
        // 检查文件大小（5MB 限制）
        if (file.size > 5 * 1024 * 1024) {
          throw new Error("图片大小超过 5MB 限制")
        }

        // 压缩图片
        const compressedImage = await compressImage(file, 1024, 1024, 0.8)

        // 计算压缩后的大小
        const compressedSizeInMB = (compressedImage.length * 0.75) / (1024 * 1024)
        console.log(`原始大小: ${(file.size / 1024 / 1024).toFixed(2)}MB`)
        console.log(`压缩后大小: ${compressedSizeInMB.toFixed(2)}MB`)

        setUploadedImage(compressedImage)
      } catch (err: any) {
        setError(err.message || "图片处理失败")
      } finally {
        setIsCompressing(false)
      }
    }
  }

  const handleGenerate = async () => {
    if (!uploadedImage || !prompt.trim()) {
      setError("请先上传图片并输入提示词")
      return
    }

    setIsLoading(true)
    setError(null)
    setGeneratedImage(null)
    setRawContent(null)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: uploadedImage,
          prompt: prompt,
        }),
      })

      // 先读取响应文本（只能读取一次）
      const responseText = await response.text()

      // 检查响应状态
      if (!response.ok) {
        // 尝试解析为 JSON，如果失败则使用原始文本
        let errorMessage = "生成失败"
        try {
          const data = JSON.parse(responseText)
          errorMessage = data.details || data.error || errorMessage
        } catch {
          // 如果不是 JSON，使用原始文本
          errorMessage = responseText || `服务器错误 (${response.status})`
        }
        throw new Error(errorMessage)
      }

      // 解析成功的响应为 JSON
      let data
      try {
        data = JSON.parse(responseText)
      } catch (parseError) {
        throw new Error(`服务器返回了非 JSON 格式的响应: ${responseText.substring(0, 200)}`)
      }

      console.log("API 响应数据:", data)
      setGeneratedImage(data.image)
      setRawContent(data.content || "")

      // 检查图片 URL 是否有效
      if (data.image && !data.image.startsWith("data:")) {
        setError(`警告：返回的不是有效的 base64 图片格式`)
      }
    } catch (err: any) {
      setError(err.message || "生成图片时出错，请稍后重试")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="editor" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Try The AI Editor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the power of AI-powered image editing. Transform any photo with simple text commands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Transform Your Image
              </h3>

              <div className="space-y-6">
                {/* Image Upload */}
                <div>
                  <Label htmlFor="image-upload" className="text-sm font-medium mb-2 block">
                    Upload Image
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {uploadedImage ? (
                        <div className="space-y-2">
                          <img
                            src={uploadedImage || "/placeholder.svg"}
                            alt="Uploaded"
                            className="max-h-48 mx-auto rounded-lg"
                          />
                          <p className="text-sm text-muted-foreground">Click to change image</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {isCompressing ? (
                            <>
                              <Loader2 className="w-12 h-12 mx-auto text-muted-foreground animate-spin" />
                              <p className="text-sm font-medium">正在压缩图片...</p>
                              <p className="text-xs text-muted-foreground">请稍候</p>
                            </>
                          ) : (
                            <>
                              <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                              <p className="text-sm font-medium">Click to upload image</p>
                              <p className="text-xs text-muted-foreground">Max 5MB, 自动压缩到 1MB 以内</p>
                            </>
                          )}
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Prompt Input */}
                <div>
                  <Label htmlFor="prompt" className="text-sm font-medium mb-2 block">
                    Editing Prompt
                  </Label>
                  <Textarea
                    id="prompt"
                    placeholder="Describe how you want to edit the image... (e.g., 'Add a sunset background' or 'Change the shirt color to blue')"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-32 resize-none"
                  />
                </div>

                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={isLoading || isCompressing || !uploadedImage || !prompt.trim()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      生成中...
                    </>
                  ) : (
                    <>
                      Generate Now
                      <Sparkles className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Output Section */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Output Gallery</h3>

              <div className="border-2 border-border rounded-lg min-h-96 flex items-center justify-center bg-muted/50 overflow-hidden">
                {isLoading ? (
                  <div className="text-center space-y-4 p-12">
                    <Loader2 className="w-16 h-16 mx-auto animate-spin text-accent" />
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">正在生成图片...</p>
                      <p className="text-sm text-muted-foreground">
                        AI 正在处理您的请求，请稍候
                      </p>
                    </div>
                  </div>
                ) : generatedImage ? (
                  <div className="w-full p-4">
                    {generatedImage.startsWith("data:") ? (
                      <img
                        src={generatedImage}
                        alt="Generated result"
                        className="w-full h-auto rounded-lg"
                      />
                    ) : (
                      <div className="bg-background p-4 rounded-lg border border-border">
                        <p className="text-sm font-medium mb-2">API 返回内容（非图片格式）：</p>
                        <pre className="text-xs bg-muted p-3 rounded overflow-auto max-h-60 whitespace-pre-wrap break-words">
                          {generatedImage}
                        </pre>
                        {rawContent && rawContent !== generatedImage && (
                          <details className="mt-3">
                            <summary className="text-sm font-medium cursor-pointer">查看完整响应内容</summary>
                            <pre className="text-xs bg-muted p-3 rounded mt-2 overflow-auto max-h-60 whitespace-pre-wrap break-words">
                              {rawContent}
                            </pre>
                          </details>
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex gap-2">
                      {generatedImage.startsWith("data:") && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          onClick={() => {
                            const link = document.createElement("a")
                            link.href = generatedImage
                            link.download = `bananaedit-${Date.now()}.png`
                            link.click()
                          }}
                        >
                          下载图片
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                          setGeneratedImage(null)
                          setRawContent(null)
                        }}
                      >
                        清除
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4 p-12">
                    <div className="text-6xl">🍌</div>
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">Ready for instant generation</p>
                      <p className="text-sm text-muted-foreground text-pretty">
                        Upload an image and enter your prompt to unleash the power of AI
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
