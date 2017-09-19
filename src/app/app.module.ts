import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { GradePipe }  from './grade.pipe';
import { MainComponent }  from './component/main/main.component';



@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,GradePipe ,MainComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
