import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FoodService } from '../../serivce/food.service';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent {
@ViewChild('image') img!:ElementRef;
recipeForm!:FormGroup;
buttonLabel="Add Recipe"
label="Create New Recipe"
id:string;
constructor(private fb:FormBuilder, private service:FoodService, private route:ActivatedRoute){
  this.recipeForm=this.fb.group({
    name:["",[Validators.required]],
    description:["",[Validators.required]],
    category:["",[Validators.required]],
    instruction:["",[Validators.required]],
    ingredient:["",[Validators.required]],
    image:[""],
    ratings:[5]
  })

  this.id=this.route.snapshot.params['id'];

}

ngOnInit(){
if(this.id){
this.buttonLabel="Update"
this.label="Edit Recipe"
this.service.getAll().pipe(map((data:any)=>data.find((food:any)=>food.id===this.id))).subscribe((data)=>{
  console.log(data);
  this.recipeForm.patchValue({
    name: data.name || "",
    description: data.description || "",
    category: data.category || "",
    instruction: data.instruction || "",
    ingredient: data.ingredient || "",
    image: data.image||"",
    ratings:data.ratings||1
  })
}
);
}}

onClick(){
 let path=this.img.nativeElement.value
  if(path){
    path=path.split('\\').pop();
    this.recipeForm.patchValue({
      image:`/assets/images/${path}`
    })
  }
  if(this.id){
    this.service.updateItem(this.id,this.recipeForm.value).subscribe(()=>{console.log("Updated success fully")
      console.log(this.recipeForm.value)
    })
  }
  else{
  this.service.addNew(this.recipeForm.value).subscribe(()=>{
    console.log("Added successfully")
    this.recipeForm.reset();
  
  })
}
}}

