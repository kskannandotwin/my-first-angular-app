import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,    
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 1,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago'
    },
    {
      id: 2,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica'
    }
  ];
}
