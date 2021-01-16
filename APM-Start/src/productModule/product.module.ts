import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list/product-list.component";
import {ConvertToSpacePipe} from "../pipes/ConvertToSpacePipe";
import {StarRatingComponent} from "./star-rating/star-rating.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {SharedModule} from "../sharedModule/shared.module";
import {ProductRoutingModule} from "./product-routing.module";


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailsComponent,
    StarRatingComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule {

}
