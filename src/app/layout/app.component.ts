import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogoComponent } from '../shared/ui/logo.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuItem, menuItems } from '../shared/types/menu-items';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    LogoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  activeFrom: number = 2025;
  currentYear: number = new Date().getFullYear();
  menu: MenuItem[] = menuItems;
}
