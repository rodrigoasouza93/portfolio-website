import { ArrowRight, Github, Linkedin } from "lucide-react"
import { calculateYearsOfExperience } from "@/lib/utils"

export default function Hero() {
  const yearsOfExperience = calculateYearsOfExperience(new Date("2018-03-01"))

  return (
    // Fundo escuro profundo (Slate 950)
    <section className="flex flex-col justify-center min-h-screen px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Tagline pequena com cor de acento */}
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-6">
          Engenheiro de Software & Sistemas
        </p>

        {/* Título com Gradiente (Efeito Premium) */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground">
          Rodrigo Souza<span className="text-primary">.</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-200 dark:to-slate-500">
            Performance First.
          </span>
        </h1>

        {/* Descrição com cor suavizada para leitura */}
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12 border-l-2 border-primary/20 pl-6">
          Especialista Fullstack Sênior ({yearsOfExperience}+ anos). Foco na arquitetura de soluções
          escaláveis com <strong className="text-foreground">Go</strong> e ecossistemas <strong className="text-foreground">React/Native</strong>.
          Transformando complexidade em interfaces limpas.
        </p>

        {/* Botões com alto contraste e hover sutil */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2"
          >
            Ver Projetos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="https://github.com/rodrigoasouza93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-md font-medium text-muted-foreground border border-input hover:border-primary/50 hover:text-primary hover:bg-accent transition-all"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/rodrigoasouza93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-md font-medium text-muted-foreground border border-input hover:border-primary/50 hover:text-primary hover:bg-accent transition-all"
          >

            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        {/* Indicador de Stack Tech (Visualmente discreto) */}
        <div className="mt-20 pt-8 border-t border-border flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-sm font-mono text-muted-foreground">Tecnologias: Go • TypeScript • React Native • Node.js</span>
        </div>
      </div>
    </section>
  )
}
