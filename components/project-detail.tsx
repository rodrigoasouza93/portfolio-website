import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Globe, Code, Check } from "lucide-react"
import type { ProjectType } from "@/lib/projects"

interface ProjectDetailProps {
  project: ProjectType
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  console.log(project)
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="text-3xl font-bold mb-4 text-foreground">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-muted-foreground mb-8">{project.fullDescription}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-muted p-4 rounded-lg">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Demo ao Vivo
                  </Button>
                </a>
              )}

              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Código Fonte
                  </Button>
                </a>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Duração do Projeto</h3>
                <p className="font-semibold text-foreground">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Tamanho da Equipe</h3>
                <p className="font-semibold text-foreground">{project.teamSize}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Função</h3>
                <p className="font-semibold text-foreground">{project.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">Conclusão</h3>
                <p className="font-semibold text-foreground">{project.completion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Visão Geral</h2>
          <div className="space-y-4 text-muted-foreground">
            {project.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Principais Funcionalidades</h2>
          <ul className="space-y-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.challenges && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Desafios e Soluções</h2>
          <div className="space-y-8">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Tecnologias</h2>
          <ul className="space-y-4">
            {project.techStack.map((tech, index) => (
              <li key={index} className="flex items-start">
                <div className="w-6 h-6 mr-3 flex-shrink-0 text-foreground">{tech.icon}</div>
                <div>
                  <h3 className="font-medium text-foreground">{tech.name}</h3>
                  {tech.description && <p className="text-sm text-muted-foreground">{tech.description}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {project.testimonial && (
          <div className="bg-muted/50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="https://avatar.iran.liara.run/public/boy"
                  alt={project.testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{project.testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">"{project.testimonial.text}"</p>
          </div>
        )}
      </div>
    </div>
  )
}

