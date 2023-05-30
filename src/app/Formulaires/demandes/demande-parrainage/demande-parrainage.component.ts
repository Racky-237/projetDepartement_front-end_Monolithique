import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demande-parrainage',
  templateUrl: './demande-parrainage.component.html',
  styleUrls: ['./demande-parrainage.component.css']
})
export class DemandeParrainageComponent {
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      theme:['', Validators.required]
    });
  }



  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }

  //Les getters pour la validite des champs
  get theme(){
    return this.form.get('theme');
  }

}
