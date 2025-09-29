import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceBoostComponent } from './performance-boost.component';

describe('PerformanceBoostComponent', () => {
  let component: PerformanceBoostComponent;
  let fixture: ComponentFixture<PerformanceBoostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceBoostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
