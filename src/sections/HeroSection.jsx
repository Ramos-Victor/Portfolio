import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroVisual from "../assets/hero-visual.svg";
import Button from "../components/Button";
import AnimatedSection from "../components/AnimatedSection";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="home" className="relative overflow-hidden bg-hero-glow pt-32">
      <div className="section-shell grid items-center gap-14 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex rounded-full border border-slate-200/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-brand-700 dark:border-white/15 dark:text-brand-300">
            {t("hero.badge")}
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight text-slate-900 dark:text-slate-100 md:text-6xl">{t("hero.title")}</h1>
          <p className="mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-300">{t("hero.subtitle")}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="#projects">{t("hero.ctaPrimary")}</Button>
            <Button variant="secondary" href="#contact">
              {t("hero.ctaSecondary")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-cyan-400/20 blur-2xl" />
          <img
            src={heroVisual}
            alt=""
            role="presentation"
            className="relative w-full rounded-[2rem] border border-slate-200/60 dark:border-white/10 shadow-premium"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
