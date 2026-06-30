# Especificação técnica

**Status:** APROVADO PELO USUÁRIO

## Resumo executivo

A migração substituirá a aplicação Next.js por uma aplicação Astro estática com adapter oficial da Vercel. A arquitetura alvo usa Astro para renderização HTML no build, Tailwind 4 para estilos globais, dados locais tipados em TypeScript e JavaScript mínimo no cliente apenas para o theme toggle. React, Next.js, next-themes, Radix/shadcn e dependências herdadas do template devem sair do runtime final.

O layout aprovado será reimplementado em componentes `.astro`, preservando a estrutura visual definida em `DESIGN.md`: header fixo com monograma `RS`, hero, competências, formação, projeto Cestou, about, contato, rota de detalhe do projeto, favicon e metadata. O baseline Next atual será usado para comparação de build, JS e validação visual.

## Arquitetura do sistema

### Visão dos componentes

- `astro.config.mjs`: configuração Astro, Tailwind 4 e adapter `@astrojs/vercel`.
- `src/layouts/BaseLayout.astro`: HTML base, metadata, favicon, import de estilos globais e script inicial de tema.
- `src/pages/index.astro`: composição da home com todas as seções públicas.
- `src/pages/projects/[id].astro`: rota dinâmica estática para detalhes de projeto via `getStaticPaths`.
- `src/components/Header.astro`: header, navegação, link de retorno opcional e controle simples de tema.
- `src/components/LogoMark.astro`: monograma SVG `RS`.
- `src/components/Hero.astro`, `Stack.astro`, `Credentials.astro`, `SelectedWork.astro`, `About.astro`, `Contact.astro`, `ProjectDetail.astro`: seções estáticas equivalentes aos componentes atuais.
- `src/components/Icon.astro` ou SVGs inline: substituição de `lucide-react` por ícones inline mínimos usados no site.
- `src/data/projects.ts`: dados serializáveis dos projetos, sem `ReactNode`/JSX.
- `src/lib/date.ts`: cálculo de anos de experiência.
- `src/styles/global.css`: Tailwind 4, tokens CSS de tema e utilitários globais.
- `playwright/*.spec.ts`: testes E2E ajustados para o servidor Astro.

Fluxo de dados: páginas Astro importam dados tipados de `src/data/projects.ts`; a home usa `featuredProjects`; a rota `[id].astro` gera paths estáticos com base em `projects`; componentes recebem props simples e renderizam HTML estático.

## Design de implementação

### Principais interfaces

```ts
export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  sourceUrl?: string
  duration: string
  teamSize: string
  role: string
  completion: string
  overview: string[]
  features: string[]
  challenges?: ProjectChallenge[]
  techStack: ProjectTechnology[]
  testimonial?: ProjectTestimonial
}
```

```ts
export interface ProjectTechnology {
  name: string
  description?: string
  badge: string
}
```

```ts
export interface SiteMetadata {
  title: string
  description: string
  canonicalPath?: string
}
```

### Modelos de dados

- `Project`: substitui `ProjectType` atual e remove `ReactNode`.
- `FeaturedProject`: pode ser derivado de `Project` ou mantido como lista enxuta com `id`, `title`, `description`, `image`, `technologies` e `sourceUrl`.
- `ProfileSummary`: dados do hero/card de perfil, incluindo foco, stack, formação, perfil e email.
- `Capability`: cards de competência com título, descrição, tecnologias e identificador de ícone.
- `Credential`: blocos de formação aplicada.

Não há banco de dados, API ou persistência externa.

### Endpoints da API

Não aplicável. A migração deve preservar páginas estáticas e não introduzir endpoints.

## Pontos de integração

- Vercel: usar adapter oficial `@astrojs/vercel` em `astro.config.mjs`, mantendo build compatível com deploy automático quando mudanças chegam à `main`.
- Assets públicos: preservar `public/favicon.svg`, `public/assets/profile.jpg` e `public/images/cestou-app.webp`.
- Links externos: GitHub, LinkedIn, email e repositório Cestou permanecem como links HTML.

## Abordagem de testes

### Testes unitários

Não há requisito inicial de testes unitários. A lógica de dados e `calculateYearsOfExperience` pode ser validada por TypeScript/build. Se a implementação introduzir helpers mais complexos, adicionar testes unitários em etapa posterior.

### Testes de integração

Validar via build Astro que:

- `src/pages/index.astro` gera a home.
- `src/pages/projects/[id].astro` gera `/projects/cestou-mobile`.
- Dados em `src/data/projects.ts` alimentam home e detalhe sem duplicação.
- CSS global compila com Tailwind 4.

### Testes E2E

Atualizar Playwright para:

- Rodar `pnpm dev` com Astro ou script equivalente.
- Validar heading `Rodrigo Souza`.
- Validar navegação para `#projects`.
- Validar navegação para `/projects/cestou-mobile`.
- Validar seção de competências.
- Validar seção de projeto.
- Validar theme toggle simples em pelo menos um cenário visual/DOM.

Além dos testes, capturar screenshots desktop e mobile para home e desktop para detalhe de projeto.

## Sequenciamento do desenvolvimento

### Ordem de construção

