# Documento de Requisitos do Produto (PRD)

**Status:** APROVADO PELO USUÁRIO

## Visão Geral

Este PRD define a migração total do portfólio pessoal de Rodrigo Souza da stack atual em Next.js para Astro. O objetivo é manter a experiência visual já aprovada, preservando conteúdo, identidade, rotas públicas e posicionamento profissional, enquanto reduzimos JavaScript enviado ao navegador, peso do deploy, complexidade de dependências e custo mental de manutenção.

O portfólio é majoritariamente estático: apresenta hero, competências, formação, projeto em destaque, página de detalhe do projeto, contato, tema claro/escuro, logo e favicon. Por esse perfil, Astro deve permitir uma arquitetura mais aderente ao produto: HTML estático por padrão, interatividade mínima apenas onde for realmente necessária e build final mais leve.

A migração deve respeitar o deployment atual na Vercel. O projeto continuará usando o fluxo em que pushes/merges para `main` disparam deploy automaticamente pela integração/hook da Vercel.

## Objetivos

- Migrar totalmente o portfólio para Astro, removendo a dependência operacional do Next.js no resultado final.
- Preservar o layout atual aprovado, incluindo identidade visual, copy, seções, rotas, tema, logo e favicon.
- Reduzir significativamente o JavaScript enviado ao cliente em relação ao baseline atual do Next.js.
- Reduzir o peso do artefato de build/deploy em relação ao baseline atual.
- Simplificar dependências diretas, removendo bibliotecas herdadas do template que não são necessárias para um portfólio estático.
- Manter compatibilidade com deploy automático na Vercel a partir da branch `main`.
- Manter ou melhorar a experiência percebida de carregamento em desktop e mobile.
- Preservar a capacidade de validação por build, typecheck e testes E2E com Playwright.

Métricas de sucesso esperadas:

- Home carregando sem runtime React obrigatório para renderização inicial.
- Redução mensurável de JavaScript gerado para a home.
- `dist/` do Astro menor que o conjunto equivalente de assets estáticos do build atual.
- Páginas públicas renderizadas corretamente em desktop e mobile.
- Build da Vercel compatível com a nova stack.
- Testes E2E principais passando ou atualizados para refletir a nova estrutura sem reduzir cobertura funcional.

## Histórias de Usuário

- Como recrutador, eu quero acessar o portfólio rapidamente para entender senioridade, stack, projetos e contato sem esperar carregamento desnecessário.
- Como tech lead, eu quero navegar por um site leve e bem estruturado para avaliar clareza técnica, decisões de produto e cuidado com performance.
- Como Rodrigo, eu quero manter o layout atual que já está aprovado para não reabrir um redesign durante a migração técnica.
- Como Rodrigo, eu quero reduzir dependências e peso de deploy para ter um projeto mais simples de manter e evoluir.
- Como Rodrigo, eu quero continuar usando a Vercel com deploy automático na `main` para manter o fluxo atual de publicação.
- Como visitante em mobile, eu quero visualizar hero, CTA, competências, projeto e contato sem quebras de layout, sobreposição de texto ou interações dependentes de hover.

## Principais funcionalidades

### 1. Migração total da stack para Astro

O projeto deve passar a usar Astro como framework principal do portfólio. A migração deve cobrir a home, a página de projeto, layout base, dados locais, estilos globais, assets públicos, metadata e scripts necessários.

Requisitos funcionais:

1. O site deve ser executável e buildável usando Astro.
2. O resultado final não deve depender de Next.js para servir as páginas públicas.
3. As rotas públicas existentes devem continuar disponíveis.
4. O conteúdo atual deve ser preservado, salvo ajustes mínimos necessários por diferenças entre frameworks.
5. A migração deve permitir deploy estático ou compatível com a Vercel.

### 2. Preservação da experiência visual atual

O layout aprovado deve permanecer como referência principal. A migração não deve virar um redesign. Ajustes visuais só devem ocorrer para preservar equivalência, corrigir problemas responsivos ou melhorar acessibilidade sem alterar a direção estética.

Requisitos funcionais:

6. Header, logo, theme toggle, hero, card de perfil, competências, formação, projeto, sobre e contato devem permanecer reconhecíveis.
7. A identidade visual descrita em `DESIGN.md` deve ser preservada.
8. O monograma `RS` e o favicon atual devem continuar disponíveis.
9. A versão mobile deve manter legibilidade e CTAs acessíveis.
10. A rota de detalhe do projeto deve manter conteúdo, links e estrutura informativa equivalentes.

