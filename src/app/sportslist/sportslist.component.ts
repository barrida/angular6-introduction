import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sportslist',
  templateUrl: './sportslist.component.html',
  styleUrls: ['./sportslist.component.css']
})
export class SportslistComponent implements OnInit {

  sports;
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.sports = SPORTS_DATA_SOURCE;
  }

  handleClick(name){
    this.router.navigateByUrl('/sports/' +name);
  }

}

export const SPORTS_DATA_SOURCE = [
  {
    name: 'golf',
    description: 'golf description'
  },
  {
    name: 'soccer',
    description: 'futbol description'
  },
  {
    name: 'tennis',
    description: 'tennis description'
  }
]

