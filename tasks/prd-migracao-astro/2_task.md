# Tarefa 2.0: Migrar conteúdo, rotas e UI

## Visão geral

Migrar o conteúdo público, dados locais, rotas e interface visual do portfólio para Astro, preservando o layout atual aprovado e removendo dependência de React no runtime da UI. Esta tarefa cobre a home, a página de detalhe do projeto, dados tipados, componentes `.astro`, assets e theme toggle simples.

<skills>
### Conformidade com skills

- `astro-static-portfolio`: componentes estáticos, `getStaticPaths`, dados tipados, baixo JS e theme toggle sem React.
- `ui-ux-pro-max`: preservação visual, responsividade, acessibilidade e validação por screenshot.
- `repo-folder-structure`: criação de componentes, dados, layouts, rotas e estilos em `src/`.
- `nodejs-typescript-conventions`: dados e helpers tipados sem `any`.
- `code-standards-en`: identificadores e módulos em inglês.
</skills>

<requirements>

- Home deve manter layout/copy atual.
- Rota `/projects/cestou-mobile` deve continuar existindo.
- Theme toggle deve ser simples e sem Radix/next-themes.
- Dados de projeto não podem depender de JSX ou `ReactNode`.
- Logo, favicon, imagem de perfil e imagem do Cestou devem ser preservados.
- Sem redesign amplo.
</requirements>

## Subtarefas

- [ ] 2.1 Migrar `lib/projects.tsx` para `src/data/projects.ts` sem JSX/ReactNode.
- [ ] 2.2 Criar dados auxiliares para perfil, competências e formação quando reduzir duplicação.
- [ ] 2.3 Migrar `LogoMark`, `Header`, `Hero`, `Stack`, `Credentials`, `SelectedWork`, `About`, `Contact` e footer para componentes `.astro`.
- [ ] 2.4 Implementar theme toggle simples com suporte a `light`, `dark` e `system`, usando `localStorage` e classe `dark`.
- [ ] 2.5 Criar `src/pages/index.astro` compondo a home.
- [ ] 2.6 Criar `src/pages/projects/[id].astro` com `getStaticPaths`.
- [ ] 2.7 Migrar `ProjectDetail` para Astro, preservando conteúdo, imagem, tecnologias, features, desafios e links.
- [ ] 2.8 Substituir ícones React/lucide por SVG inline ou componente Astro leve.
- [ ] 2.9 Validar visualmente home desktop/mobile e detalhe do projeto.

## Detalhes de implementação

Referenciar `tasks/prd-migracao-astro/techspec.md`, especialmente "Modelos de dados", "Principais decisões" e "Arquivos alvo previstos".

## Critérios de sucesso

- Home renderiza em Astro com layout equivalente ao estado aprovado.
- `/projects/cestou-mobile` renderiza com conteúdo equivalente.
- Theme toggle funciona sem runtime React obrigatório.
- Dados de projeto são serializáveis e tipados.
- Não há dependência funcional de `next/link`, `next/image`, `next-themes`, Radix ou React para a UI migrada.
- Screenshots desktop/mobile não mostram regressões visuais óbvias.

## Testes da tarefa

- [ ] Testes unitários: validar helpers novos se houver lógica adicional.
- [ ] Testes de integração: build Astro com rotas geradas.
- [ ] Testes E2E: navegação home, âncora de projetos e detalhe do projeto.

## Arquivos relevantes

- `src/pages/index.astro`
- `src/pages/projects/[id].astro`
- `src/components/*.astro`
- `src/data/projects.ts`
- `src/data/profile.ts`
- `src/lib/date.ts`
- `src/styles/global.css`
- `public/favicon.svg`
- `public/assets/profile.jpg`
- `public/images/cestou-app.webp`
