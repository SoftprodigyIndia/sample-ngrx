import {ActionReducer,ActionReducerMap,createFeatureSelector,createSelector, MetaReducer} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as counterReducer from './counter.reducer';
import { scorereducer } from './scoreboard.reducer';



export interface State {

}

export const reducers: ActionReducerMap<State> = {
  count :counterReducer.counterReducer,
  game  : scorereducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
