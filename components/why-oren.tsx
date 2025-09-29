"use client"

import { useLanguage } from "@/contexts/language-context"
import { Zap, Users, Palette, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function WhyOren() {
  const { locale } = useLanguage()

  const values = [
    {
      icon: Zap,
      title: locale === "en" ? "Reliable Delivery" : locale === "ar" ? "تسليم موثوق" : "Livraison Fiable",
      description:
        locale === "en"
          ? "We deliver projects on time, every time, with clear communication throughout."
          : locale === "ar"
            ? "نسلم المشاريع في الوقت المحدد، في كل مرة، مع تواصل واضح طوال الوقت."
            : "Nous livrons les projets à temps, à chaque fois, avec une communication claire.",
    },
    {
      icon: Users,
      title: locale === "en" ? "Custom Solutions" : locale === "ar" ? "حلول مخصصة" : "Solutions Sur Mesure",
      description:
        locale === "en"
          ? "Every business is unique. We tailor our approach to your specific needs and goals."
          : locale === "ar"
            ? "كل عمل فريد. نصمم نهجنا وفقًا لاحتياجاتك وأهدافك المحددة."
            : "Chaque entreprise est unique. Nous adaptons notre approche à vos besoins.",
    },
    {
      icon: Palette,
      title: locale === "en" ? "Design-First" : locale === "ar" ? "التصميم أولاً" : "Design d'Abord",
      description:
        locale === "en"
          ? "Beautiful, intuitive interfaces that users love and that drive conversions."
          : locale === "ar"
            ? "واجهات جميلة وبديهية يحبها المستخدمون وتزيد التحويلات."
            : "Interfaces belles et intuitives que les utilisateurs adorent.",
    },
    {
      icon: TrendingUp,
      title: locale === "en" ? "Growth Focus" : locale === "ar" ? "التركيز على النمو" : "Focus Croissance",
      description:
        locale === "en"
          ? "We build with scalability in mind, helping your business grow without limits."
          : locale === "ar"
            ? "نبني مع وضع قابلية التوسع في الاعتبار، لمساعدة عملك على النمو بلا حدود."
            : "Nous construisons avec l'évolutivité en tête pour une croissance illimitée.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === "en" && "Why Choose oren?"}
            {locale === "ar" && "لماذا تختار oren؟"}
            {locale === "fr" && "Pourquoi Choisir oren?"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {locale === "en" && "We combine technical excellence with creative thinking to deliver exceptional results"}
            {locale === "ar" && "نجمع بين التميز التقني والتفكير الإبداعي لتقديم نتائج استثنائية"}
            {locale === "fr" && "Nous combinons excellence technique et créativité pour des résultats exceptionnels"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
