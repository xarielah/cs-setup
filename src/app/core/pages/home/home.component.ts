import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from '@angular/router';

type FeatureCard = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

@Component({
  selector: 'home',
  imports: [
    NzButtonModule,
    NzTypographyModule,
    NzCardModule,
    NzIconModule,
    RouterLink,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  featureCards: FeatureCard[] = [
    {
      title: 'Video Settings',
      description:
        'Optimize graphics settings for maximum FPS while maintaining visual clarity for spotting enemies.',
      icon: 'desktop',
      href: '/setup/video-settings',
    },
    {
      title: 'Crosshair Designer',
      description:
        'Create the perfect crosshair with our visual editor. Test different styles and find your ideal setup.',
      icon: 'aim',
      href: '/setup/crosshair-designer',
    },
    {
      title: 'Keybind Customizer',
      description:
        'Set up efficient keybinds for grenades, buy scripts, and advanced movement techniques.',
      icon: 'code',
      href: '/setup/keybind-customizer',
    },
    {
      title: 'Launch Options',
      description:
        'Configure optimal launch parameters for your specific hardware and performance needs.',
      icon: 'control',
      href: '/setup/launch-options',
    },
    {
      title: 'Performance Boost',
      description:
        'Maximize your FPS with proven settings used by professional players and streamers.',
      icon: 'rocket',
      href: '/setup/performance-boost',
    },
    {
      title: 'Config Export',
      description:
        'Download your complete configuration as ready-to-use .cfg files for instant setup.',
      icon: 'download',
      href: '/setup/config-export',
    },
  ];
}
