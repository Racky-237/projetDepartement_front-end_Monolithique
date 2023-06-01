import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesEncadrementEtudiantComponent } from './demandes-encadrement-etudiant.component';

describe('DemandesEncadrementEtudiantComponent', () => {
  let component: DemandesEncadrementEtudiantComponent;
  let fixture: ComponentFixture<DemandesEncadrementEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesEncadrementEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesEncadrementEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
