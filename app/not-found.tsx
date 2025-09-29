"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  const { locale } = useLanguage()

  const content = {
    en: {
      title: "404",
      heading: "Page Not Found",
      description: "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.",
      homeButton: "Go Home",
      backButton: "Go Back",
    },
    ar: {
      title: "404",
      heading: "الصفحة غير موجودة",
      description: "عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.",
      homeButton: "الصفحة الرئيسية",
      backButton: "العودة",
    },
    fr: {
      title: "404",
      heading: "Page Non Trouvée",
      description:
        "Désolé, nous n'avons pas pu trouver la page que vous recherchez. Elle a peut-être été déplacée ou supprimée.",
      homeButton: "Accueil",
      backButton: "Retour",
    },
  }

  const t = content[locale]

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8 max-w-2xl"
      >
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-primary">{t.title}</h1>
          <h2 className="text-3xl md:text-4xl font-bold">{t.heading}</h2>
          <p className="text-lg text-muted-foreground text-balance">{t.description}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              {t.homeButton}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
            <button type="button">
              <ArrowLeft className="mr-2 h-4 w-4 rtl:rotate-180" />
              {t.backButton}
            </button>
          </Button>
        </div>

        <div className="pt-12">
          <div className="relative h-64 w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
            <div className="relative h-full flex items-center justify-center text-8xl opacity-10">404</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
