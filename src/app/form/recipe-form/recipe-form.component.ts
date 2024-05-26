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
button="Add"
id:string;
constructor(private fb:FormBuilder, private service:FoodService, private route:ActivatedRoute){
  this.recipeForm=this.fb.group({
    name:["",[Validators.required]],
    description:["",[Validators.required]],
    category:["",[Validators.required]],
    instruction:["",[Validators.required]],
    ingredient:["",[Validators.required]],
    image:[""]
  })

  this.id=this.route.snapshot.params['id'];

}

ngOnInit(){
if(this.id){
this.service.getAll().pipe(map((data:any)=>data.find((food:any)=>food.id===this.id))).subscribe((data)=>
  this.recipeForm.patchValue({
    name: data.name || "",
    description: data.description || "",
    category: data.category || "",
    instruction: data.instructions || "",
    ingredient: data.ingredients || "",
    image: data.image||""
  })
);
}}

onClick(){
 let path=this.img.nativeElement.value
  if(path){
    path=path.split('\\').pop();
    this.recipeForm.patchValue({
      image:`assets/images/${path}`
    })
  }

  this.service.addNew(this.recipeForm.value).subscribe(()=>
    console.log(this.recipeForm.value))
}
}

