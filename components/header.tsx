import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GoogleSignInButton } from "@/components/auth-button"
import { UserMenu } from "@/components/user-menu"

export async function Header() {
  let user = null

  try {
    const { createClient } = await import("@/lib/supabase/server")
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    user = data.user
  } catch (error) {
    // Supabase not configured, user remains null
    console.debug('Supabase not configured:', error)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl">🍌</div>
            <span className="text-xl font-bold">BananaEdit</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#editor" className="text-sm font-medium hover:text-accent transition-colors">
              Editor
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-accent transition-colors">
              Features
            </Link>
            <Link href="#showcase" className="text-sm font-medium hover:text-accent transition-colors">
              Showcase
            </Link>
            <Link href="#reviews" className="text-sm font-medium hover:text-accent transition-colors">
              Reviews
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-accent transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <UserMenu />
            ) : (
              <GoogleSignInButton />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
