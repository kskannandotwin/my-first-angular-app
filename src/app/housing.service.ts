import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  protected housingLocationList: HousingLocation[] = [
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

  constructor() { }
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Housing application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`);
  }
}


