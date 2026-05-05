import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqBubble() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">

      {/* Tooltip "Questions fréquentes" */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="mr-3 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap select-none"
          >
            Questions fréquentes
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton rond */}
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => navigate("/faq")}
        className="w-14 h-14 rounded-full bg-gray-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer flex items-center justify-center shrink-0"
        aria-label="Questions fréquentes"
      >
        <span className="font-display font-bold text-2xl leading-none select-none">
          ?
        </span>
      </motion.button>
    </div>
  );
}
