import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component */
import { UsersDetailsComponent } from './components/users-details.component';


const routes: Routes = [
  {
    path: ':userId',
    component: UsersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDetailsRoutingModule { }
