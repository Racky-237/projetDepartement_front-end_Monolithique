import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesStageEtudiantComponent } from './demandes-stage-etudiant.component';

describe('DemandesStageEtudiantComponent', () => {
  let component: DemandesStageEtudiantComponent;
  let fixture: ComponentFixture<DemandesStageEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesStageEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesStageEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
