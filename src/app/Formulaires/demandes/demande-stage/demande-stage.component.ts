import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demande-stage',
  templateUrl: './demande-stage.component.html',
  styleUrls: ['./demande-stage.component.css']
})
export class DemandeStageComponent {
  formStage! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.formStage= this.fb.group({
      competences:['', Validators.required],
      dureeLettre:['', Validators.required],
      dureeNombre:['', Validators.required]
    });
  }



  //soumission du formulaire
  submit(){
    if(this.formStage.valid){

    }
  }

  //Les getters pour la validite des champs
  get dureeLettre(){
    return this.formStage.get('duree');
  }

  get dureeNombre(){
    return this.formStage.get('duree');
  }

  get competences(){
    return this.formStage.get('competence_attendue');
  }


}
