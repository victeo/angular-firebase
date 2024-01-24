import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let identity = this._userService.getIdentity();

    console.log(identity)

    if (identity.roles.includes('admin')) {
      return true;
    }

    this._router.navigate(['/']);
    return false;
  }
}