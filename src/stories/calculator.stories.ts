import { Meta, StoryObj } from '@storybook/angular';
import { CalculatorComponent } from '../app/calculator/calculator.component';

export default {
  title: 'Components/Calculator',
  component: CalculatorComponent,
} as Meta<CalculatorComponent>;

export const Default: StoryObj<CalculatorComponent> = {
  args: {
    displayValue: '0',
  },
};

export const WithValue: StoryObj<CalculatorComponent> = {
  args: {
    displayValue: '123',
  },
};
