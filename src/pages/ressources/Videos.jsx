import ResourcePage from "../../components/ResourcePage";
import { ressourcesByType } from "../../data/arborescence";

export default function Videos() {
  return (
    <ResourcePage
      title="Vidéos"
      type="Vidéo"
      cards={ressourcesByType.videos}
    />
  );
}
