"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

interface LegalPageProps {
  type: "privacy" | "terms" | "cookies"
}

export function LegalPage({ type }: LegalPageProps) {
  const { locale } = useLanguage()

  const content = {
    privacy: {
      en: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: January 2024",
        sections: [
          {
            title: "1. Information We Collect",
            content:
              "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to personalize your experience with our services.",
          },
          {
            title: "3. Information Sharing",
            content:
              "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.",
          },
          {
            title: "4. Data Security",
            content:
              "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
          },
          {
            title: "5. Your Rights",
            content:
              "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at privacy@oren.com.",
          },
          {
            title: "6. Contact Us",
            content:
              "If you have any questions about this Privacy Policy, please contact us at privacy@oren.com or through our contact page.",
          },
        ],
      },
      ar: {
        title: "سياسة الخصوصية",
        lastUpdated: "آخر تحديث: يناير 2024",
        sections: [
          {
            title: "1. المعلومات التي نجمعها",
            content:
              "نجمع المعلومات التي تقدمها لنا مباشرة، مثل عند إنشاء حساب أو ملء نموذج أو التواصل معنا. قد يشمل ذلك اسمك وعنوان بريدك الإلكتروني ورقم هاتفك واسم شركتك وأي معلومات أخرى تختار تقديمها.",
          },
          {
            title: "2. كيف نستخدم معلوماتك",
            content:
              "نستخدم المعلومات التي نجمعها لتوفير خدماتنا وصيانتها وتحسينها، وللتواصل معك، ومراقبة وتحليل الاتجاهات والاستخدام، وتخصيص تجربتك مع خدماتنا.",
          },
          {
            title: "3. مشاركة المعلومات",
            content:
              "نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع مزودي الخدمات الذين يساعدوننا في تشغيل موقعنا وإدارة أعمالنا، طالما وافقت هذه الأطراف على الحفاظ على سرية هذه المعلومات.",
          },
          {
            title: "4. أمن البيانات",
            content:
              "نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪.",
          },
          {
            title: "5. حقوقك",
            content:
              "لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. يمكنك أيضًا الاعتراض على معالجة معينة لبياناتك أو تقييدها. لممارسة هذه الحقوق، يرجى الاتصال بنا على privacy@oren.com.",
          },
          {
            title: "6. اتصل بنا",
            content:
              "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على privacy@oren.com أو من خلال صفحة الاتصال الخاصة بنا.",
          },
        ],
      },
      fr: {
        title: "Politique de Confidentialité",
        lastUpdated: "Dernière mise à jour: Janvier 2024",
        sections: [
          {
            title: "1. Informations que Nous Collectons",
            content:
              "Nous collectons les informations que vous nous fournissez directement, par exemple lorsque vous créez un compte, remplissez un formulaire ou communiquez avec nous.",
          },
          {
            title: "2. Comment Nous Utilisons Vos Informations",
            content:
              "Nous utilisons les informations que nous collectons pour fournir, maintenir et améliorer nos services, pour communiquer avec vous et personnaliser votre expérience.",
          },
          {
            title: "3. Partage d'Informations",
            content:
              "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec des prestataires de services qui nous aident à exploiter notre site web.",
          },
          {
            title: "4. Sécurité des Données",
            content:
              "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles.",
          },
          {
            title: "5. Vos Droits",
            content:
              "Vous avez le droit d'accéder, de corriger ou de supprimer vos informations personnelles. Pour exercer ces droits, veuillez nous contacter à privacy@oren.com.",
          },
          {
            title: "6. Contactez-nous",
            content:
              "Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à privacy@oren.com.",
          },
        ],
      },
    },
    terms: {
      en: {
        title: "Terms of Service",
        lastUpdated: "Last updated: January 2024",
        sections: [
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing and using oren's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.",
          },
          {
            title: "2. Use of Services",
            content:
              "You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, overburden, or impair our servers or networks.",
          },
          {
            title: "3. Intellectual Property",
            content:
              "All content, features, and functionality of our services are owned by oren and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
          },
          {
            title: "4. Service Modifications",
            content:
              "We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of our services.",
          },
          {
            title: "5. Limitation of Liability",
            content:
              "In no event shall oren be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.",
          },
          {
            title: "6. Governing Law",
            content:
              "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which oren operates, without regard to its conflict of law provisions.",
          },
        ],
      },
      ar: {
        title: "شروط الخدمة",
        lastUpdated: "آخر تحديث: يناير 2024",
        sections: [
          {
            title: "1. قبول الشروط",
            content:
              "من خلال الوصول إلى خدمات oren واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.",
          },
          {
            title: "2. استخدام الخدمات",
            content:
              "توافق على استخدام خدماتنا فقط للأغراض القانونية ووفقًا لهذه الشروط. توافق على عدم استخدام خدماتنا بأي طريقة قد تضر أو تعطل أو تثقل أو تضعف خوادمنا أو شبكاتنا.",
          },
          {
            title: "3. الملكية الفكرية",
            content:
              "جميع المحتويات والميزات ووظائف خدماتنا مملوكة لـ oren ومحمية بموجب قوانين حقوق النشر والعلامات التجارية والملكية الفكرية الدولية. لا يجوز لك إعادة إنتاج أو توزيع أو إنشاء أعمال مشتقة دون إذن كتابي صريح منا.",
          },
          {
            title: "4. تعديلات الخدمة",
            content:
              "نحتفظ بالحق في تعديل أو إيقاف خدماتنا في أي وقت دون إشعار. لن نكون مسؤولين تجاهك أو أي طرف ثالث عن أي تعديل أو تعليق أو إيقاف لخدماتنا.",
          },
          {
            title: "5. حدود المسؤولية",
            content:
              "في أي حال من الأحوال، لن تكون oren مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية ناتجة عن استخدامك أو عدم قدرتك على استخدام خدماتنا.",
          },
          {
            title: "6. القانون الحاكم",
            content:
              "تخضع هذه الشروط وتفسر وفقًا لقوانين الولاية القضائية التي تعمل فيها oren، دون النظر إلى أحكام تنازع القوانين الخاصة بها.",
          },
        ],
      },
      fr: {
        title: "Conditions d'Utilisation",
        lastUpdated: "Dernière mise à jour: Janvier 2024",
        sections: [
          {
            title: "1. Acceptation des Conditions",
            content:
              "En accédant et en utilisant les services d'oren, vous acceptez et acceptez d'être lié par les termes et dispositions de cet accord.",
          },
          {
            title: "2. Utilisation des Services",
            content:
              "Vous acceptez d'utiliser nos services uniquement à des fins légales et conformément à ces conditions.",
          },
          {
            title: "3. Propriété Intellectuelle",
            content:
              "Tout le contenu, les fonctionnalités et les fonctionnalités de nos services appartiennent à oren et sont protégés par les lois internationales sur le droit d'auteur.",
          },
          {
            title: "4. Modifications du Service",
            content:
              "Nous nous réservons le droit de modifier ou d'interrompre nos services à tout moment sans préavis.",
          },
          {
            title: "5. Limitation de Responsabilité",
            content:
              "En aucun cas, oren ne sera responsable de tout dommage indirect, accessoire, spécial, consécutif ou punitif résultant de votre utilisation de nos services.",
          },
          {
            title: "6. Loi Applicable",
            content:
              "Ces conditions seront régies et interprétées conformément aux lois de la juridiction dans laquelle oren opère.",
          },
        ],
      },
    },
    cookies: {
      en: {
        title: "Cookie Policy",
        lastUpdated: "Last updated: January 2024",
        sections: [
          {
            title: "1. What Are Cookies",
            content:
              "Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.",
          },
          {
            title: "2. Types of Cookies We Use",
            content:
              "We use essential cookies (necessary for the website to function), analytics cookies (to understand how visitors use our site), and preference cookies (to remember your settings like language and theme).",
          },
          {
            title: "3. Third-Party Cookies",
            content:
              "We may use third-party services like Google Analytics that place cookies on your device. These services have their own privacy policies and cookie policies.",
          },
          {
            title: "4. Managing Cookies",
            content:
              "You can control and manage cookies through your browser settings. However, disabling cookies may affect the functionality of our website and limit your user experience.",
          },
          {
            title: "5. Cookie Duration",
            content:
              "Some cookies are session cookies (deleted when you close your browser), while others are persistent cookies (remain on your device for a set period or until you delete them).",
          },
          {
            title: "6. Updates to This Policy",
            content:
              "We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.",
          },
        ],
      },
      ar: {
        title: "سياسة ملفات تعريف الارتباط",
        lastUpdated: "آخر تحديث: يناير 2024",
        sections: [
          {
            title: "1. ما هي ملفات تعريف الارتباط",
            content:
              "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهازك عند زيارة موقعنا. تساعدنا في تزويدك بتجربة أفضل من خلال تذكر تفضيلاتك وفهم كيفية استخدامك لموقعنا.",
          },
          {
            title: "2. أنواع ملفات تعريف الارتباط التي نستخدمها",
            content:
              "نستخدم ملفات تعريف الارتباط الأساسية (الضرورية لعمل الموقع)، وملفات تعريف الارتباط التحليلية (لفهم كيفية استخدام الزوار لموقعنا)، وملفات تعريف الارتباط التفضيلية (لتذكر إعداداتك مثل اللغة والموضوع).",
          },
          {
            title: "3. ملفات تعريف الارتباط من طرف ثالث",
            content:
              "قد نستخدم خدمات طرف ثالث مثل Google Analytics التي تضع ملفات تعريف الارتباط على جهازك. لدى هذه الخدمات سياسات الخصوصية وملفات تعريف الارتباط الخاصة بها.",
          },
          {
            title: "4. إدارة ملفات تعريف الارتباط",
            content:
              "يمكنك التحكم في ملفات تعريف الارتباط وإدارتها من خلال إعدادات المتصفح الخاص بك. ومع ذلك، قد يؤثر تعطيل ملفات تعريف الارتباط على وظائف موقعنا ويحد من تجربة المستخدم الخاصة بك.",
          },
          {
            title: "5. مدة ملفات تعريف الارتباط",
            content:
              "بعض ملفات تعريف الارتباط هي ملفات تعريف ارتباط الجلسة (يتم حذفها عند إغلاق المتصفح)، بينما البعض الآخر عبارة عن ملفات تعريف ارتباط دائمة (تبقى على جهازك لفترة محددة أو حتى تحذفها).",
          },
          {
            title: "6. تحديثات هذه السياسة",
            content:
              "قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر السياسة الجديدة على هذه الصفحة مع تاريخ مراجعة محدث.",
          },
        ],
      },
      fr: {
        title: "Politique des Cookies",
        lastUpdated: "Dernière mise à jour: Janvier 2024",
        sections: [
          {
            title: "1. Que Sont les Cookies",
            content:
              "Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez notre site web. Ils nous aident à vous offrir une meilleure expérience.",
          },
          {
            title: "2. Types de Cookies Utilisés",
            content:
              "Nous utilisons des cookies essentiels (nécessaires au fonctionnement du site), des cookies analytiques (pour comprendre comment les visiteurs utilisent notre site) et des cookies de préférence.",
          },
          {
            title: "3. Cookies Tiers",
            content:
              "Nous pouvons utiliser des services tiers comme Google Analytics qui placent des cookies sur votre appareil.",
          },
          {
            title: "4. Gestion des Cookies",
            content:
              "Vous pouvez contrôler et gérer les cookies via les paramètres de votre navigateur. Cependant, la désactivation des cookies peut affecter la fonctionnalité de notre site.",
          },
          {
            title: "5. Durée des Cookies",
            content:
              "Certains cookies sont des cookies de session (supprimés lorsque vous fermez votre navigateur), tandis que d'autres sont des cookies persistants.",
          },
          {
            title: "6. Mises à Jour de Cette Politique",
            content:
              "Nous pouvons mettre à jour cette politique de cookies de temps en temps. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page.",
          },
        ],
      },
    },
  }

  const pageContent = content[type][locale]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold">{pageContent.title}</h1>
            <p className="text-muted-foreground">{pageContent.lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {pageContent.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
