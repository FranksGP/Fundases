import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet]
})
export class AppComponent {}
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
