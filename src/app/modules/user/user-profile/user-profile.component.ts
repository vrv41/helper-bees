import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  @Output() clickevent = new EventEmitter<any>();


startFn(){
  const data={
    order:1,
    value:'firstStep'
  }
  this.clickevent.emit(data);
}
 
}
