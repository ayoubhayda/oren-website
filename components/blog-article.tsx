"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Clock, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface BlogArticleProps {
  articleId: string
}

export function BlogArticle({ articleId }: BlogArticleProps) {
  const { locale } = useLanguage()

  // In a real app, this would fetch from CMS or database
  const article = {
    title:
      locale === "en"
        ? "Modern Web Development in 2024: Trends and Best Practices"
        : locale === "ar"
          ? "تطوير الويب الحديث في 2024: الاتجاهات وأفضل الممارسات"
          : "Développement Web Moderne en 2024",
    author: "Marcus Johnson",
    authorRole: locale === "en" ? "Lead Developer" : locale === "ar" ? "المطور الرئيسي" : "Développeur Principal",
    authorAvatar: "/team-developer-portrait.png",
    date: "2024-01-15",
    readTime: locale === "en" ? "5 min read" : locale === "ar" ? "5 دقائق قراءة" : "5 min de lecture",
    category: locale === "en" ? "Development" : locale === "ar" ? "التطوير" : "Développement",
    image: "/blog-web-development.jpg",
    content:
      locale === "en"
        ? `
      <p>The web development landscape continues to evolve at a rapid pace. In 2024, we're seeing exciting trends that are reshaping how we build and deploy web applications.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial intelligence is transforming how developers write code. From intelligent code completion to automated testing, AI tools are becoming essential parts of the modern development workflow.</p>

      <h2>2. Performance Optimization</h2>
      <p>With Core Web Vitals becoming increasingly important for SEO, performance optimization is no longer optional. Techniques like code splitting, lazy loading, and edge computing are now standard practices.</p>

      <h2>3. Component-Driven Architecture</h2>
      <p>Modern frameworks like React, Vue, and Svelte have popularized component-based development. This approach promotes reusability, maintainability, and faster development cycles.</p>

      <h2>4. Serverless and Edge Computing</h2>
      <p>Serverless architectures and edge computing are enabling developers to build faster, more scalable applications with reduced infrastructure management overhead.</p>

      <h2>Conclusion</h2>
      <p>Staying current with these trends is essential for building modern, competitive web applications. At oren, we leverage these technologies to deliver cutting-edge solutions for our clients.</p>
    `
        : locale === "ar"
          ? `
      <p>يستمر مشهد تطوير الويب في التطور بوتيرة سريعة. في عام 2024، نشهد اتجاهات مثيرة تعيد تشكيل كيفية بناء ونشر تطبيقات الويب.</p>

      <h2>1. أدوات التطوير المدعومة بالذكاء الاصطناعي</h2>
      <p>يحول الذكاء الاصطناعي كيفية كتابة المطورين للكود. من إكمال الكود الذكي إلى الاختبار الآلي، أصبحت أدوات الذكاء الاصطناعي أجزاء أساسية من سير عمل التطوير الحديث.</p>

      <h2>2. تحسين الأداء</h2>
      <p>مع أصبحت Core Web Vitals ذات أهمية متزايدة لتحسين محركات البحث، لم يعد تحسين الأداء اختياريًا. تقنيات مثل تقسيم الكود والتحميل الكسول والحوسبة الطرفية أصبحت الآن ممارسات قياسية.</p>

      <h2>3. البنية المعتمدة على المكونات</h2>
      <p>أطر العمل الحديثة مثل React و Vue و Svelte جعلت التطوير القائم على المكونات شائعًا. يعزز هذا النهج إعادة الاستخدام والصيانة ودورات التطوير الأسرع.</p>

      <h2>الخلاصة</h2>
      <p>البقاء على اطلاع بهذه الاتجاهات أمر ضروري لبناء تطبيقات ويب حديثة وتنافسية. في oren، نستفيد من هذه التقنيات لتقديم حلول متطورة لعملائنا.</p>
    `
          : `
      <p>Le paysage du développement web continue d'évoluer rapidement. En 2024, nous observons des tendances passionnantes qui remodèlent la façon dont nous construisons et déployons des applications web.</p>

      <h2>1. Outils de Développement Alimentés par l'IA</h2>
      <p>L'intelligence artificielle transforme la façon dont les développeurs écrivent du code. De la complétion intelligente du code aux tests automatisés, les outils IA deviennent des parties essentielles du workflow de développement moderne.</p>

      <h2>2. Optimisation des Performances</h2>
      <p>Avec les Core Web Vitals devenant de plus en plus importants pour le SEO, l'optimisation des performances n'est plus optionnelle.</p>

      <h2>Conclusion</h2>
      <p>Rester à jour avec ces tendances est essentiel pour construire des applications web modernes et compétitives.</p>
    `,
  }

  return (
    <>
      {/* Back Button */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 rtl:rotate-180" />
              {locale === "en" && "Back to Blog"}
              {locale === "ar" && "العودة إلى المدونة"}
              {locale === "fr" && "Retour au Blog"}
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="flex items-center gap-4 text-sm">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{article.category}</span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
              <span className="text-muted-foreground">{new Date(article.date).toLocaleDateString(locale)}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance">{article.title}</h1>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={article.authorAvatar || "/placeholder.svg"} alt={article.author} />
                  <AvatarFallback>
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{article.author}</div>
                  <div className="text-sm text-muted-foreground">{article.authorRole}</div>
                </div>
              </div>

              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                {locale === "en" && "Share"}
                {locale === "ar" && "مشاركة"}
                {locale === "fr" && "Partager"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-p:mb-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
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
              {locale === "en" && "Need Help With Your Project?"}
              {locale === "ar" && "تحتاج مساعدة في مشروعك؟"}
              {locale === "fr" && "Besoin d'Aide Pour Votre Projet?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "Let's discuss how we can help you succeed"}
              {locale === "ar" && "دعنا نناقش كيف يمكننا مساعدتك على النجاح"}
              {locale === "fr" && "Discutons de la façon dont nous pouvons vous aider"}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                {locale === "en" && "Get in Touch"}
                {locale === "ar" && "تواصل معنا"}
                {locale === "fr" && "Contactez-nous"}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
