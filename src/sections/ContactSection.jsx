import { useTranslation } from "react-i18next";
import { personalInfo, socialLinks } from "../data/personal";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <AnimatedSection id="contact">
      <div className="section-shell">
        <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} description={t("contact.description")} />
        <div className="glass grid gap-6 rounded-3xl p-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{personalInfo.name}</h3>
            <p className="mb-2 text-slate-700 dark:text-slate-300">{personalInfo.role[language]}</p>
            <p className="mb-4 text-slate-600 dark:text-slate-400">{personalInfo.location[language]}</p>
            <a href={`mailto:${personalInfo.email}`} className="text-brand-700 hover:text-brand-600 dark:text-brand-300 dark:hover:text-brand-200">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <p className="text-slate-700 dark:text-slate-300">{t("contact.copy")}</p>
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
