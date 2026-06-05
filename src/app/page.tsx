import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { PostCard } from "@/components/post-card"

export default function Home() {
  const posts = getAllPosts().slice(0, 5)

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          非程序员也能编程
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          无论你是谁，编程都不是遥不可及的技术。
          从这里开始，用最简单的方式进入编程的世界。
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            浏览文章
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            查看全部 &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
