📄 Plano de Projeto: Portfólio Rodrigo Souza 2.0
Conceito: "High Performance & Clean Architecture" Estilo: Minimalismo Suíço (Muito espaço em branco, tipografia forte, poucas cores).

1. Estrutura de Conteúdo (Sitemap)
Como Sênior e especialista em Go/Mobile, você não vende "código", você vende "soluções escaláveis".

Hero Section (A Promessa): Nada de "Olá, sou Rodrigo". Vá direto ao ponto.

Headline: Desenvolvedor Fullstack Sênior focado em Performance e Escalabilidade.

Sub: Especialista em ecossistema JS/TS e Go. Entregando soluções Web e Mobile robustas desde 2018.

Stack (A Ferramenta): Apenas os ícones principais, monocromáticos.

Selected Work (A Prova): Em vez de 10 projetos pequenos, escolha os 3 mais complexos.

Foco: Descreva o desafio de negócio e a arquitetura usada (ex: "Reduzi o tempo de resposta da API em 40% usando Go").

About (A Pessoa): Breve histórico e a menção da Pós-Graduação em Go.

Contact (CTA): Link para LinkedIn, GitHub e E-mail.

2. Identidade Visual com Nano Banana Pro
Vamos utilizar o Nano Banana Pro para gerar ativos que fujam do padrão "banco de imagens". O objetivo é criar uma estética flat, vetorial e tecnológica.

A. Paleta de Cores Sugerida
Fundo: #FAFAFA (Off-white para cansar menos a vista que o branco puro) ou #0F172A (Dark Mode profundo).

Acento: #00ADD8 (Referência ao Go) ou #61DAFB (Referência ao React), mas usados com parcimônia (apenas em botões ou links).

Texto: Cinza chumbo #333333 (nunca preto puro).

B. Prompts para o Nano Banana Pro
Aqui estão os comandos para você gerar os ativos visuais.

1. Logo Pessoal (Minimalista)

Prompt: "Minimalist logo for software developer, letters R and S intertwined, geometric shapes, thin lines, vector style, flat design, technological blue and dark grey, white background, high quality, abstract iconography."

2. Ícones de Tecnologia (Estilo Customizado) Para não usar os ícones padrão que todo mundo usa, gere versões estilizadas das suas skills.

Prompt: "Icon representing [INSERIR TECNOLOGIA: ex: Golang Gopher], minimalist line art style, single stroke weight, futuristic, blueprint aesthetic, dark grey lines, white background, vector style."

3. Imagem de Apoio (Abstrata para o Fundo)

Prompt: "Abstract technological background, network topology mesh, subtle grey lines on white background, minimalist data flow, faint opacity, clean engineering aesthetic, high resolution, 4k."

3. Sugestão Tecnológica (Sua Stack)
Como você é especialista em React e Go, o site deve ser extremamente rápido para provar sua competência técnica.

Framework: Next.js 14+ (App Router). É o padrão de mercado atual. Mostra que você está atualizado.

Estilização: Tailwind CSS. Permite o minimalismo e limpeza de código que você busca.

Animações: Framer Motion. Use apenas para transições suaves (ex: fade-in ao rolar). Nada muito brusco.

Backend (Opcional): Se quiser demonstrar o Go, crie uma API simples em Go (hospedada no Railway ou AWS Lambda) apenas para o formulário de contato ou para buscar seus repositórios do GitHub em tempo real.

4. Roteiro de Refatoração (Passo a Passo)
Etapa 1: Limpeza (The "Marie Kondo" Phase)
Remova barras de progresso (ex: "React: 90%"). Isso é visto como amadorismo para Seniors. Sênior resolve problemas, não tem "porcentagem de conhecimento".

Remova projetos de tutoriais (pokedéx, to-do list simples). Mantenha apenas o que tem impacto real ou complexidade técnica.

Etapa 2: Copywriting Técnico
Reescreva suas descrições.

De: "Fiz um app em React Native."

Para: "Desenvolvi arquitetura mobile cross-platform utilizando React Native e Expo, implementando CI/CD e reduzindo o time-to-market em 30%."

Etapa 3: A Construção Visual
Gere o Logo e o Favicon no Nano Banana Pro.

Defina a tipografia. Sugestão: Inter ou Geist Sans (muito clean, usada pela Vercel).

Monte o layout mobile-first.

Exemplo de Estrutura de Código (Next.js + Tailwind)
Para te ajudar a começar, aqui está um esqueleto de um componente Hero minimalista:

TypeScript

import { ArrowRight } from 'lucide-react'; // Ícones leves

export default function Hero() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] max-w-4xl mx-auto px-6">
      <p className="text-blue-600 font-medium tracking-wide mb-4">
        RODRIGO SOUZA
      </p>
      
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
        Fullstack Engineer. <br />
        <span className="text-slate-400">Go & React Specialist.</span>
      </h1>
      
      <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-10">
        Transformando requisitos complexos em software escalável desde 2018. 
        Pós-graduado em Go, com foco em performance de Backend e 
        experiência nativa em Mobile.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition flex items-center gap-2">
          Ver Projetos <ArrowRight size={18} />
        </a>
        <a href="https://github.com/SEU_USER" target="_blank" className="border border-slate-300 text-slate-700 px-8 py-3 rounded-full font-medium hover:bg-slate-50 transition">
          GitHub
        </a>
      </div>
    </section>
  )
}

