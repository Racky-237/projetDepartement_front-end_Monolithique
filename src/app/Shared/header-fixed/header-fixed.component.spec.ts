import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFixedComponent } from './header-fixed.component';

describe('HeaderFixedComponent', () => {
  let component: HeaderFixedComponent;
  let fixture: ComponentFixture<HeaderFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
