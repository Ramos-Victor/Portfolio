import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const isPortuguese = i18n.language === "pt-BR";

  const toggleLanguage = () => {
    const next = isPortuguese ? "en-US" : "pt-BR";
    i18n.changeLanguage(next);
    localStorage.setItem("portfolio_language", next);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 px-3 py-2 text-xs font-medium text-slate-800 transition hover:border-brand-400/60 dark:border-white/10 dark:text-slate-200"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span>{isPortuguese ? "PT-BR" : "EN-US"}</span>
    </button>
  );
};

export default LanguageToggle;
