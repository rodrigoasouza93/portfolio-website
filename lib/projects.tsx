import type { ReactNode } from "react"

export interface ProjectType {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  sourceUrl?: string
  duration: string
  teamSize: string
  role: string
  completion: string
  overview: string[]
  features: string[]
  challenges?: {
    title: string
    description: string
  }[]
  techStack: {
    name: string
    description?: string
    icon: ReactNode
  }[]
  testimonial?: {
    name: string
    role: string
    text: string
  }
}

// ----------------------------------------------------------------------
// 1. LISTA DE DESTAQUE
// ----------------------------------------------------------------------
export const featuredProjects = [
  {
    id: "cestou-mobile",
    title: "Cestou - Compras Inteligentes",
    description:
      "Assistente móvel para análise de custo-benefício e gerenciamento de listas de compras com arquitetura offline-first.",
    image: "/images/cestou-app.webp",
    technologies: ["React Native", "Expo", "TypeScript"],
    sourceUrl: "https://github.com/rodrigoasouza93/cestou",
  },
]

// ----------------------------------------------------------------------
// 2. DETALHAMENTO DO PROJETO
// ----------------------------------------------------------------------
export const projects: ProjectType[] = [
  {
    id: "cestou-mobile",
    title: "Cestou - Assistente de Compras Inteligente",
    description:
      "Assistente móvel para análise de custo-benefício e gerenciamento de listas de compras.",
    fullDescription:
      "Cestou é um aplicativo móvel multiplataforma projetado para otimizar a tomada de decisões financeiras em ambientes de varejo. Ao combinar uma interface de lista de compras sem atrito com uma calculadora algorítmica de preço unitário, ele ajuda os usuários a identificar instantaneamente os produtos com melhor valor (por exemplo, comparando embalagens de 500g vs 1.2kg).",
    image: "/images/cestou-app.webp",
    technologies: ["React Native", "Expo", "TypeScript", "NativeWind"],
    sourceUrl: "https://github.com/rodrigoasouza93/cestou",
    duration: "Contínuo",
    teamSize: "Líder Solo",
    role: "Arquiteto Mobile",
    completion: "2024",
    overview: [
      "O objetivo principal foi reduzir a carga cognitiva para os compradores. O aplicativo apresenta um padrão de design para 'uso com uma mão', permitindo que os usuários adicionem itens rapidamente e calculem as relações preço-por-unidade enquanto navegam pelos corredores do supermercado.",
      "Construído com uma arquitetura 'Offline-First', garantindo que a persistência de dados e as funcionalidades principais funcionem perfeitamente mesmo em locais com pouca cobertura de rede, sincronizando eficientemente quando a conectividade é restaurada."
    ],
    features: [
      "Algoritmo de Normalização de Preço em Tempo Real (Comparar L vs ml, kg vs g)",
      "Desempenho otimizado de FlatList para grandes conjuntos de dados",
      "Camada de Persistência Local (AsyncStorage) para confiabilidade offline",
      "UX/UI intuitiva focada em velocidade e acessibilidade"
    ],
    challenges: [
      {
        title: "Normalização Lógica Entre Unidades",
        description:
          "Desenvolvi um utilitário robusto para lidar com conversões de unidades complexas dinamicamente, garantindo comparações de preços precisas entre diferentes métricas.",
      },
      {
        title: "Gerenciamento de Estado Mobile",
        description: "Implementei uma arquitetura de estado leve para lidar com múltiplas listas e atualizações instantâneas da calculadora sem travamentos na UI (mantendo 60fps).",
      },
    ],
    techStack: [
      {
        name: "React Native / Expo",
        description: "Framework principal para implantação rápida multiplataforma",
        icon: <div className="text-cyan-400 font-bold">RN</div>,
      },
      {
        name: "TypeScript",
        description: "Garantindo segurança de tipos para a lógica de negócios",
        icon: <div className="text-blue-600 font-bold">TS</div>,
      },
      {
        name: "NativeWind",
        description: "Estilização CSS utility-first para React Native",
        icon: <div className="text-teal-400 font-bold">NW</div>,
      },
    ],
    testimonial: {
      name: "Usuário do App",
      role: "Beta Tester",
      text: "Simples, direto e economiza dinheiro real. A calculadora de comparação é algo que eu não sabia que precisava até usar.",
    }
  },
]

export function getProjectById(id: string): ProjectType | undefined {
  return projects.find((project) => project.id === id)
}