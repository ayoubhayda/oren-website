"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, Users, Lightbulb, TrendingUp, Linkedin, Twitter, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function AboutPage() {
  const { locale } = useLanguage()

  const values = [
    {
      icon: Target,
      title: locale === "en" ? "Excellence" : locale === "ar" ? "التميز" : "Excellence",
      description:
        locale === "en"
          ? "We strive for excellence in every project, delivering high-quality solutions that exceed expectations."
          : locale === "ar"
            ? "نسعى للتميز في كل مشروع، ونقدم حلولاً عالية الجودة تتجاوز التوقعات."
            : "Nous visons l'excellence dans chaque projet, livrant des solutions de haute qualité qui dépassent les attentes.",
    },
    {
      icon: Users,
      title: locale === "en" ? "Collaboration" : locale === "ar" ? "التعاون" : "Collaboration",
      description:
        locale === "en"
          ? "We work closely with our clients as partners, ensuring their vision becomes reality through open communication."
          : locale === "ar"
            ? "نعمل عن كثب مع عملائنا كشركاء، مما يضمن أن رؤيتهم تصبح حقيقة من خلال التواصل المفتوح."
            : "Nous travaillons en étroite collaboration avec nos clients en tant que partenaires, assurant que leur vision devienne réalité.",
    },
    {
      icon: Lightbulb,
      title: locale === "en" ? "Innovation" : locale === "ar" ? "الابتكار" : "Innovation",
      description:
        locale === "en"
          ? "We embrace new technologies and creative approaches to solve complex problems and stay ahead of the curve."
          : locale === "ar"
            ? "نتبنى التقنيات الجديدة والأساليب الإبداعية لحل المشكلات المعقدة والبقاء في الطليعة."
            : "Nous adoptons de nouvelles technologies et approches créatives pour résoudre des problèmes complexes.",
    },
    {
      icon: TrendingUp,
      title: locale === "en" ? "Growth" : locale === "ar" ? "النمو" : "Croissance",
      description:
        locale === "en"
          ? "We're committed to helping our clients grow their businesses through scalable, future-proof solutions."
          : locale === "ar"
            ? "نحن ملتزمون بمساعدة عملائنا على تنمية أعمالهم من خلال حلول قابلة للتوسع ومستقبلية."
            : "Nous nous engageons à aider nos clients à développer leurs entreprises avec des solutions évolutives.",
    },
  ]

  const team = [
    {
      name: "Alex Rivera",
      role: locale === "en" ? "Founder & CEO" : locale === "ar" ? "المؤسس والرئيس التنفيذي" : "Fondateur & PDG",
      bio:
        locale === "en"
          ? "10+ years building digital products for startups and enterprises"
          : locale === "ar"
            ? "أكثر من 10 سنوات في بناء المنتجات الرقمية للشركات الناشئة والمؤسسات"
            : "10+ ans à construire des produits numériques pour startups et entreprises",
      avatar: "/team-ceo-portrait.png",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sarah Chen",
      role: locale === "en" ? "Head of Design" : locale === "ar" ? "رئيسة التصميم" : "Directrice Design",
      bio:
        locale === "en"
          ? "Award-winning designer passionate about creating beautiful user experiences"
          : locale === "ar"
            ? "مصممة حائزة على جوائز شغوفة بإنشاء تجارب مستخدم جميلة"
            : "Designer primée passionnée par la création d'expériences utilisateur magnifiques",
      avatar: "/team-designer-portrait.png",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Marcus Johnson",
      role: locale === "en" ? "Lead Developer" : locale === "ar" ? "المطور الرئيسي" : "Développeur Principal",
      bio:
        locale === "en"
          ? "Full-stack expert specializing in scalable web applications and cloud architecture"
          : locale === "ar"
            ? "خبير متكامل متخصص في تطبيقات الويب القابلة للتوسع والبنية السحابية"
            : "Expert full-stack spécialisé dans les applications web évolutives",
      avatar: "/team-developer-portrait.png",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Priya Patel",
      role: locale === "en" ? "Marketing Director" : locale === "ar" ? "مديرة التسويق" : "Directrice Marketing",
      bio:
        locale === "en"
          ? "Digital marketing strategist helping businesses grow their online presence"
          : locale === "ar"
            ? "استراتيجية تسويق رقمي تساعد الشركات على تنمية تواجدها عبر الإنترنت"
            : "Stratège en marketing digital aidant les entreprises à développer leur présence en ligne",
      avatar: "/team-marketing-portrait.png",
      social: { linkedin: "#", twitter: "#" },
    },
  ]

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
              {locale === "en" && "About oren"}
              {locale === "ar" && "عن oren"}
              {locale === "fr" && "À Propos d'oren"}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              {locale === "en" &&
                "We're a team of passionate designers, developers, and marketers dedicated to helping businesses succeed online."}
              {locale === "ar" &&
                "نحن فريق من المصممين والمطورين والمسوقين المتحمسين المكرسين لمساعدة الشركات على النجاح عبر الإنترنت."}
              {locale === "fr" &&
                "Nous sommes une équipe de designers, développeurs et marketeurs passionnés dédiés à aider les entreprises à réussir en ligne."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">
                {locale === "en" && "Our Mission"}
                {locale === "ar" && "مهمتنا"}
                {locale === "fr" && "Notre Mission"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "en" &&
                  "To empower businesses with cutting-edge digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the transformative power of technology and design to solve real-world problems."}
                {locale === "ar" &&
                  "تمكين الشركات بحلول رقمية متطورة تدفع النمو، وتعزز تجارب المستخدم، وتخلق قيمة دائمة. نؤمن بالقوة التحويلية للتكنولوجيا والتصميم لحل المشكلات الواقعية."}
                {locale === "fr" &&
                  "Donner aux entreprises les moyens d'agir avec des solutions numériques de pointe qui stimulent la croissance, améliorent les expériences utilisateur et créent une valeur durable."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">
                {locale === "en" && "Our Vision"}
                {locale === "ar" && "رؤيتنا"}
                {locale === "fr" && "Notre Vision"}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "en" &&
                  "To be the trusted partner for businesses seeking digital excellence. We envision a future where every company, regardless of size, has access to world-class web solutions that help them compete and thrive in the digital age."}
                {locale === "ar" &&
                  "أن نكون الشريك الموثوق للشركات التي تسعى للتميز الرقمي. نتصور مستقبلاً حيث كل شركة، بغض النظر عن حجمها، لديها وصول إلى حلول ويب عالمية المستوى."}
                {locale === "fr" &&
                  "Être le partenaire de confiance des entreprises recherchant l'excellence numérique. Nous envisageons un avenir où chaque entreprise a accès à des solutions web de classe mondiale."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === "en" && "Our Values"}
              {locale === "ar" && "قيمنا"}
              {locale === "fr" && "Nos Valeurs"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "The principles that guide everything we do"}
              {locale === "ar" && "المبادئ التي توجه كل ما نقوم به"}
              {locale === "fr" && "Les principes qui guident tout ce que nous faisons"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {locale === "en" && "Meet Our Team"}
              {locale === "ar" && "تعرف على فريقنا"}
              {locale === "fr" && "Rencontrez Notre Équipe"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "The talented people behind oren"}
              {locale === "ar" && "الأشخاص الموهوبون وراء oren"}
              {locale === "fr" && "Les personnes talentueuses derrière oren"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6 space-y-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                    <div className="flex justify-center gap-3 pt-2">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link
                          href={member.social.twitter}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                      )}
                      {member.social.github && (
                        <Link
                          href={member.social.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              {locale === "en" && "Join Our Team"}
              {locale === "ar" && "انضم إلى فريقنا"}
              {locale === "fr" && "Rejoignez Notre Équipe"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {locale === "en" && "We're always looking for talented people to join our growing team"}
              {locale === "ar" && "نحن نبحث دائمًا عن أشخاص موهوبين للانضمام إلى فريقنا المتنامي"}
              {locale === "fr" && "Nous recherchons toujours des personnes talentueuses pour rejoindre notre équipe"}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                {locale === "en" && "Get in Touch"}
                {locale === "ar" && "تواصل معنا"}
                {locale === "fr" && "Contactez-nous"}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
