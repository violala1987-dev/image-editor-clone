import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, Layers, Zap, Images, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Natural Language Editing",
    description: "Edit images using simple text prompts. Our AI understands complex instructions like GPT for images.",
  },
  {
    icon: Users,
    title: "Character Consistency",
    description:
      "Maintain perfect character details across edits. This model excels at preserving faces and identities.",
  },
  {
    icon: Layers,
    title: "Scene Preservation",
    description: "Seamlessly blend edits with original backgrounds. Superior scene fusion technology.",
  },
  {
    icon: Zap,
    title: "One-Shot Editing",
    description: "Perfect results in a single attempt. Solve one-shot image editing challenges effortlessly.",
  },
  {
    icon: Images,
    title: "Multi-Image Context",
    description: "Process multiple images simultaneously. Support for advanced multi-image editing workflows.",
  },
  {
    icon: TrendingUp,
    title: "AI Content Creation",
    description: "Create consistent AI influencers and UGC content. Perfect for social media and marketing campaigns.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Core Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">Why Choose BananaEdit?</p>
          <p className="text-muted-foreground mt-2 max-w-3xl mx-auto text-pretty leading-relaxed">
            The most advanced AI image editor available. Revolutionize your photo editing with natural language
            understanding.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-6">
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
