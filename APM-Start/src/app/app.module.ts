import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {WelcomeComponent} from './home/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {ProductModule} from "../productModule/product.module";
import {SharedModule} from "../sharedModule/shared.module";

@NgModule({
  // all the custom components should be included here
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    WelcomeComponent
  ],
  // out of box/external components
  imports: [
    BrowserModule, // should be imported only by main module
    SharedModule,
    HttpClientModule,
    ProductModule,
    // # used instead of URL path
    // RouterModule.forRoot([], {useHash:true})
    // the widest routes must be included in the end of the registration (ProductModule registers the narrow ones first)
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  // Only parent component must be added here
  bootstrap: [AppComponent]
})
export class AppModule {
}
