import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { VueGeneraleComponent } from './vue-generale/vue-generale.component';
import { ProjetsEnCoursComponent } from './projets/projets-en-cours/projets-en-cours.component';
import { ProjetsTerminesComponent } from './projets/projets-termines/projets-termines.component';
import { PropositionsEmploiEtudiantComponent } from './propositions/propositions-emploi-etudiant/propositions-emploi-etudiant.component';
import { PropositionsStageEtudiantComponent } from './propositions/propositions-stage-etudiant/propositions-stage-etudiant.component';
import { PropositionsParrainageEtudiantComponent } from './propositions/propositions-parrainage-etudiant/propositions-parrainage-etudiant.component';
import { DemandesParrainageEtudiantComponent } from './demandes/demandes-parrainage-etudiant/demandes-parrainage-etudiant.component';
import { DemandesStageEtudiantComponent } from './demandes/demandes-stage-etudiant/demandes-stage-etudiant.component';
import { DemandesEmploiEtudiantComponent } from './demandes/demandes-emploi-etudiant/demandes-emploi-etudiant.component';
import { DemandesEncadrementEtudiantComponent } from './demandes/demandes-encadrement-etudiant/demandes-encadrement-etudiant.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    VueGeneraleComponent,
    ProjetsEnCoursComponent,
    ProjetsTerminesComponent,
    PropositionsEmploiEtudiantComponent,
    PropositionsStageEtudiantComponent,
    PropositionsParrainageEtudiantComponent,
    DemandesParrainageEtudiantComponent,
    DemandesStageEtudiantComponent,
    DemandesEmploiEtudiantComponent,
    DemandesEncadrementEtudiantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ArticlesComponent,
    VueGeneraleComponent,
    ProjetsEnCoursComponent,
    ProjetsTerminesComponent,
    PropositionsEmploiEtudiantComponent,
    PropositionsStageEtudiantComponent,
    PropositionsParrainageEtudiantComponent,
    DemandesParrainageEtudiantComponent,
    DemandesStageEtudiantComponent,
    DemandesEmploiEtudiantComponent,
    DemandesEncadrementEtudiantComponent
  ]
})
export class ProfilsEtudiantModule { }
