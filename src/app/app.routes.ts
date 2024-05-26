import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/card/card.component';
import { DisplayComponent } from './pages/display/display.component';
import { RecipeFormComponent } from './form/recipe-form/recipe-form.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent,title:"Welcome Page"
    },
    { path:'cards',component:DisplayComponent,title:"Recipe Lists"
},    { path:'form/:id',component:RecipeFormComponent,title:"Recipe Form"
},    { path:'form',component:RecipeFormComponent,title:"Recipe Form"
}
    
];
