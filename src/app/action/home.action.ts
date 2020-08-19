import {createAction, props} from '@ngrx/store';

export const getHomeData = createAction("GET_HOME");
export const getHomeSuccess = createAction("GET_HOME_SUCCESS", props<{home: any}>());
