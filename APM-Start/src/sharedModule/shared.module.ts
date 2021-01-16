import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [ // it is required in order to share the encapsulated modules
    // Note: the modules are exported without being imported
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule {
}
