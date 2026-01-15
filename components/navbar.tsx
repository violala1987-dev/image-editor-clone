import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { GoogleSignInButton } from '@/components/auth-button'
import { UserMenu } from '@/components/user-menu'
import { Banana } from 'lucide-react'

export async function Navbar() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Banana className="h-6 w-6 text-yellow-500" />
            BananaEdit
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <UserMenu />
          ) : (
            <GoogleSignInButton />
          )}
        </div>
      </div>
    </nav>
  )
}
