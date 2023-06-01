//Interface de la table proposition de la base de donnees de notre API pour les parrainages
export interface tablePropParrainage{
  entreprise: string | null;
  theme: string | null;
  secteur: string | null;
  financement: string | null;
  montant: string | null;
  statut: string | null;
 }
