import { createAction, props } from '@ngrx/store' ;
import { scoreState,initialState } from './reducers/scoreboard.reducer'

export const homeScoreAction = createAction('[Scoreboard Page] Home Score');
export const awayScoreAction = createAction('[Scoreboard Page] Away Score');
export const resetScoreAction = createAction('[Scoreboard Page] Score Reset');
export const setScoresAction = createAction('[Scoreboard Page] Set Scores', props<{game : scoreState}>());