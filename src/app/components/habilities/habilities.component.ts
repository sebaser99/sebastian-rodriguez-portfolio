import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HabilitiesService } from '../../services/habilities.service';
import { Habilities } from '../../interfaces/Habilities';
import { HabilityDetailComponent } from "../hability-detail/hability-detail.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'habilities',
  standalone: true,
  imports: [HabilityDetailComponent, CommonModule],
  templateUrl: './habilities.component.html',
  styleUrl: './habilities.component.scss'
})
export class HabilitiesComponent implements OnInit, OnChanges {
  habilities: Habilities[] = [];
  fronted: Habilities[] = [];
  backend: Habilities[] = [];
  architecture: Habilities[] = [];
  mobile: Habilities[] = [];

  @Input()
  filter : string = '';


  constructor(
    private readonly habilitiesService: HabilitiesService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    this.habilitiesOrdered(this.habilities);
  }
  ngOnInit(): void {
    this.habilities = this.habilitiesService.getHabilities;

    this.habilitiesOrdered(this.habilities);
  }

  habilitiesOrdered(habilitiesValue: Habilities[] ){
    this.backend = [];
    this.fronted = [];
    this.architecture = [];
    this.mobile = [];

    habilitiesValue.forEach(hability => {
      switch(hability.type) {
        case 'Fronted':
          if(this.filter === ''){
           this.fronted.push(hability)
           break;
          }
         if(hability.level === this.filter){
          this.fronted.push(hability)
          break;
         }
        break;
        case 'Backend':
          if(this.filter === ''){
            this.backend.push(hability)
            break;
           }
          if(hability.level === this.filter){
           this.backend.push(hability)
           break;
          }
        break;
        case 'Architecture':
          if(this.filter === ''){
            this.architecture.push(hability)
            break;
           }
          if(hability.level === this.filter){
           this.architecture.push(hability)
           break;
          }
        break;
        case 'Mobile':
          if(this.filter === ''){
            this.mobile.push(hability)
            break;
           }
          if(hability.level === this.filter){
           this.mobile.push(hability)
           break;
          }
        break;
      }
    })
  }
}
