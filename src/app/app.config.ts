import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers:
        [
            provideHttpClient(withInterceptorsFromDi()),
            provideAnimationsAsync(),
            providePrimeNG({
              theme: {
                  preset: Aura
              }
          }),
            provideZoneChangeDetection(
           { eventCoalescing: true }), 
              provideRouter(routes)
        ],
      
};
