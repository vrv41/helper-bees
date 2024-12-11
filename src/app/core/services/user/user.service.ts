import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // roundDataObj:any=[];
  public userData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  userData$: Observable<any> = this.userData.asObservable();
 
  constructor(
    private apiservice: ApiService,
  ) {}

  getUserDetails(){
  return this.apiservice.get('https://dummyjson.com/auth/me');
}
 


}
 
  


 