Plano de Projeto: Rodrigo Souza (Dark Edition)
Conceito Visual: "Deep Space Engineering". Atmosfera: Imersiva, tecnológica, alto contraste apenas nos pontos de foco.

1. A Nova Paleta "Dark Premium"
Esqueça o preto puro. Vamos usar tons profundos de azul-acinzentado (Slate/Charcoal) que lembram interfaces de IDEs modernas (VS Code, JetBrains).

Background (Canvas): #020617 (Slate 950) ou #0F172A (Slate 900). Profundo, mas não preto.

Superfícies (Cards/Areas): #1E293B (Slate 800) com bordas sutis em #334155.

Texto Principal: #F8FAFC (Slate 50) - Quase branco, mas suavizado.

Texto Secundário: #94A3B8 (Slate 400) - Cinza médio para descrições.

Acento (O "Pop"): Gradientes sutis de #38BDF8 (Cyan) para #818CF8 (Indigo). Isso remete tanto ao React quanto à modernidade do Go.

2. Prompts Revisados para Nano Banana Pro (Tema Escuro)
Os ícones e logos agora precisam ser claros sobre fundo escuro, talvez com um leve brilho (glow).

1. Logo Pessoal (Dark Mode Version)

Prompt: "Minimalist personal logo, letters R and S intertwined, thin glowing white lines, geometric vector style, matte dark grey background, cyberpunk aesthetic, subtle neon blue rim light, high contrast, clean."

2. Ícones Tech (Estilo "Blueprint Neon")

Prompt: "Tech icon for [Golang/React], minimalist neon wireframe style, glowing cyan lines on deep black background, schematic look, futuristic UI element, vector quality."

3. Background Texture (Subtil) Para o fundo não ficar chapado, geramos uma textura tecnológica muito suave.

Prompt: "Dark abstract technology background, subtle neural network mesh, very low opacity grey lines, deep charcoal background, clean minimalist, 8k resolution, smooth gradient."

3. Apresentação do App "Cestou" no Tema Escuro
Aqui temos um desafio: O seu app é claro (fundo branco), mas o site será escuro. Se você colar o print branco direto no fundo preto, vai agredir os olhos (efeito lanterna).

A Solução Visual: Use o Nano Banana Pro para criar um mockup de um celular "Matte Black" (Preto Fosco). O celular escuro serve como uma moldura que suaviza a transição entre o site escuro e o app claro.

Prompt para o Mockup do App:

Prompt: "High-end smartphone mockup, matte black finish, floating in a dark void, minimalist studio lighting, rim lighting highlighting the phone edges, screen facing forward, high resolution."

Efeito: O app brilhará na tela do celular como se fosse o próprio display aceso, criando um destaque lindo no seu site escuro.

4. Estrutura de Código (Tailwind Dark Mode)
Aqui está a refatoração do componente Hero para o tema escuro. Note o uso de gradientes no texto para dar aquele toque "Sênior".

TypeScript

import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function HeroDark() {
  return (
    // Fundo escuro profundo (Slate 950)
    <section className="flex flex-col justify-center min-h-screen bg-slate-950 px-6 text-slate-50">
      
      <div className="max-w-4xl mx-auto w-full">
        {/* Tagline pequena com cor de acento */}
        <p className="text-sky-400 font-mono text-sm tracking-widest uppercase mb-6">
          System & Software Engineer
        </p>
        
        {/* Título com Gradiente (Efeito Premium) */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Rodrigo Souza<span className="text-sky-500">.</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
            Performance First.
          </span>
        </h1>
        
        {/* Descrição com cor suavizada para leitura */}
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-12 border-l-2 border-slate-800 pl-6">
          Especialista Fullstack Sênior (8+ anos). Foco na arquitetura de soluções 
          escaláveis com <strong className="text-slate-200">Go</strong> e ecossistemas <strong className="text-slate-200">React/Native</strong>.
          Transformando complexidade em interfaces limpas.
        </p>

        {/* Botões com alto contraste e hover sutil */}
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="group bg-slate-100 text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
          >
            Ver Projetos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://github.com" 
            className="flex items-center gap-2 px-8 py-3 rounded-md font-medium text-slate-300 border border-slate-800 hover:border-sky-500/50 hover:text-sky-400 hover:bg-slate-900 transition-all"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* Indicador de Stack Tech (Visualmente discreto) */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Aqui entrariam os ícones SVG (Go, React, Node, TS) */}
            <span className="text-sm font-mono text-slate-500">Tech Stack: Go • TypeScript • React Native • Node.js</span>
        </div>
      </div>
    </section>
  )
}
Resumo das Mudanças para o Plano Dark:
Contraste Controlado: Texto cinza claro (slate-400) em vez de branco puro para textos longos.

Acentos Neon/Ciano: Usar cores vibrantes apenas em botões e links para guiar o olho (call-to-action).

App Cestou: Apresentado dentro de um mockup de celular preto para não "brigar" com o fundo do site.

Tipografia: Manter fontes sans-serif limpas (Inter ou Geist), mas talvez aumentar levemente o espaçamento entre letras (tracking) para melhorar a legibilidade no fundo escuro.