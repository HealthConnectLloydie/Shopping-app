import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable({
  providedIn: 'root',
})
class AuthGuardService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let canActivateValue = false;

    this.store
      .select('auth')
      .pipe(
        take(1),
        map((authState) => {
          return authState.user;
        }),
        map((user) => {
          canActivateValue = !!user;
          if (canActivateValue) {
            return true;
          }
          return this.router.createUrlTree(['/auth']);
        })
      )
      .subscribe();

    return canActivateValue;
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(AuthGuardService).canActivate(next, state);
};
