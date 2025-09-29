import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "Web Development Services - oren",
  description: "Custom website development with modern technologies for optimal performance",
}

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServiceDetailPage serviceType="web-development" />
      </main>
      <Footer />
    </div>
  )
}
