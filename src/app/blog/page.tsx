import { getAllPosts } from "@/lib/posts"
import { PostCard } from "@/components/post-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "所有文章 - 非程序员也能编程",
  description: "浏览所有博客文章，从零开始学编程",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">所有文章</h1>
      <p className="mb-8 text-muted-foreground">
        从零开始，一步步走进编程的世界
      </p>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
