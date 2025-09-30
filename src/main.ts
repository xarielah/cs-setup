import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/layout/app.component';

// Commit test number 1
// This line is totally a new feature

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
