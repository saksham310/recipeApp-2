import { Component } from '@angular/core';
import { FoodService } from '../../serivce/food.service';
import { Food } from '../../interface/food';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
