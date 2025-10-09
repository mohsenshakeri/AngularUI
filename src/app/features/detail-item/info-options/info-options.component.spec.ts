import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOptionsComponent } from './info-options.component';

describe('InfoOptionsComponent', () => {
  let component: InfoOptionsComponent;
  let fixture: ComponentFixture<InfoOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
