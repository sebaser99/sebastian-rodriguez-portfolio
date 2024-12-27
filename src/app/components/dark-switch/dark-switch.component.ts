import { Component, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapSunFill } from '@ng-icons/bootstrap-icons';
import { bootstrapMoonFill } from '@ng-icons/bootstrap-icons';



@Component({
  selector: 'dark-switch',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './dark-switch.component.html',
  styleUrl: './dark-switch.component.scss',
  viewProviders: [provideIcons({ bootstrapSunFill, bootstrapMoonFill})]
})
export class DarkSwitchComponent {
  onNameChange = output<any>();

  switchMode(e: Event){
    const valueSwitch = (e.target as HTMLInputElement).checked
    this.onNameChange.emit(valueSwitch)
  }
}
