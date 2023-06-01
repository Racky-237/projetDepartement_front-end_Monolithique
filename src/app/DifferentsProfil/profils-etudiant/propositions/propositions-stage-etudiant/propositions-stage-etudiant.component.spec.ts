import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsStageEtudiantComponent } from './propositions-stage-etudiant.component';

describe('PropositionsStageEtudiantComponent', () => {
  let component: PropositionsStageEtudiantComponent;
  let fixture: ComponentFixture<PropositionsStageEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsStageEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsStageEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
