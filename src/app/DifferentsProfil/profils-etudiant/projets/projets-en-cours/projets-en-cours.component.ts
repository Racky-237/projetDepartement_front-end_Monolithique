import { Component } from '@angular/core';
import { tableProjet } from '../table-projet.interface';

@Component({
  selector: 'app-projets-en-cours',
  templateUrl: './projets-en-cours.component.html',
  styleUrls: ['./projets-en-cours.component.css']
})
export class ProjetsEnCoursComponent {

  //Parametres a prendre dans la bd
  projetTable: tableProjet[] =[
    {theme:'developement web',
     duree: '20 jours',
     personnel: true,
    encadreur: 'Dr Jiomekon' }
  ];
}
