import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/service-detail-page"

export const metadata = {
  title: "Social Media Management - oren",
  description: "Build and engage your community across social platforms",
}

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ServiceDetailPage serviceType="social-media" />
      </main>
      <Footer />
    </div>
  )
}
