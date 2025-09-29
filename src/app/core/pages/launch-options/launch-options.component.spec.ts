import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchOptionsComponent } from './launch-options.component';

describe('LaunchOptionsComponent', () => {
  let component: LaunchOptionsComponent;
  let fixture: ComponentFixture<LaunchOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
