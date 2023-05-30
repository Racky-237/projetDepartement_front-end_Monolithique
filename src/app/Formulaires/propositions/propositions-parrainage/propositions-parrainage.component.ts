import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-propositions-parrainage',
  templateUrl: './propositions-parrainage.component.html',
  styleUrls: ['./propositions-parrainage.component.css']
})
export class PropositionsParrainageComponent {
  form! : FormGroup;
  finance!: string;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      theme:['', Validators.required],
      secteur:['', Validators.required],
      financement:['', Validators.required],
      montant:['', Validators.required] //ce champ sera obligatoire uniquement si financement vaut OUI
    });
      //on verifie s'il y'a financement ou pas
    this.form.get('financement')?.valueChanges.subscribe((value) => {
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
  get theme(){
    return this.form.get('theme');
  }

  get secteur(){
    return this.form.get('secteur');
  }

  get financement(){
    return this.form.get('financement');
  }

  get montant(){
    return this.form.get('montant');
  }


}
