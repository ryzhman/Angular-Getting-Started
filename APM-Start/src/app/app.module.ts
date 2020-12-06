import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
  // all the components should be included here
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  // Only parent component must be added here
  bootstrap: [AppComponent]
})
export class AppModule { }
