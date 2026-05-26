import { useTranslation } from "react-i18next";
import { socialLinks } from "../data/personal";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200/60 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row md:px-8 dark:text-slate-400">
        <p>{t("footer.rights")}</p>
        <div className="flex items-center gap-6">
          <a href="#home" className="hover:text-slate-900 dark:hover:text-slate-200">
            {t("footer.quickHome")}
          </a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-slate-200">
            {t("footer.quickProjects")}
          </a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-200">
            {t("footer.quickContact")}
          </a>
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
};

export default Footer;
