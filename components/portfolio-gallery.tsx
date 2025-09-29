"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

type ProjectCategory = "all" | "website" | "platform" | "ecommerce"

export function PortfolioGallery() {
  const { locale } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")

  const categories = [
    { id: "all" as ProjectCategory, label: locale === "en" ? "All" : locale === "ar" ? "الكل" : "Tout" },
    {
      id: "website" as ProjectCategory,
      label: locale === "en" ? "Websites" : locale === "ar" ? "مواقع" : "Sites Web",
    },
    {
      id: "platform" as ProjectCategory,
      label: locale === "en" ? "Platforms" : locale === "ar" ? "منصات" : "Plateformes",
    },
    {
      id: "ecommerce" as ProjectCategory,
      label: locale === "en" ? "E-commerce" : locale === "ar" ? "تجارة إلكترونية" : "E-commerce",
    },
  ]

  const projects = [
    {
      id: "techstart-ecommerce",
      title: locale === "en" ? "TechStart E-commerce" : locale === "ar" ? "متجر TechStart" : "E-commerce TechStart",
      category: "ecommerce" as ProjectCategory,
      description:
        locale === "en"
          ? "Modern online electronics store with seamless checkout"
          : locale === "ar"
            ? "متجر إلكترونيات حديث مع دفع سلس"
            : "Boutique d'électronique moderne avec paiement fluide",
      metric: locale === "en" ? "300% sales increase" : locale === "ar" ? "زيادة 300% في المبيعات" : "+300% de ventes",
      image: "/modern-ecommerce-dashboard.png",
      tags: ["E-commerce", "Next.js", "Stripe"],
    },
    {
      id: "dataflow-platform",
      title:
        locale === "en" ? "DataFlow SaaS Platform" : locale === "ar" ? "منصة DataFlow SaaS" : "Plateforme DataFlow",
      category: "platform" as ProjectCategory,
      description:
        locale === "en"
          ? "Analytics platform for data-driven decision making"
          : locale === "ar"
            ? "منصة تحليلات لاتخاذ قرارات مدفوعة بالبيانات"
            : "Plateforme d'analyse pour décisions basées sur données",
      metric: locale === "en" ? "10K+ active users" : locale === "ar" ? "10 آلاف+ مستخدم نشط" : "10K+ utilisateurs",
      image: "/saas-analytics-dashboard-interface.jpg",
      tags: ["SaaS", "React", "Node.js"],
    },
    {
      id: "growthlab-website",
      title: locale === "en" ? "GrowthLab Corporate Site" : locale === "ar" ? "موقع GrowthLab" : "Site GrowthLab",
      category: "website" as ProjectCategory,
      description:
        locale === "en"
          ? "Professional website showcasing consulting services"
          : locale === "ar"
            ? "موقع احترافي يعرض خدمات الاستشارات"
            : "Site professionnel présentant services de conseil",
      metric: locale === "en" ? "50% more leads" : locale === "ar" ? "50% المزيد من العملاء" : "+50% de leads",
      image: "/corporate-homepage.png",
      tags: ["Corporate", "CMS", "SEO"],
    },
    {
      id: "fashionhub-ecommerce",
      title: locale === "en" ? "FashionHub Store" : locale === "ar" ? "متجر FashionHub" : "Boutique FashionHub",
      category: "ecommerce" as ProjectCategory,
      description:
        locale === "en"
          ? "Fashion e-commerce with virtual try-on features"
          : locale === "ar"
            ? "تجارة إلكترونية للأزياء مع ميزات التجربة الافتراضية"
            : "E-commerce mode avec essayage virtuel",
      metric: locale === "en" ? "200% conversion rate" : locale === "ar" ? "معدل تحويل 200%" : "Taux conversion +200%",
      image: "/fashion-ecommerce-store.jpg",
      tags: ["Fashion", "AR", "Mobile"],
    },
    {
      id: "edutech-platform",
      title: locale === "en" ? "EduTech Learning Platform" : locale === "ar" ? "منصة EduTech" : "Plateforme EduTech",
      category: "platform" as ProjectCategory,
      description:
        locale === "en"
          ? "Online learning platform with live classes and assessments"
          : locale === "ar"
            ? "منصة تعليم عبر الإنترنت مع فصول مباشرة وتقييمات"
            : "Plateforme d'apprentissage avec cours en direct",
      metric: locale === "en" ? "5K+ students" : locale === "ar" ? "5 آلاف+ طالب" : "5K+ étudiants",
      image: "/online-learning-platform.jpg",
      tags: ["Education", "Video", "Real-time"],
    },
    {
      id: "restaurant-website",
      title: locale === "en" ? "Bella Italia Restaurant" : locale === "ar" ? "مطعم Bella Italia" : "Restaurant Bella",
      category: "website" as ProjectCategory,
      description:
        locale === "en"
          ? "Restaurant website with online reservations and menu"
          : locale === "ar"
            ? "موقع مطعم مع حجوزات عبر الإنترنت وقائمة الطعام"
            : "Site restaurant avec réservations en ligne",
      metric:
        locale === "en" ? "80% online bookings" : locale === "ar" ? "80% حجوزات عبر الإنترنت" : "80% réservations",
      image: "/restaurant-website.jpg",
      tags: ["Restaurant", "Booking", "Mobile"],
    },
  ]

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              {locale === "en" && "Our Portfolio"}
              {locale === "ar" && "أعمالنا"}
              {locale === "fr" && "Notre Portfolio"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {locale === "en" && "Explore our successful projects and see how we've helped businesses grow online"}
              {locale === "ar" && "استكشف مشاريعنا الناجحة وشاهد كيف ساعدنا الشركات على النمو عبر الإنترنت"}
              {locale === "fr" && "Explorez nos projets réussis et voyez comment nous avons aidé les entreprises"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="min-w-[100px]"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Link href={`/portfolio/${project.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          {categories.find((c) => c.id === project.category)?.label}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-muted text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">{project.metric}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all rtl:rotate-180" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {locale === "en" && "Ready to Start Your Project?"}
              {locale === "ar" && "هل أنت مستعد لبدء مشروعك؟"}
              {locale === "fr" && "Prêt à Démarrer Votre Projet?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "Let's create something amazing together"}
              {locale === "ar" && "دعنا نخلق شيئًا مذهلاً معًا"}
              {locale === "fr" && "Créons quelque chose d'incroyable ensemble"}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                {locale === "en" && "Get Started"}
                {locale === "ar" && "ابدأ الآن"}
                {locale === "fr" && "Commencer"}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
