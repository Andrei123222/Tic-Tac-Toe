import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  imports: [],
  template: `
    <button>{{ value }}</button>
  `,
  styles: ``
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | undefined;

}
