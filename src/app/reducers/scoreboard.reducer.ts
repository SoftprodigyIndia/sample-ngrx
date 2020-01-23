import {Action, createReducer, on } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';

import { homeScoreAction, awayScoreAction, resetScoreAction, setScoresAction } from '../scoreboard.actions';

export interface scoreState {
    home: number;
    away: number;
  }

export const initialState :scoreState={
    home: 0,
    away: 0,
};


const scoreRedFunc = createReducer(initialState,
    on(homeScoreAction,state => ({ ...state, home: state.home + 1 })  ),
    on(awayScoreAction,state => ({ ...state, away: state.away + 1 })  ),
    on(resetScoreAction, state => ({ home: 0, away: 0 })),
    on(setScoresAction, (state, { game }) => ({home: game.home, away: game.away}))
);


export function scorereducer(state: scoreState | undefined, action: Action)  {
    return scoreRedFunc(state, action);
    }

export const scoreboardFeatureKey = 'game';

export const getHome = (state: scoreState) => state.home;
export const getAway = (state: scoreState) => state.away;

export const selectAuthState = createFeatureSelector<scoreState>('game');
export const getGameHome = createSelector(selectAuthState, getHome);
export const getGameAway = createSelector(selectAuthState, getAway);