"use client"

import type React from "react"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { submitContactForm } from "@/app/actions/contact"

export function ContactPage() {
  const { locale } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "Have a project in mind? Let's discuss how we can help you succeed.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      service: "Service Interested In",
      message: "Your Message",
      submit: "Send Message",
      submitting: "Sending...",
      successMessage: "Thank you! We'll get back to you within 24 hours.",
      errorMessage: "Something went wrong. Please try again.",
      contactInfo: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      address: "123 Business Street, Tech City, TC 12345",
      selectService: "Select a service",
      services: [
        "Web Development",
        "Platform Development",
        "E-commerce Solutions",
        "Digital Marketing",
        "Social Media Management",
        "Other",
      ],
    },
    ar: {
      title: "تواصل معنا",
      subtitle: "لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكننا مساعدتك على النجاح.",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      company: "اسم الشركة",
      service: "الخدمة المهتم بها",
      message: "رسالتك",
      submit: "إرسال الرسالة",
      submitting: "جاري الإرسال...",
      successMessage: "شكراً لك! سنتواصل معك خلال 24 ساعة.",
      errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      contactInfo: "معلومات الاتصال",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      addressLabel: "العنوان",
      address: "123 شارع الأعمال، مدينة التقنية، TC 12345",
      selectService: "اختر خدمة",
      services: [
        "تطوير الويب",
        "تطوير المنصات",
        "حلول التجارة الإلكترونية",
        "التسويق الرقمي",
        "إدارة وسائل التواصل الاجتماعي",
        "أخرى",
      ],
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Vous avez un projet en tête? Discutons de la façon dont nous pouvons vous aider.",
      name: "Nom Complet",
      email: "Adresse Email",
      phone: "Numéro de Téléphone",
      company: "Nom de l'Entreprise",
      service: "Service Intéressé",
      message: "Votre Message",
      submit: "Envoyer le Message",
      submitting: "Envoi...",
      successMessage: "Merci! Nous vous répondrons dans les 24 heures.",
      errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
      contactInfo: "Informations de Contact",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      address: "123 Rue des Affaires, Tech City, TC 12345",
      selectService: "Sélectionnez un service",
      services: [
        "Développement Web",
        "Développement de Plateformes",
        "Solutions E-commerce",
        "Marketing Digital",
        "Gestion des Réseaux Sociaux",
        "Autre",
      ],
    },
  }

  const t = content[locale]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{t.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.name}</Label>
                        <Input id="name" name="name" required placeholder={t.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.email}</Label>
                        <Input id="email" name="email" type="email" required placeholder={t.email} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.phone}</Label>
                        <Input id="phone" name="phone" type="tel" placeholder={t.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.company}</Label>
                        <Input id="company" name="company" placeholder={t.company} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">{t.service}</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">{t.selectService}</option>
                        {t.services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t.message}</Label>
                      <Textarea id="message" name="message" required placeholder={t.message} rows={6} />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                        {t.successMessage}
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                        {t.errorMessage}
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? t.submitting : t.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">{t.contactInfo}</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{t.emailLabel}</div>
                      <a
                        href="mailto:hello@oren.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@oren.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{t.phoneLabel}</div>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{t.addressLabel}</div>
                      <p className="text-muted-foreground">{t.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    {locale === "en" && "Quick Response"}
                    {locale === "ar" && "استجابة سريعة"}
                    {locale === "fr" && "Réponse Rapide"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === "en" && "We typically respond to all inquiries within 24 hours during business days."}
                    {locale === "ar" && "نرد عادةً على جميع الاستفسارات خلال 24 ساعة خلال أيام العمل."}
                    {locale === "fr" &&
                      "Nous répondons généralement à toutes les demandes dans les 24 heures pendant les jours ouvrables."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
