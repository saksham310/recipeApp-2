import { Injectable } from '@angular/core';
import { Food } from '../interface/food';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
   baseUrl="http://localhost:3000/food";

  constructor(private https:HttpClient) { }

  getAll():Observable<Food>{
   return this.https.get(`${this.baseUrl}`) as Observable<Food>;
  }
}
