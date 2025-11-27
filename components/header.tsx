import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 relative">
            <Image src="/assets/logo.png" alt="Logo" fill className="object-contain" />
          </div>
          <span className="font-bold text-foreground tracking-tight">RODRIGO SOUZA</span>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
