import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EditorSection } from "@/components/editor-section"
import { FeaturesSection } from "@/components/features-section"
import { ShowcaseSection } from "@/components/showcase-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BananaEdit",
  applicationCategory: "PhotographyApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Transform your images with AI-powered editing. Simply describe what you want, and our advanced AI does the rest.",
  author: {
    "@type": "Person",
    name: "violala1987-dev",
    url: "https://github.com/violala1987-dev",
  },
  creator: {
    "@type": "Organization",
    name: "BananaEdit",
    url: "https://image-editor-clone-liart.vercel.app",
  },
  featureList: [
    "AI-powered image editing",
    "Text-to-image transformations",
    "Automatic image enhancement",
    "Real-time preview",
    "Professional quality results",
  ],
  screenshot: "https://image-editor-clone-liart.vercel.app/og-image.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
  },
}

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <EditorSection />
          <FeaturesSection />
          <ShowcaseSection />
          <ReviewsSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
