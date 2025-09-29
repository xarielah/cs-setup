import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidedSetupComponent } from './guided-setup.component';

describe('GuidedSetupComponent', () => {
  let component: GuidedSetupComponent;
  let fixture: ComponentFixture<GuidedSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidedSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidedSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
