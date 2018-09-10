import {
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  ICognitoUserData,
  ICognitoUserPoolData
} from 'amazon-cognito-identity-js';
import { config } from './aws-cognito-config';
import BaseAuthentication from './base-authentication';
import Auth from '@aws-amplify/auth';

export class AwsCognito implements BaseAuthentication {
  constructor() {
    Auth.configure(config);
  }

  getCurrentUser(): any {
    // const currentUser = this._userPool.getCurrentUser();
    // currentUser.getSession((err, session) => {
    //
    // });
    // return this._userPool.getCurrentUser();
    Auth.currentAuthenticatedUser()
      .then(user => console.log(user))
      .catch(err => console.log(err));
  }

  getInstance() {
  }

  login({username, password}) {
    Auth.signIn(username, password)
      .then(user => console.log(user))
      .catch(error => console.error(error));
  }

  logout() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  signUp(userData) {
    const {username, password, email} = userData;
    Auth.signUp({
      username,
      password,
      attributes: {
        email
      },
      validationData: []  //optional
    })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}
