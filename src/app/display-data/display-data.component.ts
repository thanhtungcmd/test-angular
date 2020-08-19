import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from '../action/counter.action';

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
  data: undefined;

  count$: Observable<number>

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  constructor(
    private http : HttpClient,
    private store: Store<{count: number}>
    ) {
    this.count$ = store.pipe(select('count'));
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

  isNotUndefined(check) {
    return typeof check != 'undefined'
  }

  subInputChange(event) {
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

}
