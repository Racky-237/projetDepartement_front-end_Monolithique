import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offre-parrainage',
  templateUrl: './offre-parrainage.component.html',
  styleUrls: ['./offre-parrainage.component.css']
})
export class OffreParrainageComponent {
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      secteur:['', Validators.required]
    });
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }

  //Les getters pour la validite des champs
  get secteur(){
    return this.form.get('secteur');
  }

}
