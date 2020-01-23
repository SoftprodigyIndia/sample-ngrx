import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent }  from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { counterReducer } from './reducers/counter.reducer';
import { NgxSmartModalModule, NgxSmartModalService  } from 'ngx-smart-modal';
import * as fromScoreboard from './reducers/scoreboard.reducer';
import { ConfigService } from './config.service';
import { ApiComponent } from './api/api.component'; 
import { ScoreboardModule } from './scoreboard.module';
import { scoreboardFeatureKey,scorereducer } from './reducers/scoreboard.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    ScoreboardModule,
    NgxSmartModalModule.forRoot(),
    // StoreModule.forRoot({ count: counterReducer })
    // reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // }

    
  ],
  providers: [NgxSmartModalService,ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
