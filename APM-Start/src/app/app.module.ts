import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyFirstComponentComponent} from './my-first-component/my-first-component.component';
import {WelcomeComponent} from './home/welcome.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacePipe} from '../pipes/ConvertToSpacePipe';
import {StarRatingComponent} from './star-rating/star-rating.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  // all the custom components should be included here
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarRatingComponent,
    ProductDetailsComponent
  ],
  // out of box/external components
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // # used instead of URL path
    // RouterModule.forRoot([], {useHash:true})
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailsComponent},
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
