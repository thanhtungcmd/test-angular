import {Component, Directive, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
  data: any;

  constructor(private http : HttpClient) {
  }

  ngOnInit(): void {
    this.getData().subscribe(data => {
      this.data = data.data;
    });
  }

  onKey(event: any) {
    this.input = event.target.value
  }

  onClickMe(){}

  getData(): Observable<any> {
    return this.http.get('https://m.ibolero.vn/info/banner');
  }

}
