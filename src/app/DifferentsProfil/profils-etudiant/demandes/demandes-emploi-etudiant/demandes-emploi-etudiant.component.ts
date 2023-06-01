import { Component } from '@angular/core';
import { tableDemande } from './table-demande-emploi.interface';

@Component({
  selector: 'app-demandes-emploi-etudiant',
  templateUrl: './demandes-emploi-etudiant.component.html',
  styleUrls: ['./demandes-emploi-etudiant.component.css']
})
export class DemandesEmploiEtudiantComponent {


  //Parametres a prendre dans la bd
  tableDemandeEmploi: tableDemande[] =[
    {entreprise:'MinCommerce',
     competences: [],
     statut: ''},
    {entreprise:'MTN Cameroun',
    competences: [],
    statut: ''}
  ];
}
