import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Imported RootComponent from app.component.ts
import { RootComponent } from './app.component';


@NgModule({
  declarations: [
    RootComponent // Declared RootComponent as a component of App Module
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent] // configured to bootstrap from RootComponent
})
export class AppModule { }
