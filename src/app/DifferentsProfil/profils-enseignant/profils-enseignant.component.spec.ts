import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsEnseignantComponent } from './profils-enseignant.component';

describe('ProfilsEnseignantComponent', () => {
  let component: ProfilsEnseignantComponent;
  let fixture: ComponentFixture<ProfilsEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilsEnseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilsEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
