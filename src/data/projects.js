import projectTwo from "../assets/projects/project-2.svg";

export const projectCategories = ["all"];

export const projects = [
  {
    id: 1,
    category: "web",
    image: projectTwo,
    title: {
      "pt-BR": "EV Manutenção - Catálogo Web",
      "en-US": "EV Manutenção - Web Catalog",
    },
    description: {
      "pt-BR":
        "Aplicação web de catálogo para a empresa EV Manutenção, com frontend em React e backend em Node.js/Express integrado ao Postgres. Permite listar, detalhar e administrar produtos e serviços por meio de uma interface responsiva e moderna.",
      "en-US":
        "Web catalog application for EV Manutenção, with a React frontend and Node.js/Express backend integrated with Postgres. It lists, details and manages products and services through a modern, responsive interface.",
    },
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Postgres",
      "Framer Motion",
      "Lucide React",
    ],
    demo: "https://evmanutencao-seven.vercel.app/",
    github: "https://github.com/Ramos-Victor/EVManutencao-Catalago",
  },
  {
    id: 2,
    category: "web",
    image: projectTwo,
    title: {
      "pt-BR": "Resolut.On - Help Desk",
      "en-US": "Resolut.On - Help Desk",
    },
    description: {
      "pt-BR":
        "Sistema de Help Desk desenvolvido como projeto de TCC, focado no gerenciamento de chamados, unidades, usuários, equipamentos e salas. Contém controle de permissões, chat interno, avaliação de atendimento e dashboard administrativo.",
      "en-US":
        "Help Desk system built as a final course project, focused on managing tickets, units, users, equipment and rooms. Includes permission control, internal chat, feedback on support and an admin dashboard.",
    },
    tech: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "Bootstrap 4",
      "JavaScript",
      "jQuery",
      "Composer",
    ],
    demo: "https://github.com/Ramos-Victor/Reso",
    github: "https://github.com/Ramos-Victor/Reso",
  },
];
