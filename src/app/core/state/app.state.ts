import { ActionReducerMap, ActionReducer } from '@ngrx/store';
import { storageSync } from '@larscom/ngrx-store-storagesync';
import { authReducer } from './auth.reducer';
import { AuthState } from 'src/app/shared/models/user.model';

export interface AppState {
  authState: AuthState;
}

export const reducerMap: ActionReducerMap<AppState> = {
  authState: authReducer,
};

export function storageSyncReducer(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return storageSync<AppState>({
    features: [{ stateKey: 'authState' }],
    storage: window.localStorage,
  })(reducer);
}
