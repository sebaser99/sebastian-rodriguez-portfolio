import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleGithub } from '@ng-icons/simple-icons';
import { bootstrapLink45deg } from '@ng-icons/bootstrap-icons';
import { simpleAngular } from '@ng-icons/simple-icons';
import { simpleNodedotjs } from '@ng-icons/simple-icons';
import { simplePostgresql} from '@ng-icons/simple-icons';
import {  simpleTsnode} from '@ng-icons/simple-icons';
import {  simpleWordpress } from '@ng-icons/simple-icons';
import {  simpleCss3 } from '@ng-icons/simple-icons';
import {  simpleJavascript } from '@ng-icons/simple-icons';
import {  simplePhp } from '@ng-icons/simple-icons';



import { IProject } from '../../interfaces/Project';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [NgIcon, CommonModule, IconComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  viewProviders: [provideIcons({ simpleGithub, bootstrapLink45deg,  simpleAngular,
    simpleNodedotjs, simplePostgresql, simpleTsnode, simpleWordpress, simpleCss3, simpleJavascript,
    simplePhp
  })]
})
export class ProjectCardComponent {
  @Input()
  project? : IProject ;
}
