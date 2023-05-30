import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilsEntrepriseComponent } from './profils-entreprise.component';

describe('ProfilsEntrepriseComponent', () => {
  let component: ProfilsEntrepriseComponent;
  let fixture: ComponentFixture<ProfilsEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilsEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilsEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
