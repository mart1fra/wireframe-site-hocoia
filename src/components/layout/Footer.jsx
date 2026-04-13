import { Link } from "react-router-dom";
import { navigation, pagesSecondaires } from "../../data/arborescence";

const solutions = navigation.find((n) => n.id === "solutions");
const ressources = navigation.find((n) => n.id === "ressources");
const aPropos = navigation.find((n) => n.id === "a-propos");
const presse = pagesSecondaires.find((n) => n.id === "presse");
const faq = pagesSecondaires.find((n) => n.id === "faq");

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="font-display font-semibold text-sm text-white mb-4 tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FooterLinks({ items, basePath = "" }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            to={`${basePath}/${item.id}`}
            className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div>
            <Link
              to="/"
              className="font-display font-bold text-xl text-white tracking-tight block mb-3"
            >
              HOCOIA
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              La santé en tout lieu.
              <br />
              Santé mobile, connectée et préventive — accessible à tous.
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              L'acteur de référence français de la santé mobile et connectée.
            </p>
          </div>

          {/* Col 2 — Solutions */}
          <FooterColumn title="Solutions">
            <FooterLinks
              items={solutions.children}
              basePath={`/${solutions.id}`}
            />
          </FooterColumn>

          {/* Col 3 — Ressources */}
          <FooterColumn title="Ressources">
            <FooterLinks
              items={ressources.children}
              basePath={`/${ressources.id}`}
            />
          </FooterColumn>

          {/* Col 4 — Hocoia */}
          <div className="space-y-7">
            <FooterColumn title="Hocoia">
              <FooterLinks
                items={aPropos.children}
                basePath={`/${aPropos.id}`}
              />
            </FooterColumn>
            <FooterColumn title="Presse">
              <FooterLinks
                items={presse.children}
                basePath={`/${presse.id}`}
              />
            </FooterColumn>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Hocoia. Tous droits réservés.
          </p>
          <ul className="flex items-center gap-5">
            {faq.children.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/faq/${item.id}`}
                  className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-150"
                >
                  FAQ {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/mentions-legales"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-150"
              >
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
