import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HomeApi } from '../api/home.api';

@Injectable()
export class HomeEffect {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType("GET_HOME"),
    mergeMap(() => this.homeApi.getHomeAll()
      .pipe(
        map(home => ({ type: 'GET_HOME_SUCCESS', home: home })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private homeApi: HomeApi
  ) {}

}
