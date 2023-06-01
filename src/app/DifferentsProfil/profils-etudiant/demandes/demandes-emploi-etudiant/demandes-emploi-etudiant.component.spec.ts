import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesEmploiEtudiantComponent } from './demandes-emploi-etudiant.component';

describe('DemandesEmploiEtudiantComponent', () => {
  let component: DemandesEmploiEtudiantComponent;
  let fixture: ComponentFixture<DemandesEmploiEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesEmploiEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesEmploiEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
