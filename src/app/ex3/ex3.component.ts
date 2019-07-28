import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit {

  colorStateArr = {
    blue: false,
    red: false,
    green: false
  };

  students = [
    {name: 'Yosi', age: 38, city: 'Tel Aviv'},
    {name: 'avi', age: 36, city: 'Netanya'},
    {name: 'eli', age: 34, city: 'Afula'}
  ];

  personArr: Person[] = [
    new Person('yosi', 36, 'Tel - Aviv'),
    new Person('yosi2', 36, 'Tel - Aviv')
  ];

  constructor() { }

  ngOnInit() {
  }

  textKeyUp(val) {
    console.log(val);
  }

  colorCheckboxChange(color) {
    this.colorStateArr[color] = !this.colorStateArr[color];
  }

}
