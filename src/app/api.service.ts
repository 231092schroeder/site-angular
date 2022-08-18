import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  VALUE_IN_EUROS_ON_QUANTITY_IN_KG: any;
  PERIOD: any;
  constructor(private http:HttpClient) { }

  getApi(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/v1/full05').pipe( 
      map(
         res => res
      )
   )
  }
}
