import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { AuthActionTypes, LogInSuccess, LogInFailure } from './auth.actions';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { User, AuthState } from 'src/app/shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  @Effect()
  public logIn: Observable<User> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap((payload: AuthState) => {
      return this.authService.logIn(payload.user).pipe(
        catchError((error: HttpErrorResponse) => {
          return [new LogInFailure(this.handleError(error))];
        })
      );
    }),
    switchMap((user: User) => {
      this.router.navigate(['client']);
      return [new LogInSuccess(user)];
    }),
    catchError(() => [])
  );

  @Effect({ dispatch: false })
  public getStatus: Observable<User> = this.actions.pipe(
    ofType(AuthActionTypes.GET_STATUS),
    tap((action: User) => {
      console.log('getStatus EFFECT', action);
    })
  );

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  private handleError(error: HttpErrorResponse): string {
    const { message } = error.error.error;
    switch (message) {
      case 'INVALID_EMAIL':
        return 'Incorrect Email';
      case 'INVALID_PASSWORD':
        return 'Incorrect password';
      case 'EMAIL_NOT_FOUND':
        return 'Email not found';
      case 'EMAIL_EXISTS':
        return 'Email already registered';
      case 'USER_DISABLED':
        return 'You have been blocked by the administrator';
      default:
        return 'Unknown Error. Please try again later';
    }
  }
}
