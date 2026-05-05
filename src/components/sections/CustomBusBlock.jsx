import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

// ─── Valeurs partagées (identiques sur les 3 pages) ───────────────────────

const SHARED_OPTIONS = [
  { id: "optho",         title: "Ophtalmologie",    description: "Bilan visuel, acuité, fond d'œil." },
  { id: "pneumo",        title: "Pneumologie",       description: "Spirométrie, saturation, auscultation." },
  { id: "bucco",         title: "Bucco-dentaire",    description: "Bilan santé bucco-dentaire préventif." },
  { id: "sante-mentale", title: "Santé mentale",     description: "Évaluation psychologique, dépistage burn-out." },
  { id: "diabeto",       title: "Diabétologie",      description: "Glycémie, HbA1c, suivi podologique." },
  { id: "autre",         title: "Autre spécialité",  description: "Sur devis selon vos besoins spécifiques." },
];

const SHARED_COMMITMENTS = [
  { bold: "Étude de faisabilité offerte",    rest: " avec un expert Hocoia, sans engagement de votre part." },
  { bold: "Devis ferme sous 48h",            rest: " après le cadrage initial, équipements et protocole inclus." },
  { bold: "Conception complète du bus,",     rest: " équipements médicaux et intégration HocoApp." },
  { bold: "Accompagnement du déploiement",   rest: " jusqu'à la première journée patient sur site." },
];

const SHARED_BUTTONS = [
  { label: "Discuter mon projet sur mesure →", primary: true },
  { label: "Nous contacter",                   primary: false },
];

const SHARED_NOTE = "Réponse sous 48h · Confidentiel";

// ─── Composant ────────────────────────────────────────────────────────────

export default function CustomBusBlock({
  title,
  paragraph,
  options     = SHARED_OPTIONS,
  commitments = SHARED_COMMITMENTS,
  buttons     = SHARED_BUTTONS,
  note        = SHARED_NOTE,
}) {
  return (
    <FadeIn className="mt-10">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">

        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-gray-100 border border-gray-200 rounded-full shrink-0" />
            <div>
              <h3 className="font-display font-bold text-lg text-gray-900 leading-snug">
                {title}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Sur mesure · Devis sous 48h · Sans engagement
              </p>
            </div>
          </div>
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest bg-gray-900 text-white px-3 py-1.5 rounded-full">
            Sur mesure
          </span>
        </div>

        {/* Body 2 colonnes */}
        <div className="grid grid-cols-[3fr_2fr] gap-10">

          {/* Gauche */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{paragraph}</p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
              }}
              className="grid grid-cols-2 gap-3"
            >
              {options.map((opt) => (
                <motion.div
                  key={opt.id}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-gray-100 border border-gray-200 rounded-md shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900 leading-tight">{opt.title}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{opt.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Droite */}
          <div>
            <h4 className="font-display font-bold text-sm text-gray-900 mb-5">
              Notre engagement
            </h4>

            <ul className="space-y-4 mb-6">
              {commitments.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gray-400 text-sm leading-none mt-0.5 shrink-0">→</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">{c.bold}</span>
                    {c.rest}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2">
              {buttons.map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  className={`w-full py-2.5 text-sm font-medium rounded-full transition-colors duration-150 cursor-pointer ${
                    btn.primary
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-500 italic mt-3 text-center">{note}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
