import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreParrainageComponent } from './offre-parrainage.component';

describe('OffreParrainageComponent', () => {
  let component: OffreParrainageComponent;
  let fixture: ComponentFixture<OffreParrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreParrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
