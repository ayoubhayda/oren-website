import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "Platform Development Services - oren",
  description: "Scalable platforms and web applications for complex business needs",
}

export default function PlatformsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServiceDetailPage serviceType="platforms" />
      </main>
      <Footer />
    </div>
  )
}
