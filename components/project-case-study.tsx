"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCaseStudyProps {
  projectId: string
}

export function ProjectCaseStudy({ projectId }: ProjectCaseStudyProps) {
  const { locale } = useLanguage()

  // Project data - in a real app, this would come from a CMS or database
  const projectsData: Record<string, any> = {
    "techstart-ecommerce": {
      title: locale === "en" ? "TechStart E-commerce Platform" : locale === "ar" ? "منصة TechStart" : "TechStart",
      category: locale === "en" ? "E-commerce" : locale === "ar" ? "تجارة إلكترونية" : "E-commerce",
      client: "TechStart Inc.",
      year: "2024",
      heroImage: "/modern-ecommerce-dashboard.png",
      problem:
        locale === "en"
          ? "TechStart needed a modern e-commerce platform to replace their outdated system. Their old site had poor mobile experience, slow checkout, and limited payment options, resulting in high cart abandonment rates."
          : locale === "ar"
            ? "احتاجت TechStart إلى منصة تجارة إلكترونية حديثة لاستبدال نظامها القديم. كان موقعهم القديم يعاني من تجربة هاتف محمول سيئة، ودفع بطيء، وخيارات دفع محدودة."
            : "TechStart avait besoin d'une plateforme e-commerce moderne. Leur ancien site avait une mauvaise expérience mobile et un taux d'abandon élevé.",
      solution:
        locale === "en"
          ? "We built a custom e-commerce platform with Next.js, featuring a mobile-first design, one-click checkout, multiple payment gateways, and real-time inventory management. The platform includes advanced search, personalized recommendations, and seamless integration with their existing systems."
          : locale === "ar"
            ? "قمنا ببناء منصة تجارة إلكترونية مخصصة باستخدام Next.js، تتميز بتصميم يركز على الهاتف المحمول، ودفع بنقرة واحدة، وبوابات دفع متعددة، وإدارة مخزون في الوقت الفعلي."
            : "Nous avons construit une plateforme e-commerce avec Next.js, avec design mobile-first, paiement en un clic et gestion des stocks en temps réel.",
      outcome:
        locale === "en"
          ? "The new platform launched successfully and exceeded all expectations. Within the first three months, TechStart saw a 300% increase in online sales, 85% reduction in cart abandonment, and 95% positive customer feedback on the new checkout experience."
          : locale === "ar"
            ? "تم إطلاق المنصة الجديدة بنجاح وتجاوزت جميع التوقعات. في الأشهر الثلاثة الأولى، شهدت TechStart زيادة بنسبة 300% في المبيعات عبر الإنترنت."
            : "La nouvelle plateforme a dépassé toutes les attentes avec une augmentation de 300% des ventes en ligne en trois mois.",
      metrics: [
        {
          value: "300%",
          label: locale === "en" ? "Sales Increase" : locale === "ar" ? "زيادة المبيعات" : "Augmentation Ventes",
        },
        {
          value: "85%",
          label:
            locale === "en"
              ? "Cart Abandonment Reduction"
              : locale === "ar"
                ? "تقليل التخلي عن السلة"
                : "Réduction Abandon",
        },
        {
          value: "95%",
          label: locale === "en" ? "Customer Satisfaction" : locale === "ar" ? "رضا العملاء" : "Satisfaction Client",
        },
        {
          value: "2.5s",
          label: locale === "en" ? "Page Load Time" : locale === "ar" ? "وقت تحميل الصفحة" : "Temps Chargement",
        },
      ],
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Vercel"],
      services:
        locale === "en"
          ? ["E-commerce Development", "UI/UX Design", "Payment Integration", "SEO Optimization"]
          : locale === "ar"
            ? ["تطوير التجارة الإلكترونية", "تصميم UI/UX", "تكامل الدفع", "تحسين محركات البحث"]
            : ["Développement E-commerce", "Design UI/UX", "Intégration Paiement", "Optimisation SEO"],
      testimonial: {
        quote:
          locale === "en"
            ? "oren transformed our online business. The new platform is beautiful, fast, and has increased our conversions by 200%. Their team was professional and delivered beyond our expectations."
            : locale === "ar"
              ? "حوّل oren أعمالنا عبر الإنترنت. المنصة الجديدة جميلة وسريعة وزادت تحويلاتنا بنسبة 200%. كان فريقهم محترفًا وقدم أكثر من توقعاتنا."
              : "oren a transformé notre activité en ligne. La nouvelle plateforme est magnifique, rapide et a augmenté nos conversions de 200%.",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
      },
      images: ["/modern-ecommerce-dashboard.png", "/product-page.jpg"],
    },
    "dataflow-platform": {
      title:
        locale === "en" ? "DataFlow SaaS Platform" : locale === "ar" ? "منصة DataFlow SaaS" : "Plateforme DataFlow",
      category: locale === "en" ? "Platform" : locale === "ar" ? "منصة" : "Plateforme",
      client: "DataFlow",
      year: "2024",
      heroImage: "/saas-analytics-dashboard-interface.jpg",
      problem:
        locale === "en"
          ? "DataFlow wanted to build a SaaS analytics platform from scratch to help businesses make data-driven decisions. They needed a scalable solution that could handle thousands of concurrent users and process large datasets in real-time."
          : locale === "ar"
            ? "أرادت DataFlow بناء منصة تحليلات SaaS من الصفر لمساعدة الشركات على اتخاذ قرارات مدفوعة بالبيانات."
            : "DataFlow voulait construire une plateforme d'analyse SaaS pour aider les entreprises à prendre des décisions basées sur les données.",
      solution:
        locale === "en"
          ? "We developed a comprehensive SaaS platform with real-time analytics, customizable dashboards, and advanced data visualization. The platform features role-based access control, API integrations, automated reporting, and white-label capabilities for enterprise clients."
          : locale === "ar"
            ? "قمنا بتطوير منصة SaaS شاملة مع تحليلات في الوقت الفعلي، ولوحات معلومات قابلة للتخصيص، وتصور بيانات متقدم."
            : "Nous avons développé une plateforme SaaS complète avec analyses en temps réel, tableaux de bord personnalisables et visualisation avancée.",
      outcome:
        locale === "en"
          ? "The platform successfully launched and quickly gained traction in the market. DataFlow now serves over 10,000 active users across 50+ countries, processing millions of data points daily. The platform has become a leader in its category with a 98% uptime record."
          : locale === "ar"
            ? "تم إطلاق المنصة بنجاح واكتسبت زخمًا سريعًا في السوق. تخدم DataFlow الآن أكثر من 10000 مستخدم نشط في أكثر من 50 دولة."
            : "La plateforme a été lancée avec succès et sert maintenant plus de 10 000 utilisateurs actifs dans plus de 50 pays.",
      metrics: [
        {
          value: "10K+",
          label: locale === "en" ? "Active Users" : locale === "ar" ? "مستخدمون نشطون" : "Utilisateurs Actifs",
        },
        {
          value: "50+",
          label: locale === "en" ? "Countries" : locale === "ar" ? "دولة" : "Pays",
        },
        {
          value: "98%",
          label: locale === "en" ? "Uptime" : locale === "ar" ? "وقت التشغيل" : "Disponibilité",
        },
        {
          value: "1M+",
          label: locale === "en" ? "Data Points/Day" : locale === "ar" ? "نقاط بيانات/يوم" : "Points Données/Jour",
        },
      ],
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      services:
        locale === "en"
          ? ["Platform Development", "API Development", "UI/UX Design", "Cloud Infrastructure"]
          : locale === "ar"
            ? ["تطوير المنصة", "تطوير API", "تصميم UI/UX", "البنية التحتية السحابية"]
            : ["Développement Plateforme", "Développement API", "Design UI/UX", "Infrastructure Cloud"],
      testimonial: {
        quote:
          locale === "en"
            ? "The platform oren built handles thousands of users seamlessly. Their technical expertise and attention to detail made our vision a reality. We couldn't be happier with the results."
            : locale === "ar"
              ? "المنصة التي بناها oren تتعامل مع آلاف المستخدمين بسلاسة. خبرتهم التقنية واهتمامهم بالتفاصيل جعلت رؤيتنا حقيقة."
              : "La plateforme construite par oren gère des milliers d'utilisateurs sans problème. Leur expertise technique a fait de notre vision une réalité.",
        author: "Emma Williams",
        role: "CTO, DataFlow",
      },
      images: ["/saas-analytics-dashboard-interface.jpg", "/diverse-data-charts.png"],
    },
    "growthlab-website": {
      title:
        locale === "en" ? "GrowthLab Corporate Website" : locale === "ar" ? "موقع GrowthLab" : "Site Web GrowthLab",
      category: locale === "en" ? "Website" : locale === "ar" ? "موقع" : "Site Web",
      client: "GrowthLab",
      year: "2024",
      heroImage: "/corporate-homepage.png",
      problem:
        locale === "en"
          ? "GrowthLab, a business consulting firm, had an outdated website that didn't reflect their expertise or attract quality leads. Their site lacked modern design, was difficult to navigate, and had poor SEO performance."
          : locale === "ar"
            ? "كان لدى GrowthLab، شركة استشارات أعمال، موقع قديم لا يعكس خبرتهم ولا يجذب عملاء محتملين ذوي جودة."
            : "GrowthLab avait un site obsolète qui ne reflétait pas leur expertise et n'attirait pas de leads de qualité.",
      solution:
        locale === "en"
          ? "We designed and developed a modern, professional website that showcases GrowthLab's services and expertise. The site features case studies, team profiles, a resource center, and an integrated contact system. We implemented comprehensive SEO optimization and content strategy."
          : locale === "ar"
            ? "قمنا بتصميم وتطوير موقع حديث واحترافي يعرض خدمات وخبرات GrowthLab. يتميز الموقع بدراسات حالة وملفات تعريف الفريق ومركز موارد."
            : "Nous avons conçu un site moderne et professionnel présentant les services et l'expertise de GrowthLab avec études de cas et profils d'équipe.",
      outcome:
        locale === "en"
          ? "The new website successfully positioned GrowthLab as an industry leader. Within six months, they experienced a 50% increase in qualified leads, 120% increase in organic traffic, and significantly improved brand perception among their target audience."
          : locale === "ar"
            ? "نجح الموقع الجديد في وضع GrowthLab كشركة رائدة في الصناعة. في غضون ستة أشهر، شهدوا زيادة بنسبة 50% في العملاء المحتملين المؤهلين."
            : "Le nouveau site a positionné GrowthLab comme leader avec une augmentation de 50% des leads qualifiés en six mois.",
      metrics: [
        {
          value: "50%",
          label: locale === "en" ? "More Leads" : locale === "ar" ? "المزيد من العملاء" : "Plus de Leads",
        },
        {
          value: "120%",
          label:
            locale === "en"
              ? "Organic Traffic Increase"
              : locale === "ar"
                ? "زيادة حركة المرور العضوية"
                : "Trafic Organique",
        },
        {
          value: "3.2s",
          label: locale === "en" ? "Page Load Time" : locale === "ar" ? "وقت تحميل الصفحة" : "Temps Chargement",
        },
        {
          value: "92%",
          label:
            locale === "en" ? "Mobile Performance" : locale === "ar" ? "أداء الهاتف المحمول" : "Performance Mobile",
        },
      ],
      technologies: ["Next.js", "React", "TypeScript", "Contentful CMS", "Vercel"],
      services:
        locale === "en"
          ? ["Web Development", "UI/UX Design", "SEO Optimization", "Content Strategy"]
          : locale === "ar"
            ? ["تطوير الويب", "تصميم UI/UX", "تحسين محركات البحث", "استراتيجية المحتوى"]
            : ["Développement Web", "Design UI/UX", "Optimisation SEO", "Stratégie Contenu"],
      testimonial: {
        quote:
          locale === "en"
            ? "Professional, responsive, and creative. oren understood our vision and delivered beyond expectations. The new website has transformed how clients perceive our brand."
            : locale === "ar"
              ? "محترفون ومتجاوبون ومبدعون. فهم oren رؤيتنا وقدم أكثر من التوقعات. حوّل الموقع الجديد كيفية إدراك العملاء لعلامتنا التجارية."
              : "Professionnels, réactifs et créatifs. oren a compris notre vision et a dépassé nos attentes.",
        author: "Michael Chen",
        role: locale === "en" ? "Founder, GrowthLab" : locale === "ar" ? "المؤسس، GrowthLab" : "Fondateur, GrowthLab",
      },
      images: ["/corporate-homepage.png", "/services-page.png"],
    },
  }

  const project = projectsData[projectId] || projectsData["techstart-ecommerce"]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {project.category}
                </span>
                <span>{project.client}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">{project.title}</h1>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image src={project.heroImage || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center p-6 bg-card rounded-lg border border-border"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem, Solution, Outcome */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                {locale === "en" && "The Challenge"}
                {locale === "ar" && "التحدي"}
                {locale === "fr" && "Le Défi"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                {locale === "en" && "Our Solution"}
                {locale === "ar" && "حلنا"}
                {locale === "fr" && "Notre Solution"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                {locale === "en" && "The Results"}
                {locale === "ar" && "النتائج"}
                {locale === "fr" && "Les Résultats"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.outcome}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies & Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                {locale === "en" && "Technologies Used"}
                {locale === "ar" && "التقنيات المستخدمة"}
                {locale === "fr" && "Technologies Utilisées"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="px-4 py-2 bg-card border border-border rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                {locale === "en" && "Services Provided"}
                {locale === "ar" && "الخدمات المقدمة"}
                {locale === "fr" && "Services Fournis"}
              </h3>
              <ul className="space-y-3">
                {project.services.map((service: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8 md:p-12">
              <CardContent className="space-y-6 p-0">
                <div className="text-6xl text-primary/20">"</div>
                <p className="text-xl leading-relaxed">{project.testimonial.quote}</p>
                <div className="pt-4">
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{project.testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {locale === "en" && "Want Similar Results?"}
              {locale === "ar" && "تريد نتائج مماثلة؟"}
              {locale === "fr" && "Vous Voulez des Résultats Similaires?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "Let's discuss how we can help your business succeed"}
              {locale === "ar" && "دعنا نناقش كيف يمكننا مساعدة عملك على النجاح"}
              {locale === "fr" && "Discutons de la façon dont nous pouvons aider votre entreprise"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  {locale === "en" && "View More Projects"}
                  {locale === "ar" && "عرض المزيد من المشاريع"}
                  {locale === "fr" && "Voir Plus de Projets"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
