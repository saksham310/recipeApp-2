import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FoodService } from '../../serivce/food.service';
import { Food } from '../../interface/food';
import {map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  private subscription:Subscription=new Subscription()
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
  const food$=this.foodService.Search.subscribe((data)=>{
    

    this.searchBox=data
    this.loadAll();
  }
  
  )
  this.subscription.add(food$);
  this.loadAll();

}
loadAll(){
  if(this.searchBox==='all'){
  //subscribes to access the data and store in the food array
const all$=this.obs$.subscribe((data:Food[])=>
    this.foods=data);
this.subscription.add(all$);}
  else{
    this.categoryLoad(this.searchBox)
  }
}

delete(id:string){
  //deletes a recipe
 const delete$= 
this.foodService.deleteFood(id).subscribe(()=>{
  console.log("Delete Success"),
  this.loadAll();
})
this.subscription.add(delete$);
}
categoryLoad(cat:string){

//using pipe function to use rxjs operator to filter the data matching the condition
const filtered$=this.obs$.pipe(
  map((data:Food[])=>data.filter((food:Food)=>food.category.toLowerCase().includes(cat.toLowerCase())||
  food.name.toLowerCase().includes(cat.toLowerCase()))))
  .subscribe(data=>{
    console.log(data);
    this.foods=data
  })
  this.subscription.add(filtered$);

}
ngOnDestroy(){
  this.subscription.unsubscribe()
}
}
