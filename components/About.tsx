import Image from "next/image"
import { calculateYearsOfExperience } from "@/lib/utils"

export default function About() {
    const yearsOfExperience = calculateYearsOfExperience(new Date("2018-03-01"))

    return (
        <section className="py-12 px-6 max-w-4xl mx-auto bg-card rounded-3xl my-12 border border-border shadow-2xl dark:shadow-none">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-card-foreground">Sobre Mim</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Sou um desenvolvedor apaixonado por resolver problemas complexos de performance e escalabilidade. Com mais de {" "}
                        {yearsOfExperience} anos de experiência, especializei-me no ecossistema JavaScript/TypeScript e, mais recentemente, mergulhei
                        fundo em Go para construir backends robustos.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Tenho Pós-Graduação em Desenvolvimento Go, o que me permite unir a agilidade do frontend moderno com a
                        eficiência do backend de alta performance.
                    </p>
                </div>
                <div className="relative">
                    <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative border-4 border-background shadow-xl">
                        <Image
                            src="/assets/profile.jpg"
                            alt="Rodrigo Souza"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
