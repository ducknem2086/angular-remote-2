import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * zonejs cd
     */
    //provideZoneChangeDetection({ eventCoalescing: true })
    /**
     * bỏ zone đi
     */
    provideZonelessChangeDetection()
    , provideRouter(routes)]
};
