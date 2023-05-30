import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-profils-etudiant',
  templateUrl: './profils-etudiant.component.html',
  styleUrls: ['./profils-etudiant.component.css']
})
export class ProfilsEtudiantComponent {
  isFixed = false;

  //Parametres a prendre dans la bd
  prenom="Rachel";
  nom="Anaba Ngoumou";
  statut="Etudiant(e)"

  //Fonction pour fixer la sous-barre de menu lorsqu'on scroll
  @HostListener('window:scroll')
  onWindowScroll(){
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isFixed = scrollOffset >= 50;
  }

}
