import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTesting';
  resume = 'Projet brouillon de tests';
  auteur = 'Remi Duplan';
  cities = ['Marseille', 'Lyon', 'Paris', 'Toulouse', 'bordeaux'];
  selectedCity: string;

  displayResume(): string {
    return this.resume;
  }

  displayCities(): Array<string> {
    return this.cities;
  }

  onCitySelected(ev) {
      const city = ev.target.value;
      this.selectedCity = city;
  }

  displayAuteur(): string {
    return this.auteur;
  }

}
