import { Component, Input } from '@angular/core';
import { Habilities } from '../../interfaces/Habilities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hability-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hability-detail.component.html',
  styleUrl: './hability-detail.component.scss',
})
export class HabilityDetailComponent {
  @Input() hability?: Habilities;

  getSkillLevelClass(level: string): string {
    switch (level) {
      case 'Básico':
        return 'basic';
      case 'Intermedio':
        return 'intermediate';
      case 'Avanzado':
        return 'advanced';
      default:
        return '';
    }
  }
}
