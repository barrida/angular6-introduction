import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SportslistComponent } from '../sportslist/sportslist.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'sports', component: SportslistComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
