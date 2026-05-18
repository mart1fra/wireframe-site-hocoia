import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

const listV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ParcoursPatientSection({ data, variant = "gray" }) {
  const bg = variant === "white" ? "bg-white" : "bg-gray-50";

  return (
    <section className={`${bg} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">

        <FadeIn className="mb-16">
          <p className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-3">
            {data.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight mb-3">
            {data.h2}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            {data.subtitle}
          </p>
        </FadeIn>

        <motion.div
          variants={listV}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {data.steps.map((step, index) => (
            <motion.div key={step.id} variants={itemV} className="relative">

              {/* Connecteur desktop */}
              {index < data.steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[2.5rem] right-0 h-px bg-gray-200 z-0" />
              )}

              <div className="relative z-10">
                {/* Numéro */}
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center mb-5 shrink-0">
                  <span className="text-white text-[11px] font-bold leading-none">{step.number}</span>
                </div>

                <h3 className="font-semibold text-sm text-gray-900 mb-2 leading-snug pr-4">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed mb-4 pr-4">
                  {step.description}
                </p>

                {step.badge && (
                  <span className="inline-block text-[10px] font-medium uppercase tracking-wide text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-md">
                    {step.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
