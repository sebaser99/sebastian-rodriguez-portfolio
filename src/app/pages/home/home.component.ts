import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject,  output,  PLATFORM_ID,  ViewChild } from '@angular/core';
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
import { RouterModule } from '@angular/router';


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
export class HomeComponent  {
  passValue = output<any>();
  isBrowser: boolean;
  initialPercentage: number = 0;
  leftPercentage: number = 0;
  rightPercentage: number = 0;
  scrollPercentage: number = 20;
  projectsIds : string[] =  ['project0', 'project1', 'project2']
  heightMeSection : number = 0;

  @ViewChild('ironSection') ironSection!: ElementRef;
  @ViewChild('ironContainer') ironContainer!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('meSection') meSection!: ElementRef;
  constructor(
   @Inject(PLATFORM_ID) private platformId: Object
  ){
    this.isBrowser = isPlatformBrowser(this.platformId);
  }





  filter : string = '';
  modeDark?: boolean;
  isScrolled: boolean = false;
  classAddNavbarObject: {apply: boolean, tag: string | null} = {
    apply: true,
    tag: null
  };
 @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const meHeight = this.meSection.nativeElement.offsetHeight;
    this.isScrolled = scrollPosition > this.projectsSection.nativeElement.offsetTop;

    if(this.isScrolled){
      for (const id of this.projectsIds) {
        const index = this.projectsIds.indexOf(id);
        const element = document.getElementById(id) as HTMLElement;
        let offset = 0;
        let offsetReverse = 0;
        if(index === 0){
          offset = (element.offsetTop * 0.3)
          offsetReverse = (element.offsetTop * 0.6)
        } else {
          offset = (element.offsetTop * 0.15)
          offsetReverse = (element.offsetTop * 0.4)
        }

        if (element && ((element.offsetTop - offset) <= window.scrollY) && (element.offsetTop + meHeight > window.scrollY)) {
          element.classList.add('show-projects')
        } else if (element){
            if( (element.offsetTop - offsetReverse)  >= window.scrollY) {
              element.classList.remove('show-projects')
            }
        }

      }
    }
  }


  changeValue(value: any){
    this.passValue.emit(value)

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
}
