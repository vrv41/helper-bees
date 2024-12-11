import { Component } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedMenuData:string='start';
  slideorder!:number;
  
  constructor(private user:UserService){}

  ngOnInit(){
   this.user.userData$= this.user.getUserDetails();
//    .subscribe({
//       next: (response:any) => {
//      },
//    error:(error)=>{

//   }
// });
  }
  selectedMenu(data:any){
    console.log(data);
    this.selectedMenuData=data.value;
    this.slideorder=data.order;
  }
  
}
