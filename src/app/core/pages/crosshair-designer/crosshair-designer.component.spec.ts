import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosshairDesignerComponent } from './crosshair-designer.component';

describe('CrosshairDesignerComponent', () => {
  let component: CrosshairDesignerComponent;
  let fixture: ComponentFixture<CrosshairDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrosshairDesignerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrosshairDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
