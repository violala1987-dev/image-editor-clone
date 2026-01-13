import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is BananaEdit?",
    answer:
      "It's a revolutionary AI image editing model that transforms photos using natural language prompts. This is currently one of the most powerful image editing models available, with exceptional consistency. It offers superior performance for consistent character editing and scene preservation.",
  },
  {
    question: "How does it work?",
    answer:
      'Simply upload an image and describe your desired edits in natural language. The AI understands complex instructions like "place the creature in a snowy mountain" or "imagine the whole face and create it". It processes your text prompt and generates perfectly edited images.',
  },
  {
    question: "What makes BananaEdit special?",
    answer:
      "This model excels in character consistency, scene blending, and one-shot editing. Users report exceptional performance in preserving facial features and seamlessly integrating edits with backgrounds. It also supports multi-image context, making it ideal for creating consistent AI content.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Yes! It's perfect for creating AI UGC content, social media campaigns, and marketing materials. Many users leverage it for creating consistent AI influencers and product photography. The high-quality outputs are suitable for professional use.",
  },
  {
    question: "What types of edits can it handle?",
    answer:
      'The editor handles complex edits including face completion, background changes, object placement, style transfers, and character modifications. It excels at understanding contextual instructions like "place in a blizzard" or "create the whole face" while maintaining photorealistic quality.',
  },
  {
    question: "Where can I try BananaEdit?",
    answer:
      "You can try BananaEdit through our web interface above. Simply upload your image, enter a text prompt describing your desired edits, and watch as our AI transforms your photo with incredible accuracy and consistency.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">FAQs</h2>
          <p className="text-lg text-muted-foreground text-pretty">Frequently Asked Questions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
