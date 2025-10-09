import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentDescriptionComponent } from './apartment-description.component';

describe('ApartmentDescriptionComponent', () => {
  let component: ApartmentDescriptionComponent;
  let fixture: ComponentFixture<ApartmentDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApartmentDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
