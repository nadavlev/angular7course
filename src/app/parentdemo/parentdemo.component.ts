import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentdemo',
  templateUrl: './parentdemo.component.html',
  styleUrls: ['./parentdemo.component.scss']
})
export class ParentdemoComponent implements OnInit {
  parentMessage = 'MessageData From parent';
  nameText: string;
  ageText: number;
  hasDriverLicense: boolean;
  messageFromChild: string;
  constructor() { }

  ngOnInit() {
  }

  updateName(name: string) {
    this.nameText = name;
  }
  updateAge(age: number) {
    this.ageText = age;
  }
  updateHasDriverLicense(has: boolean) {
    console.log(has);
    this.hasDriverLicense = has;
  }
  getMessageFromChild(message: string) {
    console.log(message);
    this.messageFromChild = message;
  }
}
