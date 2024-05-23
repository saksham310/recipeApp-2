import { Component, Input } from '@angular/core';
import { Food } from '../../interface/food';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
@Input() food!:Food;
star=faCoffee;

}
