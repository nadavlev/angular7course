import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VhiclesListService {

  vehiclesTypes: any[] = [
    { type: 'Truck', whiles: 6},
    { type: 'Car',  whiles: 4},
    { type: 'Motor cycle', whiles: 2}];

  constructor() { }

  public getVehicleTypes() {
    return this.vehiclesTypes;
  }
}
