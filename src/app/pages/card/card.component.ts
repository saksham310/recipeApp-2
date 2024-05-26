import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../../interface/food';
import { FoodService } from '../../serivce/food.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

star=faStar;
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
