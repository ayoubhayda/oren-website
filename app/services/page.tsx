import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesOverviewPage } from "@/components/services-overview-page"

export const metadata = {
  title: "Our Services - oren",
  description: "Professional web development, platforms, e-commerce, and digital marketing services",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServicesOverviewPage />
      </main>
      <Footer />
    </div>
  )
}
