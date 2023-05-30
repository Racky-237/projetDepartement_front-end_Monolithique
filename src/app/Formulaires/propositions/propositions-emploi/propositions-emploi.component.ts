import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-propositions-emploi',
  templateUrl: './propositions-emploi.component.html',
  styleUrls: ['./propositions-emploi.component.css']
})
export class PropositionsEmploiComponent {
  formStage! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.formStage= this.fb.group({
      poste:['', Validators.required],
      secteur:['', Validators.required],
      montant:['', Validators.required]
    });
  }

  //soumission du formulaire
  submit(){
    if(this.formStage.valid){

    }
  }

  //Les getters pour la validite des champs
  get duree(){
    return this.formStage.get('duree');
  }

  get secteur(){
    return this.formStage.get('secteur');
  }

  get montant(){
    return this.formStage.get('montant');
  }

}
