import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http: HttpClient ) { }

  post<T>(path: string, entity: any): Observable<T> {
    return this.http.post<T>(`${path}`, entity);
  }

  put<T>(path: string, entity: any): Observable<T> {
    return this.http.put<T>(`${path}`, entity);
  }

  patch<T>(path: string, entity: any): Observable<T> {
    return this.http.patch<T>(`${path}`, entity);
  }

  delete(path: string): Observable <any> {
    return this.http.delete(`${path}`);
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${path}`);
  }
 

  get httpClient() {        
    return this.http;
  }

}
