import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxsComponent } from './input-boxs.component';

describe('InputBoxsComponent', () => {
  let component: InputBoxsComponent;
  let fixture: ComponentFixture<InputBoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputBoxsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
