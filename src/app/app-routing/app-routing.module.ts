import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SportslistComponent } from '../sportslist/sportslist.component';
import { HomeComponent } from '../home/home.component';
import { FoodComponent } from '../food/food.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'sports', component: SportslistComponent},
  {path:'databinding', component: FoodComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
