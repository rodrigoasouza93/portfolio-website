import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { featuredProjects } from "@/lib/projects"

export default function SelectedWork() {
    return (
        <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Projetos em Destaque</h2>

            <div className="space-y-8">
                {featuredProjects.map((project) => (
                    <div key={project.id} className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(129,140,248,0.1)]">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-muted-foreground group-hover:text-primary"
                                    >
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-muted border border-border text-muted-foreground text-sm font-medium rounded-full font-mono"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
