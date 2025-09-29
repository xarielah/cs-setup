import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the logo', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a logo abbreviation`, () => {
    expect(component.logoAbbreviation).toBeDefined();
    expect(component.logoAbbreviation).toBe('CS');
  });

  it('should have a logo text', () => {
    expect(component.logoText).toBeDefined();
    expect(component.logoText).toBe('CS Setup Helper');
  });
});
