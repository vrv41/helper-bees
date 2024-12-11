import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrl: './first-step.component.scss'
})
export class FirstStepComponent {
  @Output() clickevent = new EventEmitter<any>();
 checkboxArr=[
  {id:1,value:'Action'},
  {id:2,value:'Western'},
  {id:3,value:'Horror'},
  {id:4,value:'Romantic'},
  {id:5,value:'Drama'},
  {id:6,value:'Comedy'},
  {id:7,value:'Thriller'},
  {id:8,value:'Kevin Hart Buddy Comedy'},
  {id:9,value:'Science Fiction'},
  {id:10,value:'Noir'},
  {id:11,value:'Fantasy'},
  {id:12,value:'None of the above'},

]

nextFn(data: { order: number; value: string }){
  this.clickevent.emit(data);
}
  
}
