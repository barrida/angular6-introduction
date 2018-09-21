import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 6 - Introduction Project';

  animals = [
    {
      species: "bird",
      name: "tomis",
      description: "Fistik tus"
    },
    {
      species: "bird",
      name: "tomis kus",
      description: "Fistik tus tomis"
    }
  ]

  handleStatusUpdate(animal:any){
    console.log('${animal.name} is now ${animal.status}')
  }
}
