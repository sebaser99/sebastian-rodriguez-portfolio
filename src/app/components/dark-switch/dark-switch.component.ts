import { AfterViewInit, Component, ElementRef, Inject, OnInit, output, PLATFORM_ID, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapSunFill } from '@ng-icons/bootstrap-icons';
import { bootstrapMoonFill } from '@ng-icons/bootstrap-icons';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'dark-switch',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './dark-switch.component.html',
  styleUrl: './dark-switch.component.scss',
  viewProviders: [provideIcons({ bootstrapSunFill, bootstrapMoonFill})]
})
export class DarkSwitchComponent implements AfterViewInit {
  onNameChange = output<any>();
  isBrowser: boolean;
   @ViewChild('toggleButton') toggleButton!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngAfterViewInit(): void {
    if(this.isBrowser){
      if(localStorage.getItem('dark')){
        const dark = localStorage.getItem('dark') === 'true' ? true : false;
        this.toggleButton.nativeElement.defaultChecked = dark;
      }
    }

  }


  switchMode(e: Event){
    const valueSwitch = (e.target as HTMLInputElement).checked
    this.onNameChange.emit(valueSwitch)
  }
}
