import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
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

  public logIn(user: User): Observable<User> {
    const url: string = `${environment.apiUrlFB}signInWithPassword?key=${environment.apiKeyFB}`;
    return this.http.post<User>(url, user);
  }

  public register(user: User): Observable<User> {
    const url: string = `${environment.apiUrlFB}signUp?key=${environment.apiKeyFB}`;
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
}
