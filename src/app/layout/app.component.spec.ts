import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../shared/ui/logo.component';
import { NgForOf } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterOutlet, LogoComponent, NgForOf, RouterLink],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a menu items list (array)`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.menu).toEqual([
      { label: 'Home', routerLink: '/' },
      {
        label: 'Fresh Guided Setup',
        routerLink: '/setup',
      },
      { label: 'Articles', routerLink: '/articles' },
    ]);
  });

  it('should render logo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-logo')).toBeTruthy();
  });
});
