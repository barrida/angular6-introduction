import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SportslistComponent } from '../sportslist/sportslist.component';
import { HomeComponent } from '../home/home.component';
import { FoodComponent } from '../food/food.component';
import { SportdetailComponent } from '../sportdetail/sportdetail.component';
import { TypeaheadComponent } from '../typeahead/typeahead.component';
import { DatePickerComponent } from '../date-picker/date-picker.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'sports', component: SportslistComponent},
  {path:'sports/:name', component: SportdetailComponent},
  {path:'databinding', component: FoodComponent},
  {path:'typeahead', component: TypeaheadComponent},
  {path:'datepicker', component: DatePickerComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
