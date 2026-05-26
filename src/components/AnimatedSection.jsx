import { motion } from "framer-motion";

const AnimatedSection = ({ children, className = "", id }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.55, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
