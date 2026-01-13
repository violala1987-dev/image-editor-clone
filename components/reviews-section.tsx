import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const reviews = [
  {
    name: "Sarah Chen",
    role: "Digital Creator",
    avatar: "SC",
    content:
      "This editor completely changed my workflow. The character consistency is incredible - miles ahead of other tools!",
  },
  {
    name: "Marcus Johnson",
    role: "UGC Specialist",
    avatar: "MJ",
    content:
      "Creating consistent AI influencers has never been easier. It maintains perfect face details across edits!",
  },
  {
    name: "Emily Rodriguez",
    role: "Professional Editor",
    avatar: "ER",
    content: "One-shot editing is basically solved with this tool. The scene blending is so natural and realistic!",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">User Reviews</h2>
          <p className="text-lg text-muted-foreground text-pretty">What creators are saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 bg-accent text-accent-foreground">
                    <AvatarFallback>{review.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">&quot;{review.content}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
