import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  isPasswordVisible=false;
  form! : FormGroup;

  //Fonction pour la visibilite du mot de passe
  togglePasswordVisibility(){
    this.isPasswordVisible=!this.isPasswordVisible;
  }

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    });
  }

  //Les getters
  get userName(){
    return this.form.get('userName');
  }

  get password(){
    return this.form.get('password');
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }
}
