import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const sections = [
  {
    id: "accueil",
    label: "Accueil",
    pages: [
      { label: "Page d'accueil", href: "/" },
      { label: "Calendrier des passages", href: "/calendrier" },
    ],
  },
  {
    id: "vous-etes",
    label: "Vous êtes",
    pages: [
      { label: "Entreprises & mutuelles", href: "/entreprises-et-mutuelles" },
      { label: "Collectivités & Acteurs locaux", href: "/collectivites-et-institutions" },
      { label: "Établissements de santé & médico-sociaux", href: "/etablissements-de-sante-et-essms" },
      { label: "Patients", href: "/patient" },
      { label: "Professionnels de santé", href: "/professionnels-de-sante" },
    ],
  },
  {
    id: "specialites",
    label: "Spécialités",
    pages: [
      { label: "Check-up santé", href: "/solutions/checkup" },
      { label: "Cancer du sein", href: "/solutions/cancer-sein" },
      { label: "Prévention cardiovasculaire", href: "/solutions/prevention-cardio" },
      { label: "Cancer de la peau", href: "/solutions/cancer-peau" },
      { label: "Santé de la femme", href: "/solutions/sante-femme" },
    ],
  },
  {
    id: "nos-solutions",
    label: "Nos solutions",
    pages: [
      { label: "Hub Nos solutions", href: "/nos-solutions" },
      { label: "MédicoBus", href: "/produits/medicobus" },
      { label: "MammoBus", href: "/mammobus" },
      { label: "DermatoBus", href: "/dermatobus" },
      { label: "Centre de santé mobile", href: "/produits/centre-sante" },
      { label: "Acquérir un bus", href: "/acquerir-un-bus" },
    ],
  },
  {
    id: "ressources",
    label: "Ressources",
    pages: [
      { label: "Articles", href: "/ressources/articles" },
      {
        label: "Cas clients",
        href: "/ressources/cas-clients",
        children: [
          { label: "Pertuis × MGA", href: "/ressources/cas-clients/pertuis-mutuelle-avignon" },
        ],
      },
      { label: "Livres blancs", href: "/ressources/livres-blancs" },
      { label: "Vidéos", href: "/ressources/videos" },
      { label: "Podcast", href: "/ressources/podcast" },
    ],
  },
  {
    id: "a-propos",
    label: "À propos",
    pages: [
      { label: "Vision & Mission", href: "/a-propos/vision" },
      { label: "Technologie", href: "/a-propos/technologie" },
      { label: "Équipe", href: "/a-propos/equipe" },
      { label: "Recrutement", href: "/a-propos/recrutement" },
    ],
  },
  {
    id: "presse-contact",
    label: "Presse & contact",
    pages: [
      { label: "Espace presse", href: "/presse" },
      { label: "Contact", href: "/contact" },
      { label: "Se connecter", href: "/se-connecter" },
      { label: "FAQ", href: "/faq" },
      { label: "Avis patients", href: "/avis", seoOnly: true },
    ],
  },
];

// ─── Animations ──────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

// ─── Tree view ────────────────────────────────────────────────────────────────

const COL_W = 160;
const LINE_COLOR = "#D4D4D4";

function VLine({ height = 16 }) {
  return (
    <div style={{ width: 1, height, backgroundColor: LINE_COLOR, flexShrink: 0, alignSelf: "center" }} />
  );
}

function TreeNode({ href, label, secondary = false }) {
  return (
    <Link
      to={href}
      style={{
        display: "block",
        fontSize: 10,
        color: secondary ? "#9B9B9B" : "#4A4A4A",
        textAlign: "center",
        padding: "4px 6px",
        border: `1px ${secondary ? "dashed" : "solid"} ${secondary ? "#E0E0E0" : "#E0E0E0"}`,
        borderRadius: 6,
        backgroundColor: secondary ? "#FAFAFA" : "#FFFFFF",
        textDecoration: "none",
        lineHeight: 1.35,
        transition: "background 0.15s, color 0.15s",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#F0F0F0";
        e.currentTarget.style.color = "#1A1A1A";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = secondary ? "#FAFAFA" : "#FFFFFF";
        e.currentTarget.style.color = secondary ? "#9B9B9B" : "#4A4A4A";
      }}
    >
      {label}
    </Link>
  );
}

