import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.scss']
})
export class FormParentComponent implements OnInit {
users: User[] = [];
  constructor() { }

  ngOnInit() {
  }
addUser($event) {
    console.log($event);
    this.users.push($event);
}
}
