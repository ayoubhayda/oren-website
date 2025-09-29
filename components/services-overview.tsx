"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Layers, ShoppingCart, TrendingUp, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ServicesOverview() {
  const { locale } = useLanguage()

  const services = [
    {
      icon: Code,
      title: locale === "en" ? "Web Development" : locale === "ar" ? "تطوير المواقع" : "Développement Web",
      description:
        locale === "en"
          ? "Custom websites built with modern technologies"
          : locale === "ar"
            ? "مواقع مخصصة مبنية بتقنيات حديثة"
            : "Sites web personnalisés avec technologies modernes",
      benefits:
        locale === "en"
          ? ["Responsive design", "Fast performance", "SEO optimized"]
          : locale === "ar"
            ? ["تصميم متجاوب", "أداء سريع", "محسّن لمحركات البحث"]
            : ["Design responsive", "Performance rapide", "Optimisé SEO"],
      href: "/services/web-development",
    },
    {
      icon: Layers,
      title: locale === "en" ? "Platforms" : locale === "ar" ? "المنصات" : "Plateformes",
      description:
        locale === "en"
          ? "Scalable platforms for complex business needs"
          : locale === "ar"
            ? "منصات قابلة للتوسع لاحتياجات الأعمال المعقدة"
            : "Plateformes évolutives pour besoins complexes",
      benefits:
        locale === "en"
          ? ["Custom features", "Secure & reliable", "Easy to manage"]
          : locale === "ar"
            ? ["ميزات مخصصة", "آمن وموثوق", "سهل الإدارة"]
            : ["Fonctionnalités sur mesure", "Sécurisé et fiable", "Facile à gérer"],
      href: "/services/platforms",
    },
    {
      icon: ShoppingCart,
      title: locale === "en" ? "E-commerce" : locale === "ar" ? "التجارة الإلكترونية" : "E-commerce",
      description:
        locale === "en"
          ? "Online stores that drive sales and growth"
          : locale === "ar"
            ? "متاجر إلكترونية تدفع المبيعات والنمو"
            : "Boutiques en ligne qui stimulent les ventes",
      benefits:
        locale === "en"
          ? ["Payment integration", "Inventory management", "Analytics"]
          : locale === "ar"
            ? ["تكامل الدفع", "إدارة المخزون", "التحليلات"]
            : ["Intégration paiement", "Gestion stock", "Analytiques"],
      href: "/services/ecommerce",
    },
    {
      icon: TrendingUp,
      title: locale === "en" ? "Digital Marketing" : locale === "ar" ? "التسويق الرقمي" : "Marketing Digital",
      description:
        locale === "en"
          ? "Data-driven strategies to reach your audience"
          : locale === "ar"
            ? "استراتيجيات مدفوعة بالبيانات للوصول إلى جمهورك"
            : "Stratégies basées sur les données",
      benefits:
        locale === "en"
          ? ["SEO & SEM", "Content marketing", "Campaign management"]
          : locale === "ar"
            ? ["تحسين محركات البحث", "تسويق المحتوى", "إدارة الحملات"]
            : ["SEO & SEM", "Marketing contenu", "Gestion campagnes"],
      href: "/services/marketing",
    },
    {
      icon: Share2,
      title: locale === "en" ? "Social Media" : locale === "ar" ? "وسائل التواصل" : "Réseaux Sociaux",
      description:
        locale === "en"
          ? "Build and engage your community online"
          : locale === "ar"
            ? "بناء وإشراك مجتمعك عبر الإنترنت"
            : "Construire et engager votre communauté",
      benefits:
        locale === "en"
          ? ["Content creation", "Community management", "Analytics"]
          : locale === "ar"
            ? ["إنشاء المحتوى", "إدارة المجتمع", "التحليلات"]
            : ["Création contenu", "Gestion communauté", "Analytiques"],
      href: "/services/social-media",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === "en" && "Our Services"}
            {locale === "ar" && "خدماتنا"}
            {locale === "fr" && "Nos Services"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {locale === "en" && "Comprehensive solutions to help your business thrive online"}
            {locale === "ar" && "حلول شاملة لمساعدة عملك على الازدهار عبر الإنترنت"}
            {locale === "fr" && "Solutions complètes pour faire prospérer votre entreprise en ligne"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="ghost" className="w-full group">
                    <Link href={service.href}>
                      {locale === "en" && "Learn more"}
                      {locale === "ar" && "اعرف المزيد"}
                      {locale === "fr" && "En savoir plus"}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
