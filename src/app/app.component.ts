import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { CommonModule,Location } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NavbarComponent,FontAwesomeModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Recipe';
  backBtn=faArrowLeftLong;

  constructor(private location:Location,private router:Router){}
  goBack(){
    this.location.back();
  }
  isMain():boolean{
    return this.router.url==="/"
  }
}
