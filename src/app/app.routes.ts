import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/card/card.component';
import { DisplayComponent } from './pages/display/display.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent,title:"Welcome Page",
    },
    { path:'cards',component:DisplayComponent,title:"Recipe Lists",
}
    
];
