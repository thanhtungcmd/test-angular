import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  home$: Observable<any> = this.store.select(state => state.home);
  mainHome: null;

  constructor(private store: Store<{ home: any }>) {
  }

  ngOnInit(): void {
    this.store.dispatch({ type: 'GET_HOME' });
    this.home$.subscribe(res => {
      if (typeof res.data != 'undefined') {
        this.mainHome = res.data.data
      }
    })
  }

}
