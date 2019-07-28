import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  name: string;
  age: number;
  showName = true;
  constructor() { }

  ngOnInit() {
    this.name = 'nadav';
    this.age = 42;
  }

  swap(){
    this.showName = !this.showName;
  }

}
