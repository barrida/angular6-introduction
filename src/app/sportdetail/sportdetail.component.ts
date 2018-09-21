import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPORTS_DATA_SOURCE } from '../sportslist/sportslist.component';

/**
 * Using parameters in Routes
 */
@Component({
  selector: 'app-sportdetail',
  templateUrl: './sportdetail.component.html',
  styleUrls: ['./sportdetail.component.css']
})

export class SportdetailComponent implements OnInit {
  sport;
  constructor(private route: ActivatedRoute) { }

  /**
   * Retrieve the parameter from route
   */
  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name')
    console.log('name is ' + name)
    this.getSportsByName(name);
  }

  /**
   * Go through our SPORTS_DATA_SOURCE, attempt to find the sport @name
   * @param name 
   */
  getSportsByName(name: string) {
    SPORTS_DATA_SOURCE.forEach((sport) => {
      if (sport.name == name) {
        this.sport = sport;
      }
    })
  }

}
