import { Moon, Sun } from "lucide-react";

const ThemeToggle = ({ isDark, onToggle }) => (
  <button
    onClick={onToggle}
    className="inline-flex items-center rounded-full border border-slate-200/60 p-2 text-slate-700 transition hover:border-brand-400/60 dark:border-white/10 dark:text-slate-200"
    aria-label="Toggle theme"
  >
    {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
  </button>
);

export default ThemeToggle;
