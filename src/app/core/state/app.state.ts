import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from './auth.reducer';
import { AuthState } from 'src/app/shared/models/user.model';

export interface AppState {
  authState: AuthState;
}

export const reducerMap: ActionReducerMap<AppState> = {
  authState: authReducer
};
