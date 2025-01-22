import { Injectable } from '@angular/core';
import { Habilities, TypeHability } from '../interfaces/Habilities';

@Injectable({
  providedIn: 'root'
})
export class HabilitiesService {

  constructor() { }
  habilities: Habilities[] = [
    {
      type: 'Fronted',
      name: 'JavaScript',
      level: 'Avanzado'
    },
    {
      type: 'Fronted',
      name: 'HTML5',
      level: 'Avanzado'
    },
    {
      type: 'Fronted',
      name: 'CSS3',
      level: 'Avanzado'
    },
    {
      type: 'Fronted',
      name: 'AngularJs',
      level: 'Avanzado'
    },
    {
      type: 'Fronted',
      name: 'ReactJs',
      level: 'Avanzado'
    },
    {
      type: 'Fronted',
      name: 'NextJs',
      level: 'Básico'
    },
    {
      type: 'Fronted',
      name: 'WordPress',
      level: 'Básico'
    },
    {
      type: 'Backend',
      name: 'NodeJs',
      level: 'Avanzado'
    },
    {
      type: 'Backend',
      name: 'NestJs',
      level: 'Básico'
    },
    {
      type: 'Backend',
      name: '.Net',
      level: 'Básico'
    },
    {
      type: 'Backend',
      name: 'SQL',
      level: 'Intermedio'
    },
    {
      type: 'Mobile',
      name: 'Flutter',
      level: 'Básico'
    }
  ]

  get getHabilities(){
    return this.habilities;
  }
}
