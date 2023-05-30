import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  form! : FormGroup;

  //On verifie que chaque champ soit rempli
  constructor(private fb : FormBuilder){
    this.form= this.fb.group({
      titre:['', Validators.required],
      theme:['', Validators.required],
      lien:['', Validators.required],
      auteur:['', Validators.required]
    });
  }

  //soumission du formulaire
  submit(){
    if(this.form.valid){

    }
  }

  //Les getters pour la validite des champs
  get titre(){
    return this.form.get('titre');
  }

  get theme(){
    return this.form.get('theme');
  }

  get lien(){
    return this.form.get('montant');
  }

  get auteur(){
    return this.form.get('titre');
  }

  get coAuteur(){
    return this.form.get('theme');
  }

  get journal(){
    return this.form.get('montant');
  }

}
