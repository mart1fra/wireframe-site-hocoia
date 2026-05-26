import ExpertisePage from "../../components/sections/ExpertisePage";
import * as d from "../../data/cancerSeinData";

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

export default function CancerSein() {
  return <ExpertisePage data={data} />;
}
