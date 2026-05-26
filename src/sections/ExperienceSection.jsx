import { useTranslation } from "react-i18next";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/experiences";

const ExperienceSection = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <AnimatedSection id="experience">
      <div className="section-shell">
        <SectionHeading eyebrow={t("experience.eyebrow")} title={t("experience.title")} description={t("experience.description")} />
        <div className="relative border-l border-slate-200/60 pl-8 dark:border-white/10">
          {experiences.map((item, index) => (
            <article key={`${item.company}-${index}`} className="relative mb-10">
              <span className="absolute -left-[2.2rem] top-1 h-3 w-3 rounded-full bg-brand-400" />
              <p className="text-xs uppercase tracking-[0.14em] text-brand-700 dark:text-brand-300">
                {item.period[language]}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.role[language]}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">{item.company}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.description[language]}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
