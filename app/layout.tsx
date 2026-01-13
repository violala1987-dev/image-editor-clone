import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "BananaEdit - AI Powered Image Editor",
    template: "%s | BananaEdit",
  },
  description: "Transform your images with AI-powered editing. Simply describe what you want, and our advanced AI does the rest. Perfect for creators, marketers, and designers.",
  keywords: [
    "AI image editor",
    "photo editing",
    "image generation",
    "artificial intelligence",
    "online photo editor",
    "AI photography",
    "image manipulation",
    "automatic photo enhancement",
    "Gemini AI",
    "AI-powered design",
    "图片编辑",
    "AI 修图",
    "在线图片处理",
  ],
  authors: [
    {
      name: "violala1987-dev",
      url: "https://github.com/violala1987-dev",
    },
  ],
  creator: "violala1987-dev",
  publisher: "BananaEdit",
  generator: "Next.js 16",
  applicationName: "BananaEdit",

  metadataBase: new URL("https://image-editor-clone-liart.vercel.app"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://image-editor-clone-liart.vercel.app",
    title: "BananaEdit - AI Powered Image Editor",
    description: "Transform your images with AI-powered editing. Simply describe what you want, and our advanced AI does the rest.",
    siteName: "BananaEdit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BananaEdit - AI Image Editor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BananaEdit - AI Powered Image Editor",
    description: "Transform your images with AI-powered editing. Simply describe what you want, and our advanced AI does the rest.",
    images: ["/og-image.png"],
    creator: "@violala1987",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  category: "Photo Editing",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
