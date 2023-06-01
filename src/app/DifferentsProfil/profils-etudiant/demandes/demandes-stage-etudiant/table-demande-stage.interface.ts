//Interface de la table demande de la base de donnees de notre API pour les stage
export interface tableDemande{
  entreprise: string | null;
  competences: string[];
  duree: string | null;
  statut: string | null;
 }
