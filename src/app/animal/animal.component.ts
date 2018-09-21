import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})

export class AnimalComponent implements OnInit {

@Input('the-animal') animal:any
  // animal = { 
  //   species: "bird",
  //   name: "tomis",
  //   description: "Fistik tus"
  // }
  constructor() { }

  ngOnInit() {

  }

  sendUpdates() {

  }

}
