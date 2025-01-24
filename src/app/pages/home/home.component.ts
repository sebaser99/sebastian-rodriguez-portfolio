import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { matFilterAltOffOutline, } from '@ng-icons/material-icons/outline';
import { matDownload, matSend} from '@ng-icons/material-icons/baseline';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { IconComponent } from '../../components/icon/icon.component';
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


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, NgIcon, ProjectsComponent, IconComponent,
    ExperienceComponent, HabilitiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, matFilterAltOffOutline,
    diFlutterOriginal, matfNodejsColored, diReactOriginal, diReduxOriginal, diMysqlOriginal,
    diNestjsOriginal, diDigitaloceanOriginalWordmark, diNginxOriginal, diAngularjsOriginal,
    tablerFileCv, matDownload, matSend
  })]
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
