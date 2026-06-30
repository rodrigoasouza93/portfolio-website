import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { featuredProjects } from "@/lib/projects"

export default function SelectedWork() {
    return (
        <section id="projects" className="py-16 md:py-20 px-6 max-w-6xl mx-auto">
            <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:items-end mb-10">
                <div>
                    <p className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
                        Projeto em destaque
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Projetos em Destaque
                    </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                    O foco aqui é mostrar decisões técnicas, arquitetura e impacto de uso, não apenas uma galeria
                    visual de telas.
                </p>
            </div>

            <div className="space-y-8">
                {featuredProjects.map((project) => (
                    <div key={project.id} className="group relative bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
                            <div className="space-y-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-3">
                                            Mobile offline-first
                                        </p>
                                        <h3 className="text-2xl md:text-4xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                        </h3>
                                    </div>
                                    <Link
                                        href={`/projects/${project.id}`}
                                        aria-label={`Ver detalhes de ${project.title}`}
                                        className="p-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-muted-foreground group-hover:text-primary"
                                    >
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>

                                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>

                                <ul className="grid gap-3 sm:grid-cols-2">
                                    <li className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
                                        <strong className="block mb-2 text-foreground">Comparação inteligente</strong>
                                        Normalização de preço por unidade para apoiar decisões de compra.
                                    </li>
                                    <li className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
                                        <strong className="block mb-2 text-foreground">Arquitetura confiável</strong>
                                        Persistência local para uso em ambientes com pouca conectividade.
                                    </li>
                                    <li className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
                                        <strong className="block mb-2 text-foreground">Experiência mobile</strong>
                                        Fluxos rápidos para uso com uma mão durante compras reais.
                                    </li>
                                    <li className="rounded-md border border-border bg-muted p-4 text-sm text-muted-foreground">
                                        <strong className="block mb-2 text-foreground">Qualidade técnica</strong>
                                        TypeScript, Expo e React Native com atenção a performance de lista.
                                    </li>
                                </ul>

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

                            <aside className="rounded-lg border border-border bg-secondary p-5">
                                <dl className="space-y-4">
                                    <div className="flex justify-between gap-4 border-b border-border pb-4">
                                        <dt className="text-sm text-muted-foreground">Papel</dt>
                                        <dd className="text-sm font-semibold text-right">Arquiteto Mobile</dd>
                                    </div>
                                    <div className="flex justify-between gap-4 border-b border-border pb-4">
                                        <dt className="text-sm text-muted-foreground">Stack</dt>
                                        <dd className="text-sm font-semibold text-right">React Native, Expo, TS</dd>
                                    </div>
                                    <div className="flex justify-between gap-4 border-b border-border pb-4">
                                        <dt className="text-sm text-muted-foreground">Foco</dt>
                                        <dd className="text-sm font-semibold text-right">Offline-first e UX</dd>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <dt className="text-sm text-muted-foreground">Código</dt>
                                        <dd className="text-sm font-semibold text-right">GitHub público</dd>
                                    </div>
                                </dl>
                            </aside>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
