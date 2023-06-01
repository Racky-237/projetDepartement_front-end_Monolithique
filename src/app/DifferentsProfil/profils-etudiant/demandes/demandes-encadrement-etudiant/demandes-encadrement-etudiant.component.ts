import { Component } from '@angular/core';
import { tableDemande } from './table-demande-encadrement.interface';

@Component({
  selector: 'app-demandes-encadrement-etudiant',
  templateUrl: './demandes-encadrement-etudiant.component.html',
  styleUrls: ['./demandes-encadrement-etudiant.component.css']
})
export class DemandesEncadrementEtudiantComponent {

  //Parametres a prendre dans la bd
  tableDemandeEncadrement: tableDemande[] =[
    {enseignant:'Dr bayem',
     theme: 'reforme du site',
     statut: ''},
    {enseignant:'Professeur Tsopze',
    theme: 'reforme du site',
    statut: ''}
  ];
}
