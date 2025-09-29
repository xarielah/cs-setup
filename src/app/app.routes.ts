import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { GuidedSetupComponent } from './core/pages/guided-setup/guided-setup.component';
import { VideoSettingsComponent } from './core/pages/video-settings/video-settings.component';
import { CrosshairDesignerComponent } from './core/pages/crosshair-designer/crosshair-designer.component';
import { KeybindingsComponent } from './core/pages/keybindings/keybindings.component';
import { LaunchOptionsComponent } from './core/pages/launch-options/launch-options.component';
import { PerformanceBoostComponent } from './core/pages/performance-boost/performance-boost.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'guided-setup',
    component: GuidedSetupComponent,
  },
  {
    path: 'video-settings',
    component: VideoSettingsComponent,
  },
  {
    path: 'crosshair-designer',
    component: CrosshairDesignerComponent,
  },
  {
    path: 'keybindings',
    component: KeybindingsComponent,
  },
  {
    path: 'launch-options',
    component: LaunchOptionsComponent,
  },
  {
    path: 'performance-boost',
    component: PerformanceBoostComponent,
  },
];
