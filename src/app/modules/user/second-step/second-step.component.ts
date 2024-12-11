import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrl: './second-step.component.scss'
})
export class SecondStepComponent {
  @Output() clickevent = new EventEmitter<any>();
  ageGroupArr=[
    {id:1,value:'0-3 years'},
    {id:2,value:'4-6 years'},
    {id:3,value:'7 or more years'},

  ]
  nextFn(data: { order: number; value: string }){
    this.clickevent.emit(data);
  }
}
