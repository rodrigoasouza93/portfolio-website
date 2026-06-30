---
name: astro-static-portfolio
description: Use para analisar, planejar ou executar migração de portfólio/landing estática para Astro, com foco em HTML estático, baixo JavaScript, islands apenas quando necessário, Tailwind, assets leves, SEO e deploy estático.
---

# Astro Static Portfolio

Use esta skill quando a tarefa envolver Astro, migração Next → Astro, redução de JavaScript no cliente, build estático, peso de deploy, SEO ou arquitetura de portfólio estático.

## Objetivo

Construir ou migrar o portfólio para uma arquitetura estática, rápida e simples, preservando o design aprovado e reduzindo dependências desnecessárias.

## Princípios

- HTML estático por padrão.
- JavaScript no cliente somente para interatividade real.
- React islands apenas se um componente precisar de estado, efeitos ou runtime React.
- Conteúdo e dados devem ficar em arquivos locais tipados quando possível.
- SEO, metadata, favicon, Open Graph e acessibilidade devem ser preservados.
- O design atual em `DESIGN.md` é fonte obrigatória para qualquer migração.

## Checklist de análise Next → Astro

Antes de propor migração:

1. Mapear rotas atuais em `app/`.
2. Identificar componentes realmente interativos.
3. Listar dependências usadas versus herdadas de template.
4. Medir baseline atual: build, First Load JS, `.next/static`, `public`, Lighthouse ou Playwright quando possível.
5. Definir rotas Astro equivalentes:
   - `src/pages/index.astro`
   - `src/pages/projects/[id].astro`
6. Definir dados compartilhados:
   - `src/data/projects.ts`
   - `src/data/profile.ts` quando útil
7. Definir assets preservados em `public/`.
8. Planejar validações lado a lado.

## Padrão recomendado

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
```

## Interatividade

Para theme toggle simples, prefira script pequeno e independente:

- Ler preferência em `localStorage`.
- Aplicar classe `dark` em `document.documentElement`.
- Respeitar `prefers-color-scheme`.
- Evitar carregar React apenas para alternar tema.

Use island React somente se:

- Há estado de UI complexo.
- Há dependência de componente React difícil de reescrever.
- O custo de JS é justificado pelo valor da interação.

## Migração de componentes

- Componentes puramente estáticos devem virar `.astro`.
- SVGs e ícones simples podem ser inline ou componentes Astro.
- Evite portar shadcn/Radix se não forem necessários.
- Substitua `next/link` por `<a>`.
- Substitua `next/image` por `<img>` com dimensões, `loading`, `decoding` e formatos otimizados.
- Remova `next-themes` se houver script próprio de tema.

## Validação

Após uma migração ou spike:

- `pnpm build`
- Medir tamanho de `dist/`
- Medir JS gerado em `dist/_astro`
- Verificar home desktop/mobile por screenshot
- Verificar rota de projeto
- Verificar favicon/metadata
- Comparar contra baseline Next

## Critérios de sucesso

- Visual preservado ou melhorado em relação ao Next atual.
- Redução significativa de JavaScript no cliente.
- Build estático simples.
- Menos dependências diretas.
- Rotas e conteúdo equivalentes.
- Testes ou verificação visual executados e documentados.
