import { Component } from '@angular/core';
import { FoodService } from '../../serivce/food.service';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Food } from '../../interface/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  star=faStar;
data!:Food;
ingredient:string[]=[]
  constructor(private service:FoodService,private route:ActivatedRoute){}

  ngOnInit(){
    const id=this.route.snapshot.params['id'];
    this.service.getOne(id).subscribe((data)=>{this.data=data
     this.ingredient=this.data.ingredient.split(",");
    });
    
  }
}
