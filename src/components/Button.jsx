import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const Button = ({ children, href, variant = "primary", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-500 shadow-premium",
    secondary:
      "border border-slate-200/60 bg-white/70 text-slate-900 hover:border-brand-400/60 hover:bg-brand-500/10 dark:border-white/15 dark:bg-white/5 dark:text-slate-100",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={classes} href={href} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={classes} {...props}>
      {children}
    </motion.button>
  );
};

export default Button;
