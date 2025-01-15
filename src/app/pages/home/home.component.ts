import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { IconComponent } from '../../components/icon/icon.component';


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NgIcon, ProjectsComponent, IconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin})]
})
export class HomeComponent {
  modeDark: boolean = false;

  changeValue(value: any){
    this.modeDark = value;
  }

}
