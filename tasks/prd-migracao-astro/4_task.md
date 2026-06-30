# Tarefa 4.0: Executar QA, bugfix e code review final

## Visão geral

Executar o fechamento formal da migração: QA completo, correção dos bugs encontrados e code review final. Esta tarefa agrupa as etapas complementares do workflow para manter a migração enxuta, mas ainda exige os artefatos formais `qa.md`, `bugs.md` quando aplicável, `bugfix.md` quando aplicável e `codereview.md`.

<skills>
### Conformidade com skills

- `ui-ux-pro-max`: QA visual, responsividade e acessibilidade.
- `astro-static-portfolio`: validação final de build estático, baixo JS e deploy Vercel.
- `repo-folder-structure`: conferência de estrutura final.
- `nodejs-typescript-conventions`: typecheck e consistência TS.
- `code-standards-en`: revisão de qualidade do código.
</skills>

<requirements>

- Executar QA conforme `execute_qa.md`.
- Corrigir bugs documentados conforme `execute_bugfix.md`, se existirem.
- Executar code review final conforme `execute_review.md`.
- Não aprovar a migração se houver bug bloqueante, build falhando ou regressão visual crítica.
</requirements>

## Subtarefas

- [ ] 4.1 Executar as etapas obrigatórias de `execute_qa.md`.
- [ ] 4.2 Gerar `tasks/prd-migracao-astro/qa.md`.
- [ ] 4.3 Criar `tasks/prd-migracao-astro/bugs.md` se o QA encontrar bugs.
- [ ] 4.4 Se houver bugs, executar as etapas obrigatórias de `execute_bugfix.md`.
- [ ] 4.5 Se houver bugs corrigidos, gerar `tasks/prd-migracao-astro/bugfix.md`.
- [ ] 4.6 Executar novamente validações afetadas por bugfix.
- [ ] 4.7 Executar as etapas obrigatórias de `execute_review.md`.
- [ ] 4.8 Gerar `tasks/prd-migracao-astro/codereview.md`.
- [ ] 4.9 Registrar conclusão, pendências e recomendação final.

## Detalhes de implementação

Esta tarefa não implementa nova funcionalidade planejada. Ela fecha a migração validando aderência ao PRD, TechSpec, tasks, `AGENTS.md`, `DESIGN.md` e skills aplicáveis.

## Critérios de sucesso

- `qa.md` gerado com status aprovado ou reprovação documentada.
- Bugs bloqueantes ausentes ou corrigidos.
- `bugfix.md` gerado quando houver correções pós-QA.
- `codereview.md` gerado.
- Build, typecheck e E2E relevantes passam.
- Migração está pronta para revisão/merge quando o review final aprovar.

## Testes da tarefa

- [ ] Testes unitários: executar se existirem ou se bugfix criar regressões.
- [ ] Testes de integração: build final Astro.
- [ ] Testes E2E: Playwright Chromium e validação visual.

## Arquivos relevantes

- `execute_qa.md`
- `execute_bugfix.md`
- `execute_review.md`
- `tasks/prd-migracao-astro/qa.md`
- `tasks/prd-migracao-astro/bugs.md`
- `tasks/prd-migracao-astro/bugfix.md`
- `tasks/prd-migracao-astro/codereview.md`
- `tasks/prd-migracao-astro/tasks.md`
