import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { calculateYearsOfExperience } from "@/lib/utils"

export default function Hero() {
  const yearsOfExperience = calculateYearsOfExperience(new Date("2018-03-01"))

  const profile = [
    ["Foco", "Fullstack web, mobile e backend de alta performance"],
    ["Stack", "Go, Node.js, TypeScript, React, Next.js, React Native"],
    ["Formação", "Pós em Go, IA aplicada e MBA Full Cycle em andamento"],
    ["Perfil", "Sênior, orientado a produto e arquitetura"],
  ]

  return (
    <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.68fr)] lg:items-end">
        <div className="relative z-10">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6">
            Engenheiro de Software & Sistemas
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground max-w-4xl">
            Rodrigo Souza<span className="text-primary">.</span>
            <br />
            <span className="text-muted-foreground">
              Software fullstack para produtos que precisam performar.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-10 border-l-2 border-primary/20 pl-6">
            Especialista Fullstack Sênior ({yearsOfExperience}+ anos) com foco em <strong className="text-foreground">Go</strong>,{" "}
            <strong className="text-foreground">Node.js</strong>, <strong className="text-foreground">TypeScript</strong>,{" "}
            <strong className="text-foreground">React</strong>, <strong className="text-foreground">Next.js</strong> e{" "}
            <strong className="text-foreground">React Native</strong>. Uno arquitetura, performance e visão de produto
            para transformar requisitos complexos em software claro.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group bg-primary text-primary-foreground px-7 py-3 rounded-md font-semibold hover:opacity-90 transition-all flex items-center gap-2"
            >
              Ver projetos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/rodrigoasouza93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-md font-medium text-muted-foreground border border-input hover:border-primary/50 hover:text-primary hover:bg-accent transition-all"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/rodrigo-augusto-santos-de-souza/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-md font-medium text-muted-foreground border border-input hover:border-primary/50 hover:text-primary hover:bg-accent transition-all"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-border bg-card p-6 shadow-xl dark:shadow-none">
          <div className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs tracking-widest uppercase">
            <span className="h-2 w-2 rounded-full bg-current shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
            Aberto a conversas
          </div>

          <dl className="mt-6 divide-y divide-border">
            {profile.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[92px_1fr] gap-4 py-4 first:pt-0">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="text-sm font-semibold text-card-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="mailto:rodrigo.augusto93@gmail.com"
            className="mt-4 flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Mail size={18} />
            rodrigo.augusto93@gmail.com
          </a>
        </aside>
      </div>
    </section>
  )
}
