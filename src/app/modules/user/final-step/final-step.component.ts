import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrl: './final-step.component.scss'
})
export class FinalStepComponent {
  @Output() clickevent = new EventEmitter<any>();

  nextFn(order:number,value:string){
    const data={
      order:order,
      value:value
    }
    this.clickevent.emit(data);
  }
  submitFn(){
    
  }
}
