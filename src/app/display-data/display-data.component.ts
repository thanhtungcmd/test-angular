import {Component, Directive, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {

  title = "Hello";
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  hero = this.heroes[0];
  input = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.input = event.target.value
  }

  onClickMe(){}

}