function SiteTree() {
  const allCols = sections;
  const totalW = allCols.length * COL_W;

  return (
    <div style={{ overflowX: "auto", paddingBottom: 8 }}>
      <div style={{ width: totalW, minWidth: totalW }}>

        {/* Root */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            padding: "8px 24px",
            border: "1.5px solid #C8C8C8",
            borderRadius: 10,
            backgroundColor: "#FFFFFF",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 13,
            color: "#1A1A1A",
          }}>
            hocoia.com
          </div>
        </div>

        {/* Root → horizontal bar */}
        <div style={{ display: "flex", justifyContent: "center", height: 24 }}>
          <div style={{ width: 1, height: "100%", backgroundColor: LINE_COLOR }} />
        </div>

        {/* Horizontal bar · s'arrête avant la colonne secondaire */}
        <div style={{ position: "relative", height: 1, margin: `0 ${COL_W / 2}px`, backgroundColor: LINE_COLOR }}>
          {/* Pointillés sur la partie secondaire */}
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: COL_W,
            height: 1,
            borderTop: `1px dashed #CCCCCC`,
            backgroundColor: "transparent",
          }} />
        </div>

        {/* Columns */}
        <div style={{ display: "flex" }}>
          {allCols.map((section) => {
            const isSecondary = section.secondary;
            return (
              <div
                key={section.id}
                style={{ width: COL_W, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 7px" }}
              >
                <VLine height={20} />

                {/* Section header */}
                <div style={{
                  padding: "4px 8px",
                  border: "1px solid #D0D0D0",
                  borderRadius: 8,
                  backgroundColor: "#EFEFEF",
                  textAlign: "center",
                  width: "100%",
                }}>
                  <span style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#6B6B6B",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    fontFamily: "var(--font-display)",
                  }}>
                    {section.label}
                  </span>
                </div>

                <VLine height={14} />

                {/* Pages */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, width: "100%" }}>
                  {section.pages.map((page, idx) => (
                    <div key={page.href} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                      {idx > 0 && <VLine height={4} />}
                      <TreeNode href={page.href} label={page.label} />

                      {page.children && page.children.map((child) => (
                        <div key={child.href} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "88%", paddingLeft: 8 }}>
                          <VLine height={4} />
                          <div style={{ display: "flex", alignItems: "flex-start", width: "100%", gap: 0 }}>
                            <div style={{
                              width: 10,
                              height: 12,
                              borderLeft: `1px solid ${LINE_COLOR}`,
                              borderBottom: `1px solid ${LINE_COLOR}`,
                              borderRadius: "0 0 0 4px",
                              flexShrink: 0,
                              marginTop: -2,
                            }} />
                            <div style={{ flex: 1 }}>
                              <TreeNode href={child.href} label={child.label} secondary />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PlanDuSite() {
  const totalPages = sections.reduce((acc, s) => acc + s.pages.length, 0);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F5F5F5" }}>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#9B9B9B" }}>
            Navigation
          </p>
          <h1 className="font-display font-bold text-4xl mb-3" style={{ color: "#1A1A1A" }}>
            Plan du site
          </h1>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            {totalPages} pages · {sections.length} sections
          </p>
        </motion.div>
      </section>

      {/* Grid · sections principales */}
      <section className="max-w-5xl mx-auto px-6 pb-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={cardVariants}
              className="rounded-xl p-5"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#CCCCCC" }} />
                <h2 className="font-display font-semibold text-xs uppercase tracking-wider" style={{ color: "#6B6B6B" }}>
                  {section.label}
                </h2>
              </div>
              <ul className="space-y-0.5">
                {section.pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      to={page.href}
                      className="flex items-center gap-2 text-sm rounded-lg px-2 py-1.5 transition-colors duration-150"
                      style={{ color: page.seoOnly ? "#AAAAAA" : "#1A1A1A" }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5F5F5"; e.currentTarget.style.color = "#4A4A4A"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = page.seoOnly ? "#AAAAAA" : "#1A1A1A"; }}
                    >
                      <span style={{ color: "#CCCCCC", fontSize: "10px" }}>→</span>
                      {page.label}
                      {page.seoOnly && (
                        <span className="ml-auto" style={{ fontSize: 9, color: "#CCCCCC", backgroundColor: "#F5F5F5", padding: "1px 5px", borderRadius: 4 }}>
                          SEO
                        </span>
                      )}
                    </Link>
                    {page.children && page.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="flex items-center gap-2 text-xs rounded-lg pl-6 pr-2 py-1 transition-colors duration-150"
                        style={{ color: "#8A8A8A" }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#F5F5F5"; e.currentTarget.style.color = "#4A4A4A"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#8A8A8A"; }}
                      >
                        <span style={{ color: "#DDDDDD", fontSize: "9px" }}>↳</span>
                        {child.label}
                      </Link>
                    ))}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* Tree view */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-6 mt-8" style={{ color: "#9B9B9B" }}>
            Arborescence
          </p>
          <div className="rounded-xl p-6" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E5E5" }}>
            <SiteTree />
          </div>
        </motion.div>
      </section>

    </main>
  );
}
