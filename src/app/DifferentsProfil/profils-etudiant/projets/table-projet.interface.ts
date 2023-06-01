//Interface de la table projets de la base de donnees de notre API
export interface tableProjet{
  theme: string | null;
  personnel: boolean | null;
  encadreur: string | null;
  duree: string | null;
 }
