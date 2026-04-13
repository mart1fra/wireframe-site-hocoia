import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navConfig, megaMenus } from "../../data/arborescence";

// ─── Animation du panneau ─────────────────────────────────────────────────

const panelV = {
  hidden:  { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.2,  ease: "easeOut" } },
  exit:    { opacity: 0, y: -4, transition: { duration: 0.12, ease: "easeIn"  } },
};

// ─── Détermine la variante de nav selon la route ──────────────────────────

function useNavVariant() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/patient"))   return "patient";
  if (pathname.startsWith("/pro-sante")) return "prosante";
  return "default";
}

// ─── Panneau colonnes (mega-menu Vous êtes / Nos solutions) ───────────────

function ColumnsPanel({ data, onClose }) {
  return (
    <div className="flex p-5 gap-8">
      {data.columns.map((col) => (
        <div key={col.id} className="min-w-[140px]">
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

// ─── Panneau liste simple (Ressources / À propos) ─────────────────────────

function SimplePanel({ data, onClose }) {
  return (
    <ul className="py-2 min-w-[180px]">
      {data.items.map((item) => (
        <li key={item.id}>
          <Link
            to={item.href}
            onClick={onClose}
            className="block px-5 py-2 text-sm font-medium text-gray-900 hover:text-gray-700 hover:translate-x-[2px] transition-all duration-150"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// ─── Wrapper animé du panneau ─────────────────────────────────────────────

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
          className="absolute top-full left-0 z-50 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
        >
          {data.type === "columns"
            ? <ColumnsPanel data={data} onClose={onClose} />
            : <SimplePanel  data={data} onClose={onClose} />
          }
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Item de navigation (avec ou sans dropdown) ───────────────────────────

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
  const variant = useNavVariant();
  const config  = navConfig[variant];
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
          {config.center.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </ul>

        {/* Actions droite */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to={config.cta.href}
            className="px-5 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-150"
          >
            {config.cta.label}
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
