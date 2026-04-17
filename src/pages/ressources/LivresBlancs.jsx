import ResourcePage from "../../components/ResourcePage";
import { ressourcesByType } from "../../data/arborescence";

export default function LivresBlancs() {
  return (
    <ResourcePage
      title="Livres blancs"
      type="Livre blanc"
      cards={ressourcesByType.livresBlancs}
    />
  );
}
