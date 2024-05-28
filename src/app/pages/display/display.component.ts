import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FoodService } from '../../serivce/food.service';
import { Food } from '../../interface/food';
import {map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  //create empty array of type Food
  foods:Food[]=[];
  // creating an observable
  obs$=new Observable<Food[]>();
  searchBox:string='all';

  constructor(private foodService:FoodService,private toast:ToastrService){
   
  }
ngOnInit(){
  //using service to get the recipe items
  this.obs$= this.foodService.getAll();
  this.foodService.Search.subscribe((data)=>{
    

    this.searchBox=data
    this.loadAll();
  }
  
  )
  this.loadAll();

}
loadAll(){
  if(this.searchBox==='all'){
  //subscribes to access the data and store in the food array
  this.obs$.subscribe((data:Food[])=>
    this.foods=data);}
  else{
    this.categoryLoad(this.searchBox)
  }
}

delete(id:string){
  //deletes a recipe
this.foodService.deleteFood(id).subscribe(()=>{
  console.log("Delete Success"),
  this.loadAll();
})
}
categoryLoad(cat:string){

//using pipe function to use rxjs operator to filter the data matching the condition
this.obs$.pipe(
  map((data:Food[])=>data.filter((food:Food)=>food.category.toLowerCase().includes(cat.toLowerCase())||
  food.name.toLowerCase().includes(cat.toLowerCase()))))
  .subscribe(data=>{
    console.log(data);
    this.foods=data
  })

}
}
