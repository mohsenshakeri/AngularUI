import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernApartmentComponent } from './modern-apartment.component';

describe('ModernApartmentComponent', () => {
  let component: ModernApartmentComponent;
  let fixture: ComponentFixture<ModernApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModernApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModernApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
