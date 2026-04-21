import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navBar, megaMenus } from "../../data/arborescence";

// ─── Variants animation panneau ───────────────────────────────────────────

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

  // Résout les ancres relatives (#section) en URLs complètes (page + ancre)
  const resolveHref = (href) =>
    href.startsWith("#") ? activeProfile.href + href : href;

  return (
    <div className="flex" style={{ minWidth: 980 }}>

      {/* ── Colonne gauche : liste des profils ── */}
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
                  activeId === profile.id
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <span className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 leading-tight">
                    {profile.label}
                  </p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">
                    {profile.subtext}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Zone droite : contenu dynamique ── */}
      <div className="flex-1 p-5">
        <motion.div
          key={contentKey + activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
        >
          {/* Colonnes */}
          <div className="flex gap-8">
            {content.columns.map((col) => (
              <div key={col.id} className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={resolveHref(item.href)}
                        onClick={onClose}
                        className="group"
                      >
                        <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                          {item.label}
                        </p>
                        <p className="text-xs text-gray-500 leading-tight mt-0.5">
                          {item.subtext}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
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

// ─── Panneau colonnes standard (Nos solutions) ────────────────────────────

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

// ─── Panneau liste simple (Nos solutions / Ressources / À propos) ────────

function SimplePanel({ data, onClose }) {
  return (
    <div className="py-3 px-5 min-w-[200px]">
      {data.title && (
        <p className="text-[10px] uppercase tracking-widest font-medium text-gray-400 mb-3">
          {data.title}
        </p>
      )}
      <ul className="space-y-0.5">
        {data.items.map((item) => (
          <li key={item.id}>
            <Link
              to={item.href}
              onClick={onClose}
              className="block py-1.5 text-sm font-medium text-gray-900 hover:text-gray-700 hover:translate-x-[2px] transition-all duration-150"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Wrapper animé du panneau ─────────────────────────────────────────────

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
          {data.type === "profil-switcher" && (
            <VousEtesMegaMenu data={data} onClose={onClose} />
          )}
          {data.type === "columns" && (
            <ColumnsPanel data={data} onClose={onClose} />
          )}
          {data.type === "simple" && (
            <SimplePanel data={data} onClose={onClose} />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Item de navigation ───────────────────────────────────────────────────

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  const handleEnter = () => {
    if (!item.dropdown) return;
    clearTimeout(timer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    if (!item.dropdown) return;
    timer.current = setTimeout(() => setOpen(false), 80);
  };

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
        <Link to={item.href} onClick={close} className={baseCls}>
          {item.label}
        </Link>
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

      {item.dropdown && (
        <DropdownPanel menuKey={item.dropdown} isOpen={open} onClose={close} />
      )}
    </li>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="font-display font-bold text-xl text-gray-900 tracking-tight shrink-0"
        >
          HOCOIA
        </Link>

        {/* Nav centrale */}
        <ul className="flex items-center gap-0.5">
          {navBar.center.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>

        {/* Actions droite */}
        <div className="flex items-center gap-4 shrink-0">
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
            <button
              type="button"
              className="font-semibold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
            >
              FR
            </button>
            <span className="text-gray-300">/</span>
            <button
              type="button"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
