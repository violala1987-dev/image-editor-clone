import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const showcaseItems = [
  {
    title: "Ultra-Fast Mountain Generation",
    description: "Created in 0.8 seconds with optimized neural engine",
    image: "/majestic-mountain-sunset.png",
  },
  {
    title: "Instant Garden Creation",
    description: "Complex scene rendered in milliseconds using advanced technology",
    image: "/beautiful-garden-with-flowers-and-paths.jpg",
  },
  {
    title: "Real-time Beach Synthesis",
    description: "Delivers photorealistic results at lightning speed",
    image: "/tropical-beach-palms-ocean.png",
  },
  {
    title: "Rapid Aurora Generation",
    description: "Advanced effects processed instantly with AI",
    image: "/northern-lights-aurora-over-snowy-landscape.jpg",
  },
]

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Lightning-Fast AI Creations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what BananaEdit generates in milliseconds
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {showcaseItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    <span className="mr-1">🍌</span>
                    BananaEdit Speed
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Experience the power of BananaEdit yourself</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Try BananaEdit Editor
          </Button>
        </div>
      </div>
    </section>
  )
}
