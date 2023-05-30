import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-etudiant',
  templateUrl: './inscription-etudiant.component.html',
  styleUrls: ['./inscription-etudiant.component.css']
})
export class InscriptionEtudiantComponent {
  isPasswordVisible=false;
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      prenom:['', Validators.required],
      nom:['', Validators.required],
      matricule:['', Validators.required],
      mail:['', Validators.required],
      level:['', Validators.required],
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
  get prenom(){
    return this.form.get('prenom');
  }

  get nom(){
    return this.form.get('nom');
  }

  get matricule(){
    return this.form.get('matricule');
  }

  get mail(){
    return this.form.get('mail');
  }

  get level(){
    return this.form.get('level');
  }

  get telephone(){
    return this.form.get('prenom');
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
