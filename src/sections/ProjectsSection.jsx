import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projectCategories, projects } from "../data/projects";
import { cn } from "../utils/cn";

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <AnimatedSection id="projects">
      <div className="section-shell">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.description")}
        />
        <div className="mb-8 flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                activeCategory === category
                  ? "border-brand-400 bg-brand-500/20 text-brand-700 dark:text-brand-300"
                  : "border-slate-200/60 text-slate-700 hover:border-brand-400/40 dark:border-white/10 dark:text-slate-300",
              )}
            >
              {t(`projects.filters.${category}`)}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
              t={t}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
