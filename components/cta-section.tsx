"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  const { locale } = useLanguage()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl p-12 border border-border"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            {locale === "en" && "Ready to Start Your Project?"}
            {locale === "ar" && "هل أنت مستعد لبدء مشروعك؟"}
            {locale === "fr" && "Prêt à Démarrer Votre Projet?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale === "en" && "Let's discuss how we can help your business grow with a modern web presence"}
            {locale === "ar" && "دعنا نناقش كيف يمكننا مساعدة عملك على النمو بحضور ويب حديث"}
            {locale === "fr" &&
              "Discutons de la façon dont nous pouvons aider votre entreprise à croître avec une présence web moderne"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/contact">
                {locale === "en" && "Get a Free Quote"}
                {locale === "ar" && "احصل على عرض مجاني"}
                {locale === "fr" && "Obtenir un Devis Gratuit"}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-transparent">
              <Link href="/contact">
                <MessageSquare className="mr-2 h-4 w-4 rtl:ml-2 rtl:mr-0" />
                {locale === "en" && "Schedule a Call"}
                {locale === "ar" && "حدد موعد مكالمة"}
                {locale === "fr" && "Planifier un Appel"}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
