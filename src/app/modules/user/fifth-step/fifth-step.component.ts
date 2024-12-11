import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fifth-step',
  templateUrl: './fifth-step.component.html',
  styleUrl: './fifth-step.component.scss'
})
export class FifthStepComponent {
  @Output() clickevent = new EventEmitter<any>();

  nextFn(data: { order: number; value: string }){
    this.clickevent.emit(data);
  }
}
