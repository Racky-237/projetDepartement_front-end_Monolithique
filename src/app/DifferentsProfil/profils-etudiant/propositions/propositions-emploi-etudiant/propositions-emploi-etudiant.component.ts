import { Component } from '@angular/core';
import { tablePropEmploi } from './table.interface';

@Component({
  selector: 'app-propositions-emploi-etudiant',
  templateUrl: './propositions-emploi-etudiant.component.html',
  styleUrls: ['./propositions-emploi-etudiant.component.css']
})
export class PropositionsEmploiEtudiantComponent {

  //Parametres a prendre dans la bd
  tablePropositionEmploi: tablePropEmploi[] =[
    {entreprise:'SOCUCAM',
     secteur: '',
     post: '',
     montant: '',
     statut: 'Vous avez accepte'},
    {entreprise:'Orange CMR',
    secteur: '',
    post: '',
    montant: '10000',
    statut: ''}
  ];
}
