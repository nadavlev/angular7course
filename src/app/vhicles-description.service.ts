import { Injectable } from '@angular/core';
import {VhiclesListService} from './vhicles-list.service';

@Injectable({
  providedIn: 'root'
})
export class VhiclesDescriptionService {

  constructor(private vhicleList: VhiclesListService) { }

  getVhiclesDescription() {
    return this.vhicleList.getVehicleTypes().map( v => v.type + ' has ' + v.whiles + 'whiles');
  }
}
