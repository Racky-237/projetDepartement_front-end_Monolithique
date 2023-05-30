import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { OffreParrainageComponent } from './offre-parrainage/offre-parrainage.component';
import { OffreStageComponent } from './offre-stage/offre-stage.component';



@NgModule({
  declarations: [
    OffreEmploiComponent,
    OffreParrainageComponent,
    OffreStageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    OffreEmploiComponent,
    OffreParrainageComponent,
    OffreStageComponent
  ]
})
export class OffresModule { }
