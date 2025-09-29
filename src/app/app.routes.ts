import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { GuidedSetupComponent } from './core/pages/guided-setup/guided-setup.component';
import { VideoSettingsComponent } from './core/pages/video-settings/video-settings.component';
import { CrosshairDesignerComponent } from './core/pages/crosshair-designer/crosshair-designer.component';
import { KeybindingsComponent } from './core/pages/keybindings/keybindings.component';
import { LaunchOptionsComponent } from './core/pages/launch-options/launch-options.component';
import { PerformanceBoostComponent } from './core/pages/performance-boost/performance-boost.component';
import { MenuHrefs } from './shared/types/menu-items';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: MenuHrefs.GuidedSetup,
    component: GuidedSetupComponent,
  },
  {
    path: MenuHrefs.VideoSettings,
    component: VideoSettingsComponent,
  },
  {
    path: MenuHrefs.CrosshairDesigner,
    component: CrosshairDesignerComponent,
  },
  {
    path: MenuHrefs.Keybindings,
    component: KeybindingsComponent,
  },
  {
    path: MenuHrefs.LaunchOptions,
    component: LaunchOptionsComponent,
  },
  {
    path: MenuHrefs.Performance,
    component: PerformanceBoostComponent,
  },
];
