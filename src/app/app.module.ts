import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { AnimalComponent } from './animal/animal.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SportslistComponent } from './sportslist/sportslist.component';
import { SportdetailComponent } from './sportdetail/sportdetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    AnimalComponent,
    BankAccountComponent,
    HomeComponent,
    SportslistComponent,
    SportdetailComponent,
    TypeaheadComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FoodComponent,
    AnimalComponent,
    BankAccountComponent,
    HomeComponent,
    SportdetailComponent,
    TypeaheadComponent
  ]
})
export class AppModule { }
