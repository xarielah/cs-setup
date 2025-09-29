import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  ControlOutline,
  CodeOutline,
  AimOutline,
  DesktopOutline,
  RocketOutline,
  DownloadOutline,
} from '@ant-design/icons-angular/icons';

const icons = [
  ControlOutline,
  CodeOutline,
  AimOutline,
  DesktopOutline,
  RocketOutline,
  DownloadOutline,
] as IconDefinition[];

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideNzIcons(icons),
    provideHttpClient(),
  ],
};
