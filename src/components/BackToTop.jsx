import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const BackToTop = ({ visible }) => (
  <motion.button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 z-40 rounded-full bg-brand-600 p-3 text-white shadow-premium"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
    transition={{ duration: 0.25 }}
    aria-label="Back to top"
  >
    <ChevronUp className="h-5 w-5" />
  </motion.button>
);

export default BackToTop;
