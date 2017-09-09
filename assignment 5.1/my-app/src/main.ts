import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// AppModule imported from the app.module file
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// AppModule passed to the BoostrapModule funtion to bootstrap the app from
platformBrowserDynamic().bootstrapModule(AppModule);
