import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ConnexionComponent } from './Formulaires/connexion/connexion.component';
import { InscriptionComponent } from './Formulaires/inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicationComponent } from './Formulaires/publication/publication.component';
import { OffresComponent } from './Formulaires/offres/offres.component';
import { DemandesComponent } from './Formulaires/demandes/demandes.component';
import { PropositionsComponent } from './Formulaires/propositions/propositions.component';
import { ArticlesComponent } from './Formulaires/articles/articles.component';
import { ProjetsComponent } from './Formulaires/projets/projets.component';
import { PropositionsModule } from './Formulaires/propositions/propositions.module';
import { DemandesModule } from './Formulaires/demandes/demandes.module';
import { OffresModule } from './Formulaires/offres/offres.module';
import { InscriptionModule } from './Formulaires/inscription/inscription.module';
import { MainHeaderComponent } from './Shared/main-header/main-header.component';
import { ProfilsEtudiantComponent } from './DifferentsProfil/profils-etudiant/profils-etudiant.component';
import { ProfilsEntrepriseComponent } from './DifferentsProfil/profils-entreprise/profils-entreprise.component';
import { ProfilsEnseignantComponent } from './DifferentsProfil/profils-enseignant/profils-enseignant.component';
import { HeaderSimpleComponent } from './Shared/header-simple/header-simple.component';
import { HeaderFixedComponent } from './Shared/header-fixed/header-fixed.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    PublicationComponent,
    OffresComponent,
    DemandesComponent,
    PropositionsComponent,
    ArticlesComponent,
    ProjetsComponent,
    MainHeaderComponent,
    ProfilsEtudiantComponent,
    ProfilsEntrepriseComponent,
    ProfilsEnseignantComponent,
    HeaderSimpleComponent,
    HeaderFixedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PropositionsModule,
    DemandesModule,
    OffresModule,
    InscriptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
