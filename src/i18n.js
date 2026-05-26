import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-US/translation.json";
import ptBR from "./locales/pt-BR/translation.json";

const storedLanguage = localStorage.getItem("portfolio_language");

i18n.use(initReactI18next).init({
  resources: {
    "en-US": { translation: enUS },
    "pt-BR": { translation: ptBR },
  },
  lng: storedLanguage || "pt-BR",
  fallbackLng: "en-US",
  interpolation: { escapeValue: false },
});

export default i18n;
