import { ArrowUpRight } from "lucide-react"

export default function SelectedWork() {
    const projects = [
        {
            title: "High-Scale API Gateway",
            description: "Reduzi o tempo de resposta da API em 40% usando Go e implementando cache distribuído com Redis.",
            tags: ["Go", "Redis", "Docker"],
            link: "#",
        },
        {
            title: "E-commerce Microservices",
            description: "Arquitetura de microsserviços escalável para processar 10k pedidos/minuto durante a Black Friday.",
            tags: ["Node.js", "Kafka", "Kubernetes"],
            link: "#",
        },
        {
            title: "Real-time Analytics Dashboard",
            description: "Dashboard de análise de dados em tempo real processando terabytes de logs de acesso.",
            tags: ["TypeScript", "Next.js", "ClickHouse"],
            link: "#",
        },
    ]

    return (
        <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12">Projetos em Destaque</h2>

            <div className="space-y-8">
                {projects.map((project) => (
                    <div key={project.title} className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(129,140,248,0.1)]">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-muted-foreground group-hover:text-primary"
                                    >
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-muted border border-border text-muted-foreground text-sm font-medium rounded-full font-mono"
                                        >
                                            {tag}
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
