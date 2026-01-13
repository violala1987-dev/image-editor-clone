import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Decorative banana elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 rotate-12 animate-float">🍌</div>
      <div
        className="absolute bottom-20 left-10 text-4xl opacity-15 -rotate-12 animate-float"
        style={{ animationDelay: "1s" }}
      >
        🍌
      </div>
      <div
        className="absolute top-1/2 right-1/4 text-5xl opacity-10 rotate-45 animate-float"
        style={{ animationDelay: "2s" }}
      >
        🍌
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-sm">
            <span className="mr-1">🍌</span>
            The AI editor that outperforms all others
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">BananaEdit</h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Transform any image with simple text prompts. Our advanced AI model delivers consistent character editing
            and scene preservation. Experience the future of AI image editing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              Start Editing
              <span className="ml-2">🍌</span>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              View Examples
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>One-shot editing</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Multi-image support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
