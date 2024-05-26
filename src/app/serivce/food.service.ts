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

  deleteFood(id:string){
    return this.https.delete<void>(`${this.baseUrl}/${id}`);
  }

  addNew(food:Food){
    return this.https.post(`${this.baseUrl}`,food);
  }

  updateItem(id:string,food:Food){
    return this.https.put(`${this.baseUrl}/${id}`,food);
  }
}
