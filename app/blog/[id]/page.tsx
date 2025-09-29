import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogArticle } from "@/components/blog-article"

export const metadata = {
  title: "Blog Article - oren",
  description: "Read our latest insights",
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <BlogArticle articleId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
