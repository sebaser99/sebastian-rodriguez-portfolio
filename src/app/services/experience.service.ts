import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  experience: Experience[] = [
    {
      company: 'Ungatted - Freelancer',
      description: 'Maquetado de páginas web a través de aplicación Framer. Desarrollo de backend para integración de stripe en pasarela de pagos y levantamiento de app web y api en .net. Se configuró la app móvil en flutter',
      position: 'Full Stack Developer',
      skills: ['Arquitectura Limpia', 'Flutter', '.Net'],
      from: '08-2024',
      until: '10-2024',
      modality: 'Remoto'
    },
    {
      company: 'Onemall - Freelancer',
      description: 'Levantamiento de requerimientos, análisis y desarrollo Frontend y Backend además de estructuración de bases de datos.',
      position: 'Full Stack Developer',
      skills: ['Arquitectura Limpia', 'Angular JS', 'Node JS', 'PostgreSQL'],
      from: '06-2023',
      until: '01-2024',
      modality: 'Remoto'
    },
    {
      company: 'Pay By Split - Freelancer',
      description: 'Mejora de Fronted y Bakcend basado en micro servicios para una plataforma web de pago. Se implementó API de pasarela de pagos en Backend y Fronted.',
      position: 'Full Stack Developer',
      skills: ['React js', 'Redux',' Node JS', 'MySql', 'Nest js', 'Digital Ocean', 'Nginex'],
      from: '10-2022',
      until: '12-2022',
      modality: 'Remoto'
    }
  ]

  get getExperience(){
    return this.experience;
  }
}
