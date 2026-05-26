import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SECTION_IDS } from "../routes/sections";
import Button from "../components/Button";
import LanguageToggle from "../components/LanguageToggle";
import ThemeToggle from "../components/ThemeToggle";
import { cn } from "../utils/cn";

const Header = ({
  activeSection,
  isScrolled,
  isDark,
  toggleTheme,
  resumeUrl,
}) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = SECTION_IDS.map((id) => ({ id, label: t(`nav.${id}`) }));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        isScrolled
          ? "border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-slate-900 dark:text-slate-100"
        >
          Victor Ramos
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "text-sm transition hover:text-brand-300",
                activeSection === link.id ? "text-brand-300" : "text-slate-600 dark:text-slate-300",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <Button href={resumeUrl} target="_blank" rel="noreferrer">
            {t("nav.resume")}
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-slate-900 dark:text-slate-100" />
          ) : (
            <Menu className="h-6 w-6 text-slate-900 dark:text-slate-100" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="glass border-t border-slate-200/60 px-6 py-6 md:hidden dark:border-white/10"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="mb-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-slate-700 dark:text-slate-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              <Button
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2"
              >
                {t("nav.resume")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
