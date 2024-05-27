import { Injectable } from '@angular/core';
import { Food } from '../interface/food';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
   baseUrl="http://localhost:3000/food";
  
   Search=new Subject<string>();



  constructor(private https:HttpClient) { }

  getAll():Observable<Food[]>{
   return this.https.get(`${this.baseUrl}`) as Observable<Food[]>;
  }

  deleteFood(id:string){
    return this.https.delete<void>(`${this.baseUrl}/${id}`);
  }

  addNew(food:Food){
    return this.https.post(`${this.baseUrl}`,food);
  }

  getOne(id:string){
    return this.https.get(`${this.baseUrl}/${id}`);
  }

  updateItem(id:string,food:Food){
    return this.https.put(`${this.baseUrl}/${id}`,food);
  }

  onSearch(value:string){
    this.Search.next(value);
  }
}
