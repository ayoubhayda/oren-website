import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGallery } from "@/components/portfolio-gallery"

export const metadata = {
  title: "Portfolio - oren",
  description: "Explore our web development, platform, and e-commerce projects",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PortfolioGallery />
      </main>
      <Footer />
    </div>
  )
}
