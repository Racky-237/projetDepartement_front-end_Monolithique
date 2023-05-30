import { Component } from '@angular/core';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent {
  champSelectionne = 'emploi'; //Par defaut, les champs correspondant a l'offre d'emploi seront visibles

  //Fonction pour la visibilite des champs de formulaire specifiques a un utilisateur
  afficherChamp(selection : string){
    this.champSelectionne = selection;
  }

}
