import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {WelcomeComponent} from "./home/welcome.component";
import {ProductListComponent} from './product-list-component/product-list.component';
import {FormsModule} from "@angular/forms";
import {ConvertToSpacePipe} from "../pipes/ConvertToSpacePipe";

@NgModule({
  // all the custom components should be included here
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacePipe
  ],
  // out of box components
  imports: [
    BrowserModule,
    FormsModule
  ],
  // Only parent component must be added here
  bootstrap: [AppComponent]
})
export class AppModule {
}
