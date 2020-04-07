import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import { map, tap, retry } from 'rxjs/operators';
import { LogOut } from '../state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    return this.store
      .select((state: AppState) => {
        return state.authState;
      })
      .pipe(
        map((authState) => {
          if (authState.expDate) {
            if (new Date(authState.expDate) > new Date()) {
              return true;
            } else {
              this.router.navigate(['/auth', 'login']);
              this.store.dispatch(new LogOut());
              return false;
            }
          } else {
            this.router.navigate(['/auth', 'login']);
            this.store.dispatch(new LogOut());
            return false;
          }
        })
      );
  }
}
