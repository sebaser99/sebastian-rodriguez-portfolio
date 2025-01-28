import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LoaderComponent } from "./components/loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent implements OnInit {
  title = 'Sebastian Rodriguez';
  isBrowser: boolean;
  modeDark?: boolean;
  isHydrated: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  // ngAfterViewInit(): void {



  // }

  ngOnInit(): void {
    if(this.isBrowser){
      if(localStorage.getItem('dark')){
        this.modeDark = localStorage.getItem('dark') === 'true' ? true : false;
      } else {
        this.modeDark = false;
      }
    } else {
      this.modeDark = false;
    }

    this.changeDarkMode();
    this.isHydrated = true;



  }

  changeValue(value: any){
    this.modeDark = value;
    if(this.isBrowser){
      localStorage.setItem('dark', this.modeDark === true ? 'true' : 'false' );
      this.changeDarkMode()
    }
  }

  changeDarkMode(){
    if(this.isBrowser){
      if (this.modeDark) {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    }
  }
}
