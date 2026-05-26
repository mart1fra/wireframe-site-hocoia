import ExpertisePage from "../../components/sections/ExpertisePage";
import * as d from "../../data/cancerPeauData";

const data = {
  hero:            d.hero,
  stats:           d.stats,
  pourquoi:        d.pourquoi,
  depistageHocoia: d.depistageHocoia,
  protocole:       d.protocole,
  benefices:       d.benefices,
  pourQui:         d.pourQui,
  temoignages:     d.temoignages,
  maillage:        d.maillage,
  faq:             d.faq,
  ctaFinal:        d.ctaFinal,
};

export default function CancerPeau() {
  return <ExpertisePage data={data} />;
}
