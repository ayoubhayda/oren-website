import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "Digital Marketing Services - oren",
  description: "Data-driven marketing strategies to grow your business",
}

export default function MarketingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServiceDetailPage serviceType="marketing" />
      </main>
      <Footer />
    </div>
  )
}
