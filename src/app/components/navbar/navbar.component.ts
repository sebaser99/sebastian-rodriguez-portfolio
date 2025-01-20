import { Component, HostListener, Inject, OnDestroy, OnInit, output, PLATFORM_ID } from '@angular/core';
import { DarkSwitchComponent } from '../dark-switch/dark-switch.component';
import { HamburguerMenuComponent } from '../hamburguer-menu/hamburguer-menu.component';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { MenuService } from '../../services/menu.service';
import { IMenuItem } from '../../interfaces/MenuItem';


@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, DarkSwitchComponent, HamburguerMenuComponent, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private fragmentSubscription: Subscription | undefined;
  isScrolled = false; // Estado para saber si se hizo scroll
  isBrowser: boolean; // Verifica si estás en el navegador
  activeLink: string = ''; // Enlace activo
  private routerSubscription!: Subscription;
  menuItem : IMenuItem[] = [];
  scrollPercentage: number = 3;
  passValue = output<any>();
  isSmallScreen : boolean = true;
  passScrolled = output<any>();
  show: boolean = false;
  currentFragment: string | null = null;
  menuIdSections : IMenuItem[] = [];
  scrollEnabled: boolean = true;
  passClassObjectNavbar= output<{apply: boolean, tag: string | null}>();



  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private _router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ){
    this.checkScreenSize();
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });

      this.fragmentSubscription = this.route.fragment.subscribe((fragment) => {
        this.currentFragment = fragment;
      });

      this.routerSubscription = this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        if(event instanceof NavigationEnd) {
          const fragment = this._router.parseUrl(this._router.url).fragment;

          if (fragment) {
            if(!this.isScrolled){
              this.passClassObjectNavbar.emit({apply: true, tag: fragment})
            }
            setTimeout(() => {
              const navbarHeight = document.querySelector('#navbar')?.clientHeight || 0;
              const element = document.getElementById(fragment);
              if (element) {
                const elementPosition = element.offsetTop - navbarHeight;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
              }
            }, 0);
          }
        }
        this.updateActiveLink();  // Actualiza el enlace activo al cambiar la URL
      });
      this.updateActiveLink();
    }
    this.menuItem = this.menuService.getMenuItems;
    // this.menuIdSections = [...this.menuItem, {label: 'Inicio', fragment: ''}]
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    this.isScrolled = scrollPercentage > this.scrollPercentage;
    this.passScrolled.emit(this.isScrolled)

    if(!this.isScrolled){
      if(this.scrollEnabled){
        if(this.isBrowser){
          this.activeLink = '';
          this._router.navigate([]);
          this.passClassObjectNavbar.emit({apply: true, tag: null})
        }
      }
    }

    if(this.isScrolled){
      for (const section of this.menuItem) {


        const element = document.getElementById(section.fragment!);

        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {

            if(this.currentFragment !== section.label) {
              if(this.scrollEnabled){
                  this._router.navigate([], { fragment: section.fragment });
                  this.passClassObjectNavbar.emit({apply: false, tag: section.fragment!})
              }
            }
            if(this.scrollEnabled){
              this.activeLink = section.label;
            }
            break;
          }
        }
      }
    }
    if(scrollTop === 0) {
      this.activeLink = '';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  @HostListener('document:click', ['$event'])
  onBackdropClick(event: MouseEvent) {
    if(this.show){
      if (!(event.target as HTMLElement).closest('.modal-content') && !(event.target as HTMLElement).closest('.menu-hamburguer')) {
        this.show = !this.show;
      }
    }
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
        this.scrollPercentage = 7;
      } else {
        this.isSmallScreen = true;
        this.scrollPercentage = 3;
      }
    }
  }

  handleOpen(event: any){
    this.show = event
  }

  // Método para actualizar el enlace activo
  updateActiveLink(): void {
    const url = this._router.url;
    const currentFragment = this.route.snapshot.fragment;

    this.menuItem!.forEach(item => {
      if (url.includes(item.url!) && (currentFragment === item.fragment || !item.fragment)) {
        this.activeLink = item.label!;
      } else if(url.includes(item.fragment!)){
        this.activeLink = item.label!;
      }
    });
  }

  scrollTop(){
    this.toggleScroll('');
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnDestroy() {
    // Desuscribirse del observable de fragmento
    if (this.fragmentSubscription) {
      this.fragmentSubscription.unsubscribe();
    }

    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  toggleScroll(fragment: string){
    this.show = !this.show;
    if(this.isScrolled){
      this.passClassObjectNavbar.emit({apply: false, tag: fragment})
    }
    this.scrollEnabled = false;
    setTimeout(() => {
      this.scrollEnabled = true;
    }, 1000);
  }
}
