import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { tap, catchError, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, FbAuthResponse } from 'src/app/shared/models/user.model';

import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import {
  AuthActionTypes,
  LogIn,
  LogOut,
  LogInSuccess,
  LogInFailure,
} from 'src/app/core/state/auth.actions';

@Injectable()
export class AuthService {
  public user: User = null;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  // private setToken(response: FbAuthResponse | null): void {
  //   if (response) {
  //     const expDate: Date = new Date(
  //       new Date().getTime() + +response.expiresIn * 1000
  //     );
  //     localStorage.setItem('fb-token', response.idToken);
  //     localStorage.setItem('fb-token-expires', expDate.toString());
  //   } else {
  //     localStorage.clear();
  //   }
  // }

  // get token(): string {
  //   const expDate: Date = new Date(localStorage.getItem('fb-token-expires'));
  //   if (new Date() > expDate) {
  //     this.logout();
  //     return null;
  //   }
  //   return localStorage.getItem('fb-token');
  // }

  public logIn(user: User): Observable<User> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKeyFB}`;
    return this.http.post<User>(url, user);
  }

  // public register(user: User): Observable<User> {
  //   return this.http
  //     .post(
  //       `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKeyFB}`,
  //       user
  //     )
  //     .pipe(tap(), catchError(this.handleError.bind(this)));
  // }

  public logout(): void {
    this.store.dispatch(new LogOut());
  }
}
