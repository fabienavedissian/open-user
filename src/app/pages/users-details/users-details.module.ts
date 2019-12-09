import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersDetailsRoutingModule } from './users-details-routing.module';
import { UsersDetailsComponent } from './components/users-details.component';


@NgModule({
  declarations: [UsersDetailsComponent],
  imports: [
    CommonModule,
    UsersDetailsRoutingModule
  ]
})
export class UsersDetailsModule { }
