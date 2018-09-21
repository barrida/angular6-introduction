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
    this.router.navigateByUrl('/sport/${name}');
  }

}

export const SPORTS_DATA_SOURCE = [
  {
    name: 'golf',
    description: 'asdasd'
  },
  {
    name: 'soccer',
    description: 'asdasd'
  },
  {
    name: 'tennis',
    description: 'asdasd'
  }
]

