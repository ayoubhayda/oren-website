"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function PortfolioPreview() {
  const { locale } = useLanguage()

  const projects = [
    {
      title:
        locale === "en" ? "E-commerce Platform" : locale === "ar" ? "منصة تجارة إلكترونية" : "Plateforme E-commerce",
      category: locale === "en" ? "E-commerce" : locale === "ar" ? "تجارة إلكترونية" : "E-commerce",
      description:
        locale === "en"
          ? "Modern online store with seamless checkout experience"
          : locale === "ar"
            ? "متجر إلكتروني حديث مع تجربة دفع سلسة"
            : "Boutique en ligne moderne avec expérience de paiement fluide",
      metric:
        locale === "en"
          ? "300% increase in sales"
          : locale === "ar"
            ? "زيادة 300% في المبيعات"
            : "Augmentation de 300% des ventes",
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: locale === "en" ? "SaaS Dashboard" : locale === "ar" ? "لوحة تحكم SaaS" : "Tableau de Bord SaaS",
      category: locale === "en" ? "Platform" : locale === "ar" ? "منصة" : "Plateforme",
      description:
        locale === "en"
          ? "Analytics platform for data-driven decision making"
          : locale === "ar"
            ? "منصة تحليلات لاتخاذ قرارات مدفوعة بالبيانات"
            : "Plateforme d'analyse pour décisions basées sur les données",
      metric:
        locale === "en" ? "10K+ active users" : locale === "ar" ? "10 آلاف+ مستخدم نشط" : "10K+ utilisateurs actifs",
      image: "/saas-analytics-dashboard-interface.jpg",
    },
    {
      title: locale === "en" ? "Corporate Website" : locale === "ar" ? "موقع شركة" : "Site Web Corporate",
      category: locale === "en" ? "Web Development" : locale === "ar" ? "تطوير ويب" : "Développement Web",
      description:
        locale === "en"
          ? "Professional website showcasing services and expertise"
          : locale === "ar"
            ? "موقع احترافي يعرض الخدمات والخبرات"
            : "Site professionnel présentant services et expertise",
      metric:
        locale === "en"
          ? "50% more leads"
          : locale === "ar"
            ? "50% المزيد من العملاء المحتملين"
            : "50% de leads en plus",
      image: "/corporate-homepage.png",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === "en" && "Featured Projects"}
              {locale === "ar" && "مشاريع مميزة"}
              {locale === "fr" && "Projets en Vedette"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "See how we've helped businesses succeed"}
              {locale === "ar" && "شاهد كيف ساعدنا الشركات على النجاح"}
              {locale === "fr" && "Découvrez comment nous avons aidé les entreprises"}
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:inline-flex bg-transparent">
            <Link href="/portfolio">
              {locale === "en" && "View All"}
              {locale === "ar" && "عرض الكل"}
              {locale === "fr" && "Voir Tout"}
              <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{project.metric}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all rtl:rotate-180" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline">
            <Link href="/portfolio">
              {locale === "en" && "View All Projects"}
              {locale === "ar" && "عرض جميع المشاريع"}
              {locale === "fr" && "Voir Tous les Projets"}
              <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
