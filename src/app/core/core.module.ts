import { NgModule } from '@angular/core';

/** Http Client Module */
import { HttpClientModule } from '@angular/common/http';

/** Reactive Forms */
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
