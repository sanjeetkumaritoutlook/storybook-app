import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calculator',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="calculator">
      <div class="display">{{ displayValue }}</div>
      <div class="buttons">
        <button *ngFor="let num of numbers" (click)="onNumberClick(num)">
          {{ num }}
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .calculator {
        width: 200px;
        padding: 10px;
        border: 2px solid #ccc;
        text-align: center;
      }
      .display {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .buttons button {
        width: 30px;
        margin: 5px;
      }
    `,
  ],
})
export class CalculatorComponent {
  @Input() displayValue: string = '0';

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  onNumberClick(num: number) {
    this.displayValue = this.displayValue === '0' ? `${num}` : `${this.displayValue}${num}`;
  }
}
