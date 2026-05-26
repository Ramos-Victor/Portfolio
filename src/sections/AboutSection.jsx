import { useTranslation } from "react-i18next";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import AnimatedSection from "../components/AnimatedSection";
import { skillCards, techStack, valueProps } from "../data/skills";

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <AnimatedSection id="about">
      <div className="section-shell">
        <SectionHeading
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          description={t("about.description")}
        />
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {skillCards.map((item) => (
            <SkillCard
              key={item.title["en-US"]}
              item={item}
              language={language}
            />
          ))}
        </div>
        <div className="mb-8 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200/60 px-4 py-2 text-sm text-slate-700 dark:border-white/15 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {valueProps.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.label["en-US"]}
                className="glass flex items-center gap-3 rounded-2xl p-4"
              >
                <Icon className="h-5 w-5 text-brand-400" />
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {value.label[language]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
