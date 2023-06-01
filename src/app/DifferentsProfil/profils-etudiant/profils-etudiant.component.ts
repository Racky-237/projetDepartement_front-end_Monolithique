import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-profils-etudiant',
  templateUrl: './profils-etudiant.component.html',
  styleUrls: ['./profils-etudiant.component.css']
})
export class ProfilsEtudiantComponent {
  isFixed = false;
  menuSelectionne = 'overview'; //Par defaut, les elements de l'overview seront visibles
  sousMenuSelectionne='';

  //Parametres a prendre dans la bd
  prenom="Rachel";
  nom="Anaba Ngoumou";
  statut="Etudiant(e)";

  //Fonction pour fixer la sous-barre de menu lorsqu'on scroll
  @HostListener('window:scroll')
  onWindowScroll(){
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollOffset >= 50;
  }
  //Fonction pour l'activation d'un menu
  isActive(selection:string){
    return this.menuSelectionne === selection;
  }

  //Fonctions pour la visibilite des donnees specifiques a un menu
  afficherMenu(selection : string){
    this.menuSelectionne = selection;
  }

  //Fonctions pour la visibilite des donnees specifiques a un sous-menu
  afficherSousMenu(menu:string, sousMenu:string){
    this.menuSelectionne = menu;
    this.sousMenuSelectionne = sousMenu
  }

}
