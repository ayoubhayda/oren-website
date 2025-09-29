import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata = {
  title: "Project Case Study - oren",
  description: "Detailed case study of our project",
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProjectCaseStudy projectId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
