//Interface de la table demande de la base de donnees de notre API pour les emplois
export interface tableDemande{
  entreprise: string | null;
  competences: string[];
  statut: string | null;
 }
