import Image from "next/image"

export default function Stack() {
    const stack = [
        { name: "Go", icon: "/assets/go-icon.png" },
        { name: "React", icon: "/assets/react-icon.png" },
        { name: "TypeScript", icon: "/assets/ts-icon.png" },
        { name: "JavaScript", icon: "/assets/js-icon.png" },
        { name: "Node.js", icon: "/assets/node-icon.png" },
    ]

    return (
        <section className="flex flex-col justify-center px-6 relative overflow-hidden">
            <div className="py-12 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm font-mono tracking-widest text-primary uppercase mb-2">
                        Tecnologias
                    </p>
                    <h2 className="text-3xl font-bold text-foreground">Tech Stack</h2>
                </div>

                <div className="flex justify-center items-center gap-12 flex-wrap">
                    {stack.map((tech) => (
                        <div key={tech.name} className="group relative p-6 rounded-2xl transition-all duration-500 hover:bg-accent border border-transparent hover:border-primary/30">
                            <div className="w-24 h-24 md:w-32 md:h-32 relative grayscale opacity-70 dark:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:group-hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                                <Image
                                    src={tech.icon || "/placeholder.svg"}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
