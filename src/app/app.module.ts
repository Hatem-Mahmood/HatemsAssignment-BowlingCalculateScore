import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateBowlingScoreComponent } from './calculate-bowling-score/calculate-bowling-score.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateBowlingScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
