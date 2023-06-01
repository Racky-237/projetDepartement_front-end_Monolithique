import { Component } from '@angular/core';
import { tablePropStage } from './table.interface';

@Component({
  selector: 'app-propositions-stage-etudiant',
  templateUrl: './propositions-stage-etudiant.component.html',
  styleUrls: ['./propositions-stage-etudiant.component.css']
})
export class PropositionsStageEtudiantComponent {


  //Parametres a prendre dans la bd
  tablePropositionStage: tablePropStage[] =[
    {entreprise:'SOCUCAM',
     secteur: '',
     duree: '3 mois',
     salarie: 'oui',
     montant: '10000',
     statut: ''},
    {entreprise:'Orange CMR',
    secteur: '',
    salarie: '',
    montant: '',
    duree: '1 ans',
    statut: ''}
  ];
}
