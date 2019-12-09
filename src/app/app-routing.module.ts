import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components */
import { LoginComponent } from './pages/login/login.component';
import { SignedInService } from './core/signed-in/signed-in.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [SignedInService]
  },
  {
    path: 'details',
    loadChildren: './pages/users-details/users-details.module#UsersDetailsModule',
    canActivate: [SignedInService]
  },
  { 
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
