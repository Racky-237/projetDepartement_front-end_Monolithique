import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesParrainageEtudiantComponent } from './demandes-parrainage-etudiant.component';

describe('DemandesParrainageEtudiantComponent', () => {
  let component: DemandesParrainageEtudiantComponent;
  let fixture: ComponentFixture<DemandesParrainageEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesParrainageEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesParrainageEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
