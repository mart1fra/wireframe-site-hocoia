import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navBar, megaMenus } from "../../data/arborescence";

// ─── Variants animation panneau desktop ───────────────────────────────────

const panelV = {
  hidden:  { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.2,  ease: "easeOut" } },
  exit:    { opacity: 0, y: -4, transition: { duration: 0.12, ease: "easeIn"  } },
};

// ─── Mega-menu "Vous êtes" ─────────────────────────────────────────────────

function VousEtesMegaMenu({ data, onClose }) {
  const [activeId, setActiveId] = useState(data.defaultProfile);

  const activeProfile = data.profiles.find((p) => p.id === activeId);
  const contentKey    = activeProfile.contentKey;
  const content       = data.profileContent[contentKey];

  const resolveHref = (href) =>
    href.startsWith("#") ? activeProfile.href + href : href;

  return (
    <div className="flex" style={{ minWidth: 980 }}>
      <div className="w-[400px] border-r border-gray-100 p-4 shrink-0">
        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">
          {data.leftTitle}
        </p>
        <ul className="space-y-0.5">
          {data.profiles.map((profile) => (
            <li key={profile.id}>
              <Link
                to={profile.href}
                onClick={onClose}
                onMouseEnter={() => setActiveId(profile.id)}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg transition-colors duration-150 w-full ${
                  activeId === profile.id ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <span className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{profile.label}</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{profile.subtext}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-5">
        <motion.div
          key={contentKey + activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          <div className="flex gap-8">
            {content.columns.map((col) => (
              <div key={col.id} className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.id}>
                      <Link to={resolveHref(item.href)} onClick={onClose} className="group">
                        <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500 leading-tight mt-0.5">{item.subtext}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-6">
            <p className="text-sm text-gray-600">{content.footer.text}</p>
            <Link
              to={resolveHref(content.footer.anchor)}
              onClick={onClose}
              className="px-4 py-1.5 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {content.footer.btnLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// ─── Panneau colonnes (desktop) ───────────────────────────────────────────

function ColumnsPanel({ data, onClose }) {
  return (
    <div className="flex p-5 gap-8">
      {data.columns.map((col) => (
        <div key={col.id} className="min-w-[160px]">
          <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">
            {col.title}
          </p>
          <ul className="space-y-2">
            {col.items.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block text-sm font-medium text-gray-900 hover:text-gray-700 hover:translate-x-[2px] transition-all duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ─── Panneau liste simple (desktop) ──────────────────────────────────────

function SimplePanel({ data, onClose }) {
  return (
    <div className="py-3 px-5 min-w-[200px]">
      {data.title && (
        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">
          {data.title}
        </p>
      )}
      <ul className="space-y-0.5">
        {data.items.map((item) =>
          item.type === "separator" ? (
            <li key={item.id} className="my-2 border-t border-gray-200" />
          ) : (
            <li key={item.id}>
              <Link
                to={item.href}
                onClick={onClose}
                className="block py-1.5 text-sm font-medium text-gray-900 hover:text-gray-700 hover:translate-x-[2px] transition-all duration-150"
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
      {data.footer && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <Link
            to={data.footer.href}
            onClick={onClose}
            className="block py-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-150"
          >
            {data.footer.label}
          </Link>
        </div>
      )}
    </div>
  );
}

// ─── Panneau liste enrichie — Ressources & À propos (desktop) ────────────

function RichListPanel({ data, onClose }) {
  // Layout A — liste simple à gauche + bloc featured à droite
  if (data.items && data.featured) {
    return (
      <div className="p-5 flex gap-5" style={{ minWidth: 420 }}>
        {/* Liste */}
        <div className="flex-1 space-y-0.5">
          {data.items.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              onClick={onClose}
              className="block px-2.5 py-1.5 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-700 transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Featured */}
        <Link
          to={data.featured.href}
          onClick={onClose}
          className="group w-44 shrink-0 bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col hover:bg-gray-100 transition-colors duration-150"
        >
          <div className="w-full h-20 bg-gray-200 border border-gray-300 rounded-lg mb-3" />
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
            {data.featured.label}
          </p>
          <p className="text-sm font-semibold text-gray-900 leading-snug flex-1">
            {data.featured.title}
          </p>
          <span className="text-xs font-semibold text-gray-500 group-hover:text-gray-900 transition-colors mt-3">
            {data.featured.cta}
          </span>
        </Link>
      </div>
    );
  }

  // Layout B — sections en 2 colonnes (À propos)
  const sections = data.sections ?? [{ label: null, items: data.items ?? [] }];
  return (
    <div className="p-5" style={{ minWidth: 440 }}>
      <div className="grid grid-cols-2 gap-x-6">
        {sections.map((section, si) => (
          <div key={si}>
            {section.label && (
              <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 mb-2 px-2.5">
                {section.label}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={onClose}
                  className="flex items-start gap-2.5 px-2.5 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-150 group"
                >
                  <span className="w-7 h-7 bg-gray-100 border border-gray-200 rounded-md shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700 leading-tight transition-colors">
                        {item.label}
                      </p>
                      {item.badge && (
                        <span className="text-[10px] font-semibold bg-gray-900 text-white px-2 py-0.5 rounded-full leading-none">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.subtext && (
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.subtext}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Panneau cartes bus (desktop) ────────────────────────────────────────

function BusCardsPanel({ data, onClose }) {
  return (
    <div className="p-5" style={{ minWidth: 480 }}>
      <div className="flex flex-col gap-2 mb-4">
        {data.cards.map((card) => (
          <Link
            key={card.id}
            to={card.href}
            onClick={onClose}
            className="group flex items-center gap-4 rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-sm transition-all duration-200"
          >
            {/* Image paysage */}
            <div className="relative w-[120px] h-[72px] bg-gray-100 shrink-0 flex items-center justify-center">
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg
                  viewBox="0 0 80 44"
                  className="w-16 h-9 text-gray-400"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect x="4" y="6" width="72" height="28" rx="7" opacity="0.25" />
                  <rect x="4" y="6" width="72" height="28" rx="7" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
                  <circle cx="18" cy="38" r="5" opacity="0.4" />
                  <circle cx="62" cy="38" r="5" opacity="0.4" />
                  <rect x="9"  y="11" width="18" height="10" rx="2" opacity="0.3" />
                  <rect x="31" y="11" width="18" height="10" rx="2" opacity="0.3" />
                  <rect x="54" y="11" width="14" height="10" rx="2" opacity="0.3" />
                </svg>
              )}
            </div>

            {/* Texte */}
            <div className="flex-1 min-w-0 py-3">
              <p className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-gray-700 transition-colors">
                {card.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{card.subtext}</p>
            </div>

            <span className="text-gray-300 group-hover:text-gray-500 transition-colors text-sm pr-4 shrink-0">→</span>
          </Link>
        ))}
      </div>

      {/* Bloc Acquérir un bus */}
      <Link
        to={data.cta.href}
        onClick={onClose}
        className="group flex items-center gap-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-4 py-3.5 mb-3 transition-colors duration-150"
      >
        <div className="w-9 h-9 bg-gray-200 border border-gray-300 rounded-lg shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm leading-tight">{data.cta.label}</p>
          <p className="text-xs text-gray-500 mt-0.5">Achat clé en main et sur mesure</p>
        </div>
        <span className="text-gray-400 group-hover:text-gray-600 text-sm transition-colors shrink-0">→</span>
      </Link>

      {/* Lien bas de panneau */}
      <div className="pt-2 border-t border-gray-100">
        <Link
          to={data.footer.href}
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-150"
        >
          {data.footer.label}
        </Link>
      </div>
    </div>
  );
}

// ─── Wrapper panneau desktop ──────────────────────────────────────────────

function DropdownPanel({ menuKey, isOpen, onClose }) {
  const data = megaMenus[menuKey];
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={panelV}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`absolute top-full z-50 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden ${
            data.type === "profil-switcher"
              ? "left-1/2 -translate-x-[35%]"
              : "left-1/2 -translate-x-1/2"
          }`}
        >
          {data.type === "profil-switcher" && <VousEtesMegaMenu data={data} onClose={onClose} />}
          {data.type === "columns"          && <ColumnsPanel     data={data} onClose={onClose} />}
          {data.type === "simple"           && <SimplePanel      data={data} onClose={onClose} />}
          {data.type === "bus-cards"        && <BusCardsPanel    data={data} onClose={onClose} />}
          {data.type === "rich-list"        && <RichListPanel    data={data} onClose={onClose} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Item de nav desktop ──────────────────────────────────────────────────

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  const handleEnter = () => { if (!item.dropdown) return; clearTimeout(timer.current); setOpen(true); };
  const handleLeave = () => { if (!item.dropdown) return; timer.current = setTimeout(() => setOpen(false), 80); };
  const close = () => setOpen(false);

  const baseCls =
    "flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-150 cursor-pointer";

  return (
    <li
      className="relative h-16 flex items-center list-none"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {item.href ? (
        <Link to={item.href} onClick={close} className={baseCls}>{item.label}</Link>
      ) : (
        <button type="button" className={baseCls}>
          {item.label}
          {item.dropdown && (
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.15 }}
              className="text-gray-400 text-xs leading-none"
            >
              ▾
            </motion.span>
          )}
        </button>
      )}
      {item.dropdown && <DropdownPanel menuKey={item.dropdown} isOpen={open} onClose={close} />}
    </li>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// MOBILE — full-screen takeover (inspiré Alan.com)
// ═════════════════════════════════════════════════════════════════════════════

// ─── Helper : liste plate de liens depuis un mega-menu ────────────────────

function getMobileLinks(menuData) {
  if (!menuData) return [];

  if (menuData.type === "profil-switcher") {
    return menuData.profiles.map((p) => ({ id: p.id, label: p.label, href: p.href }));
  }
  if (menuData.type === "columns") {
    return menuData.columns.flatMap((col) => col.items);
  }
  if (menuData.type === "simple") {
    const base = [...menuData.items];
    if (menuData.footer) base.push({ id: "__footer__", label: menuData.footer.label, href: menuData.footer.href });
    return base;
  }
  if (menuData.type === "rich-list") {
    const items = menuData.sections
      ? menuData.sections.flatMap((s) => s.items)
      : menuData.items ?? [];
    return items.map((item) => ({ id: item.id, label: item.label, href: item.href }));
  }
  if (menuData.type === "bus-cards") {
    const base = menuData.cards.map((c) => ({ id: c.id, label: c.label, href: c.href }));
    if (menuData.cta)    base.push({ id: "__cta__",    label: menuData.cta.label,    href: menuData.cta.href });
    if (menuData.footer) base.push({ id: "__footer__", label: menuData.footer.label, href: menuData.footer.href });
    return base;
  }
  return [];
}

// ─── Item mobile — accordéon grand format ────────────────────────────────

function MobileNavItem({ item, onClose }) {
  const [open, setOpen] = useState(false);
  const menuData = item.dropdown ? megaMenus[item.dropdown] : null;
  const links    = getMobileLinks(menuData);

  if (item.href) {
    return (
      <Link
        to={item.href}
        onClick={onClose}
        className="flex items-center px-5 py-5 text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-150 border-b border-gray-100"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-gray-100">
      {/* Bouton accordéon — même style grand que Alan */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-5 py-5 text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-150"
      >
        {item.label}
        {/* Chevron — cercle gris clair comme Alan */}
        <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0 ml-3">
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            width="12" height="8" viewBox="0 0 12 8" fill="none"
            className="text-gray-500"
          >
            <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </span>
      </button>

      {/* Sous-liens — accordéon animé */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pb-3 pt-1">
              {links.map((link) =>
                link.type === "separator" ? (
                  <div key={link.id} className="my-2 mx-5 border-t border-gray-100" />
                ) : (
                  <Link
                    key={link.id}
                    to={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 py-3 pl-7 pr-5 text-base text-gray-500 hover:text-gray-900 transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Full-screen mobile menu ──────────────────────────────────────────────

function MobileMenu({ isOpen, onClose }) {
  // Verrouille le scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-white flex flex-col lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          {/* ── En-tête : logo + ✕ (même hauteur que la navbar) ── */}
          <div className="flex items-center justify-between px-5 h-16 shrink-0">
            <Link
              to="/"
              onClick={onClose}
              className="font-display font-bold text-xl text-gray-900 tracking-tight"
            >
              HOCOIA
            </Link>

            {/* Bouton fermeture — cercle gris comme Alan */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-150 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1.5 1.5l11 11M12.5 1.5l-11 11" stroke="#374151" strokeWidth="1.75" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* ── Items de nav — accordéons grand format ── */}
          <div className="flex-1 overflow-y-auto">
            <nav className="pt-2">
              {navBar.center.map((item) => (
                <MobileNavItem key={item.id} item={item} onClose={onClose} />
              ))}
            </nav>
          </div>

          {/* ── CTAs en bas — pleine largeur ── */}
          <div className="px-5 pt-5 pb-8 shrink-0 space-y-3">
            <Link
              to={navBar.cta.href}
              onClick={onClose}
              className="block w-full text-center bg-gray-900 text-white py-4 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors duration-150"
            >
              {navBar.cta.label}
            </Link>
            <Link
              to={navBar.login.href}
              onClick={onClose}
              className="block w-full text-center border border-gray-300 text-gray-700 py-4 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors duration-150"
            >
              {navBar.login.label}
            </Link>
            <div className="flex justify-center items-center gap-2 pt-1 text-xs text-gray-500">
              <button type="button" className="font-semibold text-gray-900 hover:text-gray-700 cursor-pointer transition-colors">FR</button>
              <span className="text-gray-300">/</span>
              <button type="button" className="hover:text-gray-900 cursor-pointer transition-colors">EN</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
            : "bg-white"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 md:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="font-display font-bold text-xl text-gray-900 tracking-tight shrink-0"
          >
            HOCOIA
          </Link>

          {/* Nav centrale — desktop uniquement */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navBar.center.map((item) => (
              <NavItem key={item.id} item={item} />
            ))}
          </ul>

          {/* Actions droite — desktop uniquement */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to={navBar.cta.href}
              className="px-5 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150"
            >
              {navBar.cta.label}
            </Link>
            <Link
              to={navBar.login.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
            >
              {navBar.login.label}
            </Link>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <button type="button" className="font-semibold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer">FR</button>
              <span className="text-gray-300">/</span>
              <button type="button" className="hover:text-gray-900 transition-colors cursor-pointer">EN</button>
            </div>
          </div>

          {/* Burger — mobile uniquement, cercle gris comme Alan */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu de navigation"
            className="lg:hidden w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-150 cursor-pointer"
          >
            <svg width="18" height="13" viewBox="0 0 18 13" fill="#374151" aria-hidden="true">
              <rect y="0"  width="18" height="2" rx="1" />
              <rect y="5.5" width="13" height="2" rx="1" />
              <rect y="11" width="18" height="2" rx="1" />
            </svg>
          </button>

        </nav>
      </header>

      {/* Menu full-screen mobile */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
