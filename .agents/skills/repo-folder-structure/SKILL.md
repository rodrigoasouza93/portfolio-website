---
name: repo-folder-structure
description: Define onde criar rotas, componentes, dados, assets, testes e artefatos de workflow no portfolio-website atual em Next.js e em uma possível migração para Astro. Use quando criar arquivos novos ou reorganizar módulos.
---

# Repository folder structure

## Estrutura atual em Next.js

```text
app/
├── layout.tsx
├── page.tsx
└── projects/[id]/page.tsx
components/
├── ui/
├── hero.tsx
├── Stack.tsx
├── Credentials.tsx
└── ...
lib/
├── projects.tsx
└── utils.ts
public/
├── assets/
├── images/
└── favicon.svg
playwright/
tasks/
.agents/
.codex/
```

## Regras para Next.js atual

1. Rotas públicas ficam em `app/`.
2. Componentes reutilizáveis ficam em `components/`.
3. Primitivos de UI genéricos ficam em `components/ui/`.
4. Dados locais e helpers ficam em `lib/`.
5. Imagens e arquivos públicos ficam em `public/`.
6. Testes E2E ficam em `playwright/`.
7. Artefatos de planejamento/execução ficam em `tasks/prd-[nome]/`.
8. Skills locais ficam em `.agents/skills/<nome>/`.
9. Agentes Codex ficam em `.codex/agents/`.

## Estrutura recomendada para Astro

Se a migração para Astro for aprovada, use:

```text
src/
├── components/
├── data/
├── layouts/
├── pages/
│   ├── index.astro
│   └── projects/
│       └── [id].astro
└── styles/
public/
playwright/
tasks/
```

## Procedimentos

**Ao criar UI**

1. Procure componente equivalente antes de criar um novo.
2. Evite componentes pequenos sem abstração real.
3. Coloque componentes específicos do portfólio em `components/` no Next atual.
4. Em Astro, coloque componentes estáticos em `src/components/*.astro`.
5. Use dados tipados em `lib/` no Next atual ou `src/data/` em Astro.

**Ao criar assets**

1. Use `public/assets/` para assets de identidade e perfil.
2. Use `public/images/` para screenshots ou imagens de projetos.
3. Prefira SVG para logos/ícones próprios.
4. Evite assets pesados sem necessidade no primeiro viewport.

**Ao criar documentação de feature**

1. Crie `tasks/prd-[nome-em-kebab-case]/`.
2. Salve `prd.md`, `techspec.md`, `tasks.md` e artefatos de execução nessa pasta.
3. Não misture documentos temporários com código de produção.

## Anti-padrões

- Criar nova árvore `src/` enquanto o projeto ainda está em Next, salvo se for parte de uma migração aprovada.
- Colocar dados de projeto dentro de componentes grandes.
- Copiar arquivos gerados/caches para `.agents`, `.codex` ou `public`.
- Manter assets antigos não utilizados após uma migração sem justificativa.
