import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sub-data',
  templateUrl: './sub-data.component.html',
  styleUrls: ['./sub-data.component.css']
})
export class SubDataComponent implements OnInit {

  @Input() dataParent: string;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitChangeValue(event) {
    this.checkedChange.emit(event.target.checked);
  }

}
