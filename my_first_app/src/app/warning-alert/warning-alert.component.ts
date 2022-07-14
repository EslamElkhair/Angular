import {Component} from '@angular/core';


@Component({
  selector: 'app-warning-alert',
  template: `
    <p>this is warning alert</p>
  `,
  styles: [`
  p {
    color :red;
  }
  `]
})

export class warningAlertComponent {
}
