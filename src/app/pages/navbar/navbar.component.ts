import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FoodService } from '../../serivce/food.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FontAwesomeModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild("search")
  search !:ElementRef;
  plusBtn=faPlusCircle;
  constructor(private service:FoodService,private route:Router){}

onSearch(){
// console.log(this.search.nativeElement.value);
this.service.onSearch(this.search.nativeElement.value);
}
isCreation(){
  return this.route.url==="/form"
}
displaySearch():boolean{
  return this.route.url==='/cards'
}
}
