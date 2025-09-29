import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPage } from "@/components/about-page"

export const metadata = {
  title: "About Us - oren",
  description: "Learn about our team, mission, and values",
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}
