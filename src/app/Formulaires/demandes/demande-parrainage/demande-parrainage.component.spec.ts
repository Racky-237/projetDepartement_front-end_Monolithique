import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeParrainageComponent } from './demande-parrainage.component';

describe('DemandeParrainageComponent', () => {
  let component: DemandeParrainageComponent;
  let fixture: ComponentFixture<DemandeParrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeParrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
