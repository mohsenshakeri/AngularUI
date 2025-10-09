import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLeftSideComponent } from './info-left-side.component';

describe('InfoLeftSideComponent', () => {
  let component: InfoLeftSideComponent;
  let fixture: ComponentFixture<InfoLeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoLeftSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
