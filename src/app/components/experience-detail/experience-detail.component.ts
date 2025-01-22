import { Component, Input } from '@angular/core';
import { Experience } from '../../interfaces/Experience';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experience-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-detail.component.html',
  styleUrl: './experience-detail.component.scss'
})
export class ExperienceDetailComponent {
  @Input() experienceItem? : Experience;
}
