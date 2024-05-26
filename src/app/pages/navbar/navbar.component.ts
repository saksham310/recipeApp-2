import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../serivce/food.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild("search")
  search !:ElementRef;
  constructor(private service:FoodService){}

onSearch(){
this.service.onSearch(this.search.nativeElement.value);
}
}
