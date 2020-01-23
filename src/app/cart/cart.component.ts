import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homeScoreAction, awayScoreAction, resetScoreAction,setScoresAction} from '../scoreboard.actions';
import { scoreState,initialState,getGameHome,getGameAway } from '../reducers/scoreboard.reducer'

const myScore : scoreState = {
  home : 5,
  away : 5
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  home$:Observable<number>;
  away$:Observable<number>


  constructor(private store: Store<{scoreState}>) {
    
  }
  
  
  homeFunc(){
    this.store.dispatch(homeScoreAction());
   
  }

  awayFunc(){
    this.store.dispatch(awayScoreAction());
  }
  
  resetFunc(){
    this.store.dispatch(resetScoreAction());
  }

  setFunc(){
    this.store.dispatch(setScoresAction({game:myScore}));
  }

  ngOnInit() {
    this.home$ = this.store.select(getGameHome)
    this.away$ = this.store.select(getGameAway)
  }

}



