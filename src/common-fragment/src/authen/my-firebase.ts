import config from './firebase-config';
import 'firebase/auth';
import BaseAuthentication from './base-authentication';

const firebase = require('firebase/app');

export class MyFirebase implements BaseAuthentication {
  _config = config;
  _instance: any;

  constructor() {
    this._config = config;
    this._instance = firebase.initializeApp(config);
  }

  getInstance() {
    return this._instance;
  }

  getCurrentUser() {

  }

  login() {
  }

  logout() {
  }

  signUp(userData) {
  }

  get auth() {
    return firebase.auth;
  }

  get config() {
    return this._config;
  }
}