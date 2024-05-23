import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FoodService } from '../../serivce/food.service';
import { Food } from '../../interface/food';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  foods:Food[]=[];
  constructor(private foodService:FoodService){

  }
ngOnInit(){
  const a$= this.foodService.getAll();
  a$.subscribe((data:any)=>
    // console.log(data))
    this.foods=data.food);
}
}
