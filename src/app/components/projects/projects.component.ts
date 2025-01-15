import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectsService } from '../../services/projects.service';
import { IProject } from '../../interfaces/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects : IProject[] = [];

  constructor(
    private readonly projectsService: ProjectsService
  ){}

  ngOnInit(): void {
     this.projects = this.projectsService.getProjects
  }

}
