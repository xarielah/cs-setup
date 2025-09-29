import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  standalone: true,
})
export class LogoComponent {
  logoText: string = 'CS Setup Helper';
  logoAbbreviation: string = 'CS';
}
