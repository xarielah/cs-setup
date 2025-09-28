import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LogoComponent } from '../shared/ui/logo.component';
import { NgForOf } from '@angular/common';

type NavigationItem = {
  label: string;
  routerLink: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent, NgForOf, RouterLink, ButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  menu: NavigationItem[] = [
    { label: 'Home', routerLink: '/' },
    {
      label: 'Fresh Guided Setup',
      routerLink: '/setup',
    },
    { label: 'Articles', routerLink: '/articles' },
  ];
}
