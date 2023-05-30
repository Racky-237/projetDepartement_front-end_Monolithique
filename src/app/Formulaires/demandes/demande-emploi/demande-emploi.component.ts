import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demande-emploi',
  templateUrl: './demande-emploi.component.html',
  styleUrls: ['./demande-emploi.component.css']
})
export class DemandeEmploiComponent {

  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      competence_attendue:['', Validators.required]
    });
  }



  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }

  //Les getters pour la validite des champs
  get competence_attendue(){
    return this.form.get('competence_attendue');
  }
}
