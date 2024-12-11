import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrl: './page-nav.component.scss'
})
export class PageNavComponent {
@Input() nextButtonText:string='Next';
@Input() previousButtonText:string=' Previous Question';
@Input() previousSlide!:number;
@Input() nextSlide!:number;
@Input() isIcon:boolean=true;
@Output() navigateevent = new EventEmitter<any>();
slideOrderMap= new Map([
  [0,"start"],
  [1,"firstStep"],
  [2,"secondStep"],
  [3,"thirdStep"],
  [4,"fourthStep"],
  [5,"fifthStep"],
  [6,"final"],
])
navigateFn(order:number){
    const data={
      order:order,
      value:this.slideOrderMap.get(order)
    }
    // console.log(data)
    this.navigateevent.emit(data);
  }
}
