import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayUpdateComponent } from './stay-update.component';

describe('StayUpdateComponent', () => {
  let component: StayUpdateComponent;
  let fixture: ComponentFixture<StayUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StayUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
