import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-propositions-stage',
  templateUrl: './propositions-stage.component.html',
  styleUrls: ['./propositions-stage.component.css']
})
export class PropositionsStageComponent {
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      dureeLettre:['', Validators.required],
      dureeNombre:['', Validators.required],
      secteur:['', Validators.required],
      salarie:['', Validators.required],
      montant:['', Validators.required]//ce champ sera obligatoire uniquement si financement vaut OUI
    });
      //on verifie s'il faut rendre le champ financement obligatoire ou pas
    this.form.get('salarie')?.valueChanges.subscribe((value) => {
      if (value === 'oui') {
        this.form.get('montant')?.setValidators(Validators.required);
      }else{
        this.form.get('montant')?.clearValidators();
      }
      this.form.get('montant')?.updateValueAndValidity();
    });
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }

  //Les getters pour la validite des champs
  get dureeLettre(){
    return this.form.get('dureeLettre');
  }

   get dureeNombre(){
    return this.form.get('dureeNombre');
  }

  get secteur(){
    return this.form.get('secteur');
  }

  get salarie(){
    return this.form.get('salarie');
  }

  get montant(){
    return this.form.get('montant');
  }

}
