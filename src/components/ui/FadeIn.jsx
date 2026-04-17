import { motion } from "framer-motion";

/**
 * Wrapper fade-in + slide-up au scroll (whileInView).
 * Props :
 *   delay    — délai en secondes (default 0)
 *   className — classes transmises au div
 */
export default function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
