import { createReducer, on } from '@ngrx/store';
import { getHomeSuccess } from '../action/home.action';

export const initialState = {};

const _homeReducer = createReducer(initialState,
  on(getHomeSuccess, (state, {home}) => ({
    ...state,
    data: home
  })),
);

export function homeReducer(state, action) {
  return _homeReducer(state, action);
}
