import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandeEmploiComponent } from './demande-emploi/demande-emploi.component';
import { DemandeParrainageComponent } from './demande-parrainage/demande-parrainage.component';
import { DemandeStageComponent } from './demande-stage/demande-stage.component';



@NgModule({
  declarations: [
    DemandeEmploiComponent,
    DemandeParrainageComponent,
    DemandeStageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DemandeEmploiComponent,
    DemandeParrainageComponent,
    DemandeStageComponent
  ]
})
export class DemandesModule { }
