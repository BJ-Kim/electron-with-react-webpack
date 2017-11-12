import {
  observable, action, 
  useStrict, isStrictModeEnabled,
} from 'mobx';
import { authLogin } from '../api/authApi';
import { inject } from 'mobx-react';
import jwt from 'jsonwebtoken';

export class AuthStateClass {
  @observable userType;
  @observable userID;
  @observable jwt;

  constructor() {
  }

  @action async login(name, pwd) {
    const result = await authLogin(name, pwd);
    const loginData = result.data;
    this.jwt = loginData.access_token;
    this.userID = jwt.decode(loginData.access_token).identity;
    this.userType = jwt.decode(loginData.access_token).user_type;

    localStorage.setItem('jwt', this.jwt);
  }
}

const AuthStateStore = new AuthStateClass();
export default AuthStateStore;
