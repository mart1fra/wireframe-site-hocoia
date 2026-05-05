import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home               from "./pages/Home";
import Entreprises        from "./pages/Entreprises";
import ActeursPublics     from "./pages/ActeursPublics";
import Collectivites      from "./pages/Collectivites";
import EtablissementsSante from "./pages/EtablissementsSante";
import Patient            from "./pages/Patient";
import ProSante           from "./pages/ProSante";

import PreventionCardio   from "./pages/solutions/PreventionCardio";
import CancerPeau         from "./pages/solutions/CancerPeau";
import Checkup            from "./pages/solutions/Checkup";
import CancerSein         from "./pages/solutions/CancerSein";
import SanteFemme         from "./pages/solutions/SanteFemme";

import MedicoBus          from "./pages/produits/MedicoBus";
import MammoBusPlaceholder  from "./pages/produits/MammoBus";
import MammoBus            from "./pages/MammoBus";
import DermatoBusPlaceholder from "./pages/produits/DermatoBus";
import DermatoBus          from "./pages/DermatoBus";
import CentreSante        from "./pages/produits/CentreSante";

import Articles           from "./pages/ressources/Articles";
import CasClients         from "./pages/ressources/CasClients";
import CasClientPertuis   from "./pages/CasClientPertuis";
import LivresBlancs       from "./pages/ressources/LivresBlancs";
import Videos             from "./pages/ressources/Videos";
import Podcast            from "./pages/ressources/Podcast";

import SeConnecter        from "./pages/SeConnecter";
import Faq               from "./pages/Faq";
import NosSolutions      from "./pages/NosSolutions";
import Vision             from "./pages/a-propos/Vision";
import Technologie        from "./pages/a-propos/Technologie";
import Equipe             from "./pages/a-propos/Equipe";
import Recrutement        from "./pages/a-propos/Recrutement";

function Wrap({ children }) {
  return <Layout>{children}</Layout>;
}

export default function App() {
  return (
    <Routes>
      {/* Home + B2B */}
      <Route path="/"                    element={<Wrap><Home /></Wrap>} />
      <Route path="/entreprises"         element={<Wrap><Entreprises /></Wrap>} />
      <Route path="/acteurs-publics"     element={<Wrap><ActeursPublics /></Wrap>} />
      <Route path="/collectivites"        element={<Wrap><Collectivites /></Wrap>} />
      <Route path="/etablissements-sante" element={<Wrap><EtablissementsSante /></Wrap>} />

      {/* Parcours */}
      <Route path="/patient"             element={<Wrap><Patient /></Wrap>} />
      <Route path="/pro-sante"           element={<Wrap><ProSante /></Wrap>} />

      {/* Solutions — Services */}
      <Route path="/solutions/prevention-cardio" element={<Wrap><PreventionCardio /></Wrap>} />
      <Route path="/solutions/cancer-peau"        element={<Wrap><CancerPeau /></Wrap>} />
      <Route path="/solutions/checkup"            element={<Wrap><Checkup /></Wrap>} />
      <Route path="/solutions/cancer-sein"        element={<Wrap><CancerSein /></Wrap>} />
      <Route path="/solutions/sante-femme"        element={<Wrap><SanteFemme /></Wrap>} />

      {/* Solutions — Produits */}
      <Route path="/produits/medicobus"    element={<Wrap><MedicoBus /></Wrap>} />
      <Route path="/mammobus"              element={<Wrap><MammoBus /></Wrap>} />
      <Route path="/produits/mammobus"     element={<Wrap><MammoBusPlaceholder /></Wrap>} />
      <Route path="/dermatobus"             element={<Wrap><DermatoBus /></Wrap>} />
      <Route path="/produits/dermatobus"   element={<Wrap><DermatoBusPlaceholder /></Wrap>} />
      <Route path="/produits/centre-sante" element={<Wrap><CentreSante /></Wrap>} />

      {/* Ressources */}
      <Route path="/ressources/articles"      element={<Wrap><Articles /></Wrap>} />
      <Route path="/ressources/cas-clients"   element={<Wrap><CasClients /></Wrap>} />
      <Route path="/ressources/cas-clients/pertuis-mutuelle-avignon" element={<Wrap><CasClientPertuis /></Wrap>} />
      <Route path="/ressources/livres-blancs" element={<Wrap><LivresBlancs /></Wrap>} />
      <Route path="/ressources/videos"        element={<Wrap><Videos /></Wrap>} />
      <Route path="/ressources/podcast"       element={<Wrap><Podcast /></Wrap>} />

      {/* Nos solutions (hub) */}
      <Route path="/nos-solutions" element={<Wrap><NosSolutions /></Wrap>} />

      {/* Connexion & FAQ */}
      <Route path="/se-connecter" element={<Wrap><SeConnecter /></Wrap>} />
      <Route path="/faq"          element={<Wrap><Faq /></Wrap>} />

      {/* À propos */}
      <Route path="/a-propos/vision"       element={<Wrap><Vision /></Wrap>} />
      <Route path="/a-propos/technologie"  element={<Wrap><Technologie /></Wrap>} />
      <Route path="/a-propos/equipe"       element={<Wrap><Equipe /></Wrap>} />
      <Route path="/a-propos/recrutement"  element={<Wrap><Recrutement /></Wrap>} />
    </Routes>
  );
}
