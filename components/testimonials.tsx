"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

export function Testimonials() {
  const { locale } = useLanguage()

  const testimonials = [
    {
      quote:
        locale === "en"
          ? "oren transformed our online presence. The new website is beautiful, fast, and has increased our conversions by 200%."
          : locale === "ar"
            ? "حوّل oren تواجدنا على الإنترنت. الموقع الجديد جميل وسريع وزاد تحويلاتنا بنسبة 200%."
            : "oren a transformé notre présence en ligne. Le nouveau site est magnifique, rapide et a augmenté nos conversions de 200%.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      avatar: "/professional-woman-portrait.png",
    },
    {
      quote:
        locale === "en"
          ? "Professional, responsive, and creative. They understood our vision and delivered beyond expectations."
          : locale === "ar"
            ? "محترفون ومتجاوبون ومبدعون. فهموا رؤيتنا وقدموا أكثر من التوقعات."
            : "Professionnels, réactifs et créatifs. Ils ont compris notre vision et ont dépassé nos attentes.",
      author: "Michael Chen",
      role: locale === "en" ? "Founder" : locale === "ar" ? "المؤسس" : "Fondateur",
      company: "GrowthLab",
      avatar: "/professional-man-portrait.png",
    },
    {
      quote:
        locale === "en"
          ? "The platform they built handles thousands of users seamlessly. Excellent technical expertise and support."
          : locale === "ar"
            ? "المنصة التي بنوها تتعامل مع آلاف المستخدمين بسلاسة. خبرة تقنية ودعم ممتاز."
            : "La plateforme qu'ils ont construite gère des milliers d'utilisateurs sans problème. Excellente expertise technique.",
      author: "Emma Williams",
      role: "CTO",
      company: "DataFlow",
      avatar: "/professional-woman-tech-portrait.png",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === "en" && "What Our Clients Say"}
            {locale === "ar" && "ماذا يقول عملاؤنا"}
            {locale === "fr" && "Ce Que Disent Nos Clients"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {locale === "en" && "Trusted by startups and growing businesses worldwide"}
            {locale === "ar" && "موثوق به من قبل الشركات الناشئة والمتنامية في جميع أنحاء العالم"}
            {locale === "fr" && "Approuvé par des startups et entreprises en croissance dans le monde entier"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="text-sm leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center gap-3 pt-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
