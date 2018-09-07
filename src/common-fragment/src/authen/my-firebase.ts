import config from './firebase-config';
import firebase from 'firebase/app';
import 'firebase/auth';
import BaseAuthentication from "./base-authentication";

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

  get auth() {
    return firebase.auth;
  }

  get config() {
    return this._config;
  }
}