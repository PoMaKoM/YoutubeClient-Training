import { ActionReducer, ActionType } from '@ngrx/store';
import { AuthState, UserResponse } from 'src/app/shared/models/user.model';
import { AuthActionTypes } from './auth.actions';

export interface ReduserActions {
  type: AuthActionTypes;
  payload: UserResponse;
  error: string;
}

export const initialState: AuthState = {
  user: null,
  token: null,
  expDate: null,
  errorMessage: null,
  loading: false,
};

export const authReducer: ActionReducer<AuthState> = (
  state: AuthState = initialState,
  action: ReduserActions
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.INIT:
      return {
        ...initialState,
      };

    case AuthActionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      };

    case AuthActionTypes.LOGIN_SUCCESS:
      const expDate: Date = new Date(
        new Date().getTime() + +action.payload.expiresIn * 1000
      );
      return {
        ...state,
        token: action.payload.idToken,
        expDate,
        errorMessage: null,
        user: {
          email: action.payload.email,
          name: action.payload.displayName,
        },
        loading: false,
      };

    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        errorMessage: action.error,
        user: null,
        loading: false,
      };

    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        expDate: null,
        errorMessage: null,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};
