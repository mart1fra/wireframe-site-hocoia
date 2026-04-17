import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { breadcrumbsMap } from "../../data/breadcrumbs";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (pathname === "/") return null;

  const crumbs = breadcrumbsMap[pathname];
  if (!crumbs) return null;

  return (
    <nav className={`px-7 py-2.5 border-b border-gray-200 flex items-center gap-1.5 flex-wrap transition-colors duration-200 ${scrolled ? "bg-white/90 backdrop-blur-md" : "bg-white"}`}>
      <Link to="/" className="text-[11px] text-gray-600 hover:text-gray-900 transition-colors">
        Hocoia
      </Link>

      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <span className="text-[11px] text-gray-300 select-none">›</span>
            {isLast || !crumb.href ? (
              <span className={`text-[11px] ${isLast ? "text-gray-900 font-semibold" : "text-gray-600"}`}>
                {crumb.label}
              </span>
            ) : (
              <Link to={crumb.href} className="text-[11px] text-gray-600 hover:text-gray-900 transition-colors">
                {crumb.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
