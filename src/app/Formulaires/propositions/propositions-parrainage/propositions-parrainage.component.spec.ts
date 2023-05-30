import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsParrainageComponent } from './propositions-parrainage.component';

describe('PropositionsParrainageComponent', () => {
  let component: PropositionsParrainageComponent;
  let fixture: ComponentFixture<PropositionsParrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsParrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsParrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
