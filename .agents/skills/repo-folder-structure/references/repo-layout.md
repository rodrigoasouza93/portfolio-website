# Repository layout reference — portfolio-website

Este projeto é um portfólio estático/interativo leve. A estrutura deve favorecer navegação simples, baixo acoplamento e migração possível para Astro.

## Next.js atual

```text
app/
  layout.tsx
  page.tsx
  projects/
    [id]/
      page.tsx
components/
  ui/
  About.tsx
  Credentials.tsx
  SelectedWork.tsx
  Stack.tsx
  contact.tsx
  footer.tsx
  header.tsx
  hero.tsx
  logo-mark.tsx
lib/
  projects.tsx
  utils.ts
public/
  assets/
  images/
  favicon.svg
playwright/
tasks/
.agents/
.codex/
```

## Responsabilidades

| Área | Responsabilidade |
| --- | --- |
| `app/` | Rotas, layout raiz, metadata e composição de páginas |
| `components/` | Seções e componentes visuais do portfólio |
| `components/ui/` | Primitivos reutilizáveis e wrappers de UI |
| `lib/` | Dados locais, helpers e tipos compartilhados |
| `public/` | Assets servidos diretamente |
| `playwright/` | Testes E2E e navegação |
| `tasks/` | PRDs, specs, tasks e relatórios de workflow |
| `.agents/` | Skills locais do projeto |
| `.codex/` | Agentes, memória e planos |

## Astro futuro

Se a migração para Astro for aprovada:

```text
src/
  components/
    Header.astro
    Hero.astro
    ...
  data/
    projects.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    projects/
      [id].astro
  styles/
    globals.css
public/
  assets/
  images/
  favicon.svg
```

## Regras práticas

- Evite mover tudo para `src/` antes da migração ser aprovada.
- Componentes estáticos em Astro devem ser `.astro`, não React islands sem necessidade.
- Dados do projeto não devem ficar duplicados entre componentes.
- Assets antigos devem ser removidos somente quando não houver mais referência e a remoção for segura.
- Qualquer reorganização deve preservar URLs públicas e testes E2E.
