import { Component } from '@angular/core';
import { tablePropParrainage } from './table.interface';

@Component({
  selector: 'app-propositions-parrainage-etudiant',
  templateUrl: './propositions-parrainage-etudiant.component.html',
  styleUrls: ['./propositions-parrainage-etudiant.component.css']
})
export class PropositionsParrainageEtudiantComponent {


  //Parametres a prendre dans la bd
  tablePropositionParrainage: tablePropParrainage[] =[
    {entreprise:'SOCUCAM',
     secteur: '',
     theme: '',
     financement: '',
     montant: '',
     statut: 'Vous avez accepte'},
    {entreprise:'Orange CMR',
    secteur: '',
    theme: '',
    financement: 'oui',
    montant: '10000',
    statut: ''}
  ];
}
