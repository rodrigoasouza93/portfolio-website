# Tarefa 1.0: Migrar base do projeto para Astro

## Visão geral

Preparar a fundação técnica da migração total para Astro, preservando o projeto atual como referência de baseline e criando a nova base com Astro, Tailwind 4, adapter oficial da Vercel, TypeScript, estrutura `src/`, layout base e estilos globais.

<skills>
### Conformidade com skills

- `astro-static-portfolio`: arquitetura Astro estática, Vercel adapter, Tailwind, baixo JS e comparação de baseline.
- `repo-folder-structure`: estrutura alvo `src/components`, `src/data`, `src/layouts`, `src/pages`, `src/styles`.
- `nodejs-typescript-conventions`: TypeScript, ESM, scripts e validação.
- `code-standards-en`: nomes em inglês e organização de código.
- `context7`: consultar docs atuais de Astro, Vercel adapter e Tailwind quando necessário.
</skills>

<requirements>

- PRD e TechSpec devem permanecer aprovados.
- A migração deve usar Astro como framework principal.
- A Vercel deve continuar como plataforma de deploy.
- O projeto deve continuar usando TypeScript e pnpm.
- O layout atual deve continuar sendo a referência visual, mas a UI completa será migrada na tarefa 2.0.
</requirements>

## Subtarefas

- [ ] 1.1 Registrar baseline atual do Next: build, `.next/static`, `.next/server`, `public`, First Load JS reportado e observações relevantes.
- [ ] 1.2 Atualizar dependências e scripts para Astro, Tailwind 4, `@astrojs/vercel`, TypeScript e Playwright.
- [ ] 1.3 Criar `astro.config.mjs` com adapter oficial da Vercel e integração Tailwind.
- [ ] 1.4 Criar estrutura `src/` conforme TechSpec.
- [ ] 1.5 Criar `src/layouts/BaseLayout.astro` com HTML base, metadata, favicon e import de estilos.
- [ ] 1.6 Criar `src/styles/global.css` com Tailwind 4 e tokens equivalentes ao tema atual.
- [ ] 1.7 Validar que a estrutura base compila antes da migração completa da UI.

## Detalhes de implementação

Referenciar `tasks/prd-migracao-astro/techspec.md`, especialmente as seções "Arquitetura do sistema", "Sequenciamento do desenvolvimento" e "Dependências técnicas".

## Critérios de sucesso

- Projeto possui base Astro funcional.
- Scripts principais existem para desenvolvimento e build.
- Tailwind 4 compila com os tokens de tema.
- Adapter Vercel está configurado.
- Baseline Next foi documentado para comparação posterior.
- Nenhuma implementação visual final é considerada completa nesta tarefa.

## Testes da tarefa

- [ ] Testes unitários: não aplicável nesta etapa, salvo helpers novos.
- [ ] Testes de integração: build Astro base.
- [ ] Testes E2E: não obrigatório nesta etapa.

## Arquivos relevantes

- `package.json`
- `pnpm-lock.yaml`
- `astro.config.mjs`
- `tsconfig.json`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- `tasks/prd-migracao-astro/techspec.md`
