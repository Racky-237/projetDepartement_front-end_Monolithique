import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent {

  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      secteur:['', Validators.required],
      poste:['', Validators.required],
      competence_attendue:['', Validators.required]
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

  get poste(){
    return this.form.get('poste');
  }

  get competence_attendue(){
    return this.form.get('competence_attendue');
  }

}
