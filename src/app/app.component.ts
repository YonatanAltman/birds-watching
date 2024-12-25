import {Component} from '@angular/core';
import {MyFirstComponent} from './my-first.component';
import {FullNameComponent} from './full-name/full-name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyFirstComponent, FullNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bird-watching';
}
