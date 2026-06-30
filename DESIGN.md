# Design System — Portfolio Website

Este documento preserva a direção visual atual do portfólio. Use antes de qualquer mudança de UI, redesign, migração para Astro ou alteração de componentes.

## Objetivo visual

O site deve parecer um portfólio técnico sênior para recrutadores: claro, sóbrio, rápido e confiante. A experiência deve destacar tecnologia, arquitetura, produto e contato sem parecer página genérica de agência ou template SaaS.

## Princípios

- Clareza antes de ornamentação.
- Baixo ruído visual, alta legibilidade.
- Primeira dobra deve comunicar nome, senioridade, stack, disponibilidade e CTA.
- Layout deve favorecer escaneabilidade: seções com headings fortes, cards apenas para conteúdo agrupado e listas técnicas curtas.
- Evite métricas inventadas. Use evidências reais: anos desde 2018, stack, formação, projeto Cestou, GitHub/LinkedIn/email.

## Tom e copy

- Idioma principal: Português (pt-BR).
- Tom: direto, técnico, maduro e acessível.
- Público prioritário: recrutadores, tech leads e pessoas avaliando fit técnico.
- Evite buzzwords sem evidência. Quando citar IA, Go, arquitetura ou performance, conecte com formação, stack ou decisões do projeto.

## Paleta e tema

- Base clara/escura via tokens existentes de Tailwind/shadcn.
- Use neutros como base dominante.
- Acentos devem ser pontuais para status, foco e links.
- Não transformar o site em uma paleta de uma cor só.
- Evite gradientes genéricos, blobs, bokeh/orbs e fundos decorativos pesados.

## Tipografia

- Headings grandes apenas no hero e seções principais.
- Cards, nav e elementos compactos devem usar texto menor e denso.
- Não usar letter-spacing negativo.
- Texto precisa caber no container em mobile e desktop.

## Componentes

- Header fixo, discreto, com monograma `RS`, nav e theme toggle.
- Hero com título forte, resumo técnico, CTAs e card de perfil.
- Competências agrupadas por domínio: backend, frontend, mobile e IA aplicada.
- Formação aplicada como evidência de direção técnica.
- Projeto em destaque deve explicar decisão técnica, arquitetura e impacto de uso.
- Contato deve ser direto, sem formulário desnecessário.

## Logo e favicon

- Marca atual: monograma `RS` vetorial em `components/logo-mark.tsx`.
- Favicon atual: `public/favicon.svg`.
- A marca deve funcionar pequena, em preto/branco e sem detalhes excessivos.

## Responsividade

- Mobile não pode depender de hover.
- CTAs devem continuar visíveis e clicáveis.
- Cards devem empilhar com espaçamento suficiente.
- Verificar pelo menos um viewport mobile quando mudar hero, header ou cards.

## Acessibilidade

- Links e botões com nomes acessíveis claros.
- Foco visível nos controles interativos.
- Contraste suficiente em texto primário/secundário.
- Imagens com `alt` útil quando transmitirem conteúdo.
- SVGs decorativos devem ser ocultos ou rotulados corretamente conforme contexto.

## Validação visual mínima

Para mudanças de UI:

- Rodar typecheck/build quando aplicável.
- Abrir a página localmente ou capturar screenshot.
- Conferir home desktop e mobile.
- Conferir rota de projeto se o header/nav/projeto mudar.
