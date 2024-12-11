import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  constructor(private apiservice: ApiService) {}

  verifyUserLogin(loginData:any){
  return this.apiservice.post('https://dummyjson.com/auth/login',JSON.stringify(loginData));
}
logout(): void {
  localStorage.removeItem('authToken');
  console.log('User logged out successfully!');
}


}
 
  


 

