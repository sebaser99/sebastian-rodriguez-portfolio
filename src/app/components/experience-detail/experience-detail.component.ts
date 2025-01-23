import { Component,ElementRef,Inject,Input, PLATFORM_ID, QueryList, ViewChild } from '@angular/core';
import { Experience } from '../../interfaces/Experience';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { matfNodejsColored } from '@ng-icons/material-file-icons/colored';
import { diDotnetcoreOriginal, diPostgresqlOriginal, diAngularjsOriginal, diNginxOriginal,
  diDigitaloceanOriginalWordmark, diNestjsOriginal, diMysqlOriginal, diReduxOriginal, diReactOriginal,
  diFlutterOriginal, diFramermotionOriginal
  } from '@ng-icons/devicon/original';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'experience-detail',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss',
   viewProviders: [provideIcons({
      diFlutterOriginal, matfNodejsColored, diReactOriginal, diReduxOriginal, diMysqlOriginal,
      diNestjsOriginal, diDigitaloceanOriginalWordmark, diNginxOriginal, diAngularjsOriginal,
      diDotnetcoreOriginal, diPostgresqlOriginal, diFramermotionOriginal
    })]
})
export class ExperienceDetailComponent  {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  isBrowser: boolean;
  @Input() experienceItem? : Experience;
  @Input() index? : number;
  @ViewChild('skill_icon') skillICon!:  QueryList<ElementRef>;
  showIcon: {show: boolean, skillName: string } = {
    show: false,
    skillName: ''
  }


  showIconName(event: any, show: boolean,  item: any){
    const target = event.target as HTMLElement;

    this.showIcon = {
      show,
      skillName: target.dataset['skill'] || ''
    }
    if(this.isBrowser){
      const element = document.querySelector(`.skill-icon[data-skill="${this.showIcon.skillName}"] + span`)
      if(element){
        element.classList.toggle('opacity-1')
        element.classList.toggle('opacity-0')
      }
    }
    console.log(this.showIcon)
  }
}
