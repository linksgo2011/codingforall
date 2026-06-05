import Link from "next/link"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          非程序员也能编程
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <Link href="/blog" className="transition-colors hover:text-foreground">
            文章
          </Link>
        </nav>
      </div>
    </header>
  )
}
