import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.component.html',
  styleUrls: ['./inscription-entreprise.component.css']
})
export class InscriptionEntrepriseComponent {
  isPasswordVisible=false;
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      nomEntreprise:['', Validators.required],
      localisation:['', Validators.required],
      dateCreation:['', Validators.required],
      mail:['', Validators.required],
      telephone:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      conditionsInscription:[false, Validators.requiredTrue]
    });
  }

  //Fonction pour la visibilite du mot de passe
  togglePasswordVisibility(){
    this.isPasswordVisible=!this.isPasswordVisible;
  }

  //Les getters pour la validite des champs
  get nomEntreprise(){
    return this.form.get('nomEntreprise');
  }

  get localisation(){
    return this.form.get('localisation');
  }

  get dateCreation(){
    return this.form.get('dateCreation');
  }

  get mail(){
    return this.form.get('mail');
  }

  get telephone(){
    return this.form.get('telephone');
  }

  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }

}
