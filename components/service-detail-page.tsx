"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Layers, ShoppingCart, TrendingUp, Share2, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ServiceDetailPageProps {
  serviceType: "web-development" | "platforms" | "ecommerce" | "marketing" | "social-media"
}

export function ServiceDetailPage({ serviceType }: ServiceDetailPageProps) {
  const { locale } = useLanguage()

  const serviceData = {
    "web-development": {
      icon: Code,
      title: locale === "en" ? "Web Development" : locale === "ar" ? "تطوير المواقع" : "Développement Web",
      subtitle:
        locale === "en"
          ? "Custom websites that drive results"
          : locale === "ar"
            ? "مواقع مخصصة تحقق النتائج"
            : "Sites web personnalisés qui donnent des résultats",
      deliverables:
        locale === "en"
          ? [
              "Fully responsive website design",
              "Modern, clean user interface",
              "Content management system (CMS)",
              "SEO optimization",
              "Performance optimization",
              "Analytics integration",
              "Cross-browser compatibility",
              "Mobile-first approach",
            ]
          : locale === "ar"
            ? [
                "تصميم موقع متجاوب بالكامل",
                "واجهة مستخدم حديثة ونظيفة",
                "نظام إدارة المحتوى (CMS)",
                "تحسين محركات البحث",
                "تحسين الأداء",
                "تكامل التحليلات",
                "التوافق مع جميع المتصفحات",
                "نهج الهاتف المحمول أولاً",
              ]
            : [
                "Design de site web entièrement responsive",
                "Interface utilisateur moderne et propre",
                "Système de gestion de contenu (CMS)",
                "Optimisation SEO",
                "Optimisation des performances",
                "Intégration d'analytics",
                "Compatibilité multi-navigateurs",
                "Approche mobile-first",
              ],
      whoItsFor:
        locale === "en"
          ? [
              "Startups launching their online presence",
              "Small to medium businesses needing a professional website",
              "Companies looking to rebrand or modernize their site",
              "Organizations requiring custom functionality",
            ]
          : locale === "ar"
            ? [
                "الشركات الناشئة التي تطلق تواجدها عبر الإنترنت",
                "الشركات الصغيرة والمتوسطة التي تحتاج إلى موقع احترافي",
                "الشركات التي تتطلع إلى إعادة العلامة التجارية أو تحديث موقعها",
                "المؤسسات التي تتطلب وظائف مخصصة",
              ]
            : [
                "Startups lançant leur présence en ligne",
                "PME nécessitant un site web professionnel",
                "Entreprises cherchant à rebrander ou moderniser leur site",
                "Organisations nécessitant des fonctionnalités personnalisées",
              ],
      process: [
        {
          step:
            locale === "en"
              ? "Discovery & Planning"
              : locale === "ar"
                ? "الاكتشاف والتخطيط"
                : "Découverte & Planification",
          duration: locale === "en" ? "1-2 weeks" : locale === "ar" ? "1-2 أسابيع" : "1-2 semaines",
        },
        {
          step:
            locale === "en" ? "Design & Prototyping" : locale === "ar" ? "التصميم والنماذج" : "Design & Prototypage",
          duration: locale === "en" ? "2-3 weeks" : locale === "ar" ? "2-3 أسابيع" : "2-3 semaines",
        },
        {
          step: locale === "en" ? "Development" : locale === "ar" ? "التطوير" : "Développement",
          duration: locale === "en" ? "4-6 weeks" : locale === "ar" ? "4-6 أسابيع" : "4-6 semaines",
        },
        {
          step: locale === "en" ? "Testing & Launch" : locale === "ar" ? "الاختبار والإطلاق" : "Tests & Lancement",
          duration: locale === "en" ? "1-2 weeks" : locale === "ar" ? "1-2 أسابيع" : "1-2 semaines",
        },
      ],
      faqs: [
        {
          question:
            locale === "en"
              ? "How long does it take to build a website?"
              : locale === "ar"
                ? "كم من الوقت يستغرق بناء موقع؟"
                : "Combien de temps faut-il pour créer un site web?",
          answer:
            locale === "en"
              ? "Typically 8-12 weeks from start to launch, depending on complexity and features required."
              : locale === "ar"
                ? "عادة 8-12 أسبوعًا من البداية إلى الإطلاق، اعتمادًا على التعقيد والميزات المطلوبة."
                : "Généralement 8-12 semaines du début au lancement, selon la complexité et les fonctionnalités requises.",
        },
        {
          question:
            locale === "en"
              ? "Will my website be mobile-friendly?"
              : locale === "ar"
                ? "هل سيكون موقعي متوافقًا مع الهاتف المحمول؟"
                : "Mon site sera-t-il compatible mobile?",
          answer:
            locale === "en"
              ? "All our websites are built with a mobile-first approach and are fully responsive across all devices."
              : locale === "ar"
                ? "بالتأكيد! جميع مواقعنا مبنية بنهج الهاتف المحمول أولاً ومتجاوبة بالكامل عبر جميع الأجهزة."
                : "Absolument! Tous nos sites sont construits avec une approche mobile-first et sont entièrement responsive.",
        },
        {
          question:
            locale === "en"
              ? "Can I update the content myself?"
              : locale === "ar"
                ? "هل يمكنني تحديث المحتوى بنفسي؟"
                : "Puis-je mettre à jour le contenu moi-même?",
          answer:
            locale === "en"
              ? "Yes! We integrate a user-friendly CMS that allows you to easily update content, images, and pages without technical knowledge."
              : locale === "ar"
                ? "نعم! نقوم بدمج نظام إدارة محتوى سهل الاستخدام يسمح لك بتحديث المحتوى والصور والصفحات بسهولة دون معرفة تقنية."
                : "Oui! Nous intégrons un CMS convivial qui vous permet de mettre à jour facilement le contenu, les images et les pages.",
        },
      ],
    },
    platforms: {
      icon: Layers,
      title:
        locale === "en" ? "Platform Development" : locale === "ar" ? "تطوير المنصات" : "Développement de Plateformes",
      subtitle:
        locale === "en"
          ? "Scalable solutions for complex needs"
          : locale === "ar"
            ? "حلول قابلة للتوسع للاحتياجات المعقدة"
            : "Solutions évolutives pour besoins complexes",
      deliverables:
        locale === "en"
          ? [
              "Custom platform architecture",
              "User authentication & authorization",
              "Role-based access control",
              "API development & integration",
              "Real-time features",
              "Database design & optimization",
              "Admin dashboard",
              "Scalable infrastructure",
            ]
          : locale === "ar"
            ? [
                "بنية منصة مخصصة",
                "مصادقة وتفويض المستخدم",
                "التحكم في الوصول على أساس الدور",
                "تطوير وتكامل API",
                "ميزات في الوقت الفعلي",
                "تصميم وتحسين قاعدة البيانات",
                "لوحة تحكم المسؤول",
                "بنية تحتية قابلة للتوسع",
              ]
            : [
                "Architecture de plateforme personnalisée",
                "Authentification & autorisation utilisateur",
                "Contrôle d'accès basé sur les rôles",
                "Développement & intégration API",
                "Fonctionnalités en temps réel",
                "Conception & optimisation base de données",
                "Tableau de bord administrateur",
                "Infrastructure évolutive",
              ],
      whoItsFor:
        locale === "en"
          ? [
              "SaaS companies building their product",
              "Businesses with complex workflows",
              "Organizations needing custom tools",
              "Companies requiring multi-user systems",
            ]
          : locale === "ar"
            ? [
                "شركات SaaS التي تبني منتجها",
                "الشركات ذات سير العمل المعقد",
                "المؤسسات التي تحتاج إلى أدوات مخصصة",
                "الشركات التي تتطلب أنظمة متعددة المستخدمين",
              ]
            : [
                "Entreprises SaaS construisant leur produit",
                "Entreprises avec workflows complexes",
                "Organisations nécessitant des outils personnalisés",
                "Entreprises nécessitant des systèmes multi-utilisateurs",
              ],
      process: [
        {
          step: locale === "en" ? "Requirements Analysis" : locale === "ar" ? "تحليل المتطلبات" : "Analyse des Besoins",
          duration: locale === "en" ? "2-3 weeks" : locale === "ar" ? "2-3 أسابيع" : "2-3 semaines",
        },
        {
          step: locale === "en" ? "Architecture Design" : locale === "ar" ? "تصميم البنية" : "Conception Architecture",
          duration: locale === "en" ? "2-3 weeks" : locale === "ar" ? "2-3 أسابيع" : "2-3 semaines",
        },
        {
          step:
            locale === "en" ? "Development & Testing" : locale === "ar" ? "التطوير والاختبار" : "Développement & Tests",
          duration: locale === "en" ? "8-12 weeks" : locale === "ar" ? "8-12 أسابيع" : "8-12 semaines",
        },
        {
          step:
            locale === "en" ? "Deployment & Training" : locale === "ar" ? "النشر والتدريب" : "Déploiement & Formation",
          duration: locale === "en" ? "1-2 weeks" : locale === "ar" ? "1-2 أسابيع" : "1-2 semaines",
        },
      ],
      faqs: [
        {
          question:
            locale === "en"
              ? "What technologies do you use?"
              : locale === "ar"
                ? "ما هي التقنيات التي تستخدمها؟"
                : "Quelles technologies utilisez-vous?",
          answer:
            locale === "en"
              ? "We use modern, proven technologies like Next.js, React, Node.js, and cloud infrastructure for scalability and performance."
              : locale === "ar"
                ? "نستخدم تقنيات حديثة ومثبتة مثل Next.js و React و Node.js والبنية التحتية السحابية لقابلية التوسع والأداء."
                : "Nous utilisons des technologies modernes et éprouvées comme Next.js, React, Node.js et infrastructure cloud.",
        },
        {
          question:
            locale === "en"
              ? "Can the platform scale as we grow?"
              : locale === "ar"
                ? "هل يمكن للمنصة التوسع مع نمونا؟"
                : "La plateforme peut-elle évoluer avec notre croissance?",
          answer:
            locale === "en"
              ? "Yes! We design platforms with scalability in mind, using cloud infrastructure that can handle growth from hundreds to millions of users."
              : locale === "ar"
                ? "نعم! نصمم المنصات مع وضع قابلية التوسع في الاعتبار، باستخدام البنية التحتية السحابية التي يمكنها التعامل مع النمو من مئات إلى ملايين المستخدمين."
                : "Oui! Nous concevons des plateformes évolutives utilisant une infrastructure cloud capable de gérer la croissance.",
        },
      ],
    },
    ecommerce: {
      icon: ShoppingCart,
      title:
        locale === "en"
          ? "E-commerce Solutions"
          : locale === "ar"
            ? "حلول التجارة الإلكترونية"
            : "Solutions E-commerce",
      subtitle:
        locale === "en"
          ? "Online stores that drive sales"
          : locale === "ar"
            ? "متاجر إلكترونية تدفع المبيعات"
            : "Boutiques en ligne qui stimulent les ventes",
      deliverables:
        locale === "en"
          ? [
              "Custom e-commerce design",
              "Product catalog management",
              "Shopping cart & checkout",
              "Payment gateway integration",
              "Inventory management",
              "Order tracking system",
              "Customer accounts",
              "Marketing & SEO tools",
            ]
          : locale === "ar"
            ? [
                "تصميم تجارة إلكترونية مخصص",
                "إدارة كتالوج المنتجات",
                "عربة التسوق والدفع",
                "تكامل بوابة الدفع",
                "إدارة المخزون",
                "نظام تتبع الطلبات",
                "حسابات العملاء",
                "أدوات التسويق وتحسين محركات البحث",
              ]
            : [
                "Design e-commerce personnalisé",
                "Gestion catalogue produits",
                "Panier & processus de paiement",
                "Intégration passerelle paiement",
                "Gestion des stocks",
                "Système de suivi des commandes",
                "Comptes clients",
                "Outils marketing & SEO",
              ],
      whoItsFor:
        locale === "en"
          ? [
              "Retailers moving online",
              "Brands launching direct-to-consumer",
              "Businesses expanding their sales channels",
              "Entrepreneurs starting an online store",
            ]
          : locale === "ar"
            ? [
                "تجار التجزئة الذين ينتقلون عبر الإنترنت",
                "العلامات التجارية التي تطلق مباشرة للمستهلك",
                "الشركات التي توسع قنوات مبيعاتها",
                "رواد الأعمال الذين يبدأون متجرًا عبر الإنترنت",
              ]
            : [
                "Détaillants passant en ligne",
                "Marques lançant direct-to-consumer",
                "Entreprises élargissant leurs canaux de vente",
                "Entrepreneurs démarrant une boutique en ligne",
              ],
      process: [
        {
          step: locale === "en" ? "Store Planning" : locale === "ar" ? "تخطيط المتجر" : "Planification Boutique",
          duration: locale === "en" ? "1-2 weeks" : locale === "ar" ? "1-2 أسابيع" : "1-2 semaines",
        },
        {
          step: locale === "en" ? "Design & UX" : locale === "ar" ? "التصميم وتجربة المستخدم" : "Design & UX",
          duration: locale === "en" ? "2-3 weeks" : locale === "ar" ? "2-3 أسابيع" : "2-3 semaines",
        },
        {
          step:
            locale === "en"
              ? "Development & Integration"
              : locale === "ar"
                ? "التطوير والتكامل"
                : "Développement & Intégration",
          duration: locale === "en" ? "6-8 weeks" : locale === "ar" ? "6-8 أسابيع" : "6-8 semaines",
        },
        {
          step: locale === "en" ? "Testing & Launch" : locale === "ar" ? "الاختبار والإطلاق" : "Tests & Lancement",
          duration: locale === "en" ? "1-2 weeks" : locale === "ar" ? "1-2 أسابيع" : "1-2 semaines",
        },
      ],
      faqs: [
        {
          question:
            locale === "en"
              ? "Which payment methods can I accept?"
              : locale === "ar"
                ? "ما هي طرق الدفع التي يمكنني قبولها؟"
                : "Quels moyens de paiement puis-je accepter?",
          answer:
            locale === "en"
              ? "We integrate with major payment gateways like Stripe, PayPal, and others, supporting credit cards, digital wallets, and local payment methods."
              : locale === "ar"
                ? "نتكامل مع بوابات الدفع الرئيسية مثل Stripe و PayPal وغيرها، ودعم بطاقات الائتمان والمحافظ الرقمية وطرق الدفع المحلية."
                : "Nous intégrons les principales passerelles comme Stripe, PayPal, supportant cartes, portefeuilles numériques et méthodes locales.",
        },
        {
          question:
            locale === "en"
              ? "Can I manage inventory across multiple locations?"
              : locale === "ar"
                ? "هل يمكنني إدارة المخزون عبر مواقع متعددة؟"
                : "Puis-je gérer l'inventaire sur plusieurs emplacements?",
          answer:
            locale === "en"
              ? "Yes! Our e-commerce solutions include advanced inventory management with multi-location support and real-time stock tracking."
              : locale === "ar"
                ? "نعم! تتضمن حلول التجارة الإلكترونية لدينا إدارة مخزون متقدمة مع دعم متعدد المواقع وتتبع المخزون في الوقت الفعلي."
                : "Oui! Nos solutions incluent une gestion avancée des stocks avec support multi-emplacements et suivi en temps réel.",
        },
      ],
    },
    marketing: {
      icon: TrendingUp,
      title: locale === "en" ? "Digital Marketing" : locale === "ar" ? "التسويق الرقمي" : "Marketing Digital",
      subtitle:
        locale === "en"
          ? "Strategies that drive growth"
          : locale === "ar"
            ? "استراتيجيات تدفع النمو"
            : "Stratégies qui stimulent la croissance",
      deliverables:
        locale === "en"
          ? [
              "SEO strategy & implementation",
              "Content marketing plan",
              "Email marketing campaigns",
              "PPC advertising management",
              "Conversion optimization",
              "Analytics & reporting",
              "Competitor analysis",
              "Marketing automation",
            ]
          : locale === "ar"
            ? [
                "استراتيجية وتنفيذ تحسين محركات البحث",
                "خطة تسويق المحتوى",
                "حملات التسويق عبر البريد الإلكتروني",
                "إدارة إعلانات PPC",
                "تحسين التحويل",
                "التحليلات والتقارير",
                "تحليل المنافسين",
                "أتمتة التسويق",
              ]
            : [
                "Stratégie & mise en œuvre SEO",
                "Plan de marketing de contenu",
                "Campagnes d'email marketing",
                "Gestion publicité PPC",
                "Optimisation des conversions",
                "Analytics & rapports",
                "Analyse concurrentielle",
                "Automatisation marketing",
              ],
      whoItsFor:
        locale === "en"
          ? [
              "Businesses looking to increase online visibility",
              "Companies wanting to generate more leads",
              "Brands building their digital presence",
              "Organizations seeking measurable ROI",
            ]
          : locale === "ar"
            ? [
                "الشركات التي تتطلع إلى زيادة الظهور عبر الإنترنت",
                "الشركات التي ترغب في توليد المزيد من العملاء المحتملين",
                "العلامات التجارية التي تبني تواجدها الرقمي",
                "المؤسسات التي تسعى للحصول على عائد استثمار قابل للقياس",
              ]
            : [
                "Entreprises cherchant à augmenter leur visibilité en ligne",
                "Entreprises voulant générer plus de leads",
                "Marques construisant leur présence digitale",
                "Organisations recherchant un ROI mesurable",
              ],
      process: [
        {
          step: locale === "en" ? "Audit & Strategy" : locale === "ar" ? "التدقيق والاستراتيجية" : "Audit & Stratégie",
          duration: locale === "en" ? "1-2 weeks" : locale === "ar" ? "1-2 أسابيع" : "1-2 semaines",
        },
        {
          step: locale === "en" ? "Campaign Setup" : locale === "ar" ? "إعداد الحملة" : "Configuration Campagne",
          duration: locale === "en" ? "1-2 weeks" : locale === "ar" ? "1-2 أسابيع" : "1-2 semaines",
        },
        {
          step:
            locale === "en"
              ? "Execution & Optimization"
              : locale === "ar"
                ? "التنفيذ والتحسين"
                : "Exécution & Optimisation",
          duration: locale === "en" ? "Ongoing" : locale === "ar" ? "مستمر" : "Continu",
        },
        {
          step: locale === "en" ? "Reporting & Analysis" : locale === "ar" ? "التقارير والتحليل" : "Rapports & Analyse",
          duration: locale === "en" ? "Monthly" : locale === "ar" ? "شهري" : "Mensuel",
        },
      ],
      faqs: [
        {
          question:
            locale === "en"
              ? "How long before I see results?"
              : locale === "ar"
                ? "كم من الوقت قبل أن أرى النتائج؟"
                : "Combien de temps avant de voir des résultats?",
          answer:
            locale === "en"
              ? "PPC campaigns can show results within days, while SEO typically takes 3-6 months. We provide regular reports to track progress."
              : locale === "ar"
                ? "يمكن أن تظهر حملات PPC نتائج في غضون أيام، بينما يستغرق تحسين محركات البحث عادة 3-6 أشهر. نقدم تقارير منتظمة لتتبع التقدم."
                : "Les campagnes PPC peuvent montrer des résultats en quelques jours, tandis que le SEO prend généralement 3-6 mois.",
        },
        {
          question:
            locale === "en"
              ? "What's included in your monthly service?"
              : locale === "ar"
                ? "ما الذي يتضمنه خدمتك الشهرية؟"
                : "Qu'est-ce qui est inclus dans votre service mensuel?",
          answer:
            locale === "en"
              ? "Monthly packages include strategy, campaign management, content creation, optimization, and detailed reporting with actionable insights."
              : locale === "ar"
                ? "تتضمن الحزم الشهرية الاستراتيجية وإدارة الحملات وإنشاء المحتوى والتحسين والتقارير التفصيلية مع رؤى قابلة للتنفيذ."
                : "Les forfaits mensuels incluent stratégie, gestion de campagnes, création de contenu, optimisation et rapports détaillés.",
        },
      ],
    },
    "social-media": {
      icon: Share2,
      title:
        locale === "en"
          ? "Social Media Management"
          : locale === "ar"
            ? "إدارة وسائل التواصل"
            : "Gestion Réseaux Sociaux",
      subtitle:
        locale === "en"
          ? "Build and engage your community"
          : locale === "ar"
            ? "بناء وإشراك مجتمعك"
            : "Construire et engager votre communauté",
      deliverables:
        locale === "en"
          ? [
              "Social media strategy",
              "Content creation & scheduling",
              "Community management",
              "Social media advertising",
              "Influencer outreach",
              "Performance analytics",
              "Brand monitoring",
              "Crisis management",
            ]
          : locale === "ar"
            ? [
                "استراتيجية وسائل التواصل الاجتماعي",
                "إنشاء المحتوى والجدولة",
                "إدارة المجتمع",
                "إعلانات وسائل التواصل الاجتماعي",
                "التواصل مع المؤثرين",
                "تحليلات الأداء",
                "مراقبة العلامة التجارية",
                "إدارة الأزمات",
              ]
            : [
                "Stratégie réseaux sociaux",
                "Création & planification contenu",
                "Gestion de communauté",
                "Publicité sur réseaux sociaux",
                "Relations influenceurs",
                "Analytics de performance",
                "Surveillance de marque",
                "Gestion de crise",
              ],
      whoItsFor:
        locale === "en"
          ? [
              "Brands building their social presence",
              "Businesses engaging with customers",
              "Companies launching new products",
              "Organizations growing their audience",
            ]
          : locale === "ar"
            ? [
                "العلامات التجارية التي تبني تواجدها الاجتماعي",
                "الشركات التي تتفاعل مع العملاء",
                "الشركات التي تطلق منتجات جديدة",
                "المؤسسات التي تنمي جمهورها",
              ]
            : [
                "Marques construisant leur présence sociale",
                "Entreprises engageant avec leurs clients",
                "Entreprises lançant de nouveaux produits",
                "Organisations développant leur audience",
              ],
      process: [
        {
          step:
            locale === "en"
              ? "Strategy Development"
              : locale === "ar"
                ? "تطوير الاستراتيجية"
                : "Développement Stratégie",
          duration: locale === "en" ? "1 week" : locale === "ar" ? "أسبوع واحد" : "1 semaine",
        },
        {
          step: locale === "en" ? "Content Planning" : locale === "ar" ? "تخطيط المحتوى" : "Planification Contenu",
          duration: locale === "en" ? "Ongoing" : locale === "ar" ? "مستمر" : "Continu",
        },
        {
          step:
            locale === "en"
              ? "Publishing & Engagement"
              : locale === "ar"
                ? "النشر والمشاركة"
                : "Publication & Engagement",
          duration: locale === "en" ? "Daily" : locale === "ar" ? "يومي" : "Quotidien",
        },
        {
          step:
            locale === "en"
              ? "Analysis & Optimization"
              : locale === "ar"
                ? "التحليل والتحسين"
                : "Analyse & Optimisation",
          duration: locale === "en" ? "Weekly" : locale === "ar" ? "أسبوعي" : "Hebdomadaire",
        },
      ],
      faqs: [
        {
          question:
            locale === "en"
              ? "Which platforms do you manage?"
              : locale === "ar"
                ? "ما هي المنصات التي تديرها؟"
                : "Quelles plateformes gérez-vous?",
          answer:
            locale === "en"
              ? "We manage all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube, tailored to your audience."
              : locale === "ar"
                ? "نحن ندير جميع المنصات الرئيسية بما في ذلك Facebook و Instagram و Twitter و LinkedIn و TikTok و YouTube، مصممة لجمهورك."
                : "Nous gérons toutes les principales plateformes: Facebook, Instagram, Twitter, LinkedIn, TikTok et YouTube.",
        },
        {
          question:
            locale === "en"
              ? "Do you create the content?"
              : locale === "ar"
                ? "هل تقومون بإنشاء المحتوى؟"
                : "Créez-vous le contenu?",
          answer:
            locale === "en"
              ? "Yes! We create engaging content including graphics, videos, and copy tailored to each platform and your brand voice."
              : locale === "ar"
                ? "نعم! نقوم بإنشاء محتوى جذاب بما في ذلك الرسومات ومقاطع الفيديو والنسخ المصممة لكل منصة وصوت علامتك التجارية."
                : "Oui! Nous créons du contenu engageant incluant graphiques, vidéos et textes adaptés à chaque plateforme.",
        },
      ],
    },
  }

  const data = serviceData[serviceType]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <data.icon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{data.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">{data.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  {locale === "en" && "Get a Quote"}
                  {locale === "ar" && "احصل على عرض"}
                  {locale === "fr" && "Obtenir un Devis"}
                  <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">
                  {locale === "en" && "View Examples"}
                  {locale === "ar" && "عرض الأمثلة"}
                  {locale === "fr" && "Voir Exemples"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {locale === "en" && "What You Get"}
              {locale === "ar" && "ما تحصل عليه"}
              {locale === "fr" && "Ce Que Vous Obtenez"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {locale === "en" && "Who It's For"}
              {locale === "ar" && "لمن هذا"}
              {locale === "fr" && "Pour Qui"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.whoItsFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-center">{item}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {locale === "en" && "Our Process"}
              {locale === "ar" && "عمليتنا"}
              {locale === "fr" && "Notre Processus"}
            </h2>
            <div className="space-y-6">
              {data.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-lg bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.step}</h3>
                    <p className="text-sm text-muted-foreground">{step.duration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {locale === "en" && "Frequently Asked Questions"}
              {locale === "ar" && "الأسئلة الشائعة"}
              {locale === "fr" && "Questions Fréquentes"}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {data.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-2xl p-12 border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {locale === "en" && "Ready to Get Started?"}
              {locale === "ar" && "هل أنت مستعد للبدء؟"}
              {locale === "fr" && "Prêt à Commencer?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "Let's discuss your project and create a custom solution for your needs"}
              {locale === "ar" && "دعنا نناقش مشروعك ونخلق حلاً مخصصًا لاحتياجاتك"}
              {locale === "fr" && "Discutons de votre projet et créons une solution sur mesure"}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                {locale === "en" && "Request a Quote"}
                {locale === "ar" && "اطلب عرض"}
                {locale === "fr" && "Demander un Devis"}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
