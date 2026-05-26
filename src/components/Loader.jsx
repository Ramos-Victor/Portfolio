import { motion } from "framer-motion";

const Loader = () => (
  <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-50 dark:bg-slate-950">
    <motion.div
      className="h-16 w-16 rounded-full border-2 border-brand-400 border-t-transparent"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default Loader;
