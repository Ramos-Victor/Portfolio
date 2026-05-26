export const personalInfo = {
  name: "Victor Ramos",
  role: {
    "pt-BR": "Desenvolvedor Full Stack Jr",
    "en-US": "Junior Full Stack Developer",
  },
  email: "vm02oliveiraramos@gmail.com",
  github: "https://github.com/Ramos-Victor",
  linkedin: "https://www.linkedin.com/in/ramos-victordevjr/",
  resumeUrl: "/resume.pdf",
  location: {
    "pt-BR": "São José dos Campos, SP • Brasil",
    "en-US": "São José dos Campos, SP • Brazil",
  },
};

export const socialLinks = [
  { label: "GitHub", url: personalInfo.github },
  { label: "LinkedIn", url: personalInfo.linkedin },
  { label: "Email", url: `mailto:${personalInfo.email}` },
];
