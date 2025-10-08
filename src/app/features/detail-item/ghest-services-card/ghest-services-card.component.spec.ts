import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhestServicesCardComponent } from './ghest-services-card.component';

describe('GhestServicesCardComponent', () => {
  let component: GhestServicesCardComponent;
  let fixture: ComponentFixture<GhestServicesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GhestServicesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhestServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
