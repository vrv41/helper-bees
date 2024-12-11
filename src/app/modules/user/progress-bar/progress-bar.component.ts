import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() slideorder!:number;
  isSlideOrder(order:number):boolean {
    return (this.slideorder >= order);
  }
}

