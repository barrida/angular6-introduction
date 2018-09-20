import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Food } from './food.component.ts/food.component.ts.component';

@NgModule({
  declarations: [
    AppComponent,
    Food.Component.TsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
