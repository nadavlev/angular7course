import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {

  displayText: string;
  radioIndicator: boolean;
  constructor() { }

  ngOnInit() {
  }

  change(data) {
    console.log(data);
    if (data.length > 4) {
      this.displayText = data;
    }
  }

  switchCheckbox(val) {
    console.log(val);
    this.radioIndicator = val;
  }

}
