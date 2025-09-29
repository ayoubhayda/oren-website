import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { WhyOren } from "@/components/why-oren"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { Testimonials } from "@/components/testimonials"
import { HowWeWork } from "@/components/how-we-work"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyOren />
      <PortfolioPreview />
      <Testimonials />
      <HowWeWork />
      <CTASection />
    </>
  )
}
