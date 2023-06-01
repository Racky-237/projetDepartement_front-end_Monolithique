import { Component } from '@angular/core';
import { tableDemande } from './table-demande-parrainage.interface';

@Component({
  selector: 'app-demandes-parrainage-etudiant',
  templateUrl: './demandes-parrainage-etudiant.component.html',
  styleUrls: ['./demandes-parrainage-etudiant.component.css']
})
export class DemandesParrainageEtudiantComponent {

   //Parametres a prendre dans la bd
  tableDemandeParrainage: tableDemande[] =[
    {entreprise:'SOCUCAM',
     theme: 'reforme du site',
     statut: ''},
    {entreprise:'Orange CMR',
    theme: 'reforme du site',
    statut: ''}
  ];
}
