import FadeIn from "../ui/FadeIn";
import { Link } from "react-router-dom";

/**
 * Bloc compact à insérer sur les pages produit (MédicoBus, MammoBus, DermatoBus)
 * pour proposer soit la location (prestation Hocoia), soit l'achat du même modèle.
 *
 * Props :
 *   modele = "MédicoBus" | "MammoBus" | "DermatoBus"
 *   acquerirHref = "/acquerir-un-bus" (lien vers la page acquisition)
 */
export default function AchatOuLocationBlock({ modele, acquerirHref = "/acquerir-un-bus" }) {
  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <FadeIn className="mb-10">
          <p className="text-[11px] uppercase tracking-widest font-medium text-gray-400 mb-3">
            Modèles d'engagement
          </p>
          <h2 className="font-display font-bold text-3xl leading-tight text-gray-900">
            Louer ou acheter votre {modele}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mt-3">
            Vous pouvez bénéficier du {modele} en prestation ponctuelle (Hocoia vient sur site avec son propre bus et ses soignants), ou acquérir le même modèle pour votre structure.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Carte Location / Prestation */}
          <FadeIn>
            <div className="bg-white border border-gray-200 rounded-2xl p-7 h-full flex flex-col">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 mb-5 self-start">
                Prestation
              </span>
              <h3 className="font-display font-bold text-xl text-gray-900 leading-tight mb-3">
                Location / prestation ponctuelle
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                Hocoia intervient avec son propre {modele} et ses soignants pour une journée ou une campagne dans votre structure. Aucun investissement, organisation entièrement prise en charge.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0 mt-0.5">→</span> Équipe médicale mise à disposition</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0 mt-0.5">→</span> Idéal pour tester ou pour des campagnes ponctuelles</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0 mt-0.5">→</span> Pas d'investissement initial</li>
              </ul>
              <button
                type="button"
                className="self-start border border-gray-300 text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
              >
                Organiser une journée →
              </button>
            </div>
          </FadeIn>

          {/* Carte Achat */}
          <FadeIn delay={0.1}>
            <div className="bg-gray-900 rounded-2xl p-7 h-full flex flex-col">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/10 text-white mb-5 self-start">
                Acquisition · Recommandé
              </span>
              <h3 className="font-display font-bold text-xl text-white leading-tight mb-3">
                Acheter votre propre {modele}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">
                Hocoia conçoit, équipe et vous livre votre propre {modele} : à l'identique du nôtre ou ajusté à vos besoins (spécialités, équipements, aménagement). Votre structure dispose d'un dispositif pérenne, déployé selon votre calendrier, à vos couleurs.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-gray-500 shrink-0 mt-0.5">→</span> Le {modele} à l'identique ou avec ajustements sur mesure</li>
                <li className="flex items-start gap-2"><span className="text-gray-500 shrink-0 mt-0.5">→</span> Formation de vos équipes + maintenance Hocoia</li>
                <li className="flex items-start gap-2"><span className="text-gray-500 shrink-0 mt-0.5">→</span> Achat direct, partenariat ou leasing</li>
              </ul>
              <Link
                to={acquerirHref}
                className="self-start bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-150"
              >
                Étudier mon acquisition →
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
