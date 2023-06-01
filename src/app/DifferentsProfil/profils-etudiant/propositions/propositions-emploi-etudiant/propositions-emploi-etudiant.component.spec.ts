import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsEmploiEtudiantComponent } from './propositions-emploi-etudiant.component';

describe('PropositionsEmploiEtudiantComponent', () => {
  let component: PropositionsEmploiEtudiantComponent;
  let fixture: ComponentFixture<PropositionsEmploiEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsEmploiEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsEmploiEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
