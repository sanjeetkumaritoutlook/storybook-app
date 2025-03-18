import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CalculatorComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
   <app-calculator></app-calculator>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-latest';
}
