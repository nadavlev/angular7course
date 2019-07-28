import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.scss']
})

export class FormsDemoComponent implements OnInit {
  @Output() userSubmit = new EventEmitter<User>();
  user = new User();
  constructor() { }

  ngOnInit() {
  }

  customSubmit(isValid: boolean) {
    console.log(`Custom Submit : ${JSON.stringify(this.user)}, isValidForm: ${isValid}` );
    this.userSubmit.emit(Object.assign({}, this.user));
  }

}
