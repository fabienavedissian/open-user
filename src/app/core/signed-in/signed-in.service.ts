import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

/** Users Service */
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class SignedInService implements CanActivate {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.isLogged) {
      this.router.navigate(['/']);
    }

    return this.userService.isLogged;
  }
}
