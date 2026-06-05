export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-14 items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 非程序员也能编程
        </p>
      </div>
    </footer>
  )
}
