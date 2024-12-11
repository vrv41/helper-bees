import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userDetails:any;
  constructor(private user:UserService,private router: Router,private toast: HotToastService,private authService:AuthenticationService){}

  ngOnInit(){
    this.user.userData$.subscribe({
       next: (response:any) => {
        console.log(response);
        this.userDetails=response;
      },
      error:(error)=>{
     console.log(error);
   }
 });
}
logout(){
  this.authService.logout();
  this.toast.success('You logged out successfully!');
  this.router.navigate(['/login']);
  
}
}
