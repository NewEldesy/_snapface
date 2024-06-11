import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// Pour changer la lange par defaut en français
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

registerLocaleData(fr.default);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
