# Tarefa 3.0: Limpar Next/React e validar migração

## Visão geral

Finalizar a migração removendo a stack antiga, limpando dependências e arquivos substituídos, ajustando validações e medindo o resultado final contra o baseline. Esta tarefa garante que o projeto final é realmente Astro-first, leve e pronto para deploy na Vercel.

<skills>
### Conformidade com skills

- `astro-static-portfolio`: validação de `dist/`, JS gerado, comparação com baseline e remoção de dependências desnecessárias.
- `repo-folder-structure`: remoção segura de estrutura Next substituída.
- `nodejs-typescript-conventions`: scripts, ESM, TypeScript e build.
- `ui-ux-pro-max`: screenshots e checagem visual final.
- `code-standards-en`: limpeza de código e nomes consistentes.
</skills>

<requirements>

- Next.js e React devem ser removidos quando não forem mais necessários.
- Dependências herdadas do template devem ser removidas quando não utilizadas.
- Playwright deve continuar cobrindo fluxos principais.
- Build Astro deve passar.
- Métricas finais devem ser comparadas com baseline.
- Compatibilidade Vercel deve estar documentada.
</requirements>

## Subtarefas

- [ ] 3.1 Remover arquivos substituídos de `app/`, `components/`, `lib/` e configs Next obsoletas quando seguro.
- [ ] 3.2 Remover dependências antigas não utilizadas de `package.json` e atualizar `pnpm-lock.yaml`.
- [ ] 3.3 Atualizar `playwright.config.ts` para servidor Astro.
- [ ] 3.4 Atualizar testes Playwright existentes sem reduzir fluxos cobertos.
- [ ] 3.5 Rodar build, typecheck e E2E Chromium.
- [ ] 3.6 Capturar screenshots home desktop, home mobile e detalhe do projeto.
- [ ] 3.7 Medir `dist/`, JS em `dist/_astro` e comparar com baseline registrado na tarefa 1.0.
- [ ] 3.8 Documentar resultado de compatibilidade com Vercel e eventuais ajustes de build.

## Detalhes de implementação

Referenciar `tasks/prd-migracao-astro/techspec.md`, especialmente "Abordagem de testes", "Monitoramento e observabilidade" e "Riscos conhecidos".

## Critérios de sucesso

- Projeto final não depende de Next.js para build/serve das páginas públicas.
- Runtime React não é enviado para a home sem necessidade.
- Dependências diretas foram reduzidas.
- `pnpm build` passa.
- Typecheck passa.
- Playwright Chromium passa.
- Screenshots confirmam preservação visual.
- Métricas finais mostram redução de JS/peso ou documentam qualquer exceção.

## Testes da tarefa

- [ ] Testes unitários: não obrigatório, salvo helpers novos.
- [ ] Testes de integração: build Astro completo.
- [ ] Testes E2E: suíte Playwright principal em Chromium.

## Arquivos relevantes

- `package.json`
- `pnpm-lock.yaml`
- `playwright.config.ts`
- `playwright/navigation.spec.ts`
- `playwright/sections.spec.ts`
- `astro.config.mjs`
- `src/`
- `dist/`
- `tasks/prd-migracao-astro/techspec.md`
