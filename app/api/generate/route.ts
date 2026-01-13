import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  baseURL: process.env.OPENROUTER_BASE_URL || "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3001",
    "X-Title": "BananaEdit",
  },
})

export async function POST(req: NextRequest) {
  try {
    const { image, prompt } = await req.json()

    if (!image || !prompt) {
      return NextResponse.json(
        { error: "请提供图片和提示词" },
        { status: 400 }
      )
    }

    // 调用 Gemini 2.5 Flash Image API
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-image",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
            {
              type: "image_url",
              image_url: {
                url: image,
              },
            },
          ],
        },
      ],
      modalities: ["image", "text"], // 重要：指定要生成图片
    })

    // 从响应的 images 数组中获取生成的图片
    const message = completion.choices[0]?.message
    const images = message?.images
    const content = message?.content || ""

    console.log("API 完整响应:", JSON.stringify(completion, null, 2))
    console.log("消息内容:", content)
    console.log("图片数组:", images)

    let imageUrl = null

    // 从 images 数组中提取第一张图片
    if (images && images.length > 0) {
      imageUrl = images[0]?.image_url?.url
      console.log("生成的图片 URL:", imageUrl?.substring(0, 100) + "...")
    }

    if (!imageUrl) {
      return NextResponse.json(
        {
          error: "API 未返回图片",
          details: "响应中未找到图片数据",
          content: content,
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      image: imageUrl,
      content: content,
      usage: completion.usage,
    })
  } catch (error: any) {
    console.error("生成图片时出错:", error)
    return NextResponse.json(
      {
        error: "生成图片失败",
        details: error.message || "未知错误",
      },
      { status: 500 }
    )
  }
}
