import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';

export enum AuthActionTypes {
  INIT = '[Auth] Initialization',
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  SIGNUP = '[Auth] Signup',
  SIGNUP_SUCCESS = '[Auth] Signup Success',
  SIGNUP_FAILURE = '[Auth] Signup Failure',
  LOGOUT = '[Auth] Logout',
  GET_STATUS = '[Auth] GetStatus',
}

export class Inint implements Action {
  public readonly type: string = AuthActionTypes.INIT;
}

export class LogIn implements Action {
  public readonly type: string = AuthActionTypes.LOGIN;
  constructor(public user: User) {}
}

export class LogInSuccess implements Action {
  public readonly type: string = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: User) {}
}

export class LogInFailure implements Action {
  public readonly type: string = AuthActionTypes.LOGIN_FAILURE;
  constructor(public error: string) {}
}

export class SignUp implements Action {
  public readonly type: string = AuthActionTypes.SIGNUP;
  constructor(public payload: User) {}
}

export class SignUpSuccess implements Action {
  public readonly type: string = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: User) {}
}

export class SignUpFailure implements Action {
  public readonly type: string = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: User) {}
}

export class LogOut implements Action {
  public readonly type: string = AuthActionTypes.LOGOUT;
}

export class GetStatus implements Action {
  public readonly type: string = AuthActionTypes.GET_STATUS;
}

export type AuthActions =
  | Inint
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | GetStatus;
