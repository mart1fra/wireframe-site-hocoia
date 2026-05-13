import { useState } from "react";
import { motion } from "framer-motion";

export default function AccordionItem({ question, answer, link }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-150 cursor-pointer text-left"
      >
        <span className="text-sm font-semibold text-gray-900 leading-snug pr-4">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.15 }}
          className="text-gray-400 text-2xl font-extralight leading-none shrink-0 select-none"
        >
          +
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
        className="bg-white"
      >
        <div className="px-6 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">
            {answer}
          </p>
          {link && (
            <a
              href={link.href}
              className="inline-block mt-3 text-xs font-medium text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
