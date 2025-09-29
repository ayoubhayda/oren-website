"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Layers, ShoppingCart, TrendingUp, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function ServicesOverviewPage() {
  const { locale } = useLanguage()

  const services = [
    {
      icon: Code,
      title: locale === "en" ? "Web Development" : locale === "ar" ? "تطوير المواقع" : "Développement Web",
      description:
        locale === "en"
          ? "Custom websites built with modern technologies for optimal performance and user experience"
          : locale === "ar"
            ? "مواقع مخصصة مبنية بتقنيات حديثة للأداء الأمثل وتجربة المستخدم"
            : "Sites web personnalisés avec technologies modernes pour performance optimale",
      features:
        locale === "en"
          ? ["Responsive Design", "Fast Loading", "SEO Optimized", "CMS Integration", "Analytics Setup"]
          : locale === "ar"
            ? ["تصميم متجاوب", "تحميل سريع", "محسّن لمحركات البحث", "تكامل CMS", "إعداد التحليلات"]
            : ["Design Responsive", "Chargement Rapide", "Optimisé SEO", "Intégration CMS", "Configuration Analytics"],
      href: "/services/web-development",
    },
    {
      icon: Layers,
      title: locale === "en" ? "Platforms" : locale === "ar" ? "المنصات" : "Plateformes",
      description:
        locale === "en"
          ? "Scalable platforms and web applications for complex business requirements"
          : locale === "ar"
            ? "منصات قابلة للتوسع وتطبيقات ويب لمتطلبات الأعمال المعقدة"
            : "Plateformes évolutives et applications web pour besoins complexes",
      features:
        locale === "en"
          ? ["Custom Features", "User Management", "API Integration", "Real-time Updates", "Security"]
          : locale === "ar"
            ? ["ميزات مخصصة", "إدارة المستخدمين", "تكامل API", "تحديثات فورية", "الأمان"]
            : [
                "Fonctionnalités Sur Mesure",
                "Gestion Utilisateurs",
                "Intégration API",
                "Mises à Jour Temps Réel",
                "Sécurité",
              ],
      href: "/services/platforms",
    },
    {
      icon: ShoppingCart,
      title: locale === "en" ? "E-commerce" : locale === "ar" ? "التجارة الإلكترونية" : "E-commerce",
      description:
        locale === "en"
          ? "Complete e-commerce solutions that drive sales and provide seamless shopping experiences"
          : locale === "ar"
            ? "حلول تجارة إلكترونية كاملة تدفع المبيعات وتوفر تجارب تسوق سلسة"
            : "Solutions e-commerce complètes qui stimulent les ventes et offrent des expériences d'achat fluides",
      features:
        locale === "en"
          ? ["Payment Gateway", "Inventory Management", "Order Tracking", "Customer Accounts", "Marketing Tools"]
          : locale === "ar"
            ? ["بوابة الدفع", "إدارة المخزون", "تتبع الطلبات", "حسابات العملاء", "أدوات التسويق"]
            : ["Passerelle Paiement", "Gestion Stock", "Suivi Commandes", "Comptes Clients", "Outils Marketing"],
      href: "/services/ecommerce",
    },
    {
      icon: TrendingUp,
      title: locale === "en" ? "Digital Marketing" : locale === "ar" ? "التسويق الرقمي" : "Marketing Digital",
      description:
        locale === "en"
          ? "Data-driven marketing strategies to reach your target audience and grow your business"
          : locale === "ar"
            ? "استراتيجيات تسويق مدفوعة بالبيانات للوصول إلى جمهورك المستهدف وتنمية عملك"
            : "Stratégies marketing basées sur les données pour atteindre votre audience cible",
      features:
        locale === "en"
          ? ["SEO & SEM", "Content Marketing", "Email Campaigns", "PPC Advertising", "Analytics & Reporting"]
          : locale === "ar"
            ? ["تحسين محركات البحث", "تسويق المحتوى", "حملات البريد الإلكتروني", "إعلانات PPC", "التحليلات والتقارير"]
            : ["SEO & SEM", "Marketing Contenu", "Campagnes Email", "Publicité PPC", "Analytics & Rapports"],
      href: "/services/marketing",
    },
    {
      icon: Share2,
      title:
        locale === "en"
          ? "Social Media Management"
          : locale === "ar"
            ? "إدارة وسائل التواصل"
            : "Gestion Réseaux Sociaux",
      description:
        locale === "en"
          ? "Build and engage your community across social media platforms"
          : locale === "ar"
            ? "بناء وإشراك مجتمعك عبر منصات التواصل الاجتماعي"
            : "Construire et engager votre communauté sur les réseaux sociaux",
      features:
        locale === "en"
          ? ["Content Creation", "Community Management", "Social Analytics", "Influencer Outreach", "Ad Campaigns"]
          : locale === "ar"
            ? ["إنشاء المحتوى", "إدارة المجتمع", "تحليلات اجتماعية", "التواصل مع المؤثرين", "حملات إعلانية"]
            : [
                "Création Contenu",
                "Gestion Communauté",
                "Analytics Sociaux",
                "Relations Influenceurs",
                "Campagnes Pub",
              ],
      href: "/services/social-media",
    },
  ]

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
              {locale === "en" && "Our Services"}
              {locale === "ar" && "خدماتنا"}
              {locale === "fr" && "Nos Services"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {locale === "en" &&
                "Comprehensive digital solutions to help your business succeed online. From web development to digital marketing, we've got you covered."}
              {locale === "ar" &&
                "حلول رقمية شاملة لمساعدة عملك على النجاح عبر الإنترنت. من تطوير الويب إلى التسويق الرقمي، نحن نغطي كل شيء."}
              {locale === "fr" &&
                "Solutions numériques complètes pour aider votre entreprise à réussir en ligne. Du développement web au marketing digital, nous vous couvrons."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">
                        {locale === "en" && "Key Features:"}
                        {locale === "ar" && "الميزات الرئيسية:"}
                        {locale === "fr" && "Fonctionnalités Clés:"}
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full group">
                      <Link href={service.href}>
                        {locale === "en" && "Learn More"}
                        {locale === "ar" && "اعرف المزيد"}
                        {locale === "fr" && "En Savoir Plus"}
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
              {locale === "en" && "Not Sure Which Service You Need?"}
              {locale === "ar" && "غير متأكد من الخدمة التي تحتاجها؟"}
              {locale === "fr" && "Pas Sûr du Service Dont Vous Avez Besoin?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "Let's discuss your project and find the perfect solution for your business"}
              {locale === "ar" && "دعنا نناقش مشروعك ونجد الحل الأمثل لعملك"}
              {locale === "fr" && "Discutons de votre projet et trouvons la solution parfaite"}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                {locale === "en" && "Get a Free Consultation"}
                {locale === "ar" && "احصل على استشارة مجانية"}
                {locale === "fr" && "Obtenir une Consultation Gratuite"}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
