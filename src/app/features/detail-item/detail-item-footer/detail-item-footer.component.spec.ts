import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemFooterComponent } from './detail-item-footer.component';

describe('DetailItemFooterComponent', () => {
  let component: DetailItemFooterComponent;
  let fixture: ComponentFixture<DetailItemFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailItemFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailItemFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
