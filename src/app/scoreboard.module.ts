import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { scorereducer, scoreboardFeatureKey} from './reducers/scoreboard.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(scoreboardFeatureKey, scorereducer)
  ],
})
export class ScoreboardModule {}