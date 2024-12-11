import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fourth-step',
  templateUrl: './fourth-step.component.html',
  styleUrl: './fourth-step.component.scss'
})
export class FourthStepComponent {
 snackArr=[
  {id:1,value:'Popcorn'},
  {id:2,value:'Nachos'},
  {id:3,value:'Junior Mints'},
  {id:4,value:'Milk Duds'},
  {id:5,value:'Skittles'},
  {id:6,value:'I only watch Criterion Collection films at Arthouses that disallow snacks because there might be a crinkling sound that disrupts other patrons.'},

]

@Output() clickevent = new EventEmitter<any>();

nextFn(data: { order: number; value: string }){
  this.clickevent.emit(data);
}
}
