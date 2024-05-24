import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../interface/food';
import { FoodService } from '../../serivce/food.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() food!:Food;
@Output() idEmitter=new EventEmitter()
@Output() categoryEmit=new EventEmitter();

constructor(private foodService:FoodService){}

onSend(id:string){
  this.idEmitter.emit(id);
}
onClick(name:string){
  this.categoryEmit.emit(name);
}
}
