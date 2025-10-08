import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiballComponent } from './uiball.component';

describe('UiballComponent', () => {
  let component: UiballComponent;
  let fixture: ComponentFixture<UiballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiballComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
