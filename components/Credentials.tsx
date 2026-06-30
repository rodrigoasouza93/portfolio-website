const aiPoints = [
  ["Context engineering", "Memória e instruções para melhorar qualidade de entregas com ferramentas de IA."],
  ["Spec-driven development", "Planejamento com papéis de negócio, liderança técnica, execução, QA e revisão."],
  ["Arquitetura com LLMs", "Streaming, tools, MCPs, agentes, workflows, RAG e integração com React."],
  ["Produção", "Observabilidade, evals, filas, Docker e estratégias de deploy para aplicações com agentes."],
]

export default function Credentials() {
  return (
    <section id="formacao" className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)] md:items-end mb-10">
          <div>
            <p className="text-sm font-mono tracking-widest text-primary uppercase mb-3">
              Formação aplicada
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Especializações conectadas a arquitetura, backend e IA.
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Para recrutadores, a leitura fica objetiva: estudos recentes reforçam a prática em sistemas
            modernos, produto, performance e automação de desenvolvimento.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.48fr)]">
          <article className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="flex flex-wrap justify-between gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span>Especialização concluída</span>
              <span>IA aplicada</span>
            </div>
            <h3 className="mt-5 text-2xl md:text-4xl font-bold tracking-tight text-card-foreground">
              Inteligência artificial aplicada ao desenvolvimento de software.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Formação voltada a processos de desenvolvimento com IA, arquitetura de soluções com LLMs,
              agentes, workflows, RAG, observabilidade, testes e deploy em produção.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {aiPoints.map(([title, description]) => (
                <li key={title} className="rounded-md border border-border bg-muted p-4 text-sm">
                  <strong className="block mb-2 text-foreground">{title}</strong>
                  <span className="text-muted-foreground">{description}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-4">
            <article className="rounded-lg border border-border bg-card p-6">
              <div className="flex justify-between gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span>Pós-graduação</span>
                <span>Go</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-card-foreground">
                Backend em Go com foco em sistemas robustos.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Consolida a construção de serviços performáticos, APIs bem delimitadas e arquitetura
                backend preparada para escala.
              </p>
            </article>

            <article className="rounded-lg border border-border bg-card p-6">
              <div className="flex justify-between gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span>Em andamento</span>
                <span>Full Cycle</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-card-foreground">
                MBA em Arquitetura Full Cycle.
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Aprofundamento em decisões arquiteturais, visão sistêmica e desenho de soluções para
                produtos que precisam crescer com qualidade técnica.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
