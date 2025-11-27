import Header from "@/components/header"
import Hero from "@/components/hero"
import Stack from "@/components/Stack"
import SelectedWork from "@/components/SelectedWork"
import About from "@/components/About"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stack />
      <SelectedWork />
      <About />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Rodrigo Souza. All rights reserved.
      </footer>
    </main>
  )
}

