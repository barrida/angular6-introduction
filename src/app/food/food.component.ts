import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  food:any
  numClicks = 0;
  isDisabled:boolean = false
  constructor() { }

  ngOnInit() {
    this.food = {
      name : 'apple',
      color: 'red',
      servingSize: '100 grams',
      calories:52,
      protein:0.3,
      fat: 0.2,
      carbs: 13.8
    }
  }

  getFat(){
    return this.food.fat;
  }

  buttonClicked(event){

  }

}
