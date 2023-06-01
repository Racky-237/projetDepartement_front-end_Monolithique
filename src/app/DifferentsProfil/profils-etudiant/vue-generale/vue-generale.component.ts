import { Component } from '@angular/core';

@Component({
  selector: 'app-vue-generale',
  templateUrl: './vue-generale.component.html',
  styleUrls: ['./vue-generale.component.css']
})
export class VueGeneraleComponent {
  //Parametres a prendre dans la bd
  telephone="+237 693 43 64 74";
  password="quetue";
  matricule="23O3401";
  level ="Licence 3";
  adresseMail="rachel.anaba@gmail.com";
  competences = ['angular', 'bootstrap', 'spring boot'];
  articles = ['angular', 'bootstrap', 'spring boot'];

}
