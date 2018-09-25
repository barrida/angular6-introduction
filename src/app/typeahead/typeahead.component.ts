import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {

  typeaheadmodel: any;

  constructor() { }

  ngOnInit() {
  }

  foodSearch = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : FOODS.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
  }

}

export const FOODS = ["Orange", "Apple", "Rice", "Brokoli"]
