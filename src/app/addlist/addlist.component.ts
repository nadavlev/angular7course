import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {PersonDetail} from '../person-detail';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.scss']
})
export class AddlistComponent implements OnInit {

  @Input() persons: PersonDetail[];
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(data: SimpleChanges) {
      console.log(data);
  }
}
