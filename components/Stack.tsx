import { Bot, Braces, Gauge, MonitorSmartphone } from "lucide-react"

const capabilities = [
  {
    title: "Backend e sistemas",
    description:
      "Serviços robustos com Go e Node.js, APIs bem delimitadas, performance e desenho de fronteiras técnicas para produtos escaláveis.",
    icon: Gauge,
    technologies: ["Go", "Node.js", "TypeScript", "APIs", "Arquitetura"],
  },
  {
    title: "Frontend web",
    description:
      "Interfaces modernas com React, Next.js e TypeScript, equilibrando experiência, manutenibilidade e clareza para o usuário final.",
    icon: Braces,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile com produto",
    description:
      "Apps React Native e Expo com persistência local, fluxos rápidos e atenção a uso real, incluindo arquiteturas offline-first.",
    icon: MonitorSmartphone,
    technologies: ["React Native", "Expo", "NativeWind", "Offline-first"],
  },
  {
    title: "IA aplicada",
    description:
      "Uso de IA no desenvolvimento de software com agentes, workflows, RAG, ferramentas, observabilidade e integração com produtos web.",
    icon: Bot,
    technologies: ["LLMs", "Agents", "RAG", "MCP", "Evals"],
  },
]

const evidence = [
  ["8+", "anos resolvendo problemas de software desde 2018"],
  ["React + Next", "web moderna como base constante de atuação"],
  ["Node.js + Go", "backend com APIs, performance e arquitetura"],
  ["Pós em Go", "formação voltada a sistemas robustos"],
]

export default function Stack() {
  return (
    <section id="competencias" className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:items-end mb-10">
          <div>
            <p className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
              Competências
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Tecnologias em destaque para uma triagem rápida.
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            A vitrine prioriza as tecnologias em que Rodrigo tem mais profundidade e as combina por contexto:
            backend, frontend, mobile e IA aplicada ao desenvolvimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-border rounded-lg overflow-hidden bg-card mb-12">
          {evidence.map(([value, label], index) => (
            <div
              key={value}
              className={`p-5 min-h-32 ${index < evidence.length - 1 ? "border-b sm:border-r lg:border-b-0 border-border" : ""} ${index === 1 ? "sm:border-r-0 lg:border-r" : ""}`}
            >
              <span className="block text-2xl font-bold text-card-foreground">{value}</span>
              <span className="block mt-3 text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon

            return (
              <article
                key={capability.title}
                className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-md border border-border bg-secondary p-3 text-secondary-foreground">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">{capability.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{capability.description}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {capability.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
