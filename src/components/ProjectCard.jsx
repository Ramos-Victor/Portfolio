import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({ project, language, t }) => (
  <motion.article
    whileHover={{ y: -8 }}
    className="glass overflow-hidden rounded-3xl shadow-lg transition duration-300"
  >
    <img src={project.image} alt={project.title[language]} className="h-52 w-full object-cover" />
    <div className="p-6">
      <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title[language]}</h3>
      <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">{project.description[language]}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200/60 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 dark:text-brand-400"
        >
          {t("projects.liveDemo")} <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          GitHub <Github className="h-4 w-4" />
        </a>
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
