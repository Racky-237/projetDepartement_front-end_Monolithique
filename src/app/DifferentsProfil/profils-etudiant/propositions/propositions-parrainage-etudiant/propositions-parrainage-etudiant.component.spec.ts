import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsParrainageEtudiantComponent } from './propositions-parrainage-etudiant.component';

describe('PropositionsParrainageEtudiantComponent', () => {
  let component: PropositionsParrainageEtudiantComponent;
  let fixture: ComponentFixture<PropositionsParrainageEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsParrainageEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsParrainageEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
