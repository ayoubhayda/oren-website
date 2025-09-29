"use client"

import { useLanguage } from "@/contexts/language-context"
import { Search, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"

export function HowWeWork() {
  const { locale } = useLanguage()

  const steps = [
    {
      icon: Search,
      title: locale === "en" ? "Discover" : locale === "ar" ? "اكتشف" : "Découvrir",
      description:
        locale === "en"
          ? "We learn about your business, goals, and target audience"
          : locale === "ar"
            ? "نتعرف على عملك وأهدافك وجمهورك المستهدف"
            : "Nous apprenons votre entreprise, objectifs et audience cible",
    },
    {
      icon: Palette,
      title: locale === "en" ? "Design" : locale === "ar" ? "تصميم" : "Concevoir",
      description:
        locale === "en"
          ? "Create beautiful, user-friendly designs that align with your brand"
          : locale === "ar"
            ? "إنشاء تصاميم جميلة وسهلة الاستخدام تتماشى مع علامتك التجارية"
            : "Créer des designs beaux et conviviaux alignés avec votre marque",
    },
    {
      icon: Code,
      title: locale === "en" ? "Develop" : locale === "ar" ? "تطوير" : "Développer",
      description:
        locale === "en"
          ? "Build with modern technologies for performance and scalability"
          : locale === "ar"
            ? "البناء بتقنيات حديثة للأداء وقابلية التوسع"
            : "Construire avec des technologies modernes pour performance et évolutivité",
    },
    {
      icon: Rocket,
      title: locale === "en" ? "Launch" : locale === "ar" ? "إطلاق" : "Lancer",
      description:
        locale === "en"
          ? "Deploy your project and ensure everything runs smoothly"
          : locale === "ar"
            ? "نشر مشروعك والتأكد من أن كل شيء يعمل بسلاسة"
            : "Déployer votre projet et assurer que tout fonctionne parfaitement",
    },
    {
      icon: HeadphonesIcon,
      title: locale === "en" ? "Support" : locale === "ar" ? "دعم" : "Support",
      description:
        locale === "en"
          ? "Ongoing maintenance and support to keep you running"
          : locale === "ar"
            ? "صيانة ودعم مستمر لإبقائك تعمل"
            : "Maintenance et support continus pour vous garder opérationnel",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === "en" && "How We Work"}
            {locale === "ar" && "كيف نعمل"}
            {locale === "fr" && "Comment Nous Travaillons"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {locale === "en" && "A proven process that delivers results"}
            {locale === "ar" && "عملية مثبتة تحقق النتائج"}
            {locale === "fr" && "Un processus éprouvé qui donne des résultats"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border"
              style={{ left: "10%", right: "10%" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
