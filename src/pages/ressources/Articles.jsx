import ResourcePage from "../../components/ResourcePage";
import { ressourcesByType } from "../../data/arborescence";

export default function Articles() {
  return (
    <ResourcePage
      title="Articles"
      type="Article"
      cards={ressourcesByType.articles}
    />
  );
}
