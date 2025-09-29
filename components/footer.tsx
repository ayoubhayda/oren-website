"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/lib/translations"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const { locale } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">oren</div>
            <p className="text-sm text-muted-foreground">
              {locale === "en" && "Professional web development and digital marketing services."}
              {locale === "ar" && "خدمات تطوير الويب والتسويق الرقمي الاحترافية."}
              {locale === "fr" && "Services professionnels de développement web et marketing digital."}
            </p>
            <div className="flex gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t(locale, "nav.services")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/web-development" className="hover:text-foreground transition-colors">
                  {locale === "en" && "Web Development"}
                  {locale === "ar" && "تطوير المواقع"}
                  {locale === "fr" && "Développement Web"}
                </Link>
              </li>
              <li>
                <Link href="/services/platforms" className="hover:text-foreground transition-colors">
                  {locale === "en" && "Platforms"}
                  {locale === "ar" && "المنصات"}
                  {locale === "fr" && "Plateformes"}
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="hover:text-foreground transition-colors">
                  {locale === "en" && "E-commerce"}
                  {locale === "ar" && "التجارة الإلكترونية"}
                  {locale === "fr" && "E-commerce"}
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="hover:text-foreground transition-colors">
                  {locale === "en" && "Digital Marketing"}
                  {locale === "ar" && "التسويق الرقمي"}
                  {locale === "fr" && "Marketing Digital"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === "en" && "Company"}
              {locale === "ar" && "الشركة"}
              {locale === "fr" && "Entreprise"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  {t(locale, "nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-foreground transition-colors">
                  {t(locale, "nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  {t(locale, "nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  {t(locale, "nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">
              {locale === "en" && "Legal"}
              {locale === "ar" && "قانوني"}
              {locale === "fr" && "Légal"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  {locale === "en" && "Privacy Policy"}
                  {locale === "ar" && "سياسة الخصوصية"}
                  {locale === "fr" && "Politique de confidentialité"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  {locale === "en" && "Terms of Service"}
                  {locale === "ar" && "شروط الخدمة"}
                  {locale === "fr" && "Conditions d'utilisation"}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {currentYear} oren. {t(locale, "footer.rights")}
        </div>
      </div>
    </footer>
  )
}
