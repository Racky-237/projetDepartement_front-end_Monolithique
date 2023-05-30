import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsStageComponent } from './propositions-stage.component';

describe('PropositionsStageComponent', () => {
  let component: PropositionsStageComponent;
  let fixture: ComponentFixture<PropositionsStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositionsStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionsStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
