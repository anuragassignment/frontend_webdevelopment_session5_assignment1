// Imported Decorator function Component from angular core library
import { Component } from '@angular/core';

// Created class RootComponent decorated with @Component
@Component({
  selector: 'app-root-component', // selector defined for the component
  templateUrl: './app.component.html', // Given path to the html template for the component
  styleUrls: ['./app.component.css'] // Given path to css file for the html template
})
export class RootComponent {
  title = 'app';
}
