export interface AuthState {
  user: User | null;
  token: string | null;
  expDate: Date | null;
  errorMessage: string | null;
  loading: boolean;
}

export interface User {
  name?: string;
  email: string;
  password?: string;
  returnSecureToken?: boolean;
}

export interface UserReqest {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface UserResponse {
  email: string;
  displayName?: string;
  idToken: string;
  registered: true;
  refreshToken: string;
  expiresIn: string;
}

export interface FbAuthResponse {
  localId: string;
  idToken: string;
  email: string;
  displayName?: string;
  refreshToken: string;
  expiresIn: string;
}

export interface FbCreateResponse {
  name: string;
}
