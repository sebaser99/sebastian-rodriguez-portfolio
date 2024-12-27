import { Component, output } from '@angular/core';
import { DarkSwitchComponent } from '../dark-switch/dark-switch.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [DarkSwitchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  passValue = output<any>();

  passValuef(value: any){
    this.passValue.emit(value)
  }
}