### 3. Otimização de performance e peso

A migração deve reduzir o custo de runtime no navegador e o peso de build/deploy, sem sacrificar conteúdo ou usabilidade.

Requisitos funcionais:

11. A home deve priorizar HTML estático e CSS.
12. JavaScript no cliente deve existir apenas para interatividade necessária, como tema claro/escuro.
13. O projeto deve produzir métricas comparáveis antes/depois para tamanho de build, JS gerado e páginas principais.
14. Dependências não utilizadas devem ser removidas do projeto final.
15. O build final deve evitar carregar React no cliente quando não houver necessidade funcional.

### 4. Continuidade do deploy na Vercel

O fluxo de publicação atual deve continuar simples. A integração/hook da Vercel que executa automaticamente quando mudanças chegam à `main` deve continuar funcionando após a migração.

Requisitos funcionais:

16. O projeto migrado deve ter scripts de build compatíveis com a Vercel.
17. O output gerado deve ser publicável pela Vercel sem etapas manuais adicionais.
18. A migração deve documentar qualquer ajuste necessário de configuração de build/deploy.
19. O fluxo esperado deve continuar: merge/push em `main` dispara deploy automático.

### 5. Validação funcional e visual

A migração deve ser validada contra o comportamento público atual e contra o design aprovado.

Requisitos funcionais:

20. A home deve renderizar corretamente.
21. A página de projeto deve renderizar corretamente.
22. A navegação por âncoras deve continuar funcionando.
23. Links externos de GitHub, LinkedIn e email devem continuar corretos.
24. Tema claro/escuro deve continuar funcional.
25. Testes E2E existentes devem ser mantidos ou atualizados sem reduzir os fluxos cobertos.

## Experiência do usuário

A jornada do usuário deve permanecer igual ou melhor:

1. O visitante acessa a home e vê rapidamente nome, senioridade, stack, disponibilidade e CTA.
2. O visitante escaneia competências e formação para entender posicionamento técnico.
3. O visitante visualiza o projeto Cestou com decisões técnicas e link para detalhe/código.
4. O visitante acessa contato por LinkedIn, GitHub ou email.
5. O visitante pode alternar tema claro/escuro sem impacto perceptível de performance.

Requisitos de UI/UX:

- Preservar o estilo minimalista, editorial, técnico e recrutável.
- Evitar nova landing page, hero genérico ou blocos decorativos sem função.
- Manter tipografia, espaçamento, cards e hierarquia próximos do estado atual.
- Garantir responsividade em desktop e mobile.
- Evitar texto sobreposto, clipping ou layout quebrado.
- Garantir foco visível, nomes acessíveis e contraste adequado.

Requisitos de acessibilidade:

- Links e botões devem possuir nomes acessíveis claros.
- Navegação por teclado deve continuar possível nos controles interativos.
- SVGs e imagens devem ter `alt`/labels adequados conforme função.
- Conteúdo principal deve preservar estrutura semântica coerente.

## Restrições técnicas de alto nível

- A migração deve ser total para Astro, não apenas um spike paralelo.
- A Vercel deve continuar sendo a plataforma de deploy.
- O fluxo de deploy automático via `main` deve ser preservado.
- O layout atual deve ser preservado como baseline visual.
- O escopo público atual deve ser mantido: home, projeto/detalhe, contato, tema, metadata e assets.
- O projeto deve continuar usando TypeScript.
- O projeto deve continuar usando `pnpm`.
- O projeto deve manter validação automatizada relevante, incluindo build e E2E dos fluxos principais.
- Qualquer decisão sobre React islands, scripts de tema, estrutura de dados, remoção de dependências e configuração de Vercel será detalhada na TechSpec.

## Fora do escopo

- Redesign visual amplo.
- Nova identidade visual.
- Blog.
- CMS.
- Internacionalização.
- Novas páginas além das rotas públicas atuais.
- Formulário de contato.
- Analytics.
- Integrações externas novas.
- Mudanças de copy ou posicionamento profissional além de ajustes mínimos necessários pela migração.
- Alterações no fluxo de deploy que substituam a Vercel ou removam o deploy automático da `main`.
- Otimizações avançadas não relacionadas à migração, como criação de pipeline de imagens complexa, dashboard de métricas ou monitoramento dedicado.
