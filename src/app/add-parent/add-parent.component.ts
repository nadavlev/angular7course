import { Component, OnInit } from '@angular/core';
import {PersonDetail} from '../person-detail';
import {UtilitiesService} from '../utilities.service';
import {utils} from 'protractor';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.scss']
})
export class AddParentComponent implements OnInit {
  persons: PersonDetail[] = [];
  currentPerson: PersonDetail;
  childData: any;
  constructor(private utilities: UtilitiesService ) { }

  ngOnInit() {
    this.currentPerson = new PersonDetail();
  }
  updateFirstName(name: string) {
    this.currentPerson.firstName = name;
  }
  updateLastName(name: string) {
    this.currentPerson.lastName = name;
  }
  updateCity(city: string) {
    this.currentPerson.city = city;
  }
  addPerson()  {
    this.persons.push(this.currentPerson);
    this.currentPerson = new PersonDetail();
  }
  sendToChild() {
    this.childData = this.utilities.getCurrentMilis();
  }
}
