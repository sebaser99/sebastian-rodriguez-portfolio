import { CommonModule } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'hamburguer-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hamburguer-menu.component.html',
  styleUrl: './hamburguer-menu.component.scss'
})
export class HamburguerMenuComponent {
  openMenu = output<boolean>();

  @Input()
  isOpen : boolean = false;

  handleMenu(){
    this.openMenu.emit(!this.isOpen)
  }
}
