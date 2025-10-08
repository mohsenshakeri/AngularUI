import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyCardComponent } from './safety-card.component';

describe('SafetyCardComponent', () => {
  let component: SafetyCardComponent;
  let fixture: ComponentFixture<SafetyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
