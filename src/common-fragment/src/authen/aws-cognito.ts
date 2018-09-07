import {
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  ICognitoUserData,
  ICognitoUserPoolData
} from 'amazon-cognito-identity-js';
import config from './aws-cognito-config';
import BaseAuthentication from './base-authentication';

export class AwsCognito implements BaseAuthentication {
  _poolData: ICognitoUserPoolData;
  _userPool: CognitoUserPool;
  _userData: ICognitoUserData;

  constructor() {
    this._userData = {
      Username: '',
      Pool: this._userPool,
    };

    this._poolData = {
      UserPoolId: config.userPoolId,
      ClientId: config.clientId,
    };

    this._userPool = new CognitoUserPool(this._poolData);
  }

  getCurrentUser() {
    const currentUser = this._userPool.getCurrentUser();
    currentUser.getSession((err, session) => {

    });
  }

  getInstance() {
    return this._userPool;
  }

  login() {
  }

  logout() {
  }
}
