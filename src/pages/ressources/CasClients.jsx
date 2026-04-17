import ResourcePage from "../../components/ResourcePage";
import { ressourcesByType } from "../../data/arborescence";

export default function CasClients() {
  return (
    <ResourcePage
      title="Cas clients"
      type="Cas client"
      cards={ressourcesByType.casClients}
    />
  );
}
