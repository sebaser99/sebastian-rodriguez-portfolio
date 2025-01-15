import { Component, HostListener, Inject, OnDestroy, OnInit, output, PLATFORM_ID  } from '@angular/core';
import { DarkSwitchComponent } from '../dark-switch/dark-switch.component';
import { HamburguerMenuComponent } from '../hamburguer-menu/hamburguer-menu.component';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, DarkSwitchComponent, HamburguerMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false; // Estado para saber si se hizo scroll
  isBrowser: boolean; // Verifica si estás en el navegador

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){
    this.checkScreenSize();
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  passValue = output<any>();
  isSmallScreen : boolean = true;
  show: boolean = false;

  ngOnInit() {
    if (this.isBrowser) {
      // Solo se ejecuta en el navegador
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; // Cambia el estado si el scroll es mayor a 50px
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      // Limpia el listener al destruir el componente
      window.removeEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  passValuef(value: any){
    this.passValue.emit(value)
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width > 720) {
        this.isSmallScreen = false;
        this.show = false;
      } else {
        this.isSmallScreen = true;
      }
    }
  }

  handleOpen(event: any){
    this.show = event
  }

  @HostListener('document:click', ['$event'])
  onBackdropClick(event: MouseEvent) {
    if(this.show){
      if (!(event.target as HTMLElement).closest('.modal-content') && !(event.target as HTMLElement).closest('.menu-hamburguer')) {
        this.show = !this.show;
      }
    }
  }
}