1. Preparar baseline: registrar métricas atuais de Next (`.next/static`, First Load JS reportado, `public`, build) para comparação final.
2. Atualizar dependências e scripts para Astro, Tailwind 4, adapter Vercel, TypeScript e Playwright.
3. Criar estrutura `src/` com layout base, estilos globais e tokens de tema.
4. Migrar dados para `src/data/projects.ts`, removendo JSX/ReactNode.
5. Migrar componentes estáticos principais para `.astro`.
6. Implementar theme toggle simples sem React/Radix, com persistência em `localStorage` e suporte a `system`.
7. Criar `src/pages/index.astro` e validar home.
8. Criar `src/pages/projects/[id].astro` com `getStaticPaths` e validar detalhe.
9. Remover arquivos/dependências Next/React/Radix/shadcn não utilizados.
10. Atualizar Playwright e rodar build/E2E.
11. Medir `dist/`, JS gerado e comparar com baseline.
12. Revisar Vercel/build scripts e documentar eventuais ajustes.

### Dependências técnicas

- `astro`
- `@astrojs/vercel`
- Tailwind 4 via integração oficial Astro/Tailwind
- `typescript`
- `@playwright/test`
- `pnpm`

Dependências a remover quando substituídas: `next`, `react`, `react-dom`, `next-themes`, Radix UI, shadcn helpers não usados, `lucide-react` se todos os ícones forem inline.

## Monitoramento e observabilidade

Não há backend nem métricas Prometheus/Grafana. Observabilidade aplicável:

- Métricas de build: tamanho de `dist/`, tamanho de JS gerado em `dist/_astro`, número de chunks JS.
- Métricas funcionais: resultado do build e Playwright.
- Validação visual: screenshots desktop/mobile.
- Deploy: verificar build da Vercel após merge para `main` ou preview branch quando disponível.

## Considerações técnicas

### Principais decisões

- Migração total para Astro: reduz runtime e simplifica o projeto para o caso de uso estático.
- Sem React islands no escopo inicial: a UI atual não exige estado complexo; o theme toggle será script leve.
- Tailwind 4: aproveitar integração atual do Astro, mantendo tokens CSS equivalentes aos atuais.
- Adapter Vercel oficial: alinha com o requisito de deploy atual e reduz risco de configuração manual.
- Dados sem JSX: `ProjectTechnology.badge` substitui `ReactNode`, permitindo uso em Astro sem React.
- Ícones inline: evita carregar `lucide-react` apenas para poucos ícones estáticos.
- Footer unificado: usar o footer simples da home como referência visual, evitando carregar o footer antigo da página de detalhe.

### Riscos conhecidos

- Tailwind 4 pode exigir ajustes de configuração em relação ao Tailwind 3 atual. Mitigação: migrar tokens e validar screenshots.
- Fontes: Next `next/font` será removido; definir estratégia de fonte local/sistema ou import compatível no Astro. Mitigação: manter estética equivalente com system font ou fonte local.
- Theme toggle sem Radix perde dropdown avançado. Mitigação: controle simples com estados acessíveis `light/dark/system`.
- Remoção de dependências pode afetar testes/scripts. Mitigação: atualizar `package.json`, lockfile e Playwright na mesma task.
- Vercel adapter pode alterar output esperado. Mitigação: validar build local e preview/deploy.

### Conformidade com rules

- `AGENTS.md`: migração Astro deve usar `astro-static-portfolio`, preservar `DESIGN.md`, manter Vercel, TypeScript, pnpm, E2E e pedir aprovação antes de remover Next/React.
- `DESIGN.md`: layout aprovado deve ser preservado; sem redesign amplo; primeira dobra precisa manter nome, senioridade, stack, disponibilidade e CTA.
- Áreas de alto risco: remoção de Next/React e alteração de lockfile/configuração de deploy são parte aprovada pelo PRD, mas devem ser executadas via tasks revisáveis.

### Conformidade com skills

- `astro-static-portfolio`: arquitetura estática, baixo JS, Vercel, Tailwind, `getStaticPaths`, dados tipados e validação de `dist/`.
- `ui-ux-pro-max`: preservação visual, responsividade, acessibilidade, screenshots.
- `repo-folder-structure`: estrutura alvo `src/components`, `src/data`, `src/layouts`, `src/pages`, `src/styles`.
- `nodejs-typescript-conventions`: TypeScript, ESM, evitar `any`, validar typecheck/build.
- `code-standards-en`: código com identificadores em inglês, funções coesas.
- `context7`: consultado para Astro, Vercel adapter, Tailwind 4 e `getStaticPaths`.

### Arquivos relevantes e dependentes

- `tasks/prd-migracao-astro/prd.md`
- `AGENTS.md`
- `DESIGN.md`
- `package.json`
- `pnpm-lock.yaml`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `playwright.config.ts`
- `playwright/navigation.spec.ts`
- `playwright/sections.spec.ts`
- `app/layout.tsx`
- `app/page.tsx`
- `app/projects/[id]/page.tsx`
- `app/globals.css`
- `components/header.tsx`
- `components/hero.tsx`
- `components/Stack.tsx`
- `components/Credentials.tsx`
- `components/SelectedWork.tsx`
- `components/About.tsx`
- `components/contact.tsx`
- `components/project-detail.tsx`
- `components/logo-mark.tsx`
- `components/theme-toggle.tsx`
- `lib/projects.tsx`
- `lib/utils.ts`
- `public/favicon.svg`
- `public/assets/profile.jpg`
- `public/images/cestou-app.webp`

Arquivos alvo previstos:

- `astro.config.mjs`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/pages/projects/[id].astro`
- `src/components/*.astro`
- `src/data/projects.ts`
- `src/data/profile.ts`
- `src/lib/date.ts`
- `src/styles/global.css`
