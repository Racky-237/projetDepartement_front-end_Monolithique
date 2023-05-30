import { Component } from '@angular/core';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent {

  champSelectionne = 'emploi'; //Par defaut, les champs correspondant a l'offre d'emploi seront visibles

  //Fonction pour la visibilite des champs de formulaire specifiques a un utilisateur
  afficherChamp(selection : string){
    this.champSelectionne = selection;
  }

}
