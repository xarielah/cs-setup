import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeybindingsComponent } from './keybindings.component';

describe('KeybindingsComponent', () => {
  let component: KeybindingsComponent;
  let fixture: ComponentFixture<KeybindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeybindingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeybindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
