"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function BlogIndex() {
  const { locale } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: locale === "en" ? "All" : locale === "ar" ? "الكل" : "Tout" },
    {
      id: "development",
      label: locale === "en" ? "Development" : locale === "ar" ? "التطوير" : "Développement",
    },
    { id: "design", label: locale === "en" ? "Design" : locale === "ar" ? "التصميم" : "Design" },
    {
      id: "marketing",
      label: locale === "en" ? "Marketing" : locale === "ar" ? "التسويق" : "Marketing",
    },
  ]

  const posts = [
    {
      id: "modern-web-development-2024",
      title:
        locale === "en"
          ? "Modern Web Development in 2024: Trends and Best Practices"
          : locale === "ar"
            ? "تطوير الويب الحديث في 2024: الاتجاهات وأفضل الممارسات"
            : "Développement Web Moderne en 2024: Tendances et Meilleures Pratiques",
      excerpt:
        locale === "en"
          ? "Explore the latest trends in web development, from AI integration to performance optimization techniques."
          : locale === "ar"
            ? "استكشف أحدث الاتجاهات في تطوير الويب، من تكامل الذكاء الاصطناعي إلى تقنيات تحسين الأداء."
            : "Explorez les dernières tendances du développement web, de l'intégration IA aux techniques d'optimisation.",
      category: "development",
      author: "Marcus Johnson",
      date: "2024-01-15",
      readTime: locale === "en" ? "5 min read" : locale === "ar" ? "5 دقائق قراءة" : "5 min de lecture",
      image: "/blog-web-development.jpg",
      tags: ["Next.js", "React", "Performance"],
    },
    {
      id: "ui-ux-design-principles",
      title:
        locale === "en"
          ? "Essential UI/UX Design Principles for Better User Experience"
          : locale === "ar"
            ? "مبادئ تصميم UI/UX الأساسية لتجربة مستخدم أفضل"
            : "Principes Essentiels de Design UI/UX pour une Meilleure Expérience",
      excerpt:
        locale === "en"
          ? "Learn the fundamental design principles that create intuitive and engaging user experiences."
          : locale === "ar"
            ? "تعلم مبادئ التصميم الأساسية التي تخلق تجارب مستخدم بديهية وجذابة."
            : "Apprenez les principes fondamentaux du design qui créent des expériences utilisateur intuitives.",
      category: "design",
      author: "Sarah Chen",
      date: "2024-01-10",
      readTime: locale === "en" ? "7 min read" : locale === "ar" ? "7 دقائق قراءة" : "7 min de lecture",
      image: "/blog-ui-ux-design.jpg",
      tags: ["UI/UX", "Design", "User Experience"],
    },
    {
      id: "seo-strategies-2024",
      title:
        locale === "en"
          ? "SEO Strategies That Actually Work in 2024"
          : locale === "ar"
            ? "استراتيجيات تحسين محركات البحث التي تعمل فعلاً في 2024"
            : "Stratégies SEO Qui Fonctionnent Vraiment en 2024",
      excerpt:
        locale === "en"
          ? "Discover proven SEO techniques to improve your website's visibility and drive organic traffic."
          : locale === "ar"
            ? "اكتشف تقنيات تحسين محركات البحث المثبتة لتحسين ظهور موقعك وزيادة حركة المرور العضوية."
            : "Découvrez des techniques SEO éprouvées pour améliorer la visibilité de votre site.",
      category: "marketing",
      author: "Priya Patel",
      date: "2024-01-05",
      readTime: locale === "en" ? "6 min read" : locale === "ar" ? "6 دقائق قراءة" : "6 min de lecture",
      image: "/blog-seo-strategies.jpg",
      tags: ["SEO", "Marketing", "Content"],
    },
    {
      id: "building-scalable-platforms",
      title:
        locale === "en"
          ? "Building Scalable Web Platforms: Architecture and Best Practices"
          : locale === "ar"
            ? "بناء منصات ويب قابلة للتوسع: البنية وأفضل الممارسات"
            : "Construire des Plateformes Web Évolutives: Architecture et Bonnes Pratiques",
      excerpt:
        locale === "en"
          ? "A comprehensive guide to designing and building web platforms that scale with your business."
          : locale === "ar"
            ? "دليل شامل لتصميم وبناء منصات ويب تتوسع مع عملك."
            : "Un guide complet pour concevoir et construire des plateformes web qui évoluent avec votre entreprise.",
      category: "development",
      author: "Marcus Johnson",
      date: "2023-12-28",
      readTime: locale === "en" ? "10 min read" : locale === "ar" ? "10 دقائق قراءة" : "10 min de lecture",
      image: "/blog-scalable-platforms.jpg",
      tags: ["Architecture", "Scalability", "Backend"],
    },
    {
      id: "color-psychology-web-design",
      title:
        locale === "en"
          ? "The Psychology of Color in Web Design"
          : locale === "ar"
            ? "علم نفس الألوان في تصميم الويب"
            : "La Psychologie des Couleurs dans le Design Web",
      excerpt:
        locale === "en"
          ? "Understanding how colors influence user behavior and emotions in digital experiences."
          : locale === "ar"
            ? "فهم كيف تؤثر الألوان على سلوك المستخدم وعواطفه في التجارب الرقمية."
            : "Comprendre comment les couleurs influencent le comportement et les émotions des utilisateurs.",
      category: "design",
      author: "Sarah Chen",
      date: "2023-12-20",
      readTime: locale === "en" ? "5 min read" : locale === "ar" ? "5 دقائق قراءة" : "5 min de lecture",
      image: "/blog-color-psychology.jpg",
      tags: ["Design", "Psychology", "Branding"],
    },
    {
      id: "social-media-marketing-tips",
      title:
        locale === "en"
          ? "10 Social Media Marketing Tips for Small Businesses"
          : locale === "ar"
            ? "10 نصائح للتسويق عبر وسائل التواصل الاجتماعي للشركات الصغيرة"
            : "10 Conseils de Marketing sur les Réseaux Sociaux pour PME",
      excerpt:
        locale === "en"
          ? "Practical tips to boost your social media presence and engage with your audience effectively."
          : locale === "ar"
            ? "نصائح عملية لتعزيز تواجدك على وسائل التواصل الاجتماعي والتفاعل مع جمهورك بفعالية."
            : "Conseils pratiques pour renforcer votre présence sur les réseaux sociaux et engager votre audience.",
      category: "marketing",
      author: "Priya Patel",
      date: "2023-12-15",
      readTime: locale === "en" ? "8 min read" : locale === "ar" ? "8 دقائق قراءة" : "8 min de lecture",
      image: "/blog-social-media.jpg",
      tags: ["Social Media", "Marketing", "Strategy"],
    },
  ]

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              {locale === "en" && "Blog"}
              {locale === "ar" && "المدونة"}
              {locale === "fr" && "Blog"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {locale === "en" && "Insights, tutorials, and best practices on web development, design, and marketing"}
              {locale === "ar" && "رؤى ودروس وأفضل الممارسات حول تطوير الويب والتصميم والتسويق"}
              {locale === "fr" &&
                "Insights, tutoriels et meilleures pratiques sur le développement web, le design et le marketing"}
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={
                    locale === "en" ? "Search articles..." : locale === "ar" ? "ابحث عن المقالات..." : "Rechercher..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Link href={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded">
                          {categories.find((c) => c.id === post.category)?.label}
                        </span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="text-xs text-muted-foreground">
                          <div>{post.author}</div>
                          <div>{new Date(post.date).toLocaleDateString(locale)}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all rtl:rotate-180" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {locale === "en" && "No articles found. Try a different search or category."}
                {locale === "ar" && "لم يتم العثور على مقالات. جرب بحثًا أو فئة مختلفة."}
                {locale === "fr" && "Aucun article trouvé. Essayez une recherche ou catégorie différente."}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
