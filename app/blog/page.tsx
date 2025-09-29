import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogIndex } from "@/components/blog-index"

export const metadata = {
  title: "Blog - oren",
  description: "Insights on web development, design, and digital marketing",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <BlogIndex />
      </main>
      <Footer />
    </div>
  )
}
