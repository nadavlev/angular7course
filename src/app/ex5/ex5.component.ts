import { Component, OnInit } from '@angular/core';
import {VhiclesListService} from '../vhicles-list.service';
import {VhiclesDescriptionService} from '../vhicles-description.service';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.scss']
})
export class Ex5Component implements OnInit {

  constructor(private vhiclesListService: VhiclesListService,
              private vhiclesDescriptionService: VhiclesDescriptionService) { }

  listOfVehiclesTypes: any[];
  listVhiclesDescription: string[];
  ngOnInit() {
    this.listOfVehiclesTypes = this.vhiclesListService.getVehicleTypes();
    this.listVhiclesDescription = this.vhiclesDescriptionService.getVhiclesDescription();
  }

}
