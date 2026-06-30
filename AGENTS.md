# Instruções para Agentes — Portfolio Website

Este repositório é o portfólio pessoal de Rodrigo Souza. O objetivo principal é apresentar senioridade técnica, projetos, formação e contato com excelente performance, baixo peso de deploy e visual profissional para recrutadores.

## Primeiro passo

- Leia este `AGENTS.md` antes de implementar ou revisar.
- Para UI, leia também `DESIGN.md` antes de planejar ou editar.
- Consulte o `SKILL.md` em `.agents/skills/<nome>/` quando a tarefa acionar uma skill local.
- Prefira contexto local do repositório antes de suposições. Use `rg`, leia componentes existentes e rode a menor verificação útil.
- Escreva documentação, PRDs, specs e relatórios em Português (pt-BR). Código, identificadores, nomes de arquivos técnicos e APIs permanecem em inglês.

## Stack atual

- Framework: Next.js App Router
- Linguagem: TypeScript
- UI: React, Tailwind CSS, lucide-react
- Tema: next-themes
- Testes E2E: Playwright
- Package manager: pnpm

## Direção técnica em avaliação

Este projeto é majoritariamente estático e pode migrar para Astro para reduzir JavaScript no cliente e peso de deploy. Ao planejar mudanças grandes, considere:

- Next.js atual como baseline funcional.
- Astro como destino preferencial se a mudança favorecer HTML estático, baixo JS e deploy simples.
- React islands apenas quando houver interatividade real.
- Scripts pequenos e progressivos para tema/navegação simples.

## Comandos comuns

- Instalar dependências: `pnpm install`
- Desenvolvimento: `pnpm dev`
- Build: `pnpm build`
- Typecheck direto: `./node_modules/.bin/tsc --noEmit`
- E2E Chromium: `./node_modules/.bin/playwright test --project=chromium`

Execute a menor verificação útil primeiro. Amplie para build/E2E quando a mudança tocar layout, rotas, build, assets ou comportamento visível.

## Fluxo de trabalho automatizado

Use `FLOW.md` como mapa do ciclo completo quando o trabalho for uma feature ampla, redesign, migração de stack ou mudança com risco arquitetural.

Ordem recomendada:

1. `create_prd.md` com `@prd-writer`
2. `create_techspec.md` com `@techspec-writer`
3. `create_tasks.md` com `@task-planner`
4. `execute_task.md` com `@task-executor`
5. `execute_qa.md` com `@qa-validator`
6. `execute_bugfix.md` com `@bugfixer` quando `bugs.md` tiver bugs
7. `execute_review.md` com `@code-reviewer`

### Gates obrigatórios de aprovação

- `@techspec-writer` só pode rodar se `prd.md` contiver `Status: APROVADO PELO USUÁRIO`.
- `@task-planner` só pode gerar tasks se `prd.md` e `techspec.md` contiverem `Status: APROVADO PELO USUÁRIO`.
- `@task-executor`, `@qa-validator`, `@bugfixer` e `@code-reviewer` só podem executar se `prd.md`, `techspec.md` e `tasks.md` contiverem `Status: APROVADO PELO USUÁRIO`.
- Se qualquer arquivo estiver com `Status: AGUARDANDO APROVAÇÃO DO USUÁRIO` ou sem status, pare e solicite aprovação explícita.

## Skills locais

| Skill | Acionar para… | Não usar se… |
| --- | --- | --- |
| `astro-static-portfolio` | Migração para Astro, arquitetura estática, islands, baixo JS, deploy leve | Mudança pequena que permanece claramente em Next |
| `ui-ux-pro-max` | Design/revisão de UI, landing, portfólio, paleta, tipografia, acessibilidade, responsividade | Tarefa sem interface ou decisão visual |
| `next-best-practices` | Next.js App Router, metadata, build, imagens, fontes, rotas, hidratação | Projeto já tiver migrado para Astro |
| `react-frontend-conventions` | Componentes React/TSX, Tailwind, hooks, acessibilidade, testes de UI | Componentes `.astro` puros sem React |
| `nodejs-typescript-conventions` | TypeScript, scripts Node, config, ESM, async/await, evitar `any` | Alteração apenas textual/visual sem TS |
| `repo-folder-structure` | Onde criar componentes, dados, assets, pages/routes e tasks | Mudança em arquivo isolado já óbvia |
| `code-standards-en` | Nomes em inglês no código, early returns, funções pequenas, CQS | Documentação pt-BR sem código |
| `vitest-testing` | Se forem introduzidos testes unitários com Vitest | Testes atuais apenas Playwright |
| `context7` | Documentação atualizada de frameworks, SDKs, APIs, CLIs e plataformas | Contexto local for suficiente e estável |
| `skill-best-practices` | Criar ou atualizar skills locais em `.agents/skills` | Documentação comum fora de skill |

**Ordem sugerida por tarefa:**

- UI/landing em Next: `ui-ux-pro-max` → `next-best-practices` → `react-frontend-conventions` → `nodejs-typescript-conventions` → `code-standards-en`
- Migração para Astro: `astro-static-portfolio` → `ui-ux-pro-max` → `nodejs-typescript-conventions` → `repo-folder-structure` → `code-standards-en`
- Testes/E2E: skill da camada testada + Playwright existente
- Documentação técnica externa: `context7` antes de implementar

## Regras de UI

- Preserve a identidade atual: minimalista, editorial, técnica e recrutável.
- Não adicione landing genérica, hero decorativo ou blocos de marketing sem função.
- Priorize leitura rápida para recrutadores: stack, senioridade, projeto, formação e contato.
- Componentes devem funcionar em mobile e desktop sem sobreposição de texto.
- Use ícones lucide quando houver equivalentes.
- Para alterações visuais, valide com screenshot quando possível.

## Persistência do modo Plano

<plan_file>`.codex/plans/[timestamp]-[plan-slug].md`</plan_file>

- No modo Plano, após o usuário aceitar um plano, escreva o plano aceito em um arquivo Markdown dentro de <plan_file>.
- Se o plano aceito for atualizado posteriormente, atualize ou adicione o respectivo arquivo Markdown em <plan_file>.

## Áreas de alto risco

Solicite confirmação explícita antes de:

- Trocar framework principal ou remover Next/React do projeto.
- Alterar lockfile, package manager ou scripts de deploy.
- Remover assets públicos, rotas ou páginas existentes.
- Fazer mudanças amplas de copy que alterem posicionamento profissional.
- Substituir testes ou remover cobertura E2E existente.
