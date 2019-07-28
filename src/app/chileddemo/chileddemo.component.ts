import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chileddemo',
  templateUrl: './chileddemo.component.html',
  styleUrls: ['./chileddemo.component.scss']
})
export class ChileddemoComponent implements OnInit {

  @Input() textfromparent: string;
  @Input() name: string;
  @Input() age: number;
  @Input() hasDriverLicense: boolean;
  messageFromChildText: string;
  @Output() sendMessage: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateChildMessage(msg: string) {
    this.messageFromChildText = msg;
  }
  sentToParent() {
    this.sendMessage.emit(this.messageFromChildText);
  }

}
