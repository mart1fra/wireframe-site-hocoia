import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "../components/ui/FadeIn";

// ─── Données ──────────────────────────────────────────────────────────────

const SUCCESS_MESSAGES = {
  rdv:        "Notre équipe soins vous recontacte pour confirmer votre rendez-vous.",
  alerte:     "Vous serez notifié dès qu'un bus est prévu dans votre secteur.",
  deploiement:"Une chargée d'affaires vous recontacte pour discuter de votre projet.",
  soignant:   "Notre équipe vous recontacte pour vous présenter le réseau Hocoia.",
  autre:      "Notre équipe prend en charge votre demande et vous répond rapidement.",
};

const BTOB = [
  {
    icon: "🏛️",
    title: "Secteur public",
    desc: "Communes, intercommunalités, régions : intégrez nos bus dans votre politique de santé publique.",
    cta: "Prendre RDV →",
  },
  {
    icon: "🏢",
    title: "Entreprises",
    desc: "Bilans de santé au travail, dépistages, médecine d'entreprise déployée directement sur site.",
    cta: "Prendre RDV →",
  },
  {
    icon: "🚌",
    title: "Acquérir un bus",
    desc: "Opérateurs de santé, mutuelles, cliniques : équipez-vous d'une unité mobile clé en main.",
    cta: "Nous écrire →",
  },
];

// ─── Carte BtoB ───────────────────────────────────────────────────────────

function BtoBCard({ icon, title, desc, cta }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-[18px] p-7 flex flex-col gap-4 overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-gray-900 rounded-t-[18px]"
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      />
      <span className="text-3xl">{icon}</span>
      <div>
        <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
      </div>
      <button
        type="button"
        className="mt-auto self-start text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
      >
        {cta}
      </button>
    </div>
  );
}

// ─── Formulaire ───────────────────────────────────────────────────────────

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]           = useState({ prenom: "", nom: "", email: "", tel: "", objet: "", ville: "", message: "" });
  const [errorField, setErrorField] = useState(null);

  const showVille = form.objet === "rdv" || form.objet === "alerte";

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const required = ["prenom", "email", "objet"];
    const missing  = required.find((f) => !form[f].trim());
    if (missing) {
      setErrorField(missing);
      document.getElementById(`cf-${missing}`)?.focus();
      setTimeout(() => setErrorField(null), 2000);
      return;
    }
    setSubmitted(true);
  }

  function fieldCls(name) {
    const base = "w-full rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors bg-gray-50 focus:bg-white border";
    return errorField === name
      ? `${base} border-red-400 focus:border-red-400`
      : `${base} border-gray-200 focus:border-gray-900`;
  }

  return (
    <div className="bg-white rounded-[20px] p-7 shadow-xl shadow-black/5">
      <div className="mb-6">
        <h2 className="font-display font-bold text-gray-900 text-xl">Votre demande</h2>
      </div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              {/* Prénom + Nom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  id="cf-prenom"
                  type="text"
                  placeholder="Prénom"
                  value={form.prenom}
                  onChange={update("prenom")}
                  className={fieldCls("prenom")}
                />
                <input
                  type="text"
                  placeholder="Nom"
                  value={form.nom}
                  onChange={update("nom")}
                  className={fieldCls("nom")}
                />
              </div>

              {/* Email */}
              <input
                id="cf-email"
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={update("email")}
                className={fieldCls("email")}
              />

              {/* Téléphone */}
              <input
                type="tel"
                placeholder="Téléphone"
                value={form.tel}
                onChange={update("tel")}
                className={fieldCls("tel")}
              />

              {/* Objet */}
              <select
                id="cf-objet"
                value={form.objet}
                onChange={update("objet")}
                className={`${fieldCls("objet")} cursor-pointer ${!form.objet ? "text-gray-400" : "text-gray-900"}`}
              >
                <option value="" disabled>Sélectionnez un motif…</option>
                <option value="rdv">Prendre rendez-vous à bord d'un bus</option>
                <option value="alerte">Être alerté d'un passage près de chez moi</option>
                <option value="deploiement">Déployer Hocoia sur mon territoire / en entreprise</option>
                <option value="soignant">Rejoindre le réseau de soignants Hocoia</option>
                <option value="autre">Autre demande</option>
              </select>

              {/* Ville — conditionnelle */}
              <AnimatePresence>
                {showVille && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <input
                      type="text"
                      placeholder="Ville ou code postal"
                      value={form.ville}
                      onChange={update("ville")}
                      className={fieldCls("ville")}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <textarea
                placeholder="Votre message (facultatif)"
                rows={3}
                value={form.message}
                onChange={update("message")}
                className={`${fieldCls("message")} resize-none`}
              />

              <button
                type="submit"
                className="w-full bg-gray-900 text-white font-semibold text-sm py-4 rounded-[24px] hover:bg-gray-700 transition-colors duration-200 cursor-pointer mt-1"
              >
                Envoyer ma demande →
              </button>

              <p className="text-[11px] text-gray-400 leading-relaxed text-center pt-1">
                Vos données sont protégées conformément au RGPD. Aucune information médicale requise ici.{" "}
                <span className="underline cursor-pointer">Politique de confidentialité.</span>
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success-msg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5">
              <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-gray-900 text-lg mb-3">Message envoyé !</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {SUCCESS_MESSAGES[form.objet]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Colonne gauche hero ──────────────────────────────────────────────────

function HeroLeft() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: "easeOut", delay },
  });

  return (
    <div className="flex flex-col gap-7">
      {/* Texte d'intro */}
      <div>
        <motion.h1 {...fadeUp(0.06)} className="font-display font-bold text-4xl sm:text-5xl text-gray-900 leading-[1.1] mb-4">
          La santé vient à vous.
        </motion.h1>
        <motion.p {...fadeUp(0.12)} className="text-gray-500 text-base leading-relaxed max-w-sm">
          Nos bus médicaux connectés se déplacent là où vous en avez besoin. Prenez rendez-vous,
          recevez une alerte de passage, ou appelez-nous directement.
        </motion.p>
      </div>

      {/* Badge couverture animé */}
      <motion.div {...fadeUp(0.18)} className="flex items-center gap-3 bg-white border border-gray-100 rounded-[14px] px-4 py-3">
        <div className="relative shrink-0 w-3 h-3">
          <span className="absolute inset-0 rounded-full bg-gray-900 animate-ping opacity-30" />
          <span className="relative block w-3 h-3 rounded-full bg-gray-900" />
        </div>
        <p className="text-xs text-gray-600 leading-snug">
          <span className="font-semibold text-gray-900">Couverture nationale</span>{" "}
          — France métropolitaine & DOM · International en déploiement
        </p>
      </motion.div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <>
      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <HeroLeft />
            <div className="lg:sticky lg:top-[100px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bandeau BtoB ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            {/* En-tête 2 colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  Partenaires & institutions
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
                  Vous représentez une organisation ?
                </h2>
              </div>
              <div className="lg:pt-8">
                <p className="text-gray-500 text-base leading-relaxed">
                  Hocoia accompagne les entreprises, les collectivités et les établissements de santé dans le
                  déploiement de programmes de prévention mobile. Des solutions clé en main, adaptées à chaque contexte.
                </p>
              </div>
            </div>

            {/* 3 cartes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {BTOB.map((card) => (
                <BtoBCard key={card.title} {...card} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
