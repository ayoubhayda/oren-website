import type { Locale } from "./i18n"

type TranslationKey =
  | "nav.home"
  | "nav.services"
  | "nav.portfolio"
  | "nav.about"
  | "nav.blog"
  | "nav.contact"
  | "cta.getQuote"
  | "cta.seeWork"
  | "hero.title"
  | "hero.subtitle"
  | "footer.rights"

type Translations = Record<Locale, Record<TranslationKey, string>>

export const translations: Translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "cta.getQuote": "Get a Quote",
    "cta.seeWork": "See Our Work",
    "hero.title": "We build modern websites & platforms that grow businesses",
    "hero.subtitle":
      "Professional web development, e-commerce solutions, and digital marketing services for startups and growing companies.",
    "footer.rights": "All rights reserved.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.portfolio": "الأعمال",
    "nav.about": "من نحن",
    "nav.blog": "المدونة",
    "nav.contact": "اتصل بنا",
    "cta.getQuote": "اطلب عرض",
    "cta.seeWork": "شاهد أعمالنا",
    "hero.title": "نبني مواقع ومنصات حديثة تنمي الأعمال",
    "hero.subtitle":
      "تطوير مواقع احترافية، حلول التجارة الإلكترونية، وخدمات التسويق الرقمي للشركات الناشئة والمتنامية.",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.about": "À propos",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "cta.getQuote": "Demander un devis",
    "cta.seeWork": "Voir nos réalisations",
    "hero.title": "Nous créons des sites web et plateformes modernes qui développent les entreprises",
    "hero.subtitle":
      "Développement web professionnel, solutions e-commerce et services de marketing digital pour startups et entreprises en croissance.",
    "footer.rights": "Tous droits réservés.",
  },
}

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] || key
}
