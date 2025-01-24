import { Component, Input, input, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/Experience';
import { ExperienceDetailComponent } from "../experience-detail/experience-detail.component";
import { ExperienceService } from '../../services/experience.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [ExperienceDetailComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(
    private readonly experienceService: ExperienceService,
  ){}


  ngOnInit(): void {
    this.experience = this.experienceService.getExperience;
  }
}
