import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import LogoMark from "@/components/logo-mark"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  showBackLink?: boolean
}

export default function Header({ showBackLink = false }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark className="h-10 w-10 text-foreground" />
          <span className="font-bold text-foreground tracking-tight">RODRIGO SOUZA</span>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {showBackLink ? (
              <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft size={16} />
                Voltar aos projetos
              </Link>
            ) : (
              <>
                <Link href="#competencias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Competências
                </Link>
                <Link href="#formacao" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Formação
                </Link>
                <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Projetos
                </Link>
                <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </>
            )}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
