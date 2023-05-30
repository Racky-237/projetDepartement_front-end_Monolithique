import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropositionsStageComponent } from './propositions-stage/propositions-stage.component';
import { PropositionsEmploiComponent } from './propositions-emploi/propositions-emploi.component';
import { PropositionsParrainageComponent } from './propositions-parrainage/propositions-parrainage.component';



@NgModule({
  declarations: [
    PropositionsStageComponent,
    PropositionsEmploiComponent,
    PropositionsParrainageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PropositionsStageComponent,
    PropositionsEmploiComponent,
    PropositionsParrainageComponent
  ]
})
export class PropositionsModule { }
