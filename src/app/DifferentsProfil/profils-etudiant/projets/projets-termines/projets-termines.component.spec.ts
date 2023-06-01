import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsTerminesComponent } from './projets-termines.component';

describe('ProjetsTerminesComponent', () => {
  let component: ProjetsTerminesComponent;
  let fixture: ComponentFixture<ProjetsTerminesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsTerminesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetsTerminesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
