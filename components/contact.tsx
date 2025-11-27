import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-foreground mb-8">Vamos Trabalhar Juntos</h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Interessado em construir software de alta performance? Entre em contato para discutirmos seu projeto.
      </p>

      <div className="flex justify-center gap-8">
        <a
          href="https://linkedin.com/in/rodrigoasouza93"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="p-4 bg-secondary rounded-full group-hover:bg-secondary/80 transition-colors border border-border group-hover:border-primary/50">
            <Linkedin size={24} />
          </div>
          <span className="font-medium">LinkedIn</span>
        </a>

        <a
          href="https://github.com/rodrigoasouza93"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <div className="p-4 bg-secondary rounded-full group-hover:bg-secondary/80 transition-colors border border-border group-hover:border-primary/50">
            <Github size={24} />
          </div>
          <span className="font-medium">GitHub</span>
        </a>

        <a
          href="mailto:rodrigo.augusto93@gmail.com"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="p-4 bg-secondary rounded-full group-hover:bg-secondary/80 transition-colors border border-border group-hover:border-primary/50">
            <Mail size={24} />
          </div>
          <span className="font-medium">Email</span>
        </a>
      </div>
    </section>
  )
}
