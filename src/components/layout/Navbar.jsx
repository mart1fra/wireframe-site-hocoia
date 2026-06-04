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

// ─── Wrapper panneau desktop ──────────────────────────────────────────────

function DropdownPanel({ menuKey, isOpen, onClose }) {
  const data = megaMenus[menuKey];
  if (!data) return null;

  const centered = data.type === "profil-switcher";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={panelV}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`z-50 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden ${
            centered
              ? "fixed top-16 left-1/2 -translate-x-1/2"
              : "absolute top-full left-0"
          }`}
        >
          {data.type === "profil-switcher" && <VousEtesMegaMenu data={data} onClose={onClose} />}
          {data.type === "columns"          && <ColumnsPanel     data={data} onClose={onClose} />}
          {data.type === "simple"           && <SimplePanel      data={data} onClose={onClose} />}
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
