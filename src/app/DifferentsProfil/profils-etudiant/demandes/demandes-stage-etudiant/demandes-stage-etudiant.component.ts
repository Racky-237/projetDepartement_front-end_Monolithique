import { Component } from '@angular/core';
import { tableDemande } from './table-demande-stage.interface';

@Component({
  selector: 'app-demandes-stage-etudiant',
  templateUrl: './demandes-stage-etudiant.component.html',
  styleUrls: ['./demandes-stage-etudiant.component.css']
})
export class DemandesStageEtudiantComponent {

  //Parametres a prendre dans la bd
  tableDemandeStage: tableDemande[] =[
    {entreprise:'SOCUCAM',
     competences: ['angular', 'spring boot'],
     duree: '3 mois',
     statut: ''},
    {entreprise:'Orange CMR',
     competences: ['fluther', 'spring boot'],
     duree: '1 ans',
     statut: ''}
  ];
}
