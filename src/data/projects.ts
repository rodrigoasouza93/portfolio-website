export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectTechnology {
  name: string;
  description?: string;
  badge: string;
}

export interface ProjectTestimonial {
  name: string;
  role: string;
  text: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  duration: string;
  teamSize: string;
  role: string;
  completion: string;
  overview: string[];
  features: string[];
  highlights: ProjectChallenge[];
  challenges?: ProjectChallenge[];
  techStack: ProjectTechnology[];
  testimonial?: ProjectTestimonial;
}

export const projects: Project[] = [
  {
    id: "cestou-mobile",
    title: "Cestou - Assistente de Compras Inteligente",
    description:
      "Assistente móvel para análise de custo-benefício e gerenciamento de listas de compras.",
    fullDescription:
      "Cestou é um aplicativo móvel multiplataforma projetado para otimizar a tomada de decisões financeiras em ambientes de varejo. Ao combinar uma interface de lista de compras sem atrito com uma calculadora algorítmica de preço unitário, ele ajuda os usuários a identificar instantaneamente os produtos com melhor valor, como na comparação entre embalagens de 500g e 1.2kg.",
    image: "/images/cestou-app.webp",
    technologies: ["React Native", "Expo", "TypeScript", "NativeWind"],
    sourceUrl: "https://github.com/rodrigoasouza93/cestou",
    duration: "Contínuo",
    teamSize: "Líder Solo",
    role: "Arquiteto Mobile",
    completion: "2024",
    overview: [
      "O objetivo principal foi reduzir a carga cognitiva para compradores. O aplicativo apresenta um padrão de design para uso com uma mão, permitindo adicionar itens rapidamente e calcular relações preço-por-unidade durante a compra.",
      "Construído com uma arquitetura offline-first, garantindo que persistência de dados e funcionalidades principais funcionem mesmo em locais com pouca cobertura de rede.",
    ],
    features: [
      "Algoritmo de normalização de preço em tempo real para comparar L vs ml e kg vs g",
      "Desempenho otimizado de listas para grandes conjuntos de dados",
      "Camada de persistência local para confiabilidade offline",
      "UX/UI intuitiva focada em velocidade e acessibilidade",
    ],
    highlights: [
      {
        title: "Comparação inteligente",
        description: "Normalização de preço por unidade para apoiar decisões de compra.",
      },
      {
        title: "Arquitetura confiável",
        description: "Persistência local para uso em ambientes com pouca conectividade.",
      },
      {
        title: "Experiência mobile",
        description: "Fluxos rápidos para uso com uma mão durante compras reais.",
      },
      {
        title: "Qualidade técnica",
        description: "TypeScript, Expo e React Native com atenção a performance de lista.",
      },
    ],
    challenges: [
      {
        title: "Normalização lógica entre unidades",
        description:
          "Desenvolvi um utilitário robusto para lidar com conversões de unidades complexas dinamicamente, garantindo comparações de preços precisas entre diferentes métricas.",
      },
      {
        title: "Gerenciamento de estado mobile",
        description:
          "Implementei uma arquitetura de estado leve para lidar com múltiplas listas e atualizações instantâneas da calculadora sem travamentos na UI.",
      },
    ],
    techStack: [
      {
        name: "React Native / Expo",
        description: "Framework principal para implantação rápida multiplataforma",
        badge: "RN",
      },
      {
        name: "TypeScript",
        description: "Segurança de tipos para a lógica de negócios",
        badge: "TS",
      },
      {
        name: "NativeWind",
        description: "Estilização utility-first para React Native",
        badge: "NW",
      },
    ],
    testimonial: {
      name: "Usuário do App",
      role: "Beta Tester",
      text: "Simples, direto e economiza dinheiro real. A calculadora de comparação é algo que eu não sabia que precisava até usar.",
    },
  },
];

export const featuredProjects = projects.map(({ id, title, description, image, technologies, sourceUrl, highlights }) => ({
  id,
  title: title.replace("Assistente de Compras Inteligente", "Compras Inteligentes"),
  description,
  image,
  technologies: technologies.slice(0, 3),
  sourceUrl,
  highlights,
}));

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
