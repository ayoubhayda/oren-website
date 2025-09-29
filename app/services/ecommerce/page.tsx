import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "E-commerce Solutions - oren",
  description: "Complete e-commerce solutions that drive sales and growth",
}

export default function EcommercePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServiceDetailPage serviceType="ecommerce" />
      </main>
      <Footer />
    </div>
  )
}
