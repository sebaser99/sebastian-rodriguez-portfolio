import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { matFilterAltOffOutline } from '@ng-icons/material-icons/outline';
import { matDownload, matSend, matContentCopy} from '@ng-icons/material-icons/baseline';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { HabilitiesComponent } from "../../components/habilities/habilities.component";
import { diFlutterOriginal } from '@ng-icons/devicon/original';
import { matfNodejsColored } from '@ng-icons/material-file-icons/colored';
import { diReactOriginal } from '@ng-icons/devicon/original';
import { diReduxOriginal } from '@ng-icons/devicon/original';
import { diMysqlOriginal } from '@ng-icons/devicon/original';
import { diNestjsOriginal } from '@ng-icons/devicon/original';
import { diDigitaloceanOriginalWordmark } from '@ng-icons/devicon/original';
import { diNginxOriginal } from '@ng-icons/devicon/original';
import { diAngularjsOriginal } from '@ng-icons/devicon/original';
import { tablerFileCv} from '@ng-icons/tabler-icons';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NgIcon, ProjectsComponent,
    ExperienceComponent, HabilitiesComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, matFilterAltOffOutline,
    diFlutterOriginal, matfNodejsColored, diReactOriginal, diReduxOriginal, diMysqlOriginal,
    diNestjsOriginal, diDigitaloceanOriginalWordmark, diNginxOriginal, diAngularjsOriginal,
    tablerFileCv, matDownload, matSend, matContentCopy
  })]
})
export class HomeComponent implements AfterViewInit {
  isBrowser: boolean;
  initialPercentage: number = 0;
  leftPercentage: number = 0;
  rightPercentage: number = 0;
  @ViewChild('ironSection') ironSection!: ElementRef;
  @ViewChild('ironContainer') ironContainer!: ElementRef;
  constructor(
   @Inject(PLATFORM_ID) private platformId: Object,
   private renderer: Renderer2

  ){
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngAfterViewInit(): void {

  }

  filter : string = '';
  modeDark: boolean = false;
  isScrolled: boolean = false;
  classAddNavbarObject: {apply: boolean, tag: string | null} = {
    apply: true,
    tag: null
  };

   @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkScreenSize();
    }


  changeValue(value: any){
    this.modeDark = value;
  }

  isScrolledToggle(value: any){
    this.isScrolled = value;
  }

  changeNavbarClass(value: any){
    this.classAddNavbarObject = {
      apply: value.apply,
      tag: value.tag

    }
  }

  filterSkills(value: string){
    this.filter = value;
  }

  onDownloadCv(){
    if(this.isBrowser){
      const fileUrl = '../../../../assets/files/hv_sebastian_rodriguez.pdf';  // Esta URL es accesible desde la raíz de tu app Angular

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'cv-Sebastian-Rodriguez.pdf';  // Nombre del archivo a descargar
        link.click();
    }
  }

  addAnimation(){
    if(this.isBrowser){
      const element = document.querySelector(`.ironman-container`) as HTMLElement
      if(element){
        if(element.classList.contains('fadein')){
          element.classList.remove('fadein')
        }else {
          element.classList.remove('translate')
        }

        element.style.animationPlayState = 'stop';
        element.classList.add('spin-right-fast')
        element.classList.add('translate')
        element.style.animationPlayState = 'running';
        setTimeout(() => {
          element.classList.remove('spin-right-fast')

        }, 1000);

      }
    }
  }

  copy(){
    if(this.isBrowser){
      navigator.clipboard.writeText('sebaser99@gmail.com').then(function() {
        alert('Texto copiado al portapapeles');
      }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
      });
    }
  }

  mouseEnterIronContainer(){
    if(this.isBrowser){
      const element = document.querySelector(`.ironman-container`) as HTMLElement

      if(element && (!element.classList.contains('spin-right-fast')) ||element &&  !element.classList.contains('translate') ){
        element.style.animationPlayState = 'paused';
      }
    }
  }

  mouseLeaveIronContainer(){
    if(this.isBrowser){
      const element = document.querySelector(`.ironman-container`) as HTMLElement

      if(element){
        element.style.animationPlayState = 'running';
      }
    }
  }

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;

    // Obtener el porcentaje de desplazamiento horizontal
    const scrollLeft = element.scrollLeft;
    const scrollWidth = element.scrollWidth;
    const clientWidth = element.clientWidth;

    const percentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;

    console.log(`Desplazamiento: ${percentage.toFixed(2)}%`);

    // Aplicar el porcentaje a una animación o estilo
    this.renderer.setStyle(
      element,
      '--scroll-percentage',
      `${percentage.toFixed(2)}%`
    );
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (this.ironContainer) {
        console.log('ironContainer', this.ironContainer)
        const scrollLeft = this.ironContainer.nativeElement.scrollLeft;
        const scrollWidth = this.ironContainer.nativeElement.scrollWidth;
        const clientWidth = this.ironContainer.nativeElement.clientWidth;

        // Evitar divisiones por cero
        if (scrollWidth > clientWidth) {
          const percentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
          console.log('percentage', percentage);

          // Asegúrate de que el valor se pasa correctamente a CSS
          this.renderer.setStyle(
            this.ironContainer,
            '--scroll-percentage',
            `${percentage.toFixed(2)}%`
          );
        }
      } else {
        console.warn('El contenedor ironContainer no está definido.');
      }

    }
  }
}
