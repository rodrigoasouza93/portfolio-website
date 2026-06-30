import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectDetail from "@/components/project-detail"
import { getProjectById } from "@/lib/projects"
import { notFound } from "next/navigation"

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header showBackLink />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  )
}
