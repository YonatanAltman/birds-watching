import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-first',
  template: `
    Name: {{ name }}
    <div class="label">First name</div>
    <div class="input">
      <input [value]="name"
             [type]="inputType"
             placeholder="Type some">
    </div>
    <select
      (change)="changeInputType($event)"
    >
      <option value="text">Text</option>
      <option value="password">🚘Password</option>
      <option value="color">🛞color</option>

    </select>

    <button (click)="changeNameForSomeName()">Click</button>
    <input type="color" name="" id="">
    <span>Hamilton</span>

  `,
  styles: `

    .label {
      color: darkblue;
      font-weight: bolder;
      font-size: 20px;
    }


  `,
  standalone: true
})
export class MyFirstComponent {
  name: string = 'Noam';
  inputType: string = 'text';

  changeNameForSomeName(): void {
    const _name = 'Yonatan' + ' ' + 'Altman';
    this.name = _name;
  }
  changeInputType(type:any): void {
    this.inputType = type.target['value'] || 'text';

    console.log('current inputType',this.inputType);
  }
}


function calcNum() {

}

const calcNum2 = (num: number): number => {

  return num * 2;
}
