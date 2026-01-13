import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🍌</div>
              <span className="text-lg font-bold">BananaEdit</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform any image with simple text prompts. Professional AI image editing made simple.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#editor" className="hover:text-accent transition-colors">
                  Editor
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="hover:text-accent transition-colors">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 BananaEdit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
