import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleGithub } from '@ng-icons/simple-icons';
import { bootstrapLink45deg } from '@ng-icons/bootstrap-icons';
import { matfNodejsColored } from '@ng-icons/material-file-icons/colored';
import {  diPostgresqlOriginal, diAngularjsOriginal,
  diNestjsOriginal, diTypescriptOriginal, diWordpressOriginal, diPhpOriginal,
  diCss3Original, diJavascriptOriginal
  } from '@ng-icons/devicon/original';
import { IProject } from '../../interfaces/Project';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [NgIcon, CommonModule, IconComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  viewProviders: [provideIcons({
    simpleGithub, bootstrapLink45deg,  matfNodejsColored,
    diNestjsOriginal, diAngularjsOriginal, diPostgresqlOriginal,
    diTypescriptOriginal, diWordpressOriginal, diPhpOriginal, diCss3Original, diJavascriptOriginal
  })]
})
export class ProjectCardComponent {
  constructor(
      @Inject(PLATFORM_ID) private platformId: Object
    ){
      this.isBrowser = isPlatformBrowser(this.platformId);
  }

  isBrowser: boolean;

  @Input()
  project? : IProject ;

  @Input()
  index? : number;

  @Input()
  last? : boolean = false;

  showIcon: {show: boolean, skillName: string } = {
    show: false,
    skillName: ''
  }


  showIconName(event: any, show: boolean,  item: any){
    const target = event.target as HTMLElement;

    this.showIcon = {
      show,
      skillName: target.dataset['project'] || ''
    }
    if(this.isBrowser){
      const element = document.querySelector(`.skill-icon[data-project="${this.showIcon.skillName}"] + span`)
      if(element){
        element.classList.toggle('opacity-1')
        element.classList.toggle('opacity-0')
      }
    }
  }
}
