import ResourcePage from "../../components/ResourcePage";
import { ressourcesByType } from "../../data/arborescence";

export default function Podcast() {
  return (
    <ResourcePage
      title="Podcast"
      type="Podcast"
      cards={ressourcesByType.podcasts}
    />
  );
}
