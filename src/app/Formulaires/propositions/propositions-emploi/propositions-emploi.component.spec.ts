import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsEmploiComponent } from './propositions-emploi.component';

describe('PropositionsEmploiComponent', () => {
  let component: PropositionsEmploiComponent;
  let fixture: ComponentFixture<PropositionsEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsEmploiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
