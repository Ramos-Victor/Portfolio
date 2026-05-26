import {
  Braces,
  Database,
  Rocket,
  ShieldCheck,
  Server,
  Wrench,
} from "lucide-react";

export const skillCards = [
  {
    icon: Server,
    title: { "pt-BR": "API REST com Node.js", "en-US": "Node.js REST API" },
    description: {
      "pt-BR":
        "Criação de APIs com Express, rotas protegidas, autenticação JWT e operações CRUD.",
      "en-US":
        "Building APIs with Express, protected routes, JWT authentication and CRUD operations.",
    },
  },
  {
    icon: Braces,
    title: {
      "pt-BR": "Front-end com React + Vite",
      "en-US": "React + Vite front-end",
    },
    description: {
      "pt-BR":
        "Interfaces responsivas, consumo de API e microinterações com Framer Motion e Lucide.",
      "en-US":
        "Responsive UI, API consumption and micro-interactions with Framer Motion and Lucide.",
    },
  },
  {
    icon: Database,
    title: {
      "pt-BR": "Banco de dados (Postgres)",
      "en-US": "Database (Postgres)",
    },
    description: {
      "pt-BR":
        "Modelagem básica, integração com backend e persistência para catálogos e sistemas.",
      "en-US":
        "Basic modeling, backend integration and persistence for catalogs and systems.",
    },
  },
];

export const techStack = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "JWT",
  "React",
  "JavaScript",
  "Git",
  "GitHub",
  "PHP",
];

export const valueProps = [
  {
    icon: Rocket,
    label: {
      "pt-BR": "Entrega com consistência",
      "en-US": "Consistent delivery",
    },
  },
  {
    icon: ShieldCheck,
    label: {
      "pt-BR": "Boas práticas e organização",
      "en-US": "Best practices and structure",
    },
  },
  {
    icon: Wrench,
    label: { "pt-BR": "CRUD e integrações", "en-US": "CRUD and integrations" },
  },
];
