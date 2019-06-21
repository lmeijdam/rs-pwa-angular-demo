import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Deal } from '../deals.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() text: string;
  @Input() deal?: Deal;
  @Input() eventArg: string; // default same as text

  @Output() onclick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
