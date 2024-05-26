import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FoodService } from '../../serivce/food.service';
import { Food } from '../../interface/food';
import { filter ,map} from 'rxjs/operators';
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
  foods:Food[]=[];
  obs$=new Observable<Food>();
  constructor(private foodService:FoodService,private toast:ToastrService){
   
  }
ngOnInit(){
  this.obs$= this.foodService.getAll();
  this.loadAll();
}
loadAll(){
  
  this.obs$.subscribe((data:any)=>
    this.foods=data);
}
delete(id:string){
this.foodService.deleteFood(id).subscribe(()=>{
  console.log("Delete Success"),
  this.loadAll();
})
}
categoryLoad(cat:string){
this.obs$.pipe(
  map((data:any)=>data.filter((food:any)=>food.category===cat))).subscribe(data=>{
    this.foods=data;
  })

}
}
