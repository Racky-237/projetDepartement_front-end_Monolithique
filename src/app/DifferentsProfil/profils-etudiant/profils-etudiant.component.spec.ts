import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsEtudiantComponent } from './profils-etudiant.component';

describe('ProfilsEtudiantComponent', () => {
  let component: ProfilsEtudiantComponent;
  let fixture: ComponentFixture<ProfilsEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilsEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilsEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
