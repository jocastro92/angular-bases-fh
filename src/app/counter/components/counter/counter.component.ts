import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <input (click)="increaseBy(+1)" type="button" value="+1">
  <input (click)="reset()" type="button" value="Reset">
  <input (click)="increaseBy(-1)" type="button" value="-1">
  `
})

export class CounterComponent {
  public title: string = 'Mi Primer Curso de Angular';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
