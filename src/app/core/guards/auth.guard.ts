import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .select((appState: AppState) => {
        return !!appState.authState.token;
      })
      .pipe(
        tap((bool) => {
          if (!bool) {
            this.router.navigate(['/auth', 'login']);
            // this.store.dispatch()
          }
        })
      );
  }
}
