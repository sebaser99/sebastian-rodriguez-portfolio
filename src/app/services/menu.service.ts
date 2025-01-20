import { Injectable } from '@angular/core';
import { IMenuItem } from '../interfaces/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private menuItems : IMenuItem[] = [
    {
      label: 'Proyectos',
      url: '/',
      fragment: 'projects'
    },
    {
      label: 'Experiencia',
      url: '/',
      fragment: 'experience'
    },
    {
      label: 'Habilidades',
      url: '/',
      fragment: 'habilities'
    },
  ];

  get getMenuItems () : IMenuItem[]  {
    return  this.menuItems
  }
}
