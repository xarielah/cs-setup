import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  standalone: true,
})
export class LogoComponent {
  logoText: string = 'CS-SETUP';
  logoAbbreviation: string = 'CS';
}
