import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.scss']
})
export class PipedemoComponent implements OnInit {
  test = "Hello world";
  arr: any[] = [
    {name: 'nadav', age: 42},
    {name: 'shelly', age: 38},
    {name: 'alona', age: 7},
  ];
  ageValue = 26;
  constructor() { }

  ngOnInit() {
  }

}
