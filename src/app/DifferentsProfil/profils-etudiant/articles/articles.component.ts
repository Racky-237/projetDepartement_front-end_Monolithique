import { Component } from '@angular/core';

@Component({
  selector: 'app-articles-profil-etudiant',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  //Parametres a prendre dans la bd
  article=[
    {titre:'developpen web',
     theme: 'la securite dans le developpement web',
     lien:'jeanDupont/devWeb/mon_article.com'},
     {titre:'machine learning',
     theme: 'La recherche des donnees',
     lien:'jeanDupont/devWeb/mon_articleSurLeDeeplearning.com'},
     {titre:'developpen web',
     theme: 'la securite dans le developpement web',
     lien:'jeanDupont/devWeb/mon_article.com'},
     {titre:'machine learning',
     theme: 'La recherche des donnees',
     lien:'jeanDupont/devWeb/mon_articleSurLeDeeplearning.com'}
  ];

}
