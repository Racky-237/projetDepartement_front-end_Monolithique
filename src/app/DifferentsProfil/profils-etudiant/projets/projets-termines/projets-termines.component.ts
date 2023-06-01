import { Component } from '@angular/core';
import { tableProjet } from '../table-projet.interface';

@Component({
  selector: 'app-projets-termines',
  templateUrl: './projets-termines.component.html',
  styleUrls: ['./projets-termines.component.css']
})
export class ProjetsTerminesComponent {

  //Parametres a prendre dans la bd
  projetTable: tableProjet[] =[

  ];

}
