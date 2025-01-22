import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import {  matFilterAltOffOutline} from '@ng-icons/material-icons/outline';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { IconComponent } from '../../components/icon/icon.component';
import { ExperienceComponent } from "../../components/experience/experience.component";
import { HabilitiesComponent } from "../../components/habilities/habilities.component";


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NgIcon, ProjectsComponent, IconComponent,
    ExperienceComponent, HabilitiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, matFilterAltOffOutline})]
})
export class HomeComponent {
  filter : string = '';
  modeDark: boolean = false;
  isScrolled: boolean = false;
  classAddNavbarObject: {apply: boolean, tag: string | null} = {
    apply: true,
    tag: null
  };


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

}
