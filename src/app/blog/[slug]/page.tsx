import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllSlugs } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Markdown } from "@/components/markdown"
import type { Metadata } from "next"

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata(props: { params: Params }): Promise<Metadata> {
  const { slug } = await props.params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} - 非程序员也能编程`,
    description: post.description,
  }
}

export default async function PostPage(props: { params: Params }) {
  const { slug } = await props.params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-2">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          &larr; 返回所有文章
        </Link>
      </div>

      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>

      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <Separator className="mb-8" />

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <Markdown content={post.content} />
      </div>
    </article>
  )
}
