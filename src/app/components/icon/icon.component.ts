import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input()
  iconTemplate? : any;

  @Input()
  name? : string;

  @Input()
  iconClass?: any = {
    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "1.2rem"
  }


  @Input()
  showText?: boolean = true;
}
