import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

/**
 * Composant SEO compact : 1 seul titre H2 visible, le contenu (intro + blocs h3)
 * est replié dans un accordéon fermé par défaut.
 *
 * Props :
 *   data = {
 *     h2: string,
 *     intro?: string | string[],
 *     blocs: [{ h3, paragraphs: string[] }],
 *   }
 */
export default function SeoSection({ data }) {
  const [open, setOpen] = useState(false);
  if (!data) return null;

  const introParagraphs = Array.isArray(data.intro)
    ? data.intro
    : data.intro
      ? [data.intro]
      : [];

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <FadeIn>
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors duration-150 cursor-pointer text-left"
            >
              <span className="font-display font-semibold text-sm text-gray-900 leading-snug pr-4">
                {data.h2}
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
            >
              <div className="px-6 pb-8 pt-2 border-t border-gray-100">
                {introParagraphs.length > 0 && (
                  <div className="space-y-3 mb-8 pt-4">
                    {introParagraphs.map((p, i) => (
                      <p key={i} className="text-sm text-gray-600 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                {data.blocs?.map((bloc, i) => (
                  <div key={i} className="mb-8 last:mb-0">
                    <h3 className="font-display font-semibold text-base text-gray-900 mb-3 leading-snug">
                      {bloc.h3}
                    </h3>
                    <div className="space-y-3">
                      {bloc.paragraphs.map((p, j) => (
                        <p key={j} className="text-sm text-gray-600 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
